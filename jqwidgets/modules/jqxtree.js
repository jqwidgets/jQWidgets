
/* Release Date: Sep-17-2024 
Copyright (c) 2011-2024 jQWidgets. 
License: https://jqwidgets.com/license/ */


/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7351:
/***/ (() => {

/* tslint:disable */
/* eslint-disable */
(function(){
	if (typeof document === 'undefined') { 
		return;
	}

(function ($) {
    $.jqx.cssroundedcorners = function (value) {
        var cssMap = {
            'all': 'jqx-rc-all',
            'top': 'jqx-rc-t',
            'bottom': 'jqx-rc-b',
            'left': 'jqx-rc-l',
            'right': 'jqx-rc-r',
            'top-right': 'jqx-rc-tr',
            'top-left': 'jqx-rc-tl',
            'bottom-right': 'jqx-rc-br',
            'bottom-left': 'jqx-rc-bl'
        };

        for (var prop in cssMap) {
            if (!cssMap.hasOwnProperty(prop))
                continue;

            if (value == prop)
                return cssMap[prop];
        }
    }

    $.jqx.jqxWidget("jqxButton", "", {});

    $.extend($.jqx._jqxButton.prototype, {
        defineInstance: function () {
            var settings = {
                type: '',
                cursor: 'arrow',
                // rounds the button corners.
                roundedCorners: 'all',
                // enables / disables the button
                disabled: false,
                // sets height to the button.
                height: null,
                // sets width to the button.
                width: null,
                overrideTheme: false,
                enableHover: true,
                enableDefault: true,
                enablePressed: true,
                imgPosition: "center",
                imgSrc: "",
                imgWidth: 16,
                imgHeight: 16,
                value: null,
                textPosition: "",
                textImageRelation: "overlay",
                rtl: false,
                _ariaDisabled: false,
                _scrollAreaButton: false,
                // "primary", "inverse", "danger", "info", "success", "warning", "link"
                template: "default",
                aria:
                {
                    "aria-disabled": { name: "disabled", type: "boolean" }
                }
            }
            if (this === $.jqx._jqxButton.prototype) {
                return settings;
            }
            $.extend(true, this, settings);
            return settings;
        },

        _addImage: function (name) {
            var that = this;
            if (that.element.nodeName.toLowerCase() == "input" || that.element.nodeName.toLowerCase() == "button" || that.element.nodeName.toLowerCase() == "div") {
                if (!that._img) {
                    that.field = that.element;
                    if (that.field.className) {
                        that._className = that.field.className;
                    }

                    var properties = {
                        'title': that.field.title
                    };

                    var value = null;
                    if (that.field.getAttribute('value')) {
                        var value = that.field.getAttribute('value');
                    }
                    else if (that.element.nodeName.toLowerCase() != "input") {
                        var value = that.element.innerHTML;
                    }
                    if (that.value) {
                        value = that.value;
                    }
                    if (that.field.id.length) {
                        properties.id = that.field.id.replace(/[^\w]/g, '_') + "_" + name;
                    }
                    else {
                        properties.id = $.jqx.utilities.createId() + "_" + name;
                    }


                    var wrapper = document.createElement('div');
                    wrapper.id = properties.id;
                    wrapper.title = properties.title;
                    wrapper.style.cssText = that.field.style.cssText;
                    wrapper.style.boxSizing = 'border-box';

                    var img = document.createElement("img");
                    img.setAttribute('src', that.imgSrc);
                    img.setAttribute('width', that.imgWidth);
                    img.setAttribute('height', that.imgHeight);
                    wrapper.appendChild(img);
                    that._img = img;

                    var text = document.createElement('span');
                    if (value) {
                        text.innerHTML = value;
                        that.value = value;
                    }
                    wrapper.appendChild(text);
                    that._text = text;

                    that.field.style.display = "none";
                    if (that.field.parentNode) {
                        that.field.parentNode.insertBefore(wrapper, that.field.nextSibling);
                    }

                    var data = that.host.data();
                    that.host = $(wrapper);
                    that.host.data(data);
                    that.element = wrapper;
                    that.element.id = that.field.id;
                    that.field.id = properties.id;
                    var elementObj = new $(that.element);
                    var fieldObj = new $(that.field);
                    if (that._className) {
                        elementObj.addClass(that._className);
                        fieldObj.removeClass(that._className);
                    }

                    if (that.field.tabIndex) {
                        var tabIndex = that.field.tabIndex;
                        that.field.tabIndex = -1;
                        that.element.tabIndex = tabIndex;
                    }
                }
                else {
                    that._img.setAttribute('src', that.imgSrc);
                    that._img.setAttribute('width', that.imgWidth);
                    that._img.setAttribute('height', that.imgHeight);
                    that._text.innerHTML = that.value;
                }
                if (!that.imgSrc) {
                    that._img.style.display = "none";
                }
                else {
                    that._img.style.display = "inline";
                }

                if (!that.value) {
                    that._text.style.display = "none";
                }
                else {
                    that._text.style.display = "inline";
                }

                that._positionTextAndImage();
            }
        },

        _positionTextAndImage: function () {
            var that = this;
            var width = that.element.offsetWidth;
            var height = that.element.offsetHeight;

            var imgWidth = that.imgWidth;
            var imgHeight = that.imgHeight;
            if (that.imgSrc == "") {
                imgWidth = 0;
                imgHeight = 0;
            }

            var textWidth = that._text.offsetWidth;
            var textHeight = that._text.offsetHeight;
            var offset = 4;
            var edgeOffset = 4;
            var factorIncrease = 4;
            var w = 0;
            var h = 0;
            switch (that.textImageRelation) {
                case "imageBeforeText":
                case "textBeforeImage":
                    w = imgWidth + textWidth + 2 * factorIncrease + offset + 2 * edgeOffset;
                    h = Math.max(imgHeight, textHeight) + 2 * factorIncrease + offset + 2 * edgeOffset;
                    break;
                case "imageAboveText":
                case "textAboveImage":
                    w = Math.max(imgWidth, textWidth) + 2 * factorIncrease;
                    h = imgHeight + textHeight + offset + 2 * factorIncrease + 2 * edgeOffset;
                    break;
                case "overlay":
                    w = Math.max(imgWidth, textWidth) + 2 * factorIncrease;
                    h = Math.max(imgHeight, textHeight) + 2 * factorIncrease;
                    break;
            }

            if (!that.width) {
                that.element.style.width = w + "px";
                width = w;
            }

            if (!that.height) {
                that.element.style.height = h + "px";
                height = h;
            }

            that._img.style.position = 'absolute';
            that._text.style.position = 'absolute';
            that.element.style.position = 'relative';
            that.element.style.overflow = 'hidden';

            var textRect = {};
            var imageRect = {};

            var drawElement = function (element, drawArea, pos, w, h) {
                if (drawArea.width < w) drawArea.width = w;
                if (drawArea.height < h) drawArea.height = h;

                switch (pos) {
                    case "left":
                        element.style.left = drawArea.left + "px";
                        element.style.top = drawArea.top + drawArea.height / 2 - h / 2 + "px";;
                        break;
                    case "topLeft":
                        element.style.left = drawArea.left + "px";
                        element.style.top = drawArea.top + "px";
                        break;
                    case "bottomLeft":
                        element.style.left = drawArea.left + "px";
                        element.style.top = drawArea.top + drawArea.height - h + "px";
                        break;
                    default:
                    case "center":
                        element.style.left = drawArea.left + drawArea.width / 2 - w / 2 + "px";
                        element.style.top = drawArea.top + drawArea.height / 2 - h / 2 + "px";
                        break;
                    case "top":
                        element.style.left = drawArea.left + drawArea.width / 2 - w / 2 + "px";
                        element.style.top = drawArea.top + "px";
                        break;
                    case "bottom":
                        element.style.left = drawArea.left + drawArea.width / 2 - w / 2 + "px";
                        element.style.top = drawArea.top + drawArea.height - h + "px";
                        break;
                    case "right":
                        element.style.left = drawArea.left + drawArea.width - w + "px";
                        element.style.top = drawArea.top + drawArea.height / 2 - h / 2 + "px";;
                        break;
                    case "topRight":
                        element.style.left = drawArea.left + drawArea.width - w + "px";
                        element.style.top = drawArea.top + "px";
                        break;
                    case "bottomRight":
                        element.style.left = drawArea.left + drawArea.width - w + "px";
                        element.style.top = drawArea.top + drawArea.height - h + "px";
                        break;
                }
            }

            var left = 0;
            var top = 0;
            var right = width;
            var bottom = height;
            var middle = (right - left) / 2;
            var center = (bottom - top) / 2;
            var img = that._img;
            var text = that._text;
            var rectHeight = bottom - top;
            var rectWidth = right - left;
            left += edgeOffset;
            top += edgeOffset;
            right = right - edgeOffset - 2;
            rectWidth = rectWidth - 2 * edgeOffset - 2;
            rectHeight = rectHeight - 2 * edgeOffset - 2;

            switch (that.textImageRelation) {
                case "imageBeforeText":

                    switch (that.imgPosition) {
                        case "left":
                        case "topLeft":
                        case "bottomLeft":
                            imageRect = { left: left, top: top, width: left + imgWidth, height: rectHeight };
                            textRect = { left: left + imgWidth + offset, top: top, width: rectWidth - imgWidth - offset, height: rectHeight };
                            break;
                        case "center":
                        case "top":
                        case "bottom":
                            imageRect = { left: middle - textWidth / 2 - imgWidth / 2 - offset / 2, top: top, width: imgWidth, height: rectHeight };
                            textRect = { left: imageRect.left + imgWidth + offset, top: top, width: right - imageRect.left - imgWidth - offset, height: rectHeight };
                            break;
                        case "right":
                        case "topRight":
                        case "bottomRight":
                            imageRect = { left: right - textWidth - imgWidth - offset, top: top, width: imgWidth, height: rectHeight };
                            textRect = { left: imageRect.left + imgWidth + offset, top: top, width: right - imageRect.left - imgWidth - offset, height: rectHeight };
                            break;

                    }
                    drawElement(img, imageRect, that.imgPosition, imgWidth, imgHeight);
                    drawElement(text, textRect, that.textPosition, textWidth, textHeight);

                    break;
                case "textBeforeImage":

                    switch (that.textPosition) {
                        case "left":
                        case "topLeft":
                        case "bottomLeft":
                            textRect = { left: left, top: top, width: left + textWidth, height: rectHeight };
                            imageRect = { left: left + textWidth + offset, top: top, width: rectWidth - textWidth - offset, height: rectHeight };
                            break;
                        case "center":
                        case "top":
                        case "bottom":
                            textRect = { left: middle - textWidth / 2 - imgWidth / 2 - offset / 2, top: top, width: textWidth, height: rectHeight };
                            imageRect = { left: textRect.left + textWidth + offset, top: top, width: right - textRect.left - textWidth - offset, height: rectHeight };
                            break;
                        case "right":
                        case "topRight":
                        case "bottomRight":
                            textRect = { left: right - textWidth - imgWidth - offset, top: top, width: textWidth, height: rectHeight };
                            imageRect = { left: textRect.left + textWidth + offset, top: top, width: right - textRect.left - textWidth - offset, height: rectHeight };
                            break;

                    }
                    drawElement(img, imageRect, that.imgPosition, imgWidth, imgHeight);
                    drawElement(text, textRect, that.textPosition, textWidth, textHeight);

                    break;
                case "imageAboveText":

                    switch (that.imgPosition) {
                        case "topRight":
                        case "top":
                        case "topLeft":
                            imageRect = { left: left, top: top, width: rectWidth, height: imgHeight };
                            textRect = { left: left, top: top + imgHeight + offset, width: rectWidth, height: rectHeight - imgHeight - offset };
                            break;
                        case "left":
                        case "center":
                        case "right":
                            imageRect = { left: left, top: center - imgHeight / 2 - textHeight / 2 - offset / 2, width: rectWidth, height: imgHeight };
                            textRect = { left: left, top: imageRect.top + offset + imgHeight, width: rectWidth, height: rectHeight - imageRect.top - offset - imgHeight };
                            break;
                        case "bottomLeft":
                        case "bottom":
                        case "bottomRight":
                            imageRect = { left: left, top: bottom - imgHeight - textHeight - offset, width: rectWidth, height: imgHeight };
                            textRect = { left: left, top: imageRect.top + offset + imgHeight, width: rectWidth, height: textHeight };
                            break;

                    }
                    drawElement(img, imageRect, that.imgPosition, imgWidth, imgHeight);
                    drawElement(text, textRect, that.textPosition, textWidth, textHeight);
                    break;
                case "textAboveImage":
                    switch (that.textPosition) {
                        case "topRight":
                        case "top":
                        case "topLeft":
                            textRect = { left: left, top: top, width: rectWidth, height: textHeight };
                            imageRect = { left: left, top: top + textHeight + offset, width: rectWidth, height: rectHeight - textHeight - offset };
                            break;
                        case "left":
                        case "center":
                        case "right":
                            textRect = { left: left, top: center - imgHeight / 2 - textHeight / 2 - offset / 2, width: rectWidth, height: textHeight };
                            imageRect = { left: left, top: textRect.top + offset + textHeight, width: rectWidth, height: rectHeight - textRect.top - offset - textHeight };
                            break;
                        case "bottomLeft":
                        case "bottom":
                        case "bottomRight":
                            textRect = { left: left, top: bottom - imgHeight - textHeight - offset, width: rectWidth, height: textHeight };
                            imageRect = { left: left, top: textRect.top + offset + textHeight, width: rectWidth, height: imgHeight };
                            break;

                    }
                    drawElement(img, imageRect, that.imgPosition, imgWidth, imgHeight);
                    drawElement(text, textRect, that.textPosition, textWidth, textHeight);

                    break;
                case "overlay":
                default:
                    textRect = { left: left, top: top, width: rectWidth, height: rectHeight };
                    imageRect = { left: left, top: top, width: rectWidth, height: rectHeight };

                    drawElement(img, imageRect, that.imgPosition, imgWidth, imgHeight);
                    drawElement(text, textRect, that.textPosition, textWidth, textHeight);

                    break;
            }
        },

        createInstance: function (args) {
            var that = this;
            that._setSize();

            var isMaterial = that.isMaterialized();

            that.buttonObj = new $(that.element);

            if (that.imgSrc != "" || that.textPosition != "" || (that.element.value && that.element.value.indexOf("<") >= 0) || that.value != null) {
                that.refresh();
                that._addImage("jqxButton");
                that.buttonObj = new $(that.element);
            }

            if (!that._ariaDisabled) {
                that.element.setAttribute('role', 'button');
            }
            if (that.type !== '') {
                that.element.setAttribute('type', that.type);
            }
            if (!that.overrideTheme) {
                that.buttonObj.addClass(that.toThemeProperty($.jqx.cssroundedcorners(that.roundedCorners)));
                if (that.enableDefault) {
                    that.buttonObj.addClass(that.toThemeProperty('jqx-button'));
                }
                that.buttonObj.addClass(that.toThemeProperty('jqx-widget'));
            }

            that.isTouchDevice = $.jqx.mobile.isTouchDevice();
            if (!that._ariaDisabled) {
                $.jqx.aria(this);
            }

            if (that.cursor != 'arrow') {
                if (!that.disabled) {
                    that.element.style.cursor = that.cursor;
                }
                else {
                    that.element.style.cursor = "arrow";
                }
            }

            var eventNames = 'mouseenter mouseleave mousedown focus blur';
            if (that._scrollAreaButton) {
                var eventNames = 'mousedown';
            }

            if (that.isTouchDevice) {
                that.addHandler(that.host, $.jqx.mobile.getTouchEventName('touchstart'), function (event) {
                    that.isPressed = true;
                    that.refresh();
                });
                that.addHandler($(document), $.jqx.mobile.getTouchEventName('touchend') + "." + that.element.id, function (event) {
                    that.isPressed = false;
                    that.refresh();
                });
            }

            that.addHandler(that.host, eventNames, function (event) {
                switch (event.type) {
                    case 'mouseenter':
                        if (!that.isTouchDevice) {
                            if (!that.disabled && that.enableHover) {
                                that.isMouseOver = true;
                                that.refresh();
                            }
                        }
                        break;
                    case 'mouseleave':
                        if (!that.isTouchDevice) {
                            if (!that.disabled && that.enableHover) {
                                that.isMouseOver = false;
                                that.refresh();
                            }
                        }
                        break;
                    case 'mousedown':
                        if (!that.disabled) {
                            that.isPressed = true;
                            that.refresh();
                        }
                        break;
                    case 'focus':
                        if (!that.disabled) {
                            that.isFocused = true;
                            that.refresh();
                        }
                        break;
                    case 'blur':
                        if (!that.disabled) {
                            that.isFocused = false;
                            that.refresh();
                        }
                        break;
                }
            });

            that.mouseupfunc = function (event) {
                if (!that.disabled) {
                    if (that.isPressed || that.isMouseOver) {
                        that.isPressed = false;
                        that.refresh();
                    }
                }
            }

            that.addHandler(document, 'mouseup.button' + that.element.id, that.mouseupfunc);

            try {
                if (document.referrer != "" || window.frameElement) {
                    if (window.top != null && window.top != window.that) {
                        var parentLocation = '';
                        if (window.parent && document.referrer) {
                            parentLocation = document.referrer;
                        }

                        if (parentLocation.indexOf(document.location.host) != -1) {
                            if (window.top.document) {
                                window.top.document.addEventListener('mouseup', that._topDocumentMouseupHandler);
                            }
                        }
                    }
                }
            }
            catch (error) {
            }

            that.propertyChangeMap['roundedCorners'] = function (instance, key, oldVal, value) {
                instance.buttonObj.removeClass(instance.toThemeProperty($.jqx.cssroundedcorners(oldVal)));
                instance.buttonObj.addClass(instance.toThemeProperty($.jqx.cssroundedcorners(value)));
            };
            that.propertyChangeMap['disabled'] = function (instance, key, oldVal, value) {
                if (oldVal != value) {
                    instance.refresh();
                    instance.element.setAttribute('disabled', value);
                    instance.element.disabled = value;
                    if (!value) {
                        instance.element.style.cursor = instance.cursor;
                    }
                    else {
                        instance.element.style.cursor = 'default';
                    }

                    $.jqx.aria(instance, "aria-disabled", instance.disabled);
                }
            };
            that.propertyChangeMap['rtl'] = function (instance, key, oldVal, value) {
                if (oldVal != value) {
                    instance.refresh();
                }
            };
            that.propertyChangeMap['template'] = function (instance, key, oldVal, value) {
                if (oldVal != value) {
                    instance.buttonObj.removeClass(instance.toThemeProperty("jqx-" + oldVal));
                    instance.refresh();
                }
            };
            that.propertyChangeMap['theme'] = function (instance, key, oldVal, value) {
                instance.buttonObj.removeClass(instance.element);

                if (oldVal) {
                    instance.buttonObj.removeClass('jqx-button-' + oldVal);
                    instance.buttonObj.removeClass('jqx-widget-' + oldVal);
                    instance.buttonObj.removeClass('jqx-fill-state-normal-' + oldVal);
                    instance.buttonObj.removeClass(instance.toThemeProperty($.jqx.cssroundedcorners(instance.roundedCorners)) + '-' + oldVal);
                }

                if (instance.enableDefault) {
                    instance.buttonObj.addClass(instance.toThemeProperty('jqx-button'));
                }
                instance.buttonObj.addClass(instance.toThemeProperty('jqx-widget'));
                if (!instance.overrideTheme) {
                    instance.buttonObj.addClass(instance.toThemeProperty($.jqx.cssroundedcorners(instance.roundedCorners)));
                }
                instance._oldCSSCurrent = null;
                instance.refresh();
            };

            if (that.disabled) {
                that.element.disabled = true;
                that.element.setAttribute('disabled', 'true');
            }
			
			if (that.textPosition){
			  $.jqx.utilities.resize(this.host, function () {
				that._positionTextAndImage();
			  });
			}
        }, // createInstance

        resize: function (width, height) {
            this.width = width;
            this.height = height;
            this._setSize();
        },

        val: function (value) {
            var that = this;
            var input = that.host.find('input');
            if (input.length > 0) {
                if (arguments.length == 0 || typeof (value) == "object") {
                    return input.val();
                }
                input.val(value);
                that.refresh();
                return input.val();
            }

            if (arguments.length == 0 || typeof (value) == "object") {
                if (that.element.nodeName.toLowerCase() == "button") {
                    return $(that.element).text();
                }
                return that.element.value;
            }

            if (arguments.length > 0 && that._text) {
                that._text.innerHTML = arguments[0];
                that.refresh();

                return;
            }
            else if (arguments.length > 0 && that.element.nodeName === 'DIV') {
                that.element.innerHTML = arguments[0];
                that.refresh();
            }

            that.element.value = arguments[0];
            if (that.element.nodeName.toLowerCase() == "button") {
                $(that.element).html(arguments[0]);
            }

            that.refresh();
        },

        _setSize: function () {
            var that = this;
            var height = that.height;
            var width = that.width;

            if (height) {
                if (!isNaN(height)) {
                    height = height + "px";
                }
                that.element.style.height = height;
            }

            if (width) {
                if (!isNaN(width)) {
                    width = width + "px";
                }
                that.element.style.width = width;
            }
        },

        _removeHandlers: function () {
            var that = this;
            that.removeHandler(that.host, 'selectstart');
            that.removeHandler(that.host, 'click');
            that.removeHandler(that.host, 'focus');
            that.removeHandler(that.host, 'blur');
            that.removeHandler(that.host, 'mouseenter');
            that.removeHandler(that.host, 'mouseleave');
            that.removeHandler(that.host, 'mousedown');
            that.removeHandler($(document), 'mouseup.button' + that.element.id, that.mouseupfunc);
            if (that.isTouchDevice) {
                that.removeHandler(that.host, $.jqx.mobile.getTouchEventName('touchstart'));
                that.removeHandler($(document), $.jqx.mobile.getTouchEventName('touchend') + "." + that.element.id);
            }
            that.mouseupfunc = null;
            delete that.mouseupfunc;
        },

        focus: function () {
            this.host.focus();
        },

        destroy: function () {
            var that = this;
            that._removeHandlers();
            var vars = $.data(that.element, "jqxButton");
            if (vars) {
                delete vars.instance;
            }
            that.host.removeClass();
            that.host.removeData();
            that.host.remove();
            delete that.set;
            delete that.get;
            delete that.call;
            delete that.element;
            delete that.host;
        },

        render: function () {
            this.refresh();
        },

        propertiesChangedHandler: function (object, oldValues, newValues) {
            if (newValues && newValues.width && newValues.height && Object.keys(newValues).length == 2) {
                object._setSize();
                object.refresh();
            }
        },

        propertyChangedHandler: function (object, key, oldvalue, value) {
            if (this.isInitialized == undefined || this.isInitialized == false)
                return;

            if (value == oldvalue) {
                return;
            }

            if (object.batchUpdate && object.batchUpdate.width && object.batchUpdate.height && Object.keys(object.batchUpdate).length == 2) {
                return;
            }

            if (key === "type") {
                object.element.setAttribute('type', value);
            }
            if (key == "textImageRelation" || key == "textPosition" || key == "imgPosition") {
                if (object._img) {
                    object._positionTextAndImage();
                }
                else object._addImage("jqxButton");
            }
            if (key == "imgSrc" || key == "imgWidth" || key == "imgHeight") {
                object._addImage("jqxButton");
            }

            if (key === "value") {
                object.val(value);
            }

            if (key == "width" || key == "height") {
                object._setSize();
                object.refresh();
            }
        },

        refresh: function () {
            var that = this;
            if (that.overrideTheme)
                return;

            var cssFocused = that.toThemeProperty('jqx-fill-state-focus');
            var cssDisabled = that.toThemeProperty('jqx-fill-state-disabled');
            var cssNormal = that.toThemeProperty('jqx-fill-state-normal');

            if (!that.enableDefault) {
                cssNormal = "";
            }

            var cssHover = that.toThemeProperty('jqx-fill-state-hover');
            var cssPressed = that.toThemeProperty('jqx-fill-state-pressed');
            var cssPressedHover = that.toThemeProperty('jqx-fill-state-pressed');
            if (!that.enablePressed) {
                cssPressed = "";
            }
            var cssCurrent = '';

            if (!that.host) {
                return;
            }

            that.element.disabled = that.disabled;

            if (that.disabled) {
                if (that._oldCSSCurrent) {
                    that.buttonObj.removeClass(that._oldCSSCurrent);
                }
                cssCurrent = cssNormal + " " + cssDisabled;
                if (that.template !== "default" && that.template !== "") {
                    cssCurrent += " " + "jqx-" + that.template;
                    if (that.theme != "") {
                        cssCurrent += " " + "jqx-" + that.template + "-" + that.theme;
                    }
                }
                that.buttonObj.addClass(cssCurrent);
                that._oldCSSCurrent = cssCurrent;
                return;
            }
            else {
                if (that.isMouseOver && !that.isTouchDevice) {
                    if (that.isPressed)
                        cssCurrent = cssPressedHover;
                    else
                        cssCurrent = cssHover;
                }
                else {
                    if (that.isPressed)
                        cssCurrent = cssPressed;
                    else
                        cssCurrent = cssNormal;
                }
            }

            if (that.isFocused) {
                cssCurrent += " " + cssFocused;
            }

            if (that.template !== "default" && that.template !== "") {
                cssCurrent += " " + "jqx-" + that.template;
                if (that.theme != "") {
                    cssCurrent += " " + "jqx-" + that.template + "-" + that.theme;
                }
            }

            if (cssCurrent != that._oldCSSCurrent) {
                if (that._oldCSSCurrent) {
                    that.buttonObj.removeClass(that._oldCSSCurrent);
                }
                that.buttonObj.addClass(cssCurrent);
                that._oldCSSCurrent = cssCurrent;
            }
            if (that.rtl) {
                that.buttonObj.addClass(that.toThemeProperty('jqx-rtl'));
                that.element.style.direction = 'rtl';
            }


            if (that.isMaterialized()) {
                that.host.addClass('buttonRipple');
            }
        }
    });

    //// LinkButton
    $.jqx.jqxWidget("jqxLinkButton", "", {});

    $.extend($.jqx._jqxLinkButton.prototype, {
        defineInstance: function () {
            // enables / disables the button
            this.disabled = false;
            // sets height to the button.
            this.height = null;
            // sets width to the button.
            this.width = null;
            this.rtl = false;
            this.href = null;
        },

        createInstance: function (args) {
            var that = this;
            this.host.onselectstart = function () { return false; };
            this.host.attr('role', 'button');

            var height = this.height || this.element.offsetHeight;
            var width = this.width || this.element.offsetWidth;
            this.href = this.element.getAttribute('href');
            this.target = this.element.getAttribute('target');
            this.content = this.host.text();
            this.element.innerHTML = "";
            var wrapElement = document.createElement('input');
            wrapElement.type = "button";
            wrapElement.className = "jqx-wrapper " + this.toThemeProperty('jqx-reset');

            this._setSize(wrapElement, width, height);

            wrapElement.value = this.content;
            var helper = new $(this.element);
            helper.addClass(this.toThemeProperty('jqx-link'));
            this.element.style.color = 'inherit';
            this.element.appendChild(wrapElement);
            this._setSize(wrapElement, width, height);

            var param = args == undefined ? {} : args[0] || {};
            $(wrapElement).jqxButton(param);
            this.wrapElement = wrapElement;
            if (this.disabled) {
                this.element.disabled = true;
            }

            this.propertyChangeMap['disabled'] = function (instance, key, oldVal, value) {
                instance.element.disabled = value;
                instance.wrapElement.jqxButton({ disabled: value });
            }

            this.addHandler($(wrapElement), 'click', function (event) {
                if (!this.disabled) {
                    that.onclick(event);
                }
                return false;
            });
        },

        _setSize: function (element, width, height) {
            var that = this;

            if (height) {
                if (!isNaN(height)) {
                    height = height + "px";
                }
                element.style.height = height;
            }

            if (width) {
                if (!isNaN(width)) {
                    width = width + "px";
                }
                element.style.width = width;
            }
        },


        onclick: function (event) {
            if (this.target != null) {
                window.open(this.href, this.target);
            }
            else {
                window.location = this.href;
            }
        }
    });
    //// End of LinkButton

    //// RepeatButton
    $.jqx.jqxWidget("jqxRepeatButton", "jqxButton", {});

    $.extend($.jqx._jqxRepeatButton.prototype, {
        defineInstance: function () {
            this.delay = 50;
        },

        createInstance: function (args) {
            var that = this;

            var isTouchDevice = $.jqx.mobile.isTouchDevice();

            var up = !isTouchDevice ? 'mouseup.' + this.base.element.id : 'touchend.' + this.base.element.id;
            var down = !isTouchDevice ? 'mousedown.' + this.base.element.id : 'touchstart.' + this.base.element.id;

            this.addHandler($(document), up, function (event) {
                if (that.timeout != null) {
                    clearTimeout(that.timeout);
                    that.timeout = null;
                    that.refresh();
                }
                if (that.timer != undefined) {
                    clearInterval(that.timer);
                    that.timer = null;
                    that.refresh();
                }
            });

            this.addHandler(this.base.host, down, function (event) {
                if (that.timer != null) {
                    clearInterval(that.timer);
                }

                that.timeout = setTimeout(function () {
                    clearInterval(that.timer);
                    that.timer = setInterval(function (event) { that.ontimer(event); }, that.delay);
                }, 150);
            });

            this.mousemovefunc = function (event) {
                if (!isTouchDevice) {
                    if (event.which == 0) {
                        if (that.timer != null) {
                            clearInterval(that.timer);
                            that.timer = null;
                        }
                    }
                }
            }

            this.addHandler(this.base.host, 'mousemove', this.mousemovefunc);
        },

        destroy: function () {
            var isTouchDevice = $.jqx.mobile.isTouchDevice();
            var up = !isTouchDevice ? 'mouseup.' + this.base.element.id : 'touchend.' + this.base.element.id;
            var down = !isTouchDevice ? 'mousedown.' + this.base.element.id : 'touchstart.' + this.base.element.id;
            this.removeHandler(this.base.host, 'mousemove', this.mousemovefunc);
            this.removeHandler(this.base.host, down);
            this.removeHandler($(document), up);
            this.timer = null;
            delete this.mousemovefunc;
            delete this.timer;
            var vars = $.data(this.base.element, "jqxRepeatButton");
            if (vars) {
                delete vars.instance;
            }
            $(this.base.element).removeData();
            this.base.destroy();
            delete this.base;

        },

        stop: function () {
            clearInterval(this.timer);
            this.timer = null;
        },

        ontimer: function (event) {
            var event = new $.Event('click');
            if (this.base != null && this.base.host != null) {
                this.base.host.trigger(event);
            }
        }
    });
    //// End of RepeatButton
    //// ToggleButton
    $.jqx.jqxWidget("jqxToggleButton", "jqxButton", {});

    $.extend($.jqx._jqxToggleButton.prototype, {
        defineInstance: function () {
            this.toggled = false;
            this.uiToggle = true;
            this.aria =
            {
                "aria-checked": { name: "toggled", type: "boolean" },
                "aria-disabled": { name: "disabled", type: "boolean" }
            };
        },

        createInstance: function (args) {
            var that = this;
            that.base.overrideTheme = true;
            that.isTouchDevice = $.jqx.mobile.isTouchDevice();
            $.jqx.aria(this);

            that.propertyChangeMap['roundedCorners'] = function (instance, key, oldVal, value) {
                instance.base.buttonObj.removeClass(instance.toThemeProperty($.jqx.cssroundedcorners(oldVal)));
                instance.base.buttonObj.addClass(instance.toThemeProperty($.jqx.cssroundedcorners(value)));
            };

            that.propertyChangeMap['toggled'] = function (instance, key, oldVal, value) {
                instance.refresh();
            };
            that.propertyChangeMap['disabled'] = function (instance, key, oldVal, value) {
                instance.base.disabled = value;
                instance.refresh();
            };

            that.addHandler(that.base.host, 'click', function (event) {
                if (!that.base.disabled && that.uiToggle) {
                    that.toggle();
                }
            });

            if (!that.isTouchDevice) {
                that.addHandler(that.base.host, 'mouseenter', function (event) {
                    if (!that.base.disabled) {
                        that.refresh();
                    }
                });

                that.addHandler(that.base.host, 'mouseleave', function (event) {
                    if (!that.base.disabled) {
                        that.refresh();
                    }
                });
            }

            that.addHandler(that.base.host, 'mousedown', function (event) {
                if (!that.base.disabled) {
                    that.refresh();
                }
            });

            that.addHandler($(document), 'mouseup.togglebutton' + that.base.element.id, function (event) {
                if (!that.base.disabled) {
                    that.refresh();
                }
            });
        },

        destroy: function () {
            this._removeHandlers();
            this.base.destroy();
        },

        _removeHandlers: function () {
            this.removeHandler(this.base.host, 'click');
            this.removeHandler(this.base.host, 'mouseenter');
            this.removeHandler(this.base.host, 'mouseleave');
            this.removeHandler(this.base.host, 'mousedown');
            this.removeHandler($(document), 'mouseup.togglebutton' + this.base.element.id);
        },

        toggle: function () {
            this.toggled = !this.toggled;
            this.refresh();
            $.jqx.aria(this, "aria-checked", this.toggled);
        },

        unCheck: function () {
            this.toggled = false;
            this.refresh();
        },

        check: function () {
            this.toggled = true;
            this.refresh();
        },

        refresh: function () {
            var that = this;
            var cssDisabled = that.base.toThemeProperty('jqx-fill-state-disabled');
            var cssNormal = that.base.toThemeProperty('jqx-fill-state-normal');
            if (!that.base.enableDefault) {
                cssNormal = "";
            }
            var cssHover = that.base.toThemeProperty('jqx-fill-state-hover');
            var cssPressed = that.base.toThemeProperty('jqx-fill-state-pressed');
            var cssPressedHover = that.base.toThemeProperty('jqx-fill-state-pressed');
            var cssCurrent = '';
            that.base.element.disabled = that.base.disabled;

            if (that.base.disabled) {
                cssCurrent = cssNormal + " " + cssDisabled;
                that.base.buttonObj.addClass(cssCurrent);
                return;
            }
            else {
                if (that.base.isMouseOver && !that.isTouchDevice) {
                    if (that.base.isPressed || that.toggled)
                        cssCurrent = cssPressedHover;
                    else
                        cssCurrent = cssHover;
                }
                else {
                    if (that.base.isPressed || that.toggled)
                        cssCurrent = cssPressed;
                    else
                        cssCurrent = cssNormal;
                }
            }

            if (that.base.template !== "default" && that.base.template !== "") {
                cssCurrent += " " + "jqx-" + that.base.template;
                if (that.base.theme != "") {
                    cssCurrent += " " + "jqx-" + that.template + "-" + that.base.theme;
                }
            }

            if (that.base.buttonObj.hasClass(cssDisabled) && cssDisabled != cssCurrent) {
                that.base.buttonObj.removeClass(cssDisabled);
            }

            if (that.base.buttonObj.hasClass(cssNormal) && cssNormal != cssCurrent) {
                that.base.buttonObj.removeClass(cssNormal);
            }

            if (that.base.buttonObj.hasClass(cssHover) && cssHover != cssCurrent) {
                that.base.buttonObj.removeClass(cssHover);
            }

            if (that.base.buttonObj.hasClass(cssPressed) && cssPressed != cssCurrent) {
                that.base.buttonObj.removeClass(cssPressed);
            }

            if (that.base.buttonObj.hasClass(cssPressedHover) && cssPressedHover != cssCurrent) {
                that.base.buttonObj.removeClass(cssPressedHover);
            }

            if (!that.base.buttonObj.hasClass(cssCurrent)) {
                that.base.buttonObj.addClass(cssCurrent);
            }
        },

        _topDocumentMouseupHandler: function (event) {
            var that = this;
            that.isPressed = false;
            that.refresh();
        }
    });
    //// End of ToggleButton

})(jqxBaseFramework);
})();

















/***/ }),

/***/ 4545:
/***/ (() => {

/* tslint:disable */
/* eslint-disable */
(function(){
	if (typeof document === 'undefined') { 
		return;
	}
(function ($) {

    $.jqx.jqxWidget("jqxCheckBox", "", {});

    $.extend($.jqx._jqxCheckBox.prototype, {
        defineInstance: function () {
            var settings = {
                // Type: Number
                // Default: 250
                // Gets or sets the delay of the fade animation when the CheckBox is going to be opened.
                animationShowDelay: 300,
                // Type: Number
                // Default: 300
                // Gets or sets the delay of the fade animation when the CheckBox is going to be closed. 
                animationHideDelay: 300,
                // Type: Number.
                // Default: null.
                // Sets the width.
                width: null,
                // Type: Number.
                // Default: null.
                // Sets the height.
                height: null,
                // Type: String
                // Default: '16px'
                // Gets or sets the checkbox's size.
                boxSize: '16px',
                // Type: Bool and Null
                // Default: false
                // Gets or sets the ckeck state.
                // Possible Values: true, false and null.
                checked: false,
                // Type: Bool
                // Default: false
                // Gets or sets whether the checkbox has 3 states - checked, unchecked and indeterminate.
                hasThreeStates: false,
                // Type: Bool
                // Default: false
                // Gets whether the CheckBox is disabled.
                disabled: false,
                // Type: Bool
                // Default: true
                // Gets or sets whether the clicks on the container are handled as clicks on the check box.
                enableContainerClick: true,
                // Type: Bool
                // Default: true
                // Gets or sets whether the checkbox is locked. In this mode the user is not allowed to check/uncheck the checkbox.
                locked: false,
                // Type: String
                // Default: ''
                // Gets or sets the group name. When this property is set, the checkboxes in the same group behave as radio buttons.
                groupName: '',
                keyboardCheck: true,
                enableHover: true,
                hasInput: true,
                rtl: false,
                updated: null,
                disabledContainer: false,
                changeType: null,
                _canFocus: true,
                rippleEffect: true,
                aria:
                {
                    "aria-checked": { name: "checked", type: "boolean" },
                    "aria-disabled": { name: "disabled", type: "boolean" }
                },
                // 'checked' is triggered when the checkbox is checked.
                // 'unchecked' is triggered when the checkbox is unchecked.
                // 'indeterminate' is triggered when the checkbox's ckecked property is going to be null.
                // 'change' is triggered when the checkbox's state is changed.
                events:
                    [
                        'checked', 'unchecked', 'indeterminate', 'change'
                    ]
            };
            if (this === $.jqx._jqxCheckBox.prototype) {
                return settings;
            }
            $.extend(true, this, settings);
            return settings;
        },

        createInstance: function (args) {
            var that = this;
            that._createFromInput("CheckBox");
            that.render();
        },

        _createFromInput: function (name) {
            var that = this;
            if (that.element.nodeName.toLowerCase() == "input") {
                that.field = that.element;
                if (that.field.className) {
                    that._className = that.field.className;
                }

                var properties = {
                    'title': that.field.title
                };

                if (that.field.value) {
                    properties.value = that.field.value;
                }
                if (that.field.checked) {
                    properties.checked = true;
                }
                if (that.field.id.length) {
                    properties.id = that.field.id.replace(/[^\w]/g, '_') + "_" + name;
                }
                else {
                    properties.id = $.jqx.utilities.createId() + "_" + name;
                }

                var textField = that.element.nextSibling;
                var hasTextField = false;
                if (textField && (textField.nodeName == "#text" || textField.nodeName == "span")) {
                    hasTextField = true;
                }
                var offsetWidth = 0;
                var wrapper = $("<div></div>", properties);
                if (hasTextField) {
                    wrapper.append(textField);
                    var f = $("<span>" + $(textField).text() + "</span>");
                    f.appendTo($(document.body))
                    offsetWidth += f.width();
                    f.remove();
                }
                wrapper[0].style.cssText = that.field.style.cssText;
                if (!that.width) {
                    that.width = $(that.field).width() + offsetWidth + 10;
                }
                if (!that.height) {
                    that.height = $(that.field).outerHeight() + 10;
                }
                $(that.field).hide().after(wrapper);
                var data = that.host.data();
                that.host = wrapper;
                that.host.data(data);
                that.element = wrapper[0];
                that.element.id = that.field.id;
                that.field.id = properties.id;
                if (that._className) {
                    that.host.addClass(that._className);
                    $(that.field).removeClass(that._className);
                }

                if (that.field.tabIndex) {
                    var tabIndex = that.field.tabIndex;
                    that.field.tabIndex = -1;
                    that.element.tabIndex = tabIndex;
                }
            }
        },

        _addInput: function () {
            if (this.hasInput) {
                if (this.input) this.input.remove();
                var name = this.host.attr('name');
                this.input = $("<input type='hidden'/>");
                this.host.append(this.input);
                if (name) {
                    this.input.attr('name', name);
                }
                this.input.val(this.checked);

                this.host.attr('role', 'checkbox');
                $.jqx.aria(this);
            }
        },

        render: function () {
            this.init = true;
            var me = this;
            this.setSize();
            this.propertyChangeMap['width'] = function (instance, key, oldVal, value) {
                me.setSize();
            };

            this.propertyChangeMap['height'] = function (instance, key, oldVal, value) {
                me.setSize();
            };
            this._removeHandlers();

            if (!this.width) this.host.css('overflow-x', 'visible');
            if (!this.height) this.host.css('overflow-y', 'visible');

            if (this.checkbox) {
                this.checkbox.remove();
                this.checkbox = null;
            }
            if (this.checkMark) {
                this.checkMark.remove();
                this.checkMark = null;
            }
            if (this.box) {
                this.box.remove();
                this.box = null;
            }
            if (this.clear) {
                this.clear.remove();
                this.clear = null;
            }

            if (this.boxSize == null) this.boxSize = 16;
            var boxSize = parseInt(this.boxSize) + 'px';
            var checkSize = "16px";
            var ml = Math.floor((parseInt(this.boxSize) - 16) / 2);
            var mt = ml;
            ml += "px";
            mt += "px";
            if (parseInt(this.boxSize) != 16) {
                this.checkbox = $('<div><div style="width: ' + boxSize + '; height: ' + boxSize + ';"><span style="position: relative; left: ' + ml + '; top: ' + mt + '; width: ' + checkSize + '; height: ' + checkSize + ';"></span></div></div>');
            }
            else {
                this.checkbox = $('<div><div style="width: ' + boxSize + '; height: ' + boxSize + ';"><span style="width: ' + boxSize + '; height: ' + boxSize + ';"></span></div></div>');
            }

            this.host.prepend(this.checkbox);
            if (!this.disabledContainer) {
                if (!this.host.attr('tabIndex')) {
                    this.host.attr('tabIndex', 0);
                }
                this.clear = $('<div style="clear: both;"></div>');
                this.host.append(this.clear);
            }

            this.checkMark = $(this.checkbox[0].firstChild.firstChild);//$(this.checkbox).find('span');
            this.box = this.checkbox;

            this.box.addClass(this.toThemeProperty('jqx-checkbox-default') + " " + this.toThemeProperty('jqx-fill-state-normal') + " " + this.toThemeProperty('jqx-rc-all'));

            if (this.disabled) {
                this.disable();
            }

            if (!this.disabledContainer) {
                this.host.addClass(this.toThemeProperty('jqx-widget'));
                this.host.addClass(this.toThemeProperty('jqx-checkbox'));
            }

            if (this.locked && !this.disabledContainer) {
                this.host.css('cursor', 'auto');
            }

            var checked = this.element.getAttribute('checked');
            if (checked == 'checked' || checked == 'true' || checked == true) {
                this.checked = true;
            }

            this._addInput();
            this._render();
            this._addHandlers();
            this.init = false;
            this._centerBox();

            if (this.isMaterialized()) {
                if (this.rippleEffect) {
                    $(this.checkbox).addClass('ripple');
                    $.jqx.ripple($(this.checkbox), this.host, "checkbox");
                }
            }
        },

        _centerBox: function () {
            if (this.height && this.height.toString().indexOf("%") == -1 && this.box) {
                var hostHeight = parseInt(this.height);
                this.host.css('line-height', hostHeight + "px");
                var top = hostHeight - parseInt(this.boxSize) - 1;
                top /= 2;
                this.box.css('margin-top', parseInt(top));
            }
        },

        refresh: function (initialRefresh) {
            if (!initialRefresh) {
                this.setSize();
                this._render();
            }
        },

        resize: function (width, height) {
            this.width = width;
            this.height = height;
            this.refresh();
        },

        setSize: function () {
            if (this.width != null && this.width.toString().indexOf("px") != -1) {
                this.host.width(this.width);
            }
            else if (this.width != undefined && !isNaN(this.width)) {
                this.host.width(this.width);
            }
            else if (this.width != null && this.width.toString().indexOf("%") != -1) {
                this.element.style.width = this.width;
            }

            if (this.height != null && this.height.toString().indexOf("px") != -1) {
                this.host.height(this.height);
            }
            else if (this.height != undefined && !isNaN(this.height)) {
                this.host.height(this.height);
            }
            else if (this.height != null && this.height.toString().indexOf("%") != -1) {
                this.element.style.height = this.height;
            }
            this._centerBox();
        },

        _addHandlers: function () {
            var me = this;

            var isTouchDevice = $.jqx.mobile.isTouchDevice();
            var eventName = 'mousedown';
            if (isTouchDevice) eventName = $.jqx.mobile.getTouchEventName('touchend');

            this.addHandler(this.box, eventName, function (event) {
                if (!me.disabled && !me.enableContainerClick && !me.locked) {
                    me.changeType = "mouse";
                    me.toggle();
                    if (me.updated) {
                        event.owner = me;
                        me.updated(event, me.checked, me.oldChecked);
                    }
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                    return false;
                }
            });

            if (!this.disabledContainer) {
                this.addHandler(this.host, 'keydown', function (event) {
                    if (!me.disabled && !me.locked && me.keyboardCheck) {
                        if (event.keyCode == 32) {
                            if (!me._canFocus) {
                                return true;
                            }
                            me.changeType = "keyboard";
                            me.toggle();
                            if (me.updated) {
                                event.owner = me;
                                me.updated(event, me.checked, me.oldChecked);
                            }
                            if (event.preventDefault) {
                                event.preventDefault();
                            }
                            return false;
                        }
                    }
                });

                this.addHandler(this.host, eventName, function (event) {
                    if (!me.disabled && me.enableContainerClick && !me.locked) {
                        me.clickTime = new Date();
                        me.changeType = "mouse";
                        me.toggle();
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                        if (me._canFocus) {
                            me.focus();
                        }
                        return false;
                    }
                });

                this.addHandler(this.host, 'selectstart', function (event) {
                    if (!me.disabled && me.enableContainerClick) {
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                        return false;
                    }
                });

                this.addHandler(this.host, 'mouseup', function (event) {
                    if (!me.disabled && me.enableContainerClick) {
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                    }
                });

                this.addHandler(this.host, 'focus', function (event) {
                    if (!me.disabled && !me.locked) {
                        if (!me._canFocus) {
                            return true;
                        }

                        if (me.enableHover) {
                            me.box.addClass(me.toThemeProperty('jqx-checkbox-hover'));
                        }
                        me.box.addClass(me.toThemeProperty('jqx-fill-state-focus'));
                        if (event.preventDefault) {
                            event.preventDefault();
                        }

                        $(me.checkbox).removeClass('active');
                        if (!me.clickTime || (me.clickTime && (new Date() - me.clickTime > 300))) {
                            $(me.checkbox).addClass('active');
                        }

                        me.hovered = true;
                        return false;
                    }
                });

                this.addHandler(this.host, 'blur', function (event) {
                    $(me.checkbox).removeClass('active');

                    if (!me.disabled && !me.locked) {
                        if (!me._canFocus) {
                            return true;
                        }
                        if (me.enableHover) {
                            me.box.removeClass(me.toThemeProperty('jqx-checkbox-hover'));
                        }
                        me.box.removeClass(me.toThemeProperty('jqx-fill-state-focus'));
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                        me.hovered = false;
                        return false;
                    }
                });

                this.addHandler(this.host, 'mouseenter', function (event) {
                    if (me.locked) {
                        me.host.css('cursor', 'arrow')
                    }
                    if (me.enableHover) {
                        if (!me.disabled && me.enableContainerClick && !me.locked) {
                            me.box.addClass(me.toThemeProperty('jqx-checkbox-hover'));
                            me.box.addClass(me.toThemeProperty('jqx-fill-state-hover'));
                            if (event.preventDefault) {
                                event.preventDefault();
                            }
                            me.hovered = true;
                            return false;
                        }
                    }
                });

                this.addHandler(this.host, 'mouseleave', function (event) {
                    if (me.enableHover) {
                        if (!me.disabled && me.enableContainerClick && !me.locked) {
                            me.box.removeClass(me.toThemeProperty('jqx-checkbox-hover'));
                            me.box.removeClass(me.toThemeProperty('jqx-fill-state-hover'));
                            if (event.preventDefault) {
                                event.preventDefault();
                            }
                            me.hovered = false;
                            return false;
                        }
                    }
                });

                this.addHandler(this.box, 'mouseenter', function () {
                    if (me.locked) {
                        return;
                    }

                    if (!me.disabled && !me.enableContainerClick) {
                        me.box.addClass(me.toThemeProperty('jqx-checkbox-hover'));
                        me.box.addClass(me.toThemeProperty('jqx-fill-state-hover'));
                    }
                });

                this.addHandler(this.box, 'mouseleave', function () {
                    if (!me.disabled && !me.enableContainerClick) {
                        me.box.removeClass(me.toThemeProperty('jqx-checkbox-hover'));
                        me.box.removeClass(me.toThemeProperty('jqx-fill-state-hover'));
                    }
                });
            }
        },

        focus: function () {
            try {
                this.host.focus();
            }
            catch (error) {
            }
        },

        _removeHandlers: function () {
            var isTouchDevice = $.jqx.mobile.isTouchDevice();
            var eventName = 'mousedown';
            if (isTouchDevice) eventName = 'touchend';

            if (this.box) {
                this.removeHandler(this.box, eventName);
                this.removeHandler(this.box, 'mouseenter');
                this.removeHandler(this.box, 'mouseleave');
            }
            this.removeHandler(this.host, eventName);
            this.removeHandler(this.host, 'mouseup');
            this.removeHandler(this.host, 'selectstart');
            this.removeHandler(this.host, 'mouseenter');
            this.removeHandler(this.host, 'mouseleave');
            this.removeHandler(this.host, 'keydown');
            this.removeHandler(this.host, 'blur');
            this.removeHandler(this.host, 'focus');
        },

        _render: function () {
            if (!this.disabled) {
                if (this.enableContainerClick) {
                    this.host.css('cursor', 'pointer');
                }
                else
                    if (!this.init) {
                        this.host.css('cursor', 'auto');
                    }
            }
            else {
                this.disable();
            }
            if (this.rtl) {
                this.box.addClass(this.toThemeProperty('jqx-checkbox-rtl'));
                this.host.addClass(this.toThemeProperty('jqx-rtl'));
            }

            this.updateStates();
            this.host.attr("checked", this.checked);
        },

        _setState: function (checked, locked) {
            if (this.checked != checked) {
                this.checked = checked;
                if (this.checked) {
                    this.checkMark[0].className = this.toThemeProperty('jqx-checkbox-check-checked');
                }
                else if (this.checked == null) {
                    this.checkMark[0].className = this.toThemeProperty('jqx-checkbox-check-indeterminate');
                }
                else {
                    this.checkMark[0].className = "";
                }
            }
            if (locked === false || locked === true)
                this.locked = locked;

            if (checked) {
                this.element.setAttribute('checked', true);
            }
            else {
                this.element.removeAttribute("checked");
            }
        },

        val: function (value) {
            if (arguments.length == 0 || (value != null && typeof (value) == "object")) {
                return this.checked;
            }

            if (typeof value == "string") {
                if (value == "true") this.check();
                if (value == "false") this.uncheck();
                if (value == "") this.indeterminate();
            }
            else {
                if (value == true) this.check();
                if (value == false) this.uncheck();
                if (value == null) this.indeterminate();
            }
            return this.checked;
        },

        // checks the ckeckbox.
        check: function () {
            this.checked = true;
            var me = this;
            this.checkMark.removeClass();
            this.element.setAttribute('checked', true);

            if ($.jqx.browser.msie || this.animationShowDelay == 0) {
                this.checkMark.addClass(this.toThemeProperty('jqx-checkbox-check-checked'));
            }
            else {
                this.checkMark.addClass(this.toThemeProperty('jqx-checkbox-check-checked'));
                this.checkMark.css('opacity', 0);
                this.checkMark.stop().animate({ opacity: 1 }, this.animationShowDelay, function () {
                });
            }

            if (this.groupName != null && this.groupName.length > 0) {
                var checkboxes = $.find(this.toThemeProperty('.jqx-checkbox', true));
                $.each(checkboxes, function () {
                    var groupName = $(this).jqxCheckBox('groupName');
                    if (groupName == me.groupName && this != me.element) {
                        $(this).jqxCheckBox('uncheck')
                    }
                });
            }

            var changeType = this.changeType;

            this._raiseEvent('0', { checked: true });
            this.changeType = changeType;
            this._raiseEvent('3', { checked: true });
            if (this.input != undefined) {
                this.input.val(this.checked);
                $.jqx.aria(this, "aria-checked", this.checked);
                this.host.attr("checked", this.checked);
            }
        },

        // unchecks the checkbox.
        uncheck: function () {
            this.checked = false;
            var me = this;

            this.element.removeAttribute('checked');

            if ($.jqx.browser.msie || this.animationHideDelay == 0) {
                if (me.checkMark[0].className != "") {
                    me.checkMark[0].className = "";
                }
            }
            else {
                this.checkMark.css('opacity', 1);
                this.checkMark.stop().animate({ opacity: 0 }, this.animationHideDelay, function () {
                    if (me.checkMark[0].className != "") {
                        me.checkMark[0].className = "";
                    }
                });
            }

            var changeType = this.changeType;
            this._raiseEvent('1');
            this.changeType = changeType;
            this._raiseEvent('3', { checked: false });
            if (this.input != undefined) {
                this.input.val(this.checked);
                $.jqx.aria(this, "aria-checked", this.checked);
                this.host.attr("checked", this.checked);
            }
        },

        // sets the indeterminate state.
        indeterminate: function () {
            this.checked = null;
            this.checkMark.removeClass();

            if ($.jqx.browser.msie || this.animationShowDelay == 0) {
                this.checkMark.addClass(this.toThemeProperty('jqx-checkbox-check-indeterminate'));
            }
            else {
                this.checkMark.addClass(this.toThemeProperty('jqx-checkbox-check-indeterminate'));
                this.checkMark.css('opacity', 0);
                this.checkMark.stop().animate({ opacity: 1 }, this.animationShowDelay, function () {
                });
            }

            var changeType = this.changeType;
            this._raiseEvent('2');
            this._raiseEvent('3', { checked: null });
            if (this.input != undefined) {
                this.input.val(this.checked);
                $.jqx.aria(this, "aria-checked", "undefined");
                this.host.attr("checked", "undefined");
            }
        },

        // toggles the check state.
        toggle: function () {
            if (this.disabled)
                return;

            if (this.locked)
                return;

            if (this.groupName != null && this.groupName.length > 0) {
                if (this.checked != true) {
                    this.checked = true;
                    this.updateStates();
                }
                return;
            }

            this.oldChecked = this.checked;
            if (this.checked == true) {
                this.checked = this.hasThreeStates ? null : false;
            }
            else {
                this.checked = this.checked != null;
            }

            this.updateStates();
            if (this.input != undefined) {
                this.input.val(this.checked);
            }
        },

        // updates check states depending on the value of the 'checked' property.
        updateStates: function () {
            if (this.checked) {
                this.check();
            }
            else if (this.checked == false) {
                this.uncheck();
            }
            else if (this.checked == null) {
                this.indeterminate();
            }
        },

        // disables the checkbox.
        disable: function () {
            this.disabled = true;

            if (this.checked == true) {
                this.checkMark.addClass(this.toThemeProperty('jqx-checkbox-check-disabled'));
            }
            else if (this.checked == null) {
                this.checkMark.addClass(this.toThemeProperty('jqx-checkbox-check-indeterminate-disabled'));
            }
            this.box.addClass(this.toThemeProperty('jqx-checkbox-disabled-box'));
            this.host.addClass(this.toThemeProperty('jqx-checkbox-disabled'));
            this.host.addClass(this.toThemeProperty('jqx-fill-state-disabled'));
            this.box.addClass(this.toThemeProperty('jqx-checkbox-disabled'));
            $.jqx.aria(this, "aria-disabled", this.disabled);
        },

        // enables the checkbox.
        enable: function () {
            if (this.checked == true) {
                this.checkMark.removeClass(this.toThemeProperty('jqx-checkbox-check-disabled'));
            }
            else if (this.checked == null) {
                this.checkMark.removeClass(this.toThemeProperty('jqx-checkbox-check-indeterminate-disabled'));
            }
            this.box.removeClass(this.toThemeProperty('jqx-checkbox-disabled-box'));
            this.host.removeClass(this.toThemeProperty('jqx-checkbox-disabled'));
            this.host.removeClass(this.toThemeProperty('jqx-fill-state-disabled'));
            this.box.removeClass(this.toThemeProperty('jqx-checkbox-disabled'));
            this.disabled = false;
            $.jqx.aria(this, "aria-disabled", this.disabled);
        },

        destroy: function () {
            this.host.remove();
        },

        _raiseEvent: function (id, args) {
            if (this.init) return;
            var evt = this.events[id];
            var event = new $.Event(evt);
            event.owner = this;
            if (!args) args = {};
            args.type = this.changeType;
            this.changeType = null;

            event.args = args;

            try {
                var result = this.host.trigger(event);
            }
            catch (error) {

            }

            return result;
        },

        propertiesChangedHandler: function (object, key, value) {
            if (value.width && value.height && Object.keys(value).length == 2) {
                object.setSize();
            }
        },

        propertyChangedHandler: function (object, key, oldvalue, value) {
            if (this.isInitialized == undefined || this.isInitialized == false)
                return;

            if (object.batchUpdate && object.batchUpdate.width && object.batchUpdate.height && Object.keys(object.batchUpdate).length == 2) {
                return;
            }

            if (key == "enableContainerClick" && !object.disabled && !object.locked) {
                if (value) {
                    object.host.css('cursor', 'pointer');
                }
                else object.host.css('cursor', 'auto');
            }

            if (key == "rtl") {
                if (value) {
                    object.box.addClass(object.toThemeProperty('jqx-checkbox-rtl'));
                    object.host.addClass(object.toThemeProperty('jqx-rtl'));
                }
                else {
                    object.box.removeClass(object.toThemeProperty('jqx-checkbox-rtl'));
                    object.host.removeClass(object.toThemeProperty('jqx-rtl'));
                }
            }

            if (key == "boxSize") {
                object.render();
            }

            if (key == 'theme') {
                $.jqx.utilities.setTheme(oldvalue, value, object.host);
            }

            if (key == 'checked') {
                if (value != oldvalue) {
                    switch (value) {
                        case true:
                            object.check();
                            break;
                        case false:
                            object.uncheck();
                            break;
                        case null:
                            object.indeterminate();
                            break;
                    }
                }
            }

            if (key == 'disabled') {
                if (value != oldvalue) {
                    if (value) {
                        object.disable();
                    } else object.enable();
                }
            }
        }
    });
})(jqxBaseFramework);
})();

















/***/ }),

/***/ 5459:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* tslint:disable */
/* eslint-disable */
(function(){
	if (typeof document === 'undefined') { 
		return;
	}
		
	var oldBrowser = document.all && !document.addEventListener;
	if (!oldBrowser) {
		(function (window, undefined) {
			var
				rootJQXLite,
				readyList,
				document = window.document,
				location = window.location,
				navigator = window.navigator,
				_JQXLite = window.JQXLite,
				_$ = window.$,

				// Save a reference to some core methods
				core_push = Array.prototype.push,
				core_slice = Array.prototype.slice,
				core_indexOf = Array.prototype.indexOf,
				core_toString = Object.prototype.toString,
				core_hasOwn = Object.prototype.hasOwnProperty,
				core_trim = String.prototype.trim,

				// Define a local copy of JQXLite
				JQXLite = function (selector, context) {
					// The JQXLite object is actually just the init constructor 'enhanced'
					return new JQXLite.fn.init(selector, context, rootJQXLite);
				},

				// Used for matching numbers
				core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,

				// Used for detecting and trimming whitespace
				core_rnotwhite = /\S/,
				core_rspace = /\s+/,

				// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
				rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

				// A simple way to check for HTML strings
				// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
				rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

				// Match a standalone tag
				rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

				// JSON RegExp
				rvalidchars = /^[\],:{}\s]*$/,
				rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
				rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
				rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,

				// Matches dashed string for camelizing
				rmsPrefix = /^-ms-/,
				rdashAlpha = /-([\da-z])/gi,

				// Used by JQXLite.camelCase as callback to replace()
				fcamelCase = function (all, letter) {
					return (letter + "").toUpperCase();
				},

				// The ready event handler and self cleanup method
				DOMContentLoaded = function () {
					if (document.addEventListener) {
						document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
						JQXLite.ready();
					} else if (document.readyState === "complete") {
						// we're here because readyState === "complete" in oldIE
						// which is good enough for us to call the dom ready!
						document.detachEvent("onreadystatechange", DOMContentLoaded);
						JQXLite.ready();
					}
				},

				// [[Class]] -> type pairs
				class2type = {};

			JQXLite.fn = JQXLite.prototype = {
				constructor: JQXLite,
				init: function (selector, context, rootJQXLite) {
					var match, elem, ret, doc;

					// Handle $(""), $(null), $(undefined), $(false)
					if (!selector) {
						return this;
					}

					// Handle $(DOMElement)
					if (selector.nodeType) {
						this.context = this[0] = selector;
						this.length = 1;
						return this;
					}

					// Handle HTML strings
					if (typeof selector === "string") {
						if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
							// Assume that strings that start and end with <> are HTML and skip the regex check
							match = [null, selector, null];

						} else {
							match = rquickExpr.exec(selector);
						}

						// Match html or make sure no context is specified for #id
						if (match && (match[1] || !context)) {

							// HANDLE: $(html) -> $(array)
							if (match[1]) {
								context = context instanceof JQXLite ? context[0] : context;
								doc = (context && context.nodeType ? context.ownerDocument || context : document);

								// scripts is true for back-compat
								selector = JQXLite.parseHTML(match[1], doc, true);
								if (rsingleTag.test(match[1]) && JQXLite.isPlainObject(context)) {
									this.attr.call(selector, context, true);
								}

								return JQXLite.merge(this, selector);

								// HANDLE: $(#id)
							} else {
								elem = document.getElementById(match[2]);

								// Check parentNode to catch when Blackberry 4.6 returns
								// nodes that are no longer in the document #6963
								if (elem && elem.parentNode) {
									// Handle the case where IE and Opera return items
									// by name instead of ID
									if (elem.id !== match[2]) {
										return rootJQXLite.find(selector);
									}

									// Otherwise, we inject the element directly into the JQXLite object
									this.length = 1;
									this[0] = elem;
								}

								this.context = document;
								this.selector = selector;
								return this;
							}

							// HANDLE: $(expr, $(...))
						} else if (!context || context.jqx) {
							return (context || rootJQXLite).find(selector);

							// HANDLE: $(expr, context)
							// (which is just equivalent to: $(context).find(expr)
						} else {
							return this.constructor(context).find(selector);
						}

						// HANDLE: $(function)
						// Shortcut for document ready
					} else if (JQXLite.isFunction(selector)) {
						return rootJQXLite.ready(selector);
					}

					if (selector.selector !== undefined) {
						this.selector = selector.selector;
						this.context = selector.context;
					}

					return JQXLite.makeArray(selector, this);
				},

				// Start with an empty selector
				selector: "",

				// The current version of JQXLite being used
				jqx: "4.5.0",

				// The default length of a JQXLite object is 0
				length: 0,

				// The number of elements contained in the matched element set
				size: function () {
					return this.length;
				},

				toArray: function () {
					return core_slice.call(this);
				},

				// Get the Nth element in the matched element set OR
				// Get the whole matched element set as a clean array
				get: function (num) {
					return num == null ?

						// Return a 'clean' array
						this.toArray() :

						// Return just the object
						(num < 0 ? this[this.length + num] : this[num]);
				},

				// Take an array of elements and push it onto the stack
				// (returning the new matched element set)
				pushStack: function (elems, name, selector) {

					// Build a new JQXLite matched element set
					var ret = JQXLite.merge(this.constructor(), elems);

					// Add the old object onto the stack (as a reference)
					ret.prevObject = this;

					ret.context = this.context;

					if (name === "find") {
						ret.selector = this.selector + (this.selector ? " " : "") + selector;
					} else if (name) {
						ret.selector = this.selector + "." + name + "(" + selector + ")";
					}

					// Return the newly-formed element set
					return ret;
				},

				// Execute a callback for every element in the matched set.
				// (You can seed the arguments with an array of args, but this is
				// only used internally.)
				each: function (callback, args) {
					return JQXLite.each(this, callback, args);
				},

				ready: function (fn) {
					// Add the callback
					JQXLite.ready.promise().done(fn);

					return this;
				},

				eq: function (i) {
					i = +i;
					return i === -1 ?
						this.slice(i) :
						this.slice(i, i + 1);
				},

				first: function () {
					return this.eq(0);
				},

				last: function () {
					return this.eq(-1);
				},

				slice: function () {
					return this.pushStack(core_slice.apply(this, arguments),
						"slice", core_slice.call(arguments).join(","));
				},

				map: function (callback) {
					return this.pushStack(JQXLite.map(this, function (elem, i) {
						return callback.call(elem, i, elem);
					}));
				},

				end: function () {
					return this.prevObject || this.constructor(null);
				},

				// For internal use only.
				// Behaves like an Array's method, not like a JQXLite method.
				push: core_push,
				sort: [].sort,
				splice: [].splice
			};

			// Give the init function the JQXLite prototype for later instantiation
			JQXLite.fn.init.prototype = JQXLite.fn;

			JQXLite.extend = JQXLite.fn.extend = function () {
				var options, name, src, copy, copyIsArray, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;

				// Handle a deep copy situation
				if (typeof target === "boolean") {
					deep = target;
					target = arguments[1] || {};
					// skip the boolean and the target
					i = 2;
				}

				// Handle case when target is a string or something (possible in deep copy)
				if (typeof target !== "object" && !JQXLite.isFunction(target)) {
					target = {};
				}

				// extend JQXLite itself if only one argument is passed
				if (length === i) {
					target = this;
					--i;
				}

				for (; i < length; i++) {
					// Only deal with non-null/undefined values
					if ((options = arguments[i]) != null) {
						// Extend the base object
						for (name in options) {
							src = target[name];
							copy = options[name];

							// Prevent never-ending loop
							if (target === copy) {
								continue;
							}

							// Recurse if we're merging plain objects or arrays
							if (deep && copy && (JQXLite.isPlainObject(copy) || (copyIsArray = JQXLite.isArray(copy)))) {
								if (copyIsArray) {
									copyIsArray = false;
									clone = src && JQXLite.isArray(src) ? src : [];

								} else {
									clone = src && JQXLite.isPlainObject(src) ? src : {};
								}

								// Never move original objects, clone them
								target[name] = JQXLite.extend(deep, clone, copy);

								// Don't bring in undefined values
							} else if (copy !== undefined) {
								target[name] = copy;
							}
						}
					}
				}

				// Return the modified object
				return target;
			};

			JQXLite.extend({
				noConflict: function (deep) {
					if (window.$ === JQXLite) {
						window.$ = _$;
					}

					if (deep && window.JQXLite === JQXLite) {
						window.JQXLite = _JQXLite;
					}

					return JQXLite;
				},

				// Is the DOM ready to be used? Set to true once it occurs.
				isReady: false,

				// A counter to track how many items to wait for before
				// the ready event fires. See #6781
				readyWait: 1,

				// Hold (or release) the ready event
				holdReady: function (hold) {
					if (hold) {
						JQXLite.readyWait++;
					} else {
						JQXLite.ready(true);
					}
				},

				// Handle when the DOM is ready
				ready: function (wait) {

					// Abort if there are pending holds or we're already ready
					if (wait === true ? --JQXLite.readyWait : JQXLite.isReady) {
						return;
					}

					// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
					if (!document.body) {
						return setTimeout(JQXLite.ready, 1);
					}

					// Remember that the DOM is ready
					JQXLite.isReady = true;

					// If a normal DOM Ready event fired, decrement, and wait if need be
					if (wait !== true && --JQXLite.readyWait > 0) {
						return;
					}

					// If there are functions bound, to execute
					readyList.resolveWith(document, [JQXLite]);

					// Trigger any bound ready events
					if (JQXLite.fn.trigger) {
						JQXLite(document).trigger("ready").off("ready");
					}
				},

				// See test/unit/core.js for details concerning isFunction.
				// Since version 1.3, DOM methods and functions like alert
				// aren't supported. They return false on IE (#2968).
				isFunction: function (obj) {
					return JQXLite.type(obj) === "function";
				},

				isArray: Array.isArray || function (obj) {
					return JQXLite.type(obj) === "array";
				},

				isWindow: function (obj) {
					return obj != null && obj == obj.window;
				},

				isNumeric: function (obj) {
					return !isNaN(parseFloat(obj)) && isFinite(obj);
				},

				type: function (obj) {
					return obj == null ?
						String(obj) :
						class2type[core_toString.call(obj)] || "object";
				},

				isPlainObject: function (obj) {
					// Must be an Object.
					// Because of IE, we also have to check the presence of the constructor property.
					// Make sure that DOM nodes and window objects don't pass through, as well
					if (!obj || JQXLite.type(obj) !== "object" || obj.nodeType || JQXLite.isWindow(obj)) {
						return false;
					}

					try {
						// Not own constructor property must be Object
						if (obj.constructor &&
							!core_hasOwn.call(obj, "constructor") &&
							!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
							return false;
						}
					} catch (e) {
						// IE8,9 Will throw exceptions on certain host objects #9897
						return false;
					}

					// Own properties are enumerated firstly, so to speed up,
					// if last one is own, then all properties are own.

					var key;
					for (key in obj) { }

					return key === undefined || core_hasOwn.call(obj, key);
				},

				isEmptyObject: function (obj) {
					var name;
					for (name in obj) {
						return false;
					}
					return true;
				},

				error: function (msg) {
					throw new Error(msg);
				},

				// data: string of html
				// context (optional): If specified, the fragment will be created in this context, defaults to document
				// scripts (optional): If true, will include scripts passed in the html string
				parseHTML: function (data, context, scripts) {
					var parsed;
					if (!data || typeof data !== "string") {
						return null;
					}
					if (typeof context === "boolean") {
						scripts = context;
						context = 0;
					}
					context = context || document;

					// Single tag
					if ((parsed = rsingleTag.exec(data))) {
						return [context.createElement(parsed[1])];
					}

					parsed = JQXLite.buildFragment([data], context, scripts ? null : []);
					return JQXLite.merge([],
						(parsed.cacheable ? JQXLite.clone(parsed.fragment) : parsed.fragment).childNodes);
				},

				parseJSON: function (data) {
					if (!data || typeof data !== "string") {
						return null;
					}

					// Make sure leading/trailing whitespace is removed (IE can't handle it)
					data = JQXLite.trim(data);

					// Attempt to parse using the native JSON parser first
					if (window.JSON && window.JSON.parse) {
						return window.JSON.parse(data);
					}

					// Make sure the incoming data is actual JSON
					// Logic borrowed from http://json.org/json2.js
					if (rvalidchars.test(data.replace(rvalidescape, "@")
						.replace(rvalidtokens, "]")
						.replace(rvalidbraces, ""))) {

						return (new Function("return " + data))();

					}
					JQXLite.error("Invalid JSON: " + data);
				},

				// Cross-browser xml parsing
				parseXML: function (data) {
					var xml, tmp;
					if (!data || typeof data !== "string") {
						return null;
					}
					try {
						if (window.DOMParser) { // Standard
							tmp = new DOMParser();
							xml = tmp.parseFromString(data, "text/xml");
						} else { // IE
							xml = new ActiveXObject("Microsoft.XMLDOM");
							xml.async = "false";
							xml.loadXML(data);
						}
					} catch (e) {
						xml = undefined;
					}
					if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
						JQXLite.error("Invalid XML: " + data);
					}
					return xml;
				},

				noop: function () { },

				// Evaluates a script in a global context
				// Workarounds based on findings by Jim Driscoll
				// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
				globalEval: function (data) {
					if (data && core_rnotwhite.test(data)) {
						// We use execScript on Internet Explorer
						// We use an anonymous function so that context is window
						// rather than JQXLite in Firefox
						(window.execScript || function (data) {
							window["eval"].call(window, data);
						})(data);
					}
				},

				// Convert dashed to camelCase; used by the css and data modules
				// Microsoft forgot to hump their vendor prefix (#9572)
				camelCase: function (string) {
					return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
				},

				nodeName: function (elem, name) {
					return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
				},

				// args is for internal usage only
				each: function (obj, callback, args) {
					var name,
						i = 0,
						length = obj.length,
						isObj = length === undefined || JQXLite.isFunction(obj);

					if (args) {
						if (isObj) {
							for (name in obj) {
								if (callback.apply(obj[name], args) === false) {
									break;
								}
							}
						} else {
							for (; i < length;) {
								if (callback.apply(obj[i++], args) === false) {
									break;
								}
							}
						}

						// A special, fast, case for the most common use of each
					} else {
						if (isObj) {
							for (name in obj) {
								if (callback.call(obj[name], name, obj[name]) === false) {
									break;
								}
							}
						} else {
							for (; i < length;) {
								if (callback.call(obj[i], i, obj[i++]) === false) {
									break;
								}
							}
						}
					}

					return obj;
				},

				// Use native String.trim function wherever possible
				trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
					function (text) {
						return text == null ?
							"" :
							core_trim.call(text);
					} :

					// Otherwise use our own trimming functionality
					function (text) {
						return text == null ?
							"" :
							(text + "").replace(rtrim, "");
					},

				// results is for internal usage only
				makeArray: function (arr, results) {
					var type,
						ret = results || [];

					if (arr != null) {
						// The window, strings (and functions) also have 'length'
						// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
						type = JQXLite.type(arr);

						if (arr.length == null || type === "string" || type === "function" || type === "regexp" || JQXLite.isWindow(arr)) {
							core_push.call(ret, arr);
						} else {
							JQXLite.merge(ret, arr);
						}
					}

					return ret;
				},

				inArray: function (elem, arr, i) {
					var len;

					if (arr) {
						if (core_indexOf) {
							return core_indexOf.call(arr, elem, i);
						}

						len = arr.length;
						i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

						for (; i < len; i++) {
							// Skip accessing in sparse arrays
							if (i in arr && arr[i] === elem) {
								return i;
							}
						}
					}

					return -1;
				},

				merge: function (first, second) {
					var l = second.length,
						i = first.length,
						j = 0;

					if (typeof l === "number") {
						for (; j < l; j++) {
							first[i++] = second[j];
						}

					} else {
						while (second[j] !== undefined) {
							first[i++] = second[j++];
						}
					}

					first.length = i;

					return first;
				},

				grep: function (elems, callback, inv) {
					var retVal,
						ret = [],
						i = 0,
						length = elems.length;
					inv = !!inv;

					// Go through the array, only saving the items
					// that pass the validator function
					for (; i < length; i++) {
						retVal = !!callback(elems[i], i);
						if (inv !== retVal) {
							ret.push(elems[i]);
						}
					}

					return ret;
				},

				// arg is for internal usage only
				map: function (elems, callback, arg) {
					var value, key,
						ret = [],
						i = 0,
						length = elems.length,
						// jqx objects are treated as arrays
						isArray = elems instanceof JQXLite || length !== undefined && typeof length === "number" && ((length > 0 && elems[0] && elems[length - 1]) || length === 0 || JQXLite.isArray(elems));

					// Go through the array, translating each of the items to their
					if (isArray) {
						for (; i < length; i++) {
							value = callback(elems[i], i, arg);

							if (value != null) {
								ret[ret.length] = value;
							}
						}

						// Go through every key on the object,
					} else {
						for (key in elems) {
							value = callback(elems[key], key, arg);

							if (value != null) {
								ret[ret.length] = value;
							}
						}
					}

					// Flatten any nested arrays
					return ret.concat.apply([], ret);
				},

				// A global GUID counter for objects
				guid: 1,

				// Bind a function to a context, optionally partially applying any
				// arguments.
				proxy: function (fn, context) {
					var tmp, args, proxy;

					if (typeof context === "string") {
						tmp = fn[context];
						context = fn;
						fn = tmp;
					}

					// Quick check to determine if target is callable, in the spec
					// this throws a TypeError, but we will just return undefined.
					if (!JQXLite.isFunction(fn)) {
						return undefined;
					}

					// Simulated bind
					args = core_slice.call(arguments, 2);
					proxy = function () {
						return fn.apply(context, args.concat(core_slice.call(arguments)));
					};

					// Set the guid of unique handler to the same of original handler, so it can be removed
					proxy.guid = fn.guid = fn.guid || JQXLite.guid++;

					return proxy;
				},

				// Multifunctional method to get and set values of a collection
				// The value/s can optionally be executed if it's a function
				access: function (elems, fn, key, value, chainable, emptyGet, pass) {
					var exec,
						bulk = key == null,
						i = 0,
						length = elems.length;

					// Sets many values
					if (key && typeof key === "object") {
						for (i in key) {
							JQXLite.access(elems, fn, i, key[i], 1, emptyGet, value);
						}
						chainable = 1;

						// Sets one value
					} else if (value !== undefined) {
						// Optionally, function values get executed if exec is true
						exec = pass === undefined && JQXLite.isFunction(value);

						if (bulk) {
							// Bulk operations only iterate when executing function values
							if (exec) {
								exec = fn;
								fn = function (elem, key, value) {
									return exec.call(JQXLite(elem), value);
								};

								// Otherwise they run against the entire set
							} else {
								fn.call(elems, value);
								fn = null;
							}
						}

						if (fn) {
							for (; i < length; i++) {
								fn(elems[i], key, exec ? value.call(elems[i], i, fn(elems[i], key)) : value, pass);
							}
						}

						chainable = 1;
					}

					return chainable ?
						elems :

						// Gets
						bulk ?
							fn.call(elems) :
							length ? fn(elems[0], key) : emptyGet;
				},

				now: function () {
					return (new Date()).getTime();
				}
			});

			JQXLite.ready.promise = function (obj) {
				if (!readyList) {

					readyList = JQXLite.Deferred();

					// Catch cases where $(document).ready() is called after the browser event has already occurred.
					// we once tried to use readyState "interactive" here, but it caused issues like the one
					// discovered by ChrisS here: http://bugs.jqx.com/ticket/12282#comment:15
					if (document.readyState === "complete") {
						// Handle it asynchronously to allow scripts the opportunity to delay ready
						setTimeout(JQXLite.ready, 1);

						// Standards-based browsers support DOMContentLoaded
					} else if (document.addEventListener) {
						// Use the handy event callback
						document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);

						// A fallback to window.onload, that will always work
						window.addEventListener("load", JQXLite.ready, false);

						// If IE event model is used
					} else {
						// Ensure firing before onload, maybe late but safe also for iframes
						document.attachEvent("onreadystatechange", DOMContentLoaded);

						// A fallback to window.onload, that will always work
						window.attachEvent("onload", JQXLite.ready);

						// If IE and not a frame
						// continually check to see if the document is ready
						var top = false;

						try {
							top = window.frameElement == null && document.documentElement;
						} catch (e) { }

						if (top && top.doScroll) {
							(function doScrollCheck() {
								if (!JQXLite.isReady) {

									try {
										// Use the trick by Diego Perini
										// http://javascript.nwbox.com/IEContentLoaded/
										top.doScroll("left");
									} catch (e) {
										return setTimeout(doScrollCheck, 50);
									}

									// and execute any waiting functions
									JQXLite.ready();
								}
							})();
						}
					}
				}
				return readyList.promise(obj);
			};

			// Populate the class2type map
			JQXLite.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (i, name) {
				class2type["[object " + name + "]"] = name.toLowerCase();
			});

			// All JQXLite objects should point back to these
			rootJQXLite = JQXLite(document);
			// String to Object options format cache
			var optionsCache = {};

			// Convert String-formatted options into Object-formatted ones and store in cache
			function createOptions(options) {
				var object = optionsCache[options] = {};
				JQXLite.each(options.split(core_rspace), function (_, flag) {
					object[flag] = true;
				});
				return object;
			}

			/*
			 * Create a callback list using the following parameters:
			 *
			 *	options: an optional list of space-separated options that will change how
			 *			the callback list behaves or a more traditional option object
			 *
			 * By default a callback list will act like an event callback list and can be
			 * "fired" multiple times.
			 *
			 * Possible options:
			 *
			 *	once:			will ensure the callback list can only be fired once (like a Deferred)
			 *
			 *	memory:			will keep track of previous values and will call any callback added
			 *					after the list has been fired right away with the latest "memorized"
			 *					values (like a Deferred)
			 *
			 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
			 *
			 *	stopOnFalse:	interrupt callings when a callback returns false
			 *
			 */
			JQXLite.Callbacks = function (options) {

				// Convert options from String-formatted to Object-formatted if needed
				// (we check in cache first)
				options = typeof options === "string" ?
					(optionsCache[options] || createOptions(options)) :
					JQXLite.extend({}, options);

				var // Last fire value (for non-forgettable lists)
					memory,
					// Flag to know if list was already fired
					fired,
					// Flag to know if list is currently firing
					firing,
					// First callback to fire (used internally by add and fireWith)
					firingStart,
					// End of the loop when firing
					firingLength,
					// Index of currently firing callback (modified by remove if needed)
					firingIndex,
					// Actual callback list
					list = [],
					// Stack of fire calls for repeatable lists
					stack = !options.once && [],
					// Fire callbacks
					fire = function (data) {
						memory = options.memory && data;
						fired = true;
						firingIndex = firingStart || 0;
						firingStart = 0;
						firingLength = list.length;
						firing = true;
						for (; list && firingIndex < firingLength; firingIndex++) {
							if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
								memory = false; // To prevent further calls using add
								break;
							}
						}
						firing = false;
						if (list) {
							if (stack) {
								if (stack.length) {
									fire(stack.shift());
								}
							} else if (memory) {
								list = [];
							} else {
								self.disable();
							}
						}
					},
					// Actual Callbacks object
					self = {
						// Add a callback or a collection of callbacks to the list
						add: function () {
							if (list) {
								// First, we save the current length
								var start = list.length;
								(function add(args) {
									JQXLite.each(args, function (_, arg) {
										var type = JQXLite.type(arg);
										if (type === "function") {
											if (!options.unique || !self.has(arg)) {
												list.push(arg);
											}
										} else if (arg && arg.length && type !== "string") {
											// Inspect recursively
											add(arg);
										}
									});
								})(arguments);
								// Do we need to add the callbacks to the
								// current firing batch?
								if (firing) {
									firingLength = list.length;
									// With memory, if we're not firing then
									// we should call right away
								} else if (memory) {
									firingStart = start;
									fire(memory);
								}
							}
							return this;
						},
						// Remove a callback from the list
						remove: function () {
							if (list) {
								JQXLite.each(arguments, function (_, arg) {
									var index;
									while ((index = JQXLite.inArray(arg, list, index)) > -1) {
										list.splice(index, 1);
										// Handle firing indexes
										if (firing) {
											if (index <= firingLength) {
												firingLength--;
											}
											if (index <= firingIndex) {
												firingIndex--;
											}
										}
									}
								});
							}
							return this;
						},
						// Control if a given callback is in the list
						has: function (fn) {
							return JQXLite.inArray(fn, list) > -1;
						},
						// Remove all callbacks from the list
						empty: function () {
							list = [];
							return this;
						},
						// Have the list do nothing anymore
						disable: function () {
							list = stack = memory = undefined;
							return this;
						},
						// Is it disabled?
						disabled: function () {
							return !list;
						},
						// Lock the list in its current state
						lock: function () {
							stack = undefined;
							if (!memory) {
								self.disable();
							}
							return this;
						},
						// Is it locked?
						locked: function () {
							return !stack;
						},
						// Call all callbacks with the given context and arguments
						fireWith: function (context, args) {
							args = args || [];
							args = [context, args.slice ? args.slice() : args];
							if (list && (!fired || stack)) {
								if (firing) {
									stack.push(args);
								} else {
									fire(args);
								}
							}
							return this;
						},
						// Call all the callbacks with the given arguments
						fire: function () {
							self.fireWith(this, arguments);
							return this;
						},
						// To know if the callbacks have already been called at least once
						fired: function () {
							return !!fired;
						}
					};

				return self;
			};
			JQXLite.extend({

				Deferred: function (func) {
					var tuples = [
						// action, add listener, listener list, final state
						["resolve", "done", JQXLite.Callbacks("once memory"), "resolved"],
						["reject", "fail", JQXLite.Callbacks("once memory"), "rejected"],
						["notify", "progress", JQXLite.Callbacks("memory")]
					],
						state = "pending",
						promise = {
							state: function () {
								return state;
							},
							always: function () {
								deferred.done(arguments).fail(arguments);
								return this;
							},
							then: function ( /* fnDone, fnFail, fnProgress */) {
								var fns = arguments;
								return JQXLite.Deferred(function (newDefer) {
									JQXLite.each(tuples, function (i, tuple) {
										var action = tuple[0],
											fn = fns[i];
										// deferred[ done | fail | progress ] for forwarding actions to newDefer
										deferred[tuple[1]](JQXLite.isFunction(fn) ?
											function () {
												var returned = fn.apply(this, arguments);
												if (returned && JQXLite.isFunction(returned.promise)) {
													returned.promise()
														.done(newDefer.resolve)
														.fail(newDefer.reject)
														.progress(newDefer.notify);
												} else {
													newDefer[action + "With"](this === deferred ? newDefer : this, [returned]);
												}
											} :
											newDefer[action]
										);
									});
									fns = null;
								}).promise();
							},
							// Get a promise for this deferred
							// If obj is provided, the promise aspect is added to the object
							promise: function (obj) {
								return obj != null ? JQXLite.extend(obj, promise) : promise;
							}
						},
						deferred = {};

					// Keep pipe for back-compat
					promise.pipe = promise.then;

					// Add list-specific methods
					JQXLite.each(tuples, function (i, tuple) {
						var list = tuple[2],
							stateString = tuple[3];

						// promise[ done | fail | progress ] = list.add
						promise[tuple[1]] = list.add;

						// Handle state
						if (stateString) {
							list.add(function () {
								// state = [ resolved | rejected ]
								state = stateString;

								// [ reject_list | resolve_list ].disable; progress_list.lock
							}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
						}

						// deferred[ resolve | reject | notify ] = list.fire
						deferred[tuple[0]] = list.fire;
						deferred[tuple[0] + "With"] = list.fireWith;
					});

					// Make the deferred a promise
					promise.promise(deferred);

					// Call given func if any
					if (func) {
						func.call(deferred, deferred);
					}

					// All done!
					return deferred;
				},

				// Deferred helper
				when: function (subordinate /* , ..., subordinateN */) {
					var i = 0,
						resolveValues = core_slice.call(arguments),
						length = resolveValues.length,

						// the count of uncompleted subordinates
						remaining = length !== 1 || (subordinate && JQXLite.isFunction(subordinate.promise)) ? length : 0,

						// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
						deferred = remaining === 1 ? subordinate : JQXLite.Deferred(),

						// Update function for both resolve and progress values
						updateFunc = function (i, contexts, values) {
							return function (value) {
								contexts[i] = this;
								values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
								if (values === progressValues) {
									deferred.notifyWith(contexts, values);
								} else if (!(--remaining)) {
									deferred.resolveWith(contexts, values);
								}
							};
						},

						progressValues, progressContexts, resolveContexts;

					// add listeners to Deferred subordinates; treat others as resolved
					if (length > 1) {
						progressValues = new Array(length);
						progressContexts = new Array(length);
						resolveContexts = new Array(length);
						for (; i < length; i++) {
							if (resolveValues[i] && JQXLite.isFunction(resolveValues[i].promise)) {
								resolveValues[i].promise()
									.done(updateFunc(i, resolveContexts, resolveValues))
									.fail(deferred.reject)
									.progress(updateFunc(i, progressContexts, progressValues));
							} else {
								--remaining;
							}
						}
					}

					// if we're not waiting on anything, resolve the master
					if (!remaining) {
						deferred.resolveWith(resolveContexts, resolveValues);
					}

					return deferred.promise();
				}
			});
			JQXLite.support = (function () {

				var support,
					all,
					a,
					select,
					opt,
					input,
					fragment,
					eventName,
					i,
					isSupported,
					clickFn,
					div = document.createElement("div");

				// Setup
				div.setAttribute("className", "t");
				div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

				// Support tests won't run in some limited or non-browser environments
				all = div.getElementsByTagName("*");
				a = div.getElementsByTagName("a")[0];
				if (!all || !a || !all.length) {
					return {};
				}

				// First batch of tests
				select = document.createElement("select");
				opt = select.appendChild(document.createElement("option"));
				input = div.getElementsByTagName("input")[0];

				a.style.cssText = "top:1px;float:left;opacity:.5";
				support = {
					// IE strips leading whitespace when .innerHTML is used
					leadingWhitespace: (div.firstChild.nodeType === 3),

					// Make sure that tbody elements aren't automatically inserted
					// IE will insert them into empty tables
					tbody: !div.getElementsByTagName("tbody").length,

					// Make sure that link elements get serialized correctly by innerHTML
					// This requires a wrapper element in IE
					htmlSerialize: !!div.getElementsByTagName("link").length,

					// Get the style information from getAttribute
					// (IE uses .cssText instead)
					style: /top/.test(a.getAttribute("style")),

					// Make sure that URLs aren't manipulated
					// (IE normalizes it by default)
					hrefNormalized: (a.getAttribute("href") === "/a"),

					// Make sure that element opacity exists
					// (IE uses filter instead)
					// Use a regex to work around a WebKit issue. See #5145
					opacity: /^0.5/.test(a.style.opacity),

					// Verify style float existence
					// (IE uses styleFloat instead of cssFloat)
					cssFloat: !!a.style.cssFloat,

					// Make sure that if no value is specified for a checkbox
					// that it defaults to "on".
					// (WebKit defaults to "" instead)
					checkOn: (input.value === "on"),

					// Make sure that a selected-by-default option has a working selected property.
					// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
					optSelected: opt.selected,

					// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
					getSetAttribute: div.className !== "t",

					// Tests for enctype support on a form (#6743)
					enctype: !!document.createElement("form").enctype,

					// Makes sure cloning an html5 element does not cause problems
					// Where outerHTML is undefined, this still works
					html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",

					// JQXLite.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
					boxModel: (document.compatMode === "CSS1Compat"),

					// Will be defined later
					submitBubbles: true,
					changeBubbles: true,
					focusinBubbles: false,
					deleteExpando: true,
					noCloneEvent: true,
					inlineBlockNeedsLayout: false,
					shrinkWrapBlocks: false,
					reliableMarginRight: true,
					boxSizingReliable: true,
					pixelPosition: false
				};

				// Make sure checked status is properly cloned
				input.checked = true;
				support.noCloneChecked = input.cloneNode(true).checked;

				// Make sure that the options inside disabled selects aren't marked as disabled
				// (WebKit marks them as disabled)
				select.disabled = true;
				support.optDisabled = !opt.disabled;

				// Test to see if it's possible to delete an expando from an element
				// Fails in Internet Explorer
				try {
					delete div.test;
				} catch (e) {
					support.deleteExpando = false;
				}

				if (!div.addEventListener && div.attachEvent && div.fireEvent) {
					div.attachEvent("onclick", clickFn = function () {
						// Cloning a node shouldn't copy over any
						// bound event handlers (IE does this)
						support.noCloneEvent = false;
					});
					div.cloneNode(true).fireEvent("onclick");
					div.detachEvent("onclick", clickFn);
				}

				// Check if a radio maintains its value
				// after being appended to the DOM
				input = document.createElement("input");
				input.value = "t";
				input.setAttribute("type", "radio");
				support.radioValue = input.value === "t";

				input.setAttribute("checked", "checked");

				// #11217 - WebKit loses check when the name is after the checked attribute
				input.setAttribute("name", "t");

				div.appendChild(input);
				fragment = document.createDocumentFragment();
				fragment.appendChild(div.lastChild);

				// WebKit doesn't clone checked state correctly in fragments
				support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;

				// Check if a disconnected checkbox will retain its checked
				// value of true after appended to the DOM (IE6/7)
				support.appendChecked = input.checked;

				fragment.removeChild(input);
				fragment.appendChild(div);

				// Technique from Juriy Zaytsev
				// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
				// We only care about the case where non-standard event systems
				// are used, namely in IE. Short-circuiting here helps us to
				// avoid an eval call (in setAttribute) which can cause CSP
				// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
				if (div.attachEvent) {
					for (i in {
						submit: true,
						change: true,
						focusin: true
					}) {
						eventName = "on" + i;
						isSupported = (eventName in div);
						if (!isSupported) {
							div.setAttribute(eventName, "return;");
							isSupported = (typeof div[eventName] === "function");
						}
						support[i + "Bubbles"] = isSupported;
					}
				}

				// Run tests that need a body at doc ready
				JQXLite(function () {
					var container, div, tds, marginDiv,
						divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
						body = document.getElementsByTagName("body")[0];

					if (!body) {
						// Return for frameset docs that don't have a body
						return;
					}

					container = document.createElement("div");
					container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
					body.insertBefore(container, body.firstChild);

					// Construct the test element
					div = document.createElement("div");
					container.appendChild(div);

					// Check if table cells still have offsetWidth/Height when they are set
					// to display:none and there are still other visible table cells in a
					// table row; if so, offsetWidth/Height are not reliable for use when
					// determining if an element has been hidden directly using
					// display:none (it is still safe to use offsets if a parent element is
					// hidden; don safety goggles and see bug #4512 for more information).
					// (only IE 8 fails this test)
					div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
					tds = div.getElementsByTagName("td");
					tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
					isSupported = (tds[0].offsetHeight === 0);

					tds[0].style.display = "";
					tds[1].style.display = "none";

					// Check if empty table cells still have offsetWidth/Height
					// (IE <= 8 fail this test)
					support.reliableHiddenOffsets = isSupported && (tds[0].offsetHeight === 0);

					// Check box-sizing and margin behavior
					div.innerHTML = "";
					div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
					support.boxSizing = (div.offsetWidth === 4);
					support.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== 1);

					// NOTE: To any future maintainer, we've window.getComputedStyle
					// because jsdom on node.js will break without it.
					if (window.getComputedStyle) {
						support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
						support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";

						// Check if div with explicit width and no margin-right incorrectly
						// gets computed margin-right based on width of container. For more
						// info see bug #3333
						// Fails in WebKit before Feb 2011 nightlies
						// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
						marginDiv = document.createElement("div");
						marginDiv.style.cssText = div.style.cssText = divReset;
						marginDiv.style.marginRight = marginDiv.style.width = "0";
						div.style.width = "1px";
						div.appendChild(marginDiv);
						support.reliableMarginRight =
							!parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
					}

					if (typeof div.style.zoom !== "undefined") {
						// Check if natively block-level elements act like inline-block
						// elements when setting their display to 'inline' and giving
						// them layout
						// (IE < 8 does this)
						div.innerHTML = "";
						div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
						support.inlineBlockNeedsLayout = (div.offsetWidth === 3);

						// Check if elements with layout shrink-wrap their children
						// (IE 6 does this)
						div.style.display = "block";
						div.style.overflow = "visible";
						div.innerHTML = "<div></div>";
						div.firstChild.style.width = "5px";
						support.shrinkWrapBlocks = (div.offsetWidth !== 3);

						container.style.zoom = 1;
					}

					// Null elements to avoid leaks in IE
					body.removeChild(container);
					container = div = tds = marginDiv = null;
				});

				// Null elements to avoid leaks in IE
				fragment.removeChild(div);
				all = a = select = opt = input = fragment = div = null;

				return support;
			})();
			var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
				rmultiDash = /([A-Z])/g;

			JQXLite.extend({
				cache: {},

				deletedIds: [],

				// Remove at next major release (1.9/2.0)
				uuid: 0,

				// Unique for each copy of JQXLite on the page
				// Non-digits removed to match rinlinejQuery
				expando: "JQXLite" + (JQXLite.fn.jqx + Math.random()).replace(/\D/g, ""),

				// The following elements throw uncatchable exceptions if you
				// attempt to add expando properties to them.
				noData: {
					"embed": true,
					// Ban all objects except for Flash (which handle expandos)
					"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
					"applet": true
				},

				hasData: function (elem) {
					elem = elem.nodeType ? JQXLite.cache[elem[JQXLite.expando]] : elem[JQXLite.expando];
					return !!elem && !isEmptyDataObject(elem);
				},

				data: function (elem, name, data, pvt /* Internal Use Only */) {
					if (!JQXLite.acceptData(elem)) {
						return;
					}

					var thisCache, ret,
						internalKey = JQXLite.expando,
						getByName = typeof name === "string",

						// We have to handle DOM nodes and JS objects differently because IE6-7
						// can't GC object references properly across the DOM-JS boundary
						isNode = elem.nodeType,

						// Only DOM nodes need the global JQXLite cache; JS object data is
						// attached directly to the object so GC can occur automatically
						cache = isNode ? JQXLite.cache : elem,

						// Only defining an ID for JS objects if its cache already exists allows
						// the code to shortcut on the same path as a DOM node with no cache
						id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

					// Avoid doing any more work than we need to when trying to get data on an
					// object that has no data at all
					if ((!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined) {
						return;
					}

					if (!id) {
						// Only DOM nodes need a new unique ID for each element since their data
						// ends up in the global cache
						if (isNode) {
							elem[internalKey] = id = JQXLite.deletedIds.pop() || JQXLite.guid++;
						} else {
							id = internalKey;
						}
					}

					if (!cache[id]) {
						cache[id] = {};

						// Avoids exposing JQXLite metadata on plain JS objects when the object
						// is serialized using JSON.stringify
						if (!isNode) {
							cache[id].toJSON = JQXLite.noop;
						}
					}

					// An object can be passed to JQXLite.data instead of a key/value pair; this gets
					// shallow copied over onto the existing cache
					if (typeof name === "object" || typeof name === "function") {
						if (pvt) {
							cache[id] = JQXLite.extend(cache[id], name);
						} else {
							cache[id].data = JQXLite.extend(cache[id].data, name);
						}
					}

					thisCache = cache[id];

					// JQXLite data() is stored in a separate object inside the object's internal data
					// cache in order to avoid key collisions between internal data and user-defined
					// data.
					if (!pvt) {
						if (!thisCache.data) {
							thisCache.data = {};
						}

						thisCache = thisCache.data;
					}

					if (data !== undefined) {
						thisCache[JQXLite.camelCase(name)] = data;
					}

					// Check for both converted-to-camel and non-converted data property names
					// If a data property was specified
					if (getByName) {

						// First Try to find as-is property data
						ret = thisCache[name];

						// Test for null|undefined property data
						if (ret == null) {

							// Try to find the camelCased property
							ret = thisCache[JQXLite.camelCase(name)];
						}
					} else {
						ret = thisCache;
					}

					return ret;
				},

				removeData: function (elem, name, pvt /* Internal Use Only */) {
					if (!JQXLite.acceptData(elem)) {
						return;
					}

					var thisCache, i, l,

						isNode = elem.nodeType,

						// See JQXLite.data for more information
						cache = isNode ? JQXLite.cache : elem,
						id = isNode ? elem[JQXLite.expando] : JQXLite.expando;

					// If there is already no cache entry for this object, there is no
					// purpose in continuing
					if (!cache[id]) {
						return;
					}

					if (name) {

						thisCache = pvt ? cache[id] : cache[id].data;

						if (thisCache) {

							// Support array or space separated string names for data keys
							if (!JQXLite.isArray(name)) {

								// try the string as a key before any manipulation
								if (name in thisCache) {
									name = [name];
								} else {

									// split the camel cased version by spaces unless a key with the spaces exists
									name = JQXLite.camelCase(name);
									if (name in thisCache) {
										name = [name];
									} else {
										name = name.split(" ");
									}
								}
							}

							for (i = 0, l = name.length; i < l; i++) {
								delete thisCache[name[i]];
							}

							// If there is no data left in the cache, we want to continue
							// and let the cache object itself get destroyed
							if (!(pvt ? isEmptyDataObject : JQXLite.isEmptyObject)(thisCache)) {
								return;
							}
						}
					}

					// See JQXLite.data for more information
					if (!pvt) {
						delete cache[id].data;

						// Don't destroy the parent cache unless the internal data object
						// had been the only thing left in it
						if (!isEmptyDataObject(cache[id])) {
							return;
						}
					}

					// Destroy the cache
					if (isNode) {
						JQXLite.cleanData([elem], true);

						// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
					} else if (JQXLite.support.deleteExpando || cache != cache.window) {
						delete cache[id];

						// When all else fails, null
					} else {
						cache[id] = null;
					}
				},

				// For internal use only.
				_data: function (elem, name, data) {
					return JQXLite.data(elem, name, data, true);
				},

				// A method for determining if a DOM node can handle the data expando
				acceptData: function (elem) {
					var noData = elem.nodeName && JQXLite.noData[elem.nodeName.toLowerCase()];

					// nodes accept data unless otherwise specified; rejection can be conditional
					return !noData || noData !== true && elem.getAttribute("classid") === noData;
				}
			});

			JQXLite.fn.extend({
				data: function (key, value) {
					var parts, part, attr, name, l,
						elem = this[0],
						i = 0,
						data = null;

					// Gets all values
					if (key === undefined) {
						if (this.length) {
							data = JQXLite.data(elem);

							if (elem.nodeType === 1 && !JQXLite._data(elem, "parsedAttrs")) {
								attr = elem.attributes;
								for (l = attr.length; i < l; i++) {
									name = attr[i].name;

									if (!name.indexOf("data-")) {
										name = JQXLite.camelCase(name.substring(5));

										dataAttr(elem, name, data[name]);
									}
								}
								JQXLite._data(elem, "parsedAttrs", true);
							}
						}

						return data;
					}

					// Sets multiple values
					if (typeof key === "object") {
						return this.each(function () {
							JQXLite.data(this, key);
						});
					}

					parts = key.split(".", 2);
					parts[1] = parts[1] ? "." + parts[1] : "";
					part = parts[1] + "!";

					return JQXLite.access(this, function (value) {

						if (value === undefined) {
							data = this.triggerHandler("getData" + part, [parts[0]]);

							// Try to fetch any internally stored data first
							if (data === undefined && elem) {
								data = JQXLite.data(elem, key);
								data = dataAttr(elem, key, data);
							}

							return data === undefined && parts[1] ?
								this.data(parts[0]) :
								data;
						}

						parts[1] = value;
						this.each(function () {
							var self = JQXLite(this);

							self.triggerHandler("setData" + part, parts);
							JQXLite.data(this, key, value);
							self.triggerHandler("changeData" + part, parts);
						});
					}, null, value, arguments.length > 1, null, false);
				},

				removeData: function (key) {
					return this.each(function () {
						JQXLite.removeData(this, key);
					});
				}
			});

			function dataAttr(elem, key, data) {
				// If nothing was found internally, try to fetch any
				// data from the HTML5 data-* attribute
				if (data === undefined && elem.nodeType === 1) {

					var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

					data = elem.getAttribute(name);

					if (typeof data === "string") {
						try {
							data = data === "true" ? true :
								data === "false" ? false :
									data === "null" ? null :
										// Only convert to a number if it doesn't change the string
										+data + "" === data ? +data :
											rbrace.test(data) ? JQXLite.parseJSON(data) :
												data;
						} catch (e) { }

						// Make sure we set the data so it isn't changed later
						JQXLite.data(elem, key, data);

					} else {
						data = undefined;
					}
				}

				return data;
			}

			// checks a cache object for emptiness
			function isEmptyDataObject(obj) {
				var name;
				for (name in obj) {

					// if the public data object is empty, the private is still empty
					if (name === "data" && JQXLite.isEmptyObject(obj[name])) {
						continue;
					}
					if (name !== "toJSON") {
						return false;
					}
				}

				return true;
			}
			JQXLite.extend({
				queue: function (elem, type, data) {
					var queue;

					if (elem) {
						type = (type || "fx") + "queue";
						queue = JQXLite._data(elem, type);

						// Speed up dequeue by getting out quickly if this is just a lookup
						if (data) {
							if (!queue || JQXLite.isArray(data)) {
								queue = JQXLite._data(elem, type, JQXLite.makeArray(data));
							} else {
								queue.push(data);
							}
						}
						return queue || [];
					}
				},

				dequeue: function (elem, type) {
					type = type || "fx";

					var queue = JQXLite.queue(elem, type),
						startLength = queue.length,
						fn = queue.shift(),
						hooks = JQXLite._queueHooks(elem, type),
						next = function () {
							JQXLite.dequeue(elem, type);
						};

					// If the fx queue is dequeued, always remove the progress sentinel
					if (fn === "inprogress") {
						fn = queue.shift();
						startLength--;
					}

					if (fn) {

						// Add a progress sentinel to prevent the fx queue from being
						// automatically dequeued
						if (type === "fx") {
							queue.unshift("inprogress");
						}

						// clear up the last queue stop function
						delete hooks.stop;
						fn.call(elem, next, hooks);
					}

					if (!startLength && hooks) {
						hooks.empty.fire();
					}
				},

				// not intended for public consumption - generates a queueHooks object, or returns the current one
				_queueHooks: function (elem, type) {
					var key = type + "queueHooks";
					return JQXLite._data(elem, key) || JQXLite._data(elem, key, {
						empty: JQXLite.Callbacks("once memory").add(function () {
							JQXLite.removeData(elem, type + "queue", true);
							JQXLite.removeData(elem, key, true);
						})
					});
				}
			});

			JQXLite.fn.extend({
				queue: function (type, data) {
					var setter = 2;

					if (typeof type !== "string") {
						data = type;
						type = "fx";
						setter--;
					}

					if (arguments.length < setter) {
						return JQXLite.queue(this[0], type);
					}

					return data === undefined ?
						this :
						this.each(function () {
							var queue = JQXLite.queue(this, type, data);

							// ensure a hooks for this queue
							JQXLite._queueHooks(this, type);

							if (type === "fx" && queue[0] !== "inprogress") {
								JQXLite.dequeue(this, type);
							}
						});
				},
				dequeue: function (type) {
					return this.each(function () {
						JQXLite.dequeue(this, type);
					});
				},
				// Based off of the plugin by Clint Helfers, with permission.
				// http://blindsignals.com/index.php/2009/07/jqx-delay/
				delay: function (time, type) {
					time = JQXLite.fx ? JQXLite.fx.speeds[time] || time : time;
					type = type || "fx";

					return this.queue(type, function (next, hooks) {
						var timeout = setTimeout(next, time);
						hooks.stop = function () {
							clearTimeout(timeout);
						};
					});
				},
				clearQueue: function (type) {
					return this.queue(type || "fx", []);
				},
				// Get a promise resolved when queues of a certain type
				// are emptied (fx is the type by default)
				promise: function (type, obj) {
					var tmp,
						count = 1,
						defer = JQXLite.Deferred(),
						elements = this,
						i = this.length,
						resolve = function () {
							if (!(--count)) {
								defer.resolveWith(elements, [elements]);
							}
						};

					if (typeof type !== "string") {
						obj = type;
						type = undefined;
					}
					type = type || "fx";

					while (i--) {
						tmp = JQXLite._data(elements[i], type + "queueHooks");
						if (tmp && tmp.empty) {
							count++;
							tmp.empty.add(resolve);
						}
					}
					resolve();
					return defer.promise(obj);
				}
			});
			var nodeHook, boolHook, fixSpecified,
				rclass = /[\t\r\n]/g,
				rreturn = /\r/g,
				rtype = /^(?:button|input)$/i,
				rfocusable = /^(?:button|input|object|select|textarea)$/i,
				rclickable = /^a(?:rea|)$/i,
				rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
				getSetAttribute = JQXLite.support.getSetAttribute;

			JQXLite.fn.extend({
				attr: function (name, value) {
					return JQXLite.access(this, JQXLite.attr, name, value, arguments.length > 1);
				},

				removeAttr: function (name) {
					return this.each(function () {
						JQXLite.removeAttr(this, name);
					});
				},

				prop: function (name, value) {
					return JQXLite.access(this, JQXLite.prop, name, value, arguments.length > 1);
				},

				removeProp: function (name) {
					name = JQXLite.propFix[name] || name;
					return this.each(function () {
						// try/catch handles cases where IE balks (such as removing a property on window)
						try {
							this[name] = undefined;
							delete this[name];
						} catch (e) { }
					});
				},

				addClass: function (value) {
					var classNames, i, l, elem,
						setClass, c, cl;

					if (JQXLite.isFunction(value)) {
						return this.each(function (j) {
							JQXLite(this).addClass(value.call(this, j, this.className));
						});
					}

					if (value && typeof value === "string") {
						classNames = value.split(core_rspace);

						for (i = 0, l = this.length; i < l; i++) {
							elem = this[i];

							if (elem.nodeType === 1) {
								if (!elem.className && classNames.length === 1) {
									elem.className = value;

								} else {
									setClass = " " + elem.className + " ";

									for (c = 0, cl = classNames.length; c < cl; c++) {
										if (setClass.indexOf(" " + classNames[c] + " ") < 0) {
											setClass += classNames[c] + " ";
										}
									}
									elem.className = JQXLite.trim(setClass);
								}
							}
						}
					}

					return this;
				},

				removeClass: function (value) {
					var removes, className, elem, c, cl, i, l;

					if (JQXLite.isFunction(value)) {
						return this.each(function (j) {
							JQXLite(this).removeClass(value.call(this, j, this.className));
						});
					}
					if ((value && typeof value === "string") || value === undefined) {
						removes = (value || "").split(core_rspace);

						for (i = 0, l = this.length; i < l; i++) {
							elem = this[i];
							if (elem.nodeType === 1 && elem.className) {

								className = (" " + elem.className + " ").replace(rclass, " ");

								// loop over each item in the removal list
								for (c = 0, cl = removes.length; c < cl; c++) {
									// Remove until there is nothing to remove,
									while (className.indexOf(" " + removes[c] + " ") >= 0) {
										className = className.replace(" " + removes[c] + " ", " ");
									}
								}
								elem.className = value ? JQXLite.trim(className) : "";
							}
						}
					}

					return this;
				},

				toggleClass: function (value, stateVal) {
					var type = typeof value,
						isBool = typeof stateVal === "boolean";

					if (JQXLite.isFunction(value)) {
						return this.each(function (i) {
							JQXLite(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
						});
					}

					return this.each(function () {
						if (type === "string") {
							// toggle individual class names
							var className,
								i = 0,
								self = JQXLite(this),
								state = stateVal,
								classNames = value.split(core_rspace);

							while ((className = classNames[i++])) {
								// check each className given, space separated list
								state = isBool ? state : !self.hasClass(className);
								self[state ? "addClass" : "removeClass"](className);
							}

						} else if (type === "undefined" || type === "boolean") {
							if (this.className) {
								// store className if set
								JQXLite._data(this, "__className__", this.className);
							}

							// toggle whole className
							this.className = this.className || value === false ? "" : JQXLite._data(this, "__className__") || "";
						}
					});
				},

				hasClass: function (selector) {
					var className = " " + selector + " ",
						i = 0,
						l = this.length;
					for (; i < l; i++) {
						if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
							return true;
						}
					}

					return false;
				},

				val: function (value) {
					var hooks, ret, isFunction,
						elem = this[0];

					if (!arguments.length) {
						if (elem) {
							hooks = JQXLite.valHooks[elem.type] || JQXLite.valHooks[elem.nodeName.toLowerCase()];

							if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
								return ret;
							}

							ret = elem.value;

							return typeof ret === "string" ?
								// handle most common string cases
								ret.replace(rreturn, "") :
								// handle cases where value is null/undef or number
								ret == null ? "" : ret;
						}

						return;
					}

					isFunction = JQXLite.isFunction(value);

					return this.each(function (i) {
						var val,
							self = JQXLite(this);

						if (this.nodeType !== 1) {
							return;
						}

						if (isFunction) {
							val = value.call(this, i, self.val());
						} else {
							val = value;
						}

						// Treat null/undefined as ""; convert numbers to string
						if (val == null) {
							val = "";
						} else if (typeof val === "number") {
							val += "";
						} else if (JQXLite.isArray(val)) {
							val = JQXLite.map(val, function (value) {
								return value == null ? "" : value + "";
							});
						}

						hooks = JQXLite.valHooks[this.type] || JQXLite.valHooks[this.nodeName.toLowerCase()];

						// If set returns undefined, fall back to normal setting
						if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
							this.value = val;
						}
					});
				}
			});

			JQXLite.extend({
				valHooks: {
					option: {
						get: function (elem) {
							// attributes.value is undefined in Blackberry 4.7 but
							// uses .value. See #6932
							var val = elem.attributes.value;
							return !val || val.specified ? elem.value : elem.text;
						}
					},
					select: {
						get: function (elem) {
							var value, option,
								options = elem.options,
								index = elem.selectedIndex,
								one = elem.type === "select-one" || index < 0,
								values = one ? null : [],
								max = one ? index + 1 : options.length,
								i = index < 0 ?
									max :
									one ? index : 0;

							// Loop through all the selected options
							for (; i < max; i++) {
								option = options[i];

								// oldIE doesn't update selected after form reset (#2551)
								if ((option.selected || i === index) &&
									// Don't return options that are disabled or in a disabled optgroup
									(JQXLite.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
									(!option.parentNode.disabled || !JQXLite.nodeName(option.parentNode, "optgroup"))) {

									// Get the specific value for the option
									value = JQXLite(option).val();

									// We don't need an array for one selects
									if (one) {
										return value;
									}

									// Multi-Selects return an array
									values.push(value);
								}
							}

							return values;
						},

						set: function (elem, value) {
							var values = JQXLite.makeArray(value);

							JQXLite(elem).find("option").each(function () {
								this.selected = JQXLite.inArray(JQXLite(this).val(), values) >= 0;
							});

							if (!values.length) {
								elem.selectedIndex = -1;
							}
							return values;
						}
					}
				},

				// Unused in 1.8, left in so attrFn-stabbers won't die; remove in 1.9
				attrFn: {},

				attr: function (elem, name, value, pass) {
					var ret, hooks, notxml,
						nType = elem.nodeType;

					// don't get/set attributes on text, comment and attribute nodes
					if (!elem || nType === 3 || nType === 8 || nType === 2) {
						return;
					}

					if (pass && JQXLite.isFunction(JQXLite.fn[name])) {
						return JQXLite(elem)[name](value);
					}

					// Fallback to prop when attributes are not supported
					if (typeof elem.getAttribute === "undefined") {
						return JQXLite.prop(elem, name, value);
					}

					notxml = nType !== 1 || !JQXLite.isXMLDoc(elem);

					// All attributes are lowercase
					// Grab necessary hook if one is defined
					if (notxml) {
						name = name.toLowerCase();
						hooks = JQXLite.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
					}

					if (value !== undefined) {

						if (value === null) {
							JQXLite.removeAttr(elem, name);
							return;

						} else if (hooks && "set" in hooks && notxml && (ret = hooks.set(elem, value, name)) !== undefined) {
							return ret;

						} else {
							elem.setAttribute(name, value + "");
							return value;
						}

					} else if (hooks && "get" in hooks && notxml && (ret = hooks.get(elem, name)) !== null) {
						return ret;

					} else {

						ret = elem.getAttribute(name);

						// Non-existent attributes return null, we normalize to undefined
						return ret === null ?
							undefined :
							ret;
					}
				},

				removeAttr: function (elem, value) {
					var propName, attrNames, name, isBool,
						i = 0;

					if (value && elem.nodeType === 1) {

						attrNames = value.split(core_rspace);

						for (; i < attrNames.length; i++) {
							name = attrNames[i];

							if (name) {
								propName = JQXLite.propFix[name] || name;
								isBool = rboolean.test(name);

								// See #9699 for explanation of this approach (setting first, then removal)
								// Do not do this for boolean attributes (see #10870)
								if (!isBool) {
									JQXLite.attr(elem, name, "");
								}
								elem.removeAttribute(getSetAttribute ? name : propName);

								// Set corresponding property to false for boolean attributes
								if (isBool && propName in elem) {
									elem[propName] = false;
								}
							}
						}
					}
				},

				attrHooks: {
					type: {
						set: function (elem, value) {
							// We can't allow the type property to be changed (since it causes problems in IE)
							if (rtype.test(elem.nodeName) && elem.parentNode) {
								JQXLite.error("type property can't be changed");
							} else if (!JQXLite.support.radioValue && value === "radio" && JQXLite.nodeName(elem, "input")) {
								// Setting the type on a radio button after the value resets the value in IE6-9
								// Reset value to it's default in case type is set after value
								// This is for element creation
								var val = elem.value;
								elem.setAttribute("type", value);
								if (val) {
									elem.value = val;
								}
								return value;
							}
						}
					},
					// Use the value property for back compat
					// Use the nodeHook for button elements in IE6/7 (#1954)
					value: {
						get: function (elem, name) {
							if (nodeHook && JQXLite.nodeName(elem, "button")) {
								return nodeHook.get(elem, name);
							}
							return name in elem ?
								elem.value :
								null;
						},
						set: function (elem, value, name) {
							if (nodeHook && JQXLite.nodeName(elem, "button")) {
								return nodeHook.set(elem, value, name);
							}
							// Does not return so that setAttribute is also used
							elem.value = value;
						}
					}
				},

				propFix: {
					tabindex: "tabIndex",
					readonly: "readOnly",
					"for": "htmlFor",
					"class": "className",
					maxlength: "maxLength",
					cellspacing: "cellSpacing",
					cellpadding: "cellPadding",
					rowspan: "rowSpan",
					colspan: "colSpan",
					usemap: "useMap",
					frameborder: "frameBorder",
					contenteditable: "contentEditable"
				},

				prop: function (elem, name, value) {
					var ret, hooks, notxml,
						nType = elem.nodeType;

					// don't get/set properties on text, comment and attribute nodes
					if (!elem || nType === 3 || nType === 8 || nType === 2) {
						return;
					}

					notxml = nType !== 1 || !JQXLite.isXMLDoc(elem);

					if (notxml) {
						// Fix name and attach hooks
						name = JQXLite.propFix[name] || name;
						hooks = JQXLite.propHooks[name];
					}

					if (value !== undefined) {
						if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
							return ret;

						} else {
							return (elem[name] = value);
						}

					} else {
						if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
							return ret;

						} else {
							return elem[name];
						}
					}
				},

				propHooks: {
					tabIndex: {
						get: function (elem) {
							// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
							// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
							var attributeNode = elem.getAttributeNode("tabindex");

							return attributeNode && attributeNode.specified ?
								parseInt(attributeNode.value, 10) :
								rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ?
									0 :
									undefined;
						}
					}
				}
			});

			// Hook for boolean attributes
			boolHook = {
				get: function (elem, name) {
					// Align boolean attributes with corresponding properties
					// Fall back to attribute presence where some booleans are not supported
					var attrNode,
						property = JQXLite.prop(elem, name);
					return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ?
						name.toLowerCase() :
						undefined;
				},
				set: function (elem, value, name) {
					var propName;
					if (value === false) {
						// Remove boolean attributes when set to false
						JQXLite.removeAttr(elem, name);
					} else {
						// value is true since we know at this point it's type boolean and not false
						// Set boolean attributes to the same name and set the DOM property
						propName = JQXLite.propFix[name] || name;
						if (propName in elem) {
							// Only set the IDL specifically if it already exists on the element
							elem[propName] = true;
						}

						elem.setAttribute(name, name.toLowerCase());
					}
					return name;
				}
			};

			// IE6/7 call enctype encoding
			if (!JQXLite.support.enctype) {
				JQXLite.propFix.enctype = "encoding";
			}

			var rformElems = /^(?:textarea|input|select)$/i,
				rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,
				rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
				rkeyEvent = /^key/,
				rmouseEvent = /^(?:mouse|contextmenu)|click/,
				rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
				hoverHack = function (events) {
					return JQXLite.event.special.hover ? events : events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
				};

			/*
			 * Helper functions for managing events -- not part of the public interface.
			 * Props to Dean Edwards' addEvent library for many of the ideas.
			 */
			JQXLite.event = {

				add: function (elem, types, handler, data, selector) {

					var elemData, eventHandle, events,
						t, tns, type, namespaces, handleObj,
						handleObjIn, handlers, special;

					// Don't attach events to noData or text/comment nodes (allow plain objects tho)
					if (elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = JQXLite._data(elem))) {
						return;
					}

					// Caller can pass in an object of custom data in lieu of the handler
					if (handler.handler) {
						handleObjIn = handler;
						handler = handleObjIn.handler;
						selector = handleObjIn.selector;
					}

					// Make sure that the handler has a unique ID, used to find/remove it later
					if (!handler.guid) {
						handler.guid = JQXLite.guid++;
					}

					// Init the element's event structure and main handler, if this is the first
					events = elemData.events;
					if (!events) {
						elemData.events = events = {};
					}
					eventHandle = elemData.handle;
					if (!eventHandle) {
						elemData.handle = eventHandle = function (e) {
							// Discard the second event of a JQXLite.event.trigger() and
							// when an event is called after a page has unloaded
							return typeof JQXLite !== "undefined" && (!e || JQXLite.event.triggered !== e.type) ?
								JQXLite.event.dispatch.apply(eventHandle.elem, arguments) :
								undefined;
						};
						// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
						eventHandle.elem = elem;
					}

					// Handle multiple events separated by a space
					// JQXLite(...).bind("mouseover mouseout", fn);
					types = JQXLite.trim(hoverHack(types)).split(" ");
					for (t = 0; t < types.length; t++) {

						tns = rtypenamespace.exec(types[t]) || [];
						type = tns[1];
						namespaces = (tns[2] || "").split(".").sort();

						// If event changes its type, use the special event handlers for the changed type
						special = JQXLite.event.special[type] || {};

						// If selector defined, determine special event api type, otherwise given type
						type = (selector ? special.delegateType : special.bindType) || type;

						// Update special based on newly reset type
						special = JQXLite.event.special[type] || {};

						// handleObj is passed to all event handlers
						handleObj = JQXLite.extend({
							type: type,
							origType: tns[1],
							data: data,
							handler: handler,
							guid: handler.guid,
							selector: selector,
							needsContext: selector && JQXLite.expr.match.needsContext.test(selector),
							namespace: namespaces.join(".")
						}, handleObjIn);

						// Init the event handler queue if we're the first
						handlers = events[type];
						if (!handlers) {
							handlers = events[type] = [];
							handlers.delegateCount = 0;

							// Only use addEventListener/attachEvent if the special events handler returns false
							if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
								// Bind the global event handler to the element
								if (elem.addEventListener) {
									if (data && data.passive !== undefined) {
										elem.addEventListener(type, eventHandle, data);
									}
									else {
										elem.addEventListener(type, eventHandle, false);
									}
								} else if (elem.attachEvent) {
									elem.attachEvent("on" + type, eventHandle);
								}
							}
						}

						if (special.add) {
							special.add.call(elem, handleObj);

							if (!handleObj.handler.guid) {
								handleObj.handler.guid = handler.guid;
							}
						}

						// Add to the element's handler list, delegates in front
						if (selector) {
							handlers.splice(handlers.delegateCount++, 0, handleObj);
						} else {
							handlers.push(handleObj);
						}

						// Keep track of which events have ever been used, for event optimization
						JQXLite.event.global[type] = true;
					}

					// Nullify elem to prevent memory leaks in IE
					elem = null;
				},

				global: {},

				// Detach an event or set of events from an element
				remove: function (elem, types, handler, selector, mappedTypes) {

					var t, tns, type, origType, namespaces, origCount,
						j, events, special, eventType, handleObj,
						elemData = JQXLite.hasData(elem) && JQXLite._data(elem);

					if (!elemData || !(events = elemData.events)) {
						return;
					}

					// Once for each type.namespace in types; type may be omitted
					types = JQXLite.trim(hoverHack(types || "")).split(" ");
					for (t = 0; t < types.length; t++) {
						tns = rtypenamespace.exec(types[t]) || [];
						type = origType = tns[1];
						namespaces = tns[2];

						// Unbind all events (on this namespace, if provided) for the element
						if (!type) {
							for (type in events) {
								JQXLite.event.remove(elem, type + types[t], handler, selector, true);
							}
							continue;
						}

						special = JQXLite.event.special[type] || {};
						type = (selector ? special.delegateType : special.bindType) || type;
						eventType = events[type] || [];
						origCount = eventType.length;
						namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

						// Remove matching events
						for (j = 0; j < eventType.length; j++) {
							handleObj = eventType[j];

							if ((mappedTypes || origType === handleObj.origType) &&
								(!handler || handler.guid === handleObj.guid) &&
								(!namespaces || namespaces.test(handleObj.namespace)) &&
								(!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
								eventType.splice(j--, 1);

								if (handleObj.selector) {
									eventType.delegateCount--;
								}
								if (special.remove) {
									special.remove.call(elem, handleObj);
								}
							}
						}

						// Remove generic event handler if we removed something and no more handlers exist
						// (avoids potential for endless recursion during removal of special event handlers)
						if (eventType.length === 0 && origCount !== eventType.length) {
							if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
								JQXLite.removeEvent(elem, type, elemData.handle);
							}

							delete events[type];
						}
					}

					// Remove the expando if it's no longer used
					if (JQXLite.isEmptyObject(events)) {
						delete elemData.handle;

						// removeData also checks for emptiness and clears the expando if empty
						// so use it instead of delete
						JQXLite.removeData(elem, "events", true);
					}
				},

				// Events that are safe to short-circuit if no handlers are attached.
				// Native DOM events should not be added, they may have inline handlers.
				customEvent: {
					"getData": true,
					"setData": true,
					"changeData": true
				},

				trigger: function (event, data, elem, onlyHandlers) {
					// Don't do events on text and comment nodes
					if (elem && (elem.nodeType === 3 || elem.nodeType === 8)) {
						return;
					}

					// Event object or event type
					var cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType,
						type = event.type || event,
						namespaces = [];

					// focus/blur morphs to focusin/out; ensure we're not firing them right now
					if (rfocusMorph.test(type + JQXLite.event.triggered)) {
						return;
					}

					if (type.indexOf("!") >= 0) {
						// Exclusive events trigger only for the exact event (no namespaces)
						type = type.slice(0, -1);
						exclusive = true;
					}

					if (type.indexOf(".") >= 0) {
						// Namespaced trigger; create a regexp to match event type in handle()
						namespaces = type.split(".");
						type = namespaces.shift();
						namespaces.sort();
					}

					if ((!elem || JQXLite.event.customEvent[type]) && !JQXLite.event.global[type]) {
						// No JQXLite handlers for this event type, and it can't have inline handlers
						return;
					}

					// Caller can pass in an Event, Object, or just an event type string
					event = typeof event === "object" ?
						// JQXLite.Event object
						event[JQXLite.expando] ? event :
							// Object literal
							new JQXLite.Event(type, event) :
						// Just the event type (string)
						new JQXLite.Event(type);

					event.type = type;
					event.isTrigger = true;
					event.exclusive = exclusive;
					event.namespace = namespaces.join(".");
					event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
					ontype = type.indexOf(":") < 0 ? "on" + type : "";

					// Handle a global trigger
					if (!elem) {

						// TODO: Stop taunting the data cache; remove global events and always attach to document
						cache = JQXLite.cache;
						for (i in cache) {
							if (cache[i].events && cache[i].events[type]) {
								JQXLite.event.trigger(event, data, cache[i].handle.elem, true);
							}
						}
						return;
					}

					// Clean up the event in case it is being reused
					event.result = undefined;
					if (!event.target) {
						event.target = elem;
					}

					// Clone any incoming data and prepend the event, creating the handler arg list
					data = data != null ? JQXLite.makeArray(data) : [];
					data.unshift(event);

					// Allow special events to draw outside the lines
					special = JQXLite.event.special[type] || {};
					if (special.trigger && special.trigger.apply(elem, data) === false) {
						return;
					}

					// Determine event propagation path in advance, per W3C events spec (#9951)
					// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
					eventPath = [[elem, special.bindType || type]];
					if (!onlyHandlers && !special.noBubble && !JQXLite.isWindow(elem)) {

						bubbleType = special.delegateType || type;
						cur = rfocusMorph.test(bubbleType + type) ? elem : elem.parentNode;
						for (old = elem; cur; cur = cur.parentNode) {
							eventPath.push([cur, bubbleType]);
							old = cur;
						}

						// Only add window if we got to document (e.g., not plain obj or detached DOM)
						if (old === (elem.ownerDocument || document)) {
							eventPath.push([old.defaultView || old.parentWindow || window, bubbleType]);
						}
					}

					// Fire handlers on the event path
					for (i = 0; i < eventPath.length && !event.isPropagationStopped(); i++) {

						cur = eventPath[i][0];
						event.type = eventPath[i][1];

						handle = (JQXLite._data(cur, "events") || {})[event.type] && JQXLite._data(cur, "handle");
						if (handle) {
							handle.apply(cur, data);
						}
						// Note that this is a bare JS function and not a JQXLite handler
						handle = ontype && cur[ontype];
						if (handle && JQXLite.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
							event.preventDefault();
						}
					}
					event.type = type;

					// If nobody prevented the default action, do it now
					if (!onlyHandlers && !event.isDefaultPrevented()) {

						if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) &&
							!(type === "click" && JQXLite.nodeName(elem, "a")) && JQXLite.acceptData(elem)) {

							// Call a native DOM method on the target with the same name name as the event.
							// Can't use an .isFunction() check here because IE6/7 fails that test.
							// Don't do default actions on window, that's where global variables be (#6170)
							// IE<9 dies on focus/blur to hidden element (#1486)
							if (ontype && elem[type] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !JQXLite.isWindow(elem)) {

								// Don't re-trigger an onFOO event when we call its FOO() method
								old = elem[ontype];

								if (old) {
									elem[ontype] = null;
								}

								// Prevent re-triggering of the same event, since we already bubbled it above
								JQXLite.event.triggered = type;
								elem[type]();
								JQXLite.event.triggered = undefined;

								if (old) {
									elem[ontype] = old;
								}
							}
						}
					}

					return event.result;
				},

				dispatch: function (event) {

					// Make a writable JQXLite.Event from the native event object
					event = JQXLite.event.fix(event || window.event);

					var i, j, cur, ret, selMatch, matched, matches, handleObj, sel, related,
						handlers = ((JQXLite._data(this, "events") || {})[event.type] || []),
						delegateCount = handlers.delegateCount,
						args = core_slice.call(arguments),
						run_all = !event.exclusive && !event.namespace,
						special = JQXLite.event.special[event.type] || {},
						handlerQueue = [];

					// Use the fix-ed JQXLite.Event rather than the (read-only) native event
					args[0] = event;
					event.delegateTarget = this;

					// Call the preDispatch hook for the mapped type, and let it bail if desired
					if (special.preDispatch && special.preDispatch.call(this, event) === false) {
						return;
					}

					// Determine handlers that should run if there are delegated events
					// Avoid non-left-click bubbling in Firefox (#3861)
					if (delegateCount && !(event.button && event.type === "click")) {

						for (cur = event.target; cur != this; cur = cur.parentNode || this) {

							// Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)
							if (cur.disabled !== true || event.type !== "click") {
								selMatch = {};
								matches = [];
								for (i = 0; i < delegateCount; i++) {
									handleObj = handlers[i];
									sel = handleObj.selector;

									if (selMatch[sel] === undefined) {
										selMatch[sel] = handleObj.needsContext ?
											JQXLite(sel, this).index(cur) >= 0 :
											JQXLite.find(sel, this, null, [cur]).length;
									}
									if (selMatch[sel]) {
										matches.push(handleObj);
									}
								}
								if (matches.length) {
									handlerQueue.push({ elem: cur, matches: matches });
								}
							}
						}
					}

					// Add the remaining (directly-bound) handlers
					if (handlers.length > delegateCount) {
						handlerQueue.push({ elem: this, matches: handlers.slice(delegateCount) });
					}

					// Run delegates first; they may want to stop propagation beneath us
					for (i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++) {
						matched = handlerQueue[i];
						event.currentTarget = matched.elem;

						for (j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++) {
							handleObj = matched.matches[j];

							// Triggered event must either 1) be non-exclusive and have no namespace, or
							// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
							if (run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test(handleObj.namespace)) {

								event.data = handleObj.data;
								event.handleObj = handleObj;

								ret = ((JQXLite.event.special[handleObj.origType] || {}).handle || handleObj.handler)
									.apply(matched.elem, args);

								if (ret !== undefined) {
									event.result = ret;
									if (ret === false) {
										event.preventDefault();
										event.stopPropagation();
									}
								}
							}
						}
					}

					// Call the postDispatch hook for the mapped type
					if (special.postDispatch) {
						special.postDispatch.call(this, event);
					}

					return event.result;
				},

				// Includes some event props shared by KeyEvent and MouseEvent
				// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
				props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

				fixHooks: {},

				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function (event, original) {

						// Add which for key events
						if (event.which == null) {
							event.which = original.charCode != null ? original.charCode : original.keyCode;
						}

						return event;
					}
				},

				mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function (event, original) {
						var eventDoc, doc, body,
							button = original.button,
							fromElement = original.fromElement;

						// Calculate pageX/Y if missing and clientX/Y available
						if (event.pageX == null && original.clientX != null) {
							eventDoc = event.target.ownerDocument || document;
							doc = eventDoc.documentElement;
							body = eventDoc.body;

							event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
							event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
						}

						// Add relatedTarget, if necessary
						if (!event.relatedTarget && fromElement) {
							event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
						}

						// Add which for click: 1 === left; 2 === middle; 3 === right
						// Note: button is not normalized, so don't use it
						if (!event.which && button !== undefined) {
							event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
						}

						return event;
					}
				},

				fix: function (event) {
					if (event[JQXLite.expando]) {
						return event;
					}

					// Create a writable copy of the event object and normalize some properties
					var i, prop,
						originalEvent = event,
						fixHook = JQXLite.event.fixHooks[event.type] || {},
						copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

					event = JQXLite.Event(originalEvent);

					for (i = copy.length; i;) {
						prop = copy[--i];
						event[prop] = originalEvent[prop];
					}

					// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
					if (!event.target) {
						event.target = originalEvent.srcElement || document;
					}

					// Target should not be a text node (#504, Safari)
					if (event.target.nodeType === 3) {
						event.target = event.target.parentNode;
					}

					// For mouse/key events, metaKey==false if it's undefined (#3368, #11328; IE6/7/8)
					event.metaKey = !!event.metaKey;

					return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
				},

				special: {
					load: {
						// Prevent triggered image.load events from bubbling to window.load
						noBubble: true
					},

					focus: {
						delegateType: "focusin"
					},
					blur: {
						delegateType: "focusout"
					},

					beforeunload: {
						setup: function (data, namespaces, eventHandle) {
							// We only want to do this special case on windows
							if (JQXLite.isWindow(this)) {
								this.onbeforeunload = eventHandle;
							}
						},

						teardown: function (namespaces, eventHandle) {
							if (this.onbeforeunload === eventHandle) {
								this.onbeforeunload = null;
							}
						}
					}
				},

				simulate: function (type, elem, event, bubble) {
					// Piggyback on a donor event to simulate a different one.
					// Fake originalEvent to avoid donor's stopPropagation, but if the
					// simulated event prevents default then we do the same on the donor.
					var e = JQXLite.extend(
						new JQXLite.Event(),
						event,
						{
							type: type,
							isSimulated: true,
							originalEvent: {}
						}
					);
					if (bubble) {
						JQXLite.event.trigger(e, null, elem);
					} else {
						JQXLite.event.dispatch.call(elem, e);
					}
					if (e.isDefaultPrevented()) {
						event.preventDefault();
					}
				}
			};

			// Some plugins are using, but it's undocumented/deprecated and will be removed.
			// The 1.7 special event interface should provide all the hooks needed now.
			JQXLite.event.handle = JQXLite.event.dispatch;

			JQXLite.removeEvent = document.removeEventListener ?
				function (elem, type, handle) {
					if (elem.removeEventListener) {
						elem.removeEventListener(type, handle, false);
					}
				} :
				function (elem, type, handle) {
					var name = "on" + type;

					if (elem.detachEvent) {

						// #8545, #7054, preventing memory leaks for custom events in IE6-8
						// detachEvent needed property on element, by name of that event, to properly expose it to GC
						if (typeof elem[name] === "undefined") {
							elem[name] = null;
						}

						elem.detachEvent(name, handle);
					}
				};

			JQXLite.Event = function (src, props) {
				// Allow instantiation without the 'new' keyword
				if (!(this instanceof JQXLite.Event)) {
					return new JQXLite.Event(src, props);
				}

				// Event object
				if (src && src.type) {
					this.originalEvent = src;
					this.type = src.type;

					// Events bubbling up the document may have been marked as prevented
					// by a handler lower down the tree; reflect the correct value.
					this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
						src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;

					// Event type
				} else {
					this.type = src;
				}

				// Put explicitly provided properties onto the event object
				if (props) {
					JQXLite.extend(this, props);
				}

				// Create a timestamp if incoming event doesn't have one
				this.timeStamp = src && src.timeStamp || JQXLite.now();

				// Mark it as fixed
				this[JQXLite.expando] = true;
			};

			function returnFalse() {
				return false;
			}
			function returnTrue() {
				return true;
			}

			// JQXLite.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
			// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
			JQXLite.Event.prototype = {
				preventDefault: function () {
					this.isDefaultPrevented = returnTrue;

					var e = this.originalEvent;
					if (!e) {
						return;
					}

					// if preventDefault exists run it on the original event
					if (e.preventDefault) {
						e.preventDefault();

						// otherwise set the returnValue property of the original event to false (IE)
					} else {
						e.returnValue = false;
					}
				},
				stopPropagation: function () {
					this.isPropagationStopped = returnTrue;

					var e = this.originalEvent;
					if (!e) {
						return;
					}
					// if stopPropagation exists run it on the original event
					if (e.stopPropagation) {
						e.stopPropagation();
					}
					// otherwise set the cancelBubble property of the original event to true (IE)
					e.cancelBubble = true;
				},
				stopImmediatePropagation: function () {
					this.isImmediatePropagationStopped = returnTrue;
					this.stopPropagation();
				},
				isDefaultPrevented: returnFalse,
				isPropagationStopped: returnFalse,
				isImmediatePropagationStopped: returnFalse
			};

			// Create mouseenter/leave events using mouseover/out and event-time checks
			JQXLite.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			}, function (orig, fix) {
				JQXLite.event.special[orig] = {
					delegateType: fix,
					bindType: fix,

					handle: function (event) {
						var ret,
							target = this,
							related = event.relatedTarget,
							handleObj = event.handleObj,
							selector = handleObj.selector;

						// For mousenter/leave call the handler if related is outside the target.
						// NB: No relatedTarget if the mouse left/entered the browser window
						if (!related || (related !== target && !JQXLite.contains(target, related))) {
							event.type = handleObj.origType;
							ret = handleObj.handler.apply(this, arguments);
							event.type = fix;
						}
						return ret;
					}
				};
			});

			JQXLite.fn.extend({

				on: function (types, selector, data, fn, /*INTERNAL*/ one) {
					var origFn, type;

					// Types can be a map of types/handlers
					if (typeof types === "object") {
						// ( types-Object, selector, data )
						if (typeof selector !== "string") { // && selector != null
							// ( types-Object, data )
							data = data || selector;
							selector = undefined;
						}
						for (type in types) {
							this.on(type, selector, data, types[type], one);
						}
						return this;
					}

					if (data == null && fn == null) {
						// ( types, fn )
						fn = selector;
						data = selector = undefined;
					} else if (fn == null) {
						if (typeof selector === "string") {
							// ( types, selector, fn )
							fn = data;
							data = undefined;
						} else {
							// ( types, data, fn )
							fn = data;
							data = selector;
							selector = undefined;
						}
					}
					if (fn === false) {
						fn = returnFalse;
					} else if (!fn) {
						return this;
					}

					if (one === 1) {
						origFn = fn;
						fn = function (event) {
							// Can use an empty set, since event contains the info
							JQXLite().off(event);
							return origFn.apply(this, arguments);
						};
						// Use same guid so caller can remove using origFn
						fn.guid = origFn.guid || (origFn.guid = JQXLite.guid++);
					}
					return this.each(function () {
						JQXLite.event.add(this, types, fn, data, selector);
					});
				},

				off: function (types, selector, fn) {
					var handleObj, type;
					if (types && types.preventDefault && types.handleObj) {
						// ( event )  dispatched JQXLite.Event
						handleObj = types.handleObj;
						JQXLite(types.delegateTarget).off(
							handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
							handleObj.selector,
							handleObj.handler
						);
						return this;
					}
					if (typeof types === "object") {
						// ( types-object [, selector] )
						for (type in types) {
							this.off(type, selector, types[type]);
						}
						return this;
					}
					if (selector === false || typeof selector === "function") {
						// ( types [, fn] )
						fn = selector;
						selector = undefined;
					}
					if (fn === false) {
						fn = returnFalse;
					}
					return this.each(function () {
						JQXLite.event.remove(this, types, fn, selector);
					});
				},

				delegate: function (selector, types, data, fn) {
					return this.on(types, selector, data, fn);
				},
				undelegate: function (selector, types, fn) {
					// ( namespace ) or ( selector, types [, fn] )
					return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
				},

				trigger: function (type, data) {
					return this.each(function () {
						JQXLite.event.trigger(type, data, this);
					});
				},
				triggerHandler: function (type, data) {
					if (this[0]) {
						return JQXLite.event.trigger(type, data, this[0], true);
					}
				},

				toggle: function (fn) {
					// Save reference to arguments for access in closure
					var args = arguments,
						guid = fn.guid || JQXLite.guid++,
						i = 0,
						toggler = function (event) {
							// Figure out which function to execute
							var lastToggle = (JQXLite._data(this, "lastToggle" + fn.guid) || 0) % i;
							JQXLite._data(this, "lastToggle" + fn.guid, lastToggle + 1);

							// Make sure that clicks stop
							event.preventDefault();

							// and execute the function
							return args[lastToggle].apply(this, arguments) || false;
						};

					// link all the functions, so any of them can unbind this click handler
					toggler.guid = guid;
					while (i < args.length) {
						args[i++].guid = guid;
					}

					return this.click(toggler);
				},

				hover: function (fnOver, fnOut) {
					return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
				}
			});

			JQXLite.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
				"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
				"change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

					// Handle event binding
					JQXLite.fn[name] = function (data, fn) {
						if (fn == null) {
							fn = data;
							data = null;
						}

						return arguments.length > 0 ?
							this.on(name, null, data, fn) :
							this.trigger(name);
					};

					if (rkeyEvent.test(name)) {
						JQXLite.event.fixHooks[name] = JQXLite.event.keyHooks;
					}

					if (rmouseEvent.test(name)) {
						JQXLite.event.fixHooks[name] = JQXLite.event.mouseHooks;
					}
				});
			/*!
			 * Sizzle CSS Selector Engine
			 * Copyright 2012 JQXLite Foundation and other contributors
			 * Released under the MIT license
			 * http://sizzlejs.com/
			 */
			(function (window, undefined) {

				var cachedruns,
					assertGetIdNotName,
					Expr,
					getText,
					isXML,
					contains,
					compile,
					sortOrder,
					hasDuplicate,
					outermostContext,

					baseHasDuplicate = true,
					strundefined = "undefined",

					expando = ("sizcache" + Math.random()).replace(".", ""),

					Token = String,
					document = window.document,
					docElem = document.documentElement,
					dirruns = 0,
					done = 0,
					pop = [].pop,
					push = [].push,
					slice = [].slice,
					// Use a stripped-down indexOf if a native one is unavailable
					indexOf = [].indexOf || function (elem) {
						var i = 0,
							len = this.length;
						for (; i < len; i++) {
							if (this[i] === elem) {
								return i;
							}
						}
						return -1;
					},

					// Augment a function for special use by Sizzle
					markFunction = function (fn, value) {
						fn[expando] = value == null || value;
						return fn;
					},

					createCache = function () {
						var cache = {},
							keys = [];

						return markFunction(function (key, value) {
							// Only keep the most recent entries
							if (keys.push(key) > Expr.cacheLength) {
								delete cache[keys.shift()];
							}

							// Retrieve with (key + " ") to avoid collision with native Object.prototype properties (see Issue #157)
							return (cache[key + " "] = value);
						}, cache);
					},

					classCache = createCache(),
					tokenCache = createCache(),
					compilerCache = createCache(),

					// Regex

					// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
					whitespace = "[\\x20\\t\\r\\n\\f]",
					// http://www.w3.org/TR/css3-syntax/#characters
					characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",

					// Loosely modeled on CSS identifier characters
					// An unquoted value should be a CSS identifier (http://www.w3.org/TR/css3-selectors/#attribute-selectors)
					// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
					identifier = characterEncoding.replace("w", "w#"),

					// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
					operators = "([*^$|!~]?=)",
					attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
						"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

					// Prefer arguments not in parens/brackets,
					//   then attribute selectors and non-pseudos (denoted by :),
					//   then anything else
					// These preferences are here to reduce the number of selectors
					//   needing tokenize in the PSEUDO preFilter
					pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)",

					// For matchExpr.POS and matchExpr.needsContext
					pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
						"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)",

					// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
					rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

					rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
					rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"),
					rpseudo = new RegExp(pseudos),

					// Easily-parseable/retrievable ID or TAG or CLASS selectors
					rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,

					rnot = /^:not/,
					rsibling = /[\x20\t\r\n\f]*[+~]/,
					rendsWithNot = /:not\($/,

					rheader = /h\d/i,
					rinputs = /input|select|textarea|button/i,

					rbackslash = /\\(?!\\)/g,

					matchExpr = {
						"ID": new RegExp("^#(" + characterEncoding + ")"),
						"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
						"NAME": new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),
						"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
						"ATTR": new RegExp("^" + attributes),
						"PSEUDO": new RegExp("^" + pseudos),
						"POS": new RegExp(pos, "i"),
						"CHILD": new RegExp("^:(only|nth|first|last)-child(?:\\(" + whitespace +
							"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
							"*(\\d+)|))" + whitespace + "*\\)|)", "i"),
						// For use in libraries implementing .is()
						"needsContext": new RegExp("^" + whitespace + "*[>+~]|" + pos, "i")
					},

					// Support

					// Used for testing something on an element
					assert = function (fn) {
						var div = document.createElement("div");

						try {
							return fn(div);
						} catch (e) {
							return false;
						} finally {
							// release memory in IE
							div = null;
						}
					},

					// Check if getElementsByTagName("*") returns only elements
					assertTagNameNoComments = assert(function (div) {
						div.appendChild(document.createComment(""));
						return !div.getElementsByTagName("*").length;
					}),

					// Check if getAttribute returns normalized href attributes
					assertHrefNotNormalized = assert(function (div) {
						div.innerHTML = "<a href='#'></a>";
						return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
							div.firstChild.getAttribute("href") === "#";
					}),

					// Check if attributes should be retrieved by attribute nodes
					assertAttributes = assert(function (div) {
						div.innerHTML = "<select></select>";
						var type = typeof div.lastChild.getAttribute("multiple");
						// IE8 returns a string for some attributes even when not present
						return type !== "boolean" && type !== "string";
					}),

					// Check if getElementsByClassName can be trusted
					assertUsableClassName = assert(function (div) {
						// Opera can't find a second classname (in 9.6)
						div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
						if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
							return false;
						}

						// Safari 3.2 caches class attributes and doesn't catch changes
						div.lastChild.className = "e";
						return div.getElementsByClassName("e").length === 2;
					}),

					// Check if getElementById returns elements by name
					// Check if getElementsByName privileges form controls or returns elements by ID
					assertUsableName = assert(function (div) {
						// Inject content
						div.id = expando + 0;
						div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
						docElem.insertBefore(div, docElem.firstChild);

						// Test
						var pass = document.getElementsByName &&
							// buggy browsers will return fewer than the correct 2
							document.getElementsByName(expando).length === 2 +
							// buggy browsers will return more than the correct 0
							document.getElementsByName(expando + 0).length;
						assertGetIdNotName = !document.getElementById(expando);

						// Cleanup
						docElem.removeChild(div);

						return pass;
					});

				// If slice is not available, provide a backup
				try {
					slice.call(docElem.childNodes, 0)[0].nodeType;
				} catch (e) {
					slice = function (i) {
						var elem,
							results = [];
						for (; (elem = this[i]); i++) {
							results.push(elem);
						}
						return results;
					};
				}

				function Sizzle(selector, context, results, seed) {
					results = results || [];
					context = context || document;
					var match, elem, xml, m,
						nodeType = context.nodeType;

					if (!selector || typeof selector !== "string") {
						return results;
					}

					if (nodeType !== 1 && nodeType !== 9) {
						return [];
					}

					xml = isXML(context);

					if (!xml && !seed) {
						if ((match = rquickExpr.exec(selector))) {
							// Speed-up: Sizzle("#ID")
							if ((m = match[1])) {
								if (nodeType === 9) {
									elem = context.getElementById(m);
									// Check parentNode to catch when Blackberry 4.6 returns
									// nodes that are no longer in the document #6963
									if (elem && elem.parentNode) {
										// Handle the case where IE, Opera, and Webkit return items
										// by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}
								} else {
									// Context is not a document
									if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) &&
										contains(context, elem) && elem.id === m) {
										results.push(elem);
										return results;
									}
								}

								// Speed-up: Sizzle("TAG")
							} else if (match[2]) {
								push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
								return results;

								// Speed-up: Sizzle(".CLASS")
							} else if ((m = match[3]) && assertUsableClassName && context.getElementsByClassName) {
								push.apply(results, slice.call(context.getElementsByClassName(m), 0));
								return results;
							}
						}
					}

					// All others
					return select(selector.replace(rtrim, "$1"), context, results, seed, xml);
				}

				Sizzle.matches = function (expr, elements) {
					return Sizzle(expr, null, null, elements);
				};

				Sizzle.matchesSelector = function (elem, expr) {
					return Sizzle(expr, null, null, [elem]).length > 0;
				};

				// Returns a function to use in pseudos for input types
				function createInputPseudo(type) {
					return function (elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === type;
					};
				}

				// Returns a function to use in pseudos for buttons
				function createButtonPseudo(type) {
					return function (elem) {
						var name = elem.nodeName.toLowerCase();
						return (name === "input" || name === "button") && elem.type === type;
					};
				}

				// Returns a function to use in pseudos for positionals
				function createPositionalPseudo(fn) {
					return markFunction(function (argument) {
						argument = +argument;
						return markFunction(function (seed, matches) {
							var j,
								matchIndexes = fn([], seed.length, argument),
								i = matchIndexes.length;

							// Match elements found at the specified indexes
							while (i--) {
								if (seed[(j = matchIndexes[i])]) {
									seed[j] = !(matches[j] = seed[j]);
								}
							}
						});
					});
				}

				/**
				 * Utility function for retrieving the text value of an array of DOM nodes
				 * @param {Array|Element} elem
				 */
				getText = Sizzle.getText = function (elem) {
					var node,
						ret = "",
						i = 0,
						nodeType = elem.nodeType;

					if (nodeType) {
						if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
							// Use textContent for elements
							// innerText usage removed for consistency of new lines (see #11153)
							if (typeof elem.textContent === "string") {
								return elem.textContent;
							} else {
								// Traverse its children
								for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
									ret += getText(elem);
								}
							}
						} else if (nodeType === 3 || nodeType === 4) {
							return elem.nodeValue;
						}
						// Do not include comment or processing instruction nodes
					} else {

						// If no nodeType, this is expected to be an array
						for (; (node = elem[i]); i++) {
							// Do not traverse comment nodes
							ret += getText(node);
						}
					}
					return ret;
				};

				isXML = Sizzle.isXML = function (elem) {
					// documentElement is verified for cases where it doesn't yet exist
					// (such as loading iframes in IE - #4833)
					var documentElement = elem && (elem.ownerDocument || elem).documentElement;
					return documentElement ? documentElement.nodeName !== "HTML" : false;
				};

				// Element contains another
				contains = Sizzle.contains = docElem.contains ?
					function (a, b) {
						var adown = a.nodeType === 9 ? a.documentElement : a,
							bup = b && b.parentNode;
						return a === bup || !!(bup && bup.nodeType === 1 && adown.contains && adown.contains(bup));
					} :
					docElem.compareDocumentPosition ?
						function (a, b) {
							return b && !!(a.compareDocumentPosition(b) & 16);
						} :
						function (a, b) {
							while ((b = b.parentNode)) {
								if (b === a) {
									return true;
								}
							}
							return false;
						};

				Sizzle.attr = function (elem, name) {
					var val,
						xml = isXML(elem);

					if (!xml) {
						name = name.toLowerCase();
					}
					if ((val = Expr.attrHandle[name])) {
						return val(elem);
					}
					if (xml || assertAttributes) {
						return elem.getAttribute(name);
					}
					val = elem.getAttributeNode(name);
					return val ?
						typeof elem[name] === "boolean" ?
							elem[name] ? name : null :
							val.specified ? val.value : null :
						null;
				};

				Expr = Sizzle.selectors = {

					// Can be adjusted by the user
					cacheLength: 50,

					createPseudo: markFunction,

					match: matchExpr,

					// IE6/7 return a modified href
					attrHandle: assertHrefNotNormalized ?
						{} :
						{
							"href": function (elem) {
								return elem.getAttribute("href", 2);
							},
							"type": function (elem) {
								return elem.getAttribute("type");
							}
						},

					find: {
						"ID": assertGetIdNotName ?
							function (id, context, xml) {
								if (typeof context.getElementById !== strundefined && !xml) {
									var m = context.getElementById(id);
									// Check parentNode to catch when Blackberry 4.6 returns
									// nodes that are no longer in the document #6963
									return m && m.parentNode ? [m] : [];
								}
							} :
							function (id, context, xml) {
								if (typeof context.getElementById !== strundefined && !xml) {
									var m = context.getElementById(id);

									return m ?
										m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
											[m] :
											undefined :
										[];
								}
							},

						"TAG": assertTagNameNoComments ?
							function (tag, context) {
								if (typeof context.getElementsByTagName !== strundefined) {
									return context.getElementsByTagName(tag);
								}
							} :
							function (tag, context) {
								var results = context.getElementsByTagName(tag);

								// Filter out possible comments
								if (tag === "*") {
									var elem,
										tmp = [],
										i = 0;

									for (; (elem = results[i]); i++) {
										if (elem.nodeType === 1) {
											tmp.push(elem);
										}
									}

									return tmp;
								}
								return results;
							},

						"NAME": assertUsableName && function (tag, context) {
							if (typeof context.getElementsByName !== strundefined) {
								return context.getElementsByName(name);
							}
						},

						"CLASS": assertUsableClassName && function (className, context, xml) {
							if (typeof context.getElementsByClassName !== strundefined && !xml) {
								return context.getElementsByClassName(className);
							}
						}
					},

					relative: {
						">": { dir: "parentNode", first: true },
						" ": { dir: "parentNode" },
						"+": { dir: "previousSibling", first: true },
						"~": { dir: "previousSibling" }
					},

					preFilter: {
						"ATTR": function (match) {
							match[1] = match[1].replace(rbackslash, "");

							// Move the given value to match[3] whether quoted or unquoted
							match[3] = (match[4] || match[5] || "").replace(rbackslash, "");

							if (match[2] === "~=") {
								match[3] = " " + match[3] + " ";
							}

							return match.slice(0, 4);
						},

						"CHILD": function (match) {
							/* matches from matchExpr["CHILD"]
								1 type (only|nth|...)
								2 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
								3 xn-component of xn+y argument ([+-]?\d*n|)
								4 sign of xn-component
								5 x of xn-component
								6 sign of y-component
								7 y of y-component
							*/
							match[1] = match[1].toLowerCase();

							if (match[1] === "nth") {
								// nth-child requires argument
								if (!match[2]) {
									Sizzle.error(match[0]);
								}

								// numeric x and y parameters for Expr.filter.CHILD
								// remember that false/true cast respectively to 0/1
								match[3] = +(match[3] ? match[4] + (match[5] || 1) : 2 * (match[2] === "even" || match[2] === "odd"));
								match[4] = +((match[6] + match[7]) || match[2] === "odd");

								// other types prohibit arguments
							} else if (match[2]) {
								Sizzle.error(match[0]);
							}

							return match;
						},

						"PSEUDO": function (match) {
							var unquoted, excess;
							if (matchExpr["CHILD"].test(match[0])) {
								return null;
							}

							if (match[3]) {
								match[2] = match[3];
							} else if ((unquoted = match[4])) {
								// Only check arguments that contain a pseudo
								if (rpseudo.test(unquoted) &&
									// Get excess from tokenize (recursively)
									(excess = tokenize(unquoted, true)) &&
									// advance to the next closing parenthesis
									(excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

									// excess is a negative index
									unquoted = unquoted.slice(0, excess);
									match[0] = match[0].slice(0, excess);
								}
								match[2] = unquoted;
							}

							// Return only captures needed by the pseudo filter method (type and argument)
							return match.slice(0, 3);
						}
					},

					filter: {
						"ID": assertGetIdNotName ?
							function (id) {
								id = id.replace(rbackslash, "");
								return function (elem) {
									return elem.getAttribute("id") === id;
								};
							} :
							function (id) {
								id = id.replace(rbackslash, "");
								return function (elem) {
									var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
									return node && node.value === id;
								};
							},

						"TAG": function (nodeName) {
							if (nodeName === "*") {
								return function () { return true; };
							}
							nodeName = nodeName.replace(rbackslash, "").toLowerCase();

							return function (elem) {
								return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
							};
						},

						"CLASS": function (className) {
							var pattern = classCache[expando][className + " "];

							return pattern ||
								(pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
								classCache(className, function (elem) {
									return pattern.test(elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "");
								});
						},

						"ATTR": function (name, operator, check) {
							return function (elem, context) {
								var result = Sizzle.attr(elem, name);

								if (result == null) {
									return operator === "!=";
								}
								if (!operator) {
									return true;
								}

								result += "";

								return operator === "=" ? result === check :
									operator === "!=" ? result !== check :
										operator === "^=" ? check && result.indexOf(check) === 0 :
											operator === "*=" ? check && result.indexOf(check) > -1 :
												operator === "$=" ? check && result.substr(result.length - check.length) === check :
													operator === "~=" ? (" " + result + " ").indexOf(check) > -1 :
														operator === "|=" ? result === check || result.substr(0, check.length + 1) === check + "-" :
															false;
							};
						},

						"CHILD": function (type, argument, first, last) {

							if (type === "nth") {
								return function (elem) {
									var node, diff,
										parent = elem.parentNode;

									if (first === 1 && last === 0) {
										return true;
									}

									if (parent) {
										diff = 0;
										for (node = parent.firstChild; node; node = node.nextSibling) {
											if (node.nodeType === 1) {
												diff++;
												if (elem === node) {
													break;
												}
											}
										}
									}

									// Incorporate the offset (or cast to NaN), then check against cycle size
									diff -= last;
									return diff === first || (diff % first === 0 && diff / first >= 0);
								};
							}

							return function (elem) {
								var node = elem;

								switch (type) {
									case "only":
									case "first":
										while ((node = node.previousSibling)) {
											if (node.nodeType === 1) {
												return false;
											}
										}

										if (type === "first") {
											return true;
										}

										node = elem;

									/* falls through */
									case "last":
										while ((node = node.nextSibling)) {
											if (node.nodeType === 1) {
												return false;
											}
										}

										return true;
								}
							};
						},

						"PSEUDO": function (pseudo, argument) {
							// pseudo-class names are case-insensitive
							// http://www.w3.org/TR/selectors/#pseudo-classes
							// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
							// Remember that setFilters inherits from pseudos
							var args,
								fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
									Sizzle.error("unsupported pseudo: " + pseudo);

							// The user may use createPseudo to indicate that
							// arguments are needed to create the filter function
							// just as Sizzle does
							if (fn[expando]) {
								return fn(argument);
							}

							// But maintain support for old signatures
							if (fn.length > 1) {
								args = [pseudo, pseudo, "", argument];
								return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
									markFunction(function (seed, matches) {
										var idx,
											matched = fn(seed, argument),
											i = matched.length;
										while (i--) {
											idx = indexOf.call(seed, matched[i]);
											seed[idx] = !(matches[idx] = matched[i]);
										}
									}) :
									function (elem) {
										return fn(elem, 0, args);
									};
							}

							return fn;
						}
					},

					pseudos: {
						"not": markFunction(function (selector) {
							// Trim the selector passed to compile
							// to avoid treating leading and trailing
							// spaces as combinators
							var input = [],
								results = [],
								matcher = compile(selector.replace(rtrim, "$1"));

							return matcher[expando] ?
								markFunction(function (seed, matches, context, xml) {
									var elem,
										unmatched = matcher(seed, null, xml, []),
										i = seed.length;

									// Match elements unmatched by `matcher`
									while (i--) {
										if ((elem = unmatched[i])) {
											seed[i] = !(matches[i] = elem);
										}
									}
								}) :
								function (elem, context, xml) {
									input[0] = elem;
									matcher(input, null, xml, results);
									return !results.pop();
								};
						}),

						"has": markFunction(function (selector) {
							return function (elem) {
								return Sizzle(selector, elem).length > 0;
							};
						}),

						"contains": markFunction(function (text) {
							return function (elem) {
								return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
							};
						}),

						"enabled": function (elem) {
							return elem.disabled === false;
						},

						"disabled": function (elem) {
							return elem.disabled === true;
						},

						"checked": function (elem) {
							// In CSS3, :checked should return both checked and selected elements
							// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
							var nodeName = elem.nodeName.toLowerCase();
							return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
						},

						"selected": function (elem) {
							// Accessing this property makes selected-by-default
							// options in Safari work properly
							if (elem.parentNode) {
								elem.parentNode.selectedIndex;
							}

							return elem.selected === true;
						},

						"parent": function (elem) {
							return !Expr.pseudos["empty"](elem);
						},

						"empty": function (elem) {
							// http://www.w3.org/TR/selectors/#empty-pseudo
							// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
							//   not comment, processing instructions, or others
							// Thanks to Diego Perini for the nodeName shortcut
							//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
							var nodeType;
							elem = elem.firstChild;
							while (elem) {
								if (elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4) {
									return false;
								}
								elem = elem.nextSibling;
							}
							return true;
						},

						"header": function (elem) {
							return rheader.test(elem.nodeName);
						},

						"text": function (elem) {
							var type, attr;
							// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
							// use getAttribute instead to test this case
							return elem.nodeName.toLowerCase() === "input" &&
								(type = elem.type) === "text" &&
								((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type);
						},

						// Input types
						"radio": createInputPseudo("radio"),
						"checkbox": createInputPseudo("checkbox"),
						"file": createInputPseudo("file"),
						"password": createInputPseudo("password"),
						"image": createInputPseudo("image"),

						"submit": createButtonPseudo("submit"),
						"reset": createButtonPseudo("reset"),

						"button": function (elem) {
							var name = elem.nodeName.toLowerCase();
							return name === "input" && elem.type === "button" || name === "button";
						},

						"input": function (elem) {
							return rinputs.test(elem.nodeName);
						},

						"focus": function (elem) {
							var doc = elem.ownerDocument;
							return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
						},

						"active": function (elem) {
							return elem === elem.ownerDocument.activeElement;
						},

						// Positional types
						"first": createPositionalPseudo(function () {
							return [0];
						}),

						"last": createPositionalPseudo(function (matchIndexes, length) {
							return [length - 1];
						}),

						"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
							return [argument < 0 ? argument + length : argument];
						}),

						"even": createPositionalPseudo(function (matchIndexes, length) {
							for (var i = 0; i < length; i += 2) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"odd": createPositionalPseudo(function (matchIndexes, length) {
							for (var i = 1; i < length; i += 2) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
							for (var i = argument < 0 ? argument + length : argument; --i >= 0;) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
							for (var i = argument < 0 ? argument + length : argument; ++i < length;) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						})
					}
				};

				function siblingCheck(a, b, ret) {
					if (a === b) {
						return ret;
					}

					var cur = a.nextSibling;

					while (cur) {
						if (cur === b) {
							return -1;
						}

						cur = cur.nextSibling;
					}

					return 1;
				}

				sortOrder = docElem.compareDocumentPosition ?
					function (a, b) {
						if (a === b) {
							hasDuplicate = true;
							return 0;
						}

						return (!a.compareDocumentPosition || !b.compareDocumentPosition ?
							a.compareDocumentPosition :
							a.compareDocumentPosition(b) & 4
						) ? -1 : 1;
					} :
					function (a, b) {
						// The nodes are identical, we can exit early
						if (a === b) {
							hasDuplicate = true;
							return 0;

							// Fallback to using sourceIndex (in IE) if it's available on both nodes
						} else if (a.sourceIndex && b.sourceIndex) {
							return a.sourceIndex - b.sourceIndex;
						}

						var al, bl,
							ap = [],
							bp = [],
							aup = a.parentNode,
							bup = b.parentNode,
							cur = aup;

						// If the nodes are siblings (or identical) we can do a quick check
						if (aup === bup) {
							return siblingCheck(a, b);

							// If no parents were found then the nodes are disconnected
						} else if (!aup) {
							return -1;

						} else if (!bup) {
							return 1;
						}

						// Otherwise they're somewhere else in the tree so we need
						// to build up a full list of the parentNodes for comparison
						while (cur) {
							ap.unshift(cur);
							cur = cur.parentNode;
						}

						cur = bup;

						while (cur) {
							bp.unshift(cur);
							cur = cur.parentNode;
						}

						al = ap.length;
						bl = bp.length;

						// Start walking down the tree looking for a discrepancy
						for (var i = 0; i < al && i < bl; i++) {
							if (ap[i] !== bp[i]) {
								return siblingCheck(ap[i], bp[i]);
							}
						}

						// We ended someplace up the tree so do a sibling check
						return i === al ?
							siblingCheck(a, bp[i], -1) :
							siblingCheck(ap[i], b, 1);
					};

				// Always assume the presence of duplicates if sort doesn't
				// pass them to our comparison function (as in Google Chrome).
				[0, 0].sort(sortOrder);
				baseHasDuplicate = !hasDuplicate;

				// Document sorting and removing duplicates
				Sizzle.uniqueSort = function (results) {
					var elem,
						duplicates = [],
						i = 1,
						j = 0;

					hasDuplicate = baseHasDuplicate;
					results.sort(sortOrder);

					if (hasDuplicate) {
						for (; (elem = results[i]); i++) {
							if (elem === results[i - 1]) {
								j = duplicates.push(i);
							}
						}
						while (j--) {
							results.splice(duplicates[j], 1);
						}
					}

					return results;
				};

				Sizzle.error = function (msg) {
					throw new Error("Syntax error, unrecognized expression: " + msg);
				};

				function tokenize(selector, parseOnly) {
					var matched, match, tokens, type,
						soFar, groups, preFilters,
						cached = tokenCache[expando][selector + " "];

					if (cached) {
						return parseOnly ? 0 : cached.slice(0);
					}

					soFar = selector;
					groups = [];
					preFilters = Expr.preFilter;

					while (soFar) {

						// Comma and first run
						if (!matched || (match = rcomma.exec(soFar))) {
							if (match) {
								// Don't consume trailing commas as valid
								soFar = soFar.slice(match[0].length) || soFar;
							}
							groups.push(tokens = []);
						}

						matched = false;

						// Combinators
						if ((match = rcombinators.exec(soFar))) {
							tokens.push(matched = new Token(match.shift()));
							soFar = soFar.slice(matched.length);

							// Cast descendant combinators to space
							matched.type = match[0].replace(rtrim, " ");
						}

						// Filters
						for (type in Expr.filter) {
							if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
								(match = preFilters[type](match)))) {

								tokens.push(matched = new Token(match.shift()));
								soFar = soFar.slice(matched.length);
								matched.type = type;
								matched.matches = match;
							}
						}

						if (!matched) {
							break;
						}
					}

					// Return the length of the invalid excess
					// if we're just parsing
					// Otherwise, throw an error or return tokens
					return parseOnly ?
						soFar.length :
						soFar ?
							Sizzle.error(selector) :
							// Cache the tokens
							tokenCache(selector, groups).slice(0);
				}

				function addCombinator(matcher, combinator, base) {
					var dir = combinator.dir,
						checkNonElements = base && combinator.dir === "parentNode",
						doneName = done++;

					return combinator.first ?
						// Check against closest ancestor/preceding element
						function (elem, context, xml) {
							while ((elem = elem[dir])) {
								if (checkNonElements || elem.nodeType === 1) {
									return matcher(elem, context, xml);
								}
							}
						} :

						// Check against all ancestor/preceding elements
						function (elem, context, xml) {
							// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
							if (!xml) {
								var cache,
									dirkey = dirruns + " " + doneName + " ",
									cachedkey = dirkey + cachedruns;
								while ((elem = elem[dir])) {
									if (checkNonElements || elem.nodeType === 1) {
										if ((cache = elem[expando]) === cachedkey) {
											return elem.sizset;
										} else if (typeof cache === "string" && cache.indexOf(dirkey) === 0) {
											if (elem.sizset) {
												return elem;
											}
										} else {
											elem[expando] = cachedkey;
											if (matcher(elem, context, xml)) {
												elem.sizset = true;
												return elem;
											}
											elem.sizset = false;
										}
									}
								}
							} else {
								while ((elem = elem[dir])) {
									if (checkNonElements || elem.nodeType === 1) {
										if (matcher(elem, context, xml)) {
											return elem;
										}
									}
								}
							}
						};
				}

				function elementMatcher(matchers) {
					return matchers.length > 1 ?
						function (elem, context, xml) {
							var i = matchers.length;
							while (i--) {
								if (!matchers[i](elem, context, xml)) {
									return false;
								}
							}
							return true;
						} :
						matchers[0];
				}

				function condense(unmatched, map, filter, context, xml) {
					var elem,
						newUnmatched = [],
						i = 0,
						len = unmatched.length,
						mapped = map != null;

					for (; i < len; i++) {
						if ((elem = unmatched[i])) {
							if (!filter || filter(elem, context, xml)) {
								newUnmatched.push(elem);
								if (mapped) {
									map.push(i);
								}
							}
						}
					}

					return newUnmatched;
				}

				function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
					if (postFilter && !postFilter[expando]) {
						postFilter = setMatcher(postFilter);
					}
					if (postFinder && !postFinder[expando]) {
						postFinder = setMatcher(postFinder, postSelector);
					}
					return markFunction(function (seed, results, context, xml) {
						var temp, i, elem,
							preMap = [],
							postMap = [],
							preexisting = results.length,

							// Get initial elements from seed or context
							elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

							// Prefilter to get matcher input, preserving a map for seed-results synchronization
							matcherIn = preFilter && (seed || !selector) ?
								condense(elems, preMap, preFilter, context, xml) :
								elems,

							matcherOut = matcher ?
								// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
								postFinder || (seed ? preFilter : preexisting || postFilter) ?

									// ...intermediate processing is necessary
									[] :

									// ...otherwise use results directly
									results :
								matcherIn;

						// Find primary matches
						if (matcher) {
							matcher(matcherIn, matcherOut, context, xml);
						}

						// Apply postFilter
						if (postFilter) {
							temp = condense(matcherOut, postMap);
							postFilter(temp, [], context, xml);

							// Un-match failing elements by moving them back to matcherIn
							i = temp.length;
							while (i--) {
								if ((elem = temp[i])) {
									matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
								}
							}
						}

						if (seed) {
							if (postFinder || preFilter) {
								if (postFinder) {
									// Get the final matcherOut by condensing this intermediate into postFinder contexts
									temp = [];
									i = matcherOut.length;
									while (i--) {
										if ((elem = matcherOut[i])) {
											// Restore matcherIn since elem is not yet a final match
											temp.push((matcherIn[i] = elem));
										}
									}
									postFinder(null, (matcherOut = []), temp, xml);
								}

								// Move matched elements from seed to results to keep them synchronized
								i = matcherOut.length;
								while (i--) {
									if ((elem = matcherOut[i]) &&
										(temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {

										seed[temp] = !(results[temp] = elem);
									}
								}
							}

							// Add elements to results, through postFinder if defined
						} else {
							matcherOut = condense(
								matcherOut === results ?
									matcherOut.splice(preexisting, matcherOut.length) :
									matcherOut
							);
							if (postFinder) {
								postFinder(null, results, matcherOut, xml);
							} else {
								push.apply(results, matcherOut);
							}
						}
					});
				}

				function matcherFromTokens(tokens) {
					var checkContext, matcher, j,
						len = tokens.length,
						leadingRelative = Expr.relative[tokens[0].type],
						implicitRelative = leadingRelative || Expr.relative[" "],
						i = leadingRelative ? 1 : 0,

						// The foundational matcher ensures that elements are reachable from top-level context(s)
						matchContext = addCombinator(function (elem) {
							return elem === checkContext;
						}, implicitRelative, true),
						matchAnyContext = addCombinator(function (elem) {
							return indexOf.call(checkContext, elem) > -1;
						}, implicitRelative, true),
						matchers = [function (elem, context, xml) {
							return (!leadingRelative && (xml || context !== outermostContext)) || (
								(checkContext = context).nodeType ?
									matchContext(elem, context, xml) :
									matchAnyContext(elem, context, xml));
						}];

					for (; i < len; i++) {
						if ((matcher = Expr.relative[tokens[i].type])) {
							matchers = [addCombinator(elementMatcher(matchers), matcher)];
						} else {
							matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

							// Return special upon seeing a positional matcher
							if (matcher[expando]) {
								// Find the next relative operator (if any) for proper handling
								j = ++i;
								for (; j < len; j++) {
									if (Expr.relative[tokens[j].type]) {
										break;
									}
								}
								return setMatcher(
									i > 1 && elementMatcher(matchers),
									i > 1 && tokens.slice(0, i - 1).join("").replace(rtrim, "$1"),
									matcher,
									i < j && matcherFromTokens(tokens.slice(i, j)),
									j < len && matcherFromTokens((tokens = tokens.slice(j))),
									j < len && tokens.join("")
								);
							}
							matchers.push(matcher);
						}
					}

					return elementMatcher(matchers);
				}

				function matcherFromGroupMatchers(elementMatchers, setMatchers) {
					var bySet = setMatchers.length > 0,
						byElement = elementMatchers.length > 0,
						superMatcher = function (seed, context, xml, results, expandContext) {
							var elem, j, matcher,
								setMatched = [],
								matchedCount = 0,
								i = "0",
								unmatched = seed && [],
								outermost = expandContext != null,
								contextBackup = outermostContext,
								// We must always have either seed elements or context
								elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
								// Nested matchers should use non-integer dirruns
								dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);

							if (outermost) {
								outermostContext = context !== document && context;
								cachedruns = superMatcher.el;
							}

							// Add elements passing elementMatchers directly to results
							for (; (elem = elems[i]) != null; i++) {
								if (byElement && elem) {
									for (j = 0; (matcher = elementMatchers[j]); j++) {
										if (matcher(elem, context, xml)) {
											results.push(elem);
											break;
										}
									}
									if (outermost) {
										dirruns = dirrunsUnique;
										cachedruns = ++superMatcher.el;
									}
								}

								// Track unmatched elements for set filters
								if (bySet) {
									// They will have gone through all possible matchers
									if ((elem = !matcher && elem)) {
										matchedCount--;
									}

									// Lengthen the array for every element, matched or not
									if (seed) {
										unmatched.push(elem);
									}
								}
							}

							// Apply set filters to unmatched elements
							matchedCount += i;
							if (bySet && i !== matchedCount) {
								for (j = 0; (matcher = setMatchers[j]); j++) {
									matcher(unmatched, setMatched, context, xml);
								}

								if (seed) {
									// Reintegrate element matches to eliminate the need for sorting
									if (matchedCount > 0) {
										while (i--) {
											if (!(unmatched[i] || setMatched[i])) {
												setMatched[i] = pop.call(results);
											}
										}
									}

									// Discard index placeholder values to get only actual matches
									setMatched = condense(setMatched);
								}

								// Add matches to results
								push.apply(results, setMatched);

								// Seedless set matches succeeding multiple successful matchers stipulate sorting
								if (outermost && !seed && setMatched.length > 0 &&
									(matchedCount + setMatchers.length) > 1) {

									Sizzle.uniqueSort(results);
								}
							}

							// Override manipulation of globals by nested matchers
							if (outermost) {
								dirruns = dirrunsUnique;
								outermostContext = contextBackup;
							}

							return unmatched;
						};

					superMatcher.el = 0;
					return bySet ?
						markFunction(superMatcher) :
						superMatcher;
				}

				compile = Sizzle.compile = function (selector, group /* Internal Use Only */) {
					var i,
						setMatchers = [],
						elementMatchers = [],
						cached = compilerCache[expando][selector + " "];

					if (!cached) {
						// Generate a function of recursive functions that can be used to check each element
						if (!group) {
							group = tokenize(selector);
						}
						i = group.length;
						while (i--) {
							cached = matcherFromTokens(group[i]);
							if (cached[expando]) {
								setMatchers.push(cached);
							} else {
								elementMatchers.push(cached);
							}
						}

						// Cache the compiled function
						cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
					}
					return cached;
				};

				function multipleContexts(selector, contexts, results) {
					var i = 0,
						len = contexts.length;
					for (; i < len; i++) {
						Sizzle(selector, contexts[i], results);
					}
					return results;
				}

				function select(selector, context, results, seed, xml) {
					var i, tokens, token, type, find,
						match = tokenize(selector),
						j = match.length;

					if (!seed) {
						// Try to minimize operations if there is only one group
						if (match.length === 1) {

							// Take a shortcut and set the context if the root selector is an ID
							tokens = match[0] = match[0].slice(0);
							if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
								context.nodeType === 9 && !xml &&
								Expr.relative[tokens[1].type]) {

								context = Expr.find["ID"](token.matches[0].replace(rbackslash, ""), context, xml)[0];
								if (!context) {
									return results;
								}

								selector = selector.slice(tokens.shift().length);
							}

							// Fetch a seed set for right-to-left matching
							for (i = matchExpr["POS"].test(selector) ? -1 : tokens.length - 1; i >= 0; i--) {
								token = tokens[i];

								// Abort if we hit a combinator
								if (Expr.relative[(type = token.type)]) {
									break;
								}
								if ((find = Expr.find[type])) {
									// Search, expanding context for leading sibling combinators
									if ((seed = find(
										token.matches[0].replace(rbackslash, ""),
										rsibling.test(tokens[0].type) && context.parentNode || context,
										xml
									))) {

										// If seed is empty or no tokens remain, we can return early
										tokens.splice(i, 1);
										selector = seed.length && tokens.join("");
										if (!selector) {
											push.apply(results, slice.call(seed, 0));
											return results;
										}

										break;
									}
								}
							}
						}
					}

					// Compile and execute a filtering function
					// Provide `match` to avoid retokenization if we modified the selector above
					compile(selector, match)(
						seed,
						context,
						xml,
						results,
						rsibling.test(selector)
					);
					return results;
				}

				if (document.querySelectorAll) {
					(function () {
						var disconnectedMatch,
							oldSelect = select,
							rescape = /'|\\/g,
							rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

							// qSa(:focus) reports false when true (Chrome 21), no need to also add to buggyMatches since matches checks buggyQSA
							// A support test would require too much code (would include document ready)
							rbuggyQSA = [":focus"],

							// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
							// A support test would require too much code (would include document ready)
							// just skip matchesSelector for :active
							rbuggyMatches = [":active"],
							matches = docElem.matchesSelector ||
								docElem.mozMatchesSelector ||
								docElem.webkitMatchesSelector ||
								docElem.oMatchesSelector ||
								docElem.msMatchesSelector;

						// Build QSA regex
						// Regex strategy adopted from Diego Perini
						assert(function (div) {
							// Select is set to empty string on purpose
							// This is to test IE's treatment of not explictly
							// setting a boolean content attribute,
							// since its presence should be enough
							// http://bugs.jqx.com/ticket/12359
							div.innerHTML = "<select><option selected=''></option></select>";

							// IE8 - Some boolean attributes are not treated correctly
							if (!div.querySelectorAll("[selected]").length) {
								rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
							}

							// Webkit/Opera - :checked should return selected option elements
							// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
							// IE8 throws error here (do not put tests after this one)
							if (!div.querySelectorAll(":checked").length) {
								rbuggyQSA.push(":checked");
							}
						});

						assert(function (div) {

							// Opera 10-12/IE9 - ^= $= *= and empty values
							// Should not select anything
							div.innerHTML = "<p test=''></p>";
							if (div.querySelectorAll("[test^='']").length) {
								rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
							}

							// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
							// IE8 throws error here (do not put tests after this one)
							div.innerHTML = "<input type='hidden'/>";
							if (!div.querySelectorAll(":enabled").length) {
								rbuggyQSA.push(":enabled", ":disabled");
							}
						});

						// rbuggyQSA always contains :focus, so no need for a length check
						rbuggyQSA = /* rbuggyQSA.length && */ new RegExp(rbuggyQSA.join("|"));

						select = function (selector, context, results, seed, xml) {
							// Only use querySelectorAll when not filtering,
							// when this is not xml,
							// and when no QSA bugs apply
							if (!seed && !xml && !rbuggyQSA.test(selector)) {
								var groups, i,
									old = true,
									nid = expando,
									newContext = context,
									newSelector = context.nodeType === 9 && selector;

								// qSA works strangely on Element-rooted queries
								// We can work around this by specifying an extra ID on the root
								// and working up from there (Thanks to Andrew Dupont for the technique)
								// IE 8 doesn't work on object elements
								if (context.nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
									groups = tokenize(selector);

									if ((old = context.getAttribute("id"))) {
										nid = old.replace(rescape, "\\$&");
									} else {
										context.setAttribute("id", nid);
									}
									nid = "[id='" + nid + "'] ";

									i = groups.length;
									while (i--) {
										groups[i] = nid + groups[i].join("");
									}
									newContext = rsibling.test(selector) && context.parentNode || context;
									newSelector = groups.join(",");
								}

								if (newSelector) {
									try {
										push.apply(results, slice.call(newContext.querySelectorAll(
											newSelector
										), 0));
										return results;
									} catch (qsaError) {
									} finally {
										if (!old) {
											context.removeAttribute("id");
										}
									}
								}
							}

							return oldSelect(selector, context, results, seed, xml);
						};

						if (matches) {
							assert(function (div) {
								// Check to see if it's possible to do matchesSelector
								// on a disconnected node (IE 9)
								disconnectedMatch = matches.call(div, "div");

								// This should fail with an exception
								// Gecko does not error, returns false instead
								try {
									matches.call(div, "[test!='']:sizzle");
									rbuggyMatches.push("!=", pseudos);
								} catch (e) { }
							});

							// rbuggyMatches always contains :active and :focus, so no need for a length check
							rbuggyMatches = /* rbuggyMatches.length && */ new RegExp(rbuggyMatches.join("|"));

							Sizzle.matchesSelector = function (elem, expr) {
								// Make sure that attribute selectors are quoted
								expr = expr.replace(rattributeQuotes, "='$1']");

								// rbuggyMatches always contains :active, so no need for an existence check
								if (!isXML(elem) && !rbuggyMatches.test(expr) && !rbuggyQSA.test(expr)) {
									try {
										var ret = matches.call(elem, expr);

										// IE 9's matchesSelector returns false on disconnected nodes
										if (ret || disconnectedMatch ||
											// As well, disconnected nodes are said to be in a document
											// fragment in IE 9
											elem.document && elem.document.nodeType !== 11) {
											return ret;
										}
									} catch (e) { }
								}

								return Sizzle(expr, null, null, [elem]).length > 0;
							};
						}
					})();
				}

				// Deprecated
				Expr.pseudos["nth"] = Expr.pseudos["eq"];

				// Back-compat
				function setFilters() { }
				Expr.filters = setFilters.prototype = Expr.pseudos;
				Expr.setFilters = new setFilters();

				// Override sizzle attribute retrieval
				Sizzle.attr = JQXLite.attr;
				JQXLite.find = Sizzle;
				JQXLite.expr = Sizzle.selectors;
				JQXLite.expr[":"] = JQXLite.expr.pseudos;
				JQXLite.unique = Sizzle.uniqueSort;
				JQXLite.text = Sizzle.getText;
				JQXLite.isXMLDoc = Sizzle.isXML;
				JQXLite.contains = Sizzle.contains;


			})(window);
			var runtil = /Until$/,
				rparentsprev = /^(?:parents|prev(?:Until|All))/,
				isSimple = /^.[^:#\[\.,]*$/,
				rneedsContext = JQXLite.expr.match.needsContext,
				// methods guaranteed to produce a unique set when starting from a unique set
				guaranteedUnique = {
					children: true,
					contents: true,
					next: true,
					prev: true
				};

			JQXLite.fn.extend({
				find: function (selector) {
					var i, l, length, n, r, ret,
						self = this;

					if (typeof selector !== "string") {
						return JQXLite(selector).filter(function () {
							for (i = 0, l = self.length; i < l; i++) {
								if (JQXLite.contains(self[i], this)) {
									return true;
								}
							}
						});
					}

					ret = this.pushStack("", "find", selector);

					for (i = 0, l = this.length; i < l; i++) {
						length = ret.length;
						JQXLite.find(selector, this[i], ret);

						if (i > 0) {
							// Make sure that the results are unique
							for (n = length; n < ret.length; n++) {
								for (r = 0; r < length; r++) {
									if (ret[r] === ret[n]) {
										ret.splice(n--, 1);
										break;
									}
								}
							}
						}
					}

					return ret;
				},

				has: function (target) {
					var i,
						targets = JQXLite(target, this),
						len = targets.length;

					return this.filter(function () {
						for (i = 0; i < len; i++) {
							if (JQXLite.contains(this, targets[i])) {
								return true;
							}
						}
					});
				},

				not: function (selector) {
					return this.pushStack(winnow(this, selector, false), "not", selector);
				},

				filter: function (selector) {
					return this.pushStack(winnow(this, selector, true), "filter", selector);
				},

				is: function (selector) {
					return !!selector && (
						typeof selector === "string" ?
							// If this is a positional/relative selector, check membership in the returned set
							// so $("p:first").is("p:last") won't return true for a doc with two "p".
							rneedsContext.test(selector) ?
								JQXLite(selector, this.context).index(this[0]) >= 0 :
								JQXLite.filter(selector, this).length > 0 :
							this.filter(selector).length > 0);
				},

				closest: function (selectors, context) {
					var cur,
						i = 0,
						l = this.length,
						ret = [],
						pos = rneedsContext.test(selectors) || typeof selectors !== "string" ?
							JQXLite(selectors, context || this.context) :
							0;

					for (; i < l; i++) {
						cur = this[i];

						while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
							if (pos ? pos.index(cur) > -1 : JQXLite.find.matchesSelector(cur, selectors)) {
								ret.push(cur);
								break;
							}
							cur = cur.parentNode;
						}
					}

					ret = ret.length > 1 ? JQXLite.unique(ret) : ret;

					return this.pushStack(ret, "closest", selectors);
				},

				// Determine the position of an element within
				// the matched set of elements
				index: function (elem) {

					// No argument, return index in parent
					if (!elem) {
						return (this[0] && this[0].parentNode) ? this.prevAll().length : -1;
					}

					// index in selector
					if (typeof elem === "string") {
						return JQXLite.inArray(this[0], JQXLite(elem));
					}

					// Locate the position of the desired element
					return JQXLite.inArray(
						// If it receives a JQXLite object, the first element is used
						elem.jqx ? elem[0] : elem, this);
				},

				add: function (selector, context) {
					var set = typeof selector === "string" ?
						JQXLite(selector, context) :
						JQXLite.makeArray(selector && selector.nodeType ? [selector] : selector),
						all = JQXLite.merge(this.get(), set);

					return this.pushStack(isDisconnected(set[0]) || isDisconnected(all[0]) ?
						all :
						JQXLite.unique(all));
				},

				addBack: function (selector) {
					return this.add(selector == null ?
						this.prevObject : this.prevObject.filter(selector)
					);
				}
			});

			JQXLite.fn.andSelf = JQXLite.fn.addBack;

			// A painfully simple check to see if an element is disconnected
			// from a document (should be improved, where feasible).
			function isDisconnected(node) {
				return !node || !node.parentNode || node.parentNode.nodeType === 11;
			}

			function sibling(cur, dir) {
				do {
					cur = cur[dir];
				} while (cur && cur.nodeType !== 1);

				return cur;
			}

			JQXLite.each({
				parent: function (elem) {
					var parent = elem.parentNode;
					return parent && parent.nodeType !== 11 ? parent : null;
				},
				parents: function (elem) {
					return JQXLite.dir(elem, "parentNode");
				},
				parentsUntil: function (elem, i, until) {
					return JQXLite.dir(elem, "parentNode", until);
				},
				next: function (elem) {
					return sibling(elem, "nextSibling");
				},
				prev: function (elem) {
					return sibling(elem, "previousSibling");
				},
				nextAll: function (elem) {
					return JQXLite.dir(elem, "nextSibling");
				},
				prevAll: function (elem) {
					return JQXLite.dir(elem, "previousSibling");
				},
				nextUntil: function (elem, i, until) {
					return JQXLite.dir(elem, "nextSibling", until);
				},
				prevUntil: function (elem, i, until) {
					return JQXLite.dir(elem, "previousSibling", until);
				},
				siblings: function (elem) {
					return JQXLite.sibling((elem.parentNode || {}).firstChild, elem);
				},
				children: function (elem) {
					return JQXLite.sibling(elem.firstChild);
				},
				contents: function (elem) {
					return JQXLite.nodeName(elem, "iframe") ?
						elem.contentDocument || elem.contentWindow.document :
						JQXLite.merge([], elem.childNodes);
				}
			}, function (name, fn) {
				JQXLite.fn[name] = function (until, selector) {
					var ret = JQXLite.map(this, fn, until);

					if (!runtil.test(name)) {
						selector = until;
					}

					if (selector && typeof selector === "string") {
						ret = JQXLite.filter(selector, ret);
					}

					ret = this.length > 1 && !guaranteedUnique[name] ? JQXLite.unique(ret) : ret;

					if (this.length > 1 && rparentsprev.test(name)) {
						ret = ret.reverse();
					}

					return this.pushStack(ret, name, core_slice.call(arguments).join(","));
				};
			});

			JQXLite.extend({
				filter: function (expr, elems, not) {
					if (not) {
						expr = ":not(" + expr + ")";
					}

					return elems.length === 1 ?
						JQXLite.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] :
						JQXLite.find.matches(expr, elems);
				},

				dir: function (elem, dir, until) {
					var matched = [],
						cur = elem[dir];

					while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !JQXLite(cur).is(until))) {
						if (cur.nodeType === 1) {
							matched.push(cur);
						}
						cur = cur[dir];
					}
					return matched;
				},

				sibling: function (n, elem) {
					var r = [];

					for (; n; n = n.nextSibling) {
						if (n.nodeType === 1 && n !== elem) {
							r.push(n);
						}
					}

					return r;
				}
			});

			// Implement the identical functionality for filter and not
			function winnow(elements, qualifier, keep) {

				// Can't pass null or undefined to indexOf in Firefox 4
				// Set to 0 to skip string check
				qualifier = qualifier || 0;

				if (JQXLite.isFunction(qualifier)) {
					return JQXLite.grep(elements, function (elem, i) {
						var retVal = !!qualifier.call(elem, i, elem);
						return retVal === keep;
					});

				} else if (qualifier.nodeType) {
					return JQXLite.grep(elements, function (elem, i) {
						return (elem === qualifier) === keep;
					});

				} else if (typeof qualifier === "string") {
					var filtered = JQXLite.grep(elements, function (elem) {
						return elem.nodeType === 1;
					});

					if (isSimple.test(qualifier)) {
						return JQXLite.filter(qualifier, filtered, !keep);
					} else {
						qualifier = JQXLite.filter(qualifier, filtered);
					}
				}

				return JQXLite.grep(elements, function (elem, i) {
					return (JQXLite.inArray(elem, qualifier) >= 0) === keep;
				});
			}
			function createSafeFragment(document) {
				var list = nodeNames.split("|"),
					safeFrag = document.createDocumentFragment();

				if (safeFrag.createElement) {
					while (list.length) {
						safeFrag.createElement(
							list.pop()
						);
					}
				}
				return safeFrag;
			}

			var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
				"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
				rinlinejQuery = / JQXLite\d+="(?:null|\d+)"/g,
				rleadingWhitespace = /^\s+/,
				rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
				rtagName = /<([\w:]+)/,
				rtbody = /<tbody/i,
				rhtml = /<|&#?\w+;/,
				rnoInnerhtml = /<(?:script|style|link)/i,
				rnocache = /<(?:script|object|embed|option|style)/i,
				rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
				rcheckableType = /^(?:checkbox|radio)$/,
				// checked="checked" or checked
				rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
				rscriptType = /\/(java|ecma)script/i,
				rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
				wrapMap = {
					option: [1, "<select multiple='multiple'>", "</select>"],
					legend: [1, "<fieldset>", "</fieldset>"],
					thead: [1, "<table>", "</table>"],
					tr: [2, "<table><tbody>", "</tbody></table>"],
					td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
					area: [1, "<map>", "</map>"],
					_default: [0, "", ""]
				},
				safeFragment = createSafeFragment(document),
				fragmentDiv = safeFragment.appendChild(document.createElement("div"));

			wrapMap.optgroup = wrapMap.option;
			wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
			wrapMap.th = wrapMap.td;

			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			if (!JQXLite.support.htmlSerialize) {
				wrapMap._default = [1, "X<div>", "</div>"];
			}

			JQXLite.fn.extend({
				text: function (value) {
					return JQXLite.access(this, function (value) {
						return value === undefined ?
							JQXLite.text(this) :
							this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
					}, null, value, arguments.length);
				},

				wrapAll: function (html) {
					if (JQXLite.isFunction(html)) {
						return this.each(function (i) {
							JQXLite(this).wrapAll(html.call(this, i));
						});
					}

					if (this[0]) {
						// The elements to wrap the target around
						var wrap = JQXLite(html, this[0].ownerDocument).eq(0).clone(true);

						if (this[0].parentNode) {
							wrap.insertBefore(this[0]);
						}

						wrap.map(function () {
							var elem = this;

							while (elem.firstChild && elem.firstChild.nodeType === 1) {
								elem = elem.firstChild;
							}

							return elem;
						}).append(this);
					}

					return this;
				},

				wrapInner: function (html) {
					if (JQXLite.isFunction(html)) {
						return this.each(function (i) {
							JQXLite(this).wrapInner(html.call(this, i));
						});
					}

					return this.each(function () {
						var self = JQXLite(this),
							contents = self.contents();

						if (contents.length) {
							contents.wrapAll(html);

						} else {
							self.append(html);
						}
					});
				},

				wrap: function (html) {
					var isFunction = JQXLite.isFunction(html);

					return this.each(function (i) {
						JQXLite(this).wrapAll(isFunction ? html.call(this, i) : html);
					});
				},

				unwrap: function () {
					return this.parent().each(function () {
						if (!JQXLite.nodeName(this, "body")) {
							JQXLite(this).replaceWith(this.childNodes);
						}
					}).end();
				},

				append: function () {
					return this.domManip(arguments, true, function (elem) {
						if (this.nodeType === 1 || this.nodeType === 11) {
							this.appendChild(elem);
						}
					});
				},

				prepend: function () {
					return this.domManip(arguments, true, function (elem) {
						if (this.nodeType === 1 || this.nodeType === 11) {
							this.insertBefore(elem, this.firstChild);
						}
					});
				},

				before: function () {
					if (!isDisconnected(this[0])) {
						return this.domManip(arguments, false, function (elem) {
							this.parentNode.insertBefore(elem, this);
						});
					}

					if (arguments.length) {
						var set = JQXLite.clean(arguments);
						return this.pushStack(JQXLite.merge(set, this), "before", this.selector);
					}
				},

				after: function () {
					if (!isDisconnected(this[0])) {
						return this.domManip(arguments, false, function (elem) {
							this.parentNode.insertBefore(elem, this.nextSibling);
						});
					}

					if (arguments.length) {
						var set = JQXLite.clean(arguments);
						return this.pushStack(JQXLite.merge(this, set), "after", this.selector);
					}
				},

				// keepData is for internal use only--do not document
				remove: function (selector, keepData) {
					var elem,
						i = 0;

					for (; (elem = this[i]) != null; i++) {
						if (!selector || JQXLite.filter(selector, [elem]).length) {
							if (!keepData && elem.nodeType === 1) {
								JQXLite.cleanData(elem.getElementsByTagName("*"));
								JQXLite.cleanData([elem]);
							}

							if (elem.parentNode) {
								elem.parentNode.removeChild(elem);
							}
						}
					}

					return this;
				},

				empty: function () {
					var elem,
						i = 0;

					for (; (elem = this[i]) != null; i++) {
						// Remove element nodes and prevent memory leaks
						if (elem.nodeType === 1) {
							JQXLite.cleanData(elem.getElementsByTagName("*"));
						}

						// Remove any remaining nodes
						while (elem.firstChild) {
							elem.removeChild(elem.firstChild);
						}
					}

					return this;
				},

				clone: function (dataAndEvents, deepDataAndEvents) {
					dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
					deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

					return this.map(function () {
						return JQXLite.clone(this, dataAndEvents, deepDataAndEvents);
					});
				},

				html: function (value) {
					return JQXLite.access(this, function (value) {
						var elem = this[0] || {},
							i = 0,
							l = this.length;

						if (value === undefined) {
							return elem.nodeType === 1 ?
								elem.innerHTML.replace(rinlinejQuery, "") :
								undefined;
						}

						// See if we can take a shortcut and just use innerHTML
						if (typeof value === "string" && !rnoInnerhtml.test(value) &&
							(JQXLite.support.htmlSerialize || !rnoshimcache.test(value)) &&
							(JQXLite.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
							!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

							value = value.replace(rxhtmlTag, "<$1></$2>");

							try {
								for (; i < l; i++) {
									// Remove element nodes and prevent memory leaks
									elem = this[i] || {};
									if (elem.nodeType === 1) {
										JQXLite.cleanData(elem.getElementsByTagName("*"));
										elem.innerHTML = value;
									}
								}

								elem = 0;

								// If using innerHTML throws an exception, use the fallback method
							} catch (e) { }
						}

						if (elem) {
							this.empty().append(value);
						}
					}, null, value, arguments.length);
				},

				replaceWith: function (value) {
					if (!isDisconnected(this[0])) {
						// Make sure that the elements are removed from the DOM before they are inserted
						// this can help fix replacing a parent with child elements
						if (JQXLite.isFunction(value)) {
							return this.each(function (i) {
								var self = JQXLite(this), old = self.html();
								self.replaceWith(value.call(this, i, old));
							});
						}

						if (typeof value !== "string") {
							value = JQXLite(value).detach();
						}

						return this.each(function () {
							var next = this.nextSibling,
								parent = this.parentNode;

							JQXLite(this).remove();

							if (next) {
								JQXLite(next).before(value);
							} else {
								JQXLite(parent).append(value);
							}
						});
					}

					return this.length ?
						this.pushStack(JQXLite(JQXLite.isFunction(value) ? value() : value), "replaceWith", value) :
						this;
				},

				detach: function (selector) {
					return this.remove(selector, true);
				},

				domManip: function (args, table, callback) {

					// Flatten any nested arrays
					args = [].concat.apply([], args);

					var results, first, fragment, iNoClone,
						i = 0,
						value = args[0],
						scripts = [],
						l = this.length;

					// We can't cloneNode fragments that contain checked, in WebKit
					if (!JQXLite.support.checkClone && l > 1 && typeof value === "string" && rchecked.test(value)) {
						return this.each(function () {
							JQXLite(this).domManip(args, table, callback);
						});
					}

					if (JQXLite.isFunction(value)) {
						return this.each(function (i) {
							var self = JQXLite(this);
							args[0] = value.call(this, i, table ? self.html() : undefined);
							self.domManip(args, table, callback);
						});
					}

					if (this[0]) {
						results = JQXLite.buildFragment(args, this, scripts);
						fragment = results.fragment;
						first = fragment.firstChild;

						if (fragment.childNodes.length === 1) {
							fragment = first;
						}

						if (first) {
							table = table && JQXLite.nodeName(first, "tr");

							// Use the original fragment for the last item instead of the first because it can end up
							// being emptied incorrectly in certain situations (#8070).
							// Fragments from the fragment cache must always be cloned and never used in place.
							for (iNoClone = results.cacheable || l - 1; i < l; i++) {
								callback.call(
									table && JQXLite.nodeName(this[i], "table") ?
										findOrAppend(this[i], "tbody") :
										this[i],
									i === iNoClone ?
										fragment :
										JQXLite.clone(fragment, true, true)
								);
							}
						}

						// Fix #11809: Avoid leaking memory
						fragment = first = null;

						if (scripts.length) {
							JQXLite.each(scripts, function (i, elem) {
								if (elem.src) {
									if (JQXLite.ajax) {
										JQXLite.ajax({
											url: elem.src,
											type: "GET",
											dataType: "script",
											async: false,
											global: false,
											"throws": true
										});
									} else {
										JQXLite.error("no ajax");
									}
								} else {
									JQXLite.globalEval((elem.text || elem.textContent || elem.innerHTML || "").replace(rcleanScript, ""));
								}

								if (elem.parentNode) {
									elem.parentNode.removeChild(elem);
								}
							});
						}
					}

					return this;
				}
			});

			function findOrAppend(elem, tag) {
				return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
			}

			function cloneCopyEvent(src, dest) {

				if (dest.nodeType !== 1 || !JQXLite.hasData(src)) {
					return;
				}

				var type, i, l,
					oldData = JQXLite._data(src),
					curData = JQXLite._data(dest, oldData),
					events = oldData.events;

				if (events) {
					delete curData.handle;
					curData.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							JQXLite.event.add(dest, type, events[type][i]);
						}
					}
				}

				// make the cloned public data object a copy from the original
				if (curData.data) {
					curData.data = JQXLite.extend({}, curData.data);
				}
			}

			function cloneFixAttributes(src, dest) {
				var nodeName;

				// We do not need to do anything for non-Elements
				if (dest.nodeType !== 1) {
					return;
				}

				// clearAttributes removes the attributes, which we don't want,
				// but also removes the attachEvent events, which we *do* want
				if (dest.clearAttributes) {
					dest.clearAttributes();
				}

				// mergeAttributes, in contrast, only merges back on the
				// original attributes, not the events
				if (dest.mergeAttributes) {
					dest.mergeAttributes(src);
				}

				nodeName = dest.nodeName.toLowerCase();

				if (nodeName === "object") {
					// IE6-10 improperly clones children of object elements using classid.
					// IE10 throws NoModificationAllowedError if parent is null, #12132.
					if (dest.parentNode) {
						dest.outerHTML = src.outerHTML;
					}

					// This path appears unavoidable for IE9. When cloning an object
					// element in IE9, the outerHTML strategy above is not sufficient.
					// If the src has innerHTML and the destination does not,
					// copy the src.innerHTML into the dest.innerHTML. #10324
					if (JQXLite.support.html5Clone && (src.innerHTML && !JQXLite.trim(dest.innerHTML))) {
						dest.innerHTML = src.innerHTML;
					}

				} else if (nodeName === "input" && rcheckableType.test(src.type)) {
					// IE6-8 fails to persist the checked state of a cloned checkbox
					// or radio button. Worse, IE6-7 fail to give the cloned element
					// a checked appearance if the defaultChecked value isn't also set

					dest.defaultChecked = dest.checked = src.checked;

					// IE6-7 get confused and end up setting the value of a cloned
					// checkbox/radio button to an empty string instead of "on"
					if (dest.value !== src.value) {
						dest.value = src.value;
					}

					// IE6-8 fails to return the selected option to the default selected
					// state when cloning options
				} else if (nodeName === "option") {
					dest.selected = src.defaultSelected;

					// IE6-8 fails to set the defaultValue to the correct value when
					// cloning other types of input fields
				} else if (nodeName === "input" || nodeName === "textarea") {
					dest.defaultValue = src.defaultValue;

					// IE blanks contents when cloning scripts
				} else if (nodeName === "script" && dest.text !== src.text) {
					dest.text = src.text;
				}

				// Event data gets referenced instead of copied if the expando
				// gets copied too
				dest.removeAttribute(JQXLite.expando);
			}

			JQXLite.buildFragment = function (args, context, scripts) {
				var fragment, cacheable, cachehit,
					first = args[0];

				// Set context from what may come in as undefined or a JQXLite collection or a node
				// Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &
				// also doubles as fix for #8950 where plain objects caused createDocumentFragment exception
				context = context || document;
				context = !context.nodeType && context[0] || context;
				context = context.ownerDocument || context;

				// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
				// Cloning options loses the selected state, so don't cache them
				// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
				// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
				// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
				if (args.length === 1 && typeof first === "string" && first.length < 512 && context === document &&
					first.charAt(0) === "<" && !rnocache.test(first) &&
					(JQXLite.support.checkClone || !rchecked.test(first)) &&
					(JQXLite.support.html5Clone || !rnoshimcache.test(first))) {

					// Mark cacheable and look for a hit
					cacheable = true;
					fragment = JQXLite.fragments[first];
					cachehit = fragment !== undefined;
				}

				if (!fragment) {
					fragment = context.createDocumentFragment();
					JQXLite.clean(args, context, fragment, scripts);

					// Update the cache, but only store false
					// unless this is a second parsing of the same content
					if (cacheable) {
						JQXLite.fragments[first] = cachehit && fragment;
					}
				}

				return { fragment: fragment, cacheable: cacheable };
			};

			JQXLite.fragments = {};

			JQXLite.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function (name, original) {
				JQXLite.fn[name] = function (selector) {
					var elems,
						i = 0,
						ret = [],
						insert = JQXLite(selector),
						l = insert.length,
						parent = this.length === 1 && this[0].parentNode;

					if ((parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1) {
						insert[original](this[0]);
						return this;
					} else {
						for (; i < l; i++) {
							elems = (i > 0 ? this.clone(true) : this).get();
							JQXLite(insert[i])[original](elems);
							ret = ret.concat(elems);
						}

						return this.pushStack(ret, name, insert.selector);
					}
				};
			});

			function getAll(elem) {
				if (typeof elem.getElementsByTagName !== "undefined") {
					return elem.getElementsByTagName("*");

				} else if (typeof elem.querySelectorAll !== "undefined") {
					return elem.querySelectorAll("*");

				} else {
					return [];
				}
			}

			// Used in clean, fixes the defaultChecked property
			function fixDefaultChecked(elem) {
				if (rcheckableType.test(elem.type)) {
					elem.defaultChecked = elem.checked;
				}
			}

			JQXLite.extend({
				clone: function (elem, dataAndEvents, deepDataAndEvents) {
					var srcElements,
						destElements,
						i,
						clone;

					if (JQXLite.support.html5Clone || JQXLite.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
						clone = elem.cloneNode(true);

						// IE<=8 does not properly clone detached, unknown element nodes
					} else {
						fragmentDiv.innerHTML = elem.outerHTML;
						fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
					}

					if ((!JQXLite.support.noCloneEvent || !JQXLite.support.noCloneChecked) &&
						(elem.nodeType === 1 || elem.nodeType === 11) && !JQXLite.isXMLDoc(elem)) {
						// IE copies events bound via attachEvent when using cloneNode.
						// Calling detachEvent on the clone will also remove the events
						// from the original. In order to get around this, we use some
						// proprietary methods to clear the events. Thanks to MooTools
						// guys for this hotness.

						cloneFixAttributes(elem, clone);

						// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
						srcElements = getAll(elem);
						destElements = getAll(clone);

						// Weird iteration because IE will replace the length property
						// with an element if you are cloning the body and one of the
						// elements on the page has a name or id of "length"
						for (i = 0; srcElements[i]; ++i) {
							// Ensure that the destination node is not null; Fixes #9587
							if (destElements[i]) {
								cloneFixAttributes(srcElements[i], destElements[i]);
							}
						}
					}

					// Copy the events from the original to the clone
					if (dataAndEvents) {
						cloneCopyEvent(elem, clone);

						if (deepDataAndEvents) {
							srcElements = getAll(elem);
							destElements = getAll(clone);

							for (i = 0; srcElements[i]; ++i) {
								cloneCopyEvent(srcElements[i], destElements[i]);
							}
						}
					}

					srcElements = destElements = null;

					// Return the cloned set
					return clone;
				},

				clean: function (elems, context, fragment, scripts) {
					var i, j, elem, tag, wrap, depth, div, hasBody, tbody, len, handleScript, jsTags,
						safe = context === document && safeFragment,
						ret = [];

					// Ensure that context is a document
					if (!context || typeof context.createDocumentFragment === "undefined") {
						context = document;
					}

					// Use the already-created safe fragment if context permits
					for (i = 0; (elem = elems[i]) != null; i++) {
						if (typeof elem === "number") {
							elem += "";
						}

						if (!elem) {
							continue;
						}

						// Convert html string into DOM nodes
						if (typeof elem === "string") {
							if (!rhtml.test(elem)) {
								elem = context.createTextNode(elem);
							} else {
								// Ensure a safe container in which to render the html
								safe = safe || createSafeFragment(context);
								div = context.createElement("div");
								safe.appendChild(div);

								// Fix "XHTML"-style tags in all browsers
								elem = elem.replace(rxhtmlTag, "<$1></$2>");

								// Go to html and back, then peel off extra wrappers
								tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
								wrap = wrapMap[tag] || wrapMap._default;
								depth = wrap[0];
								div.innerHTML = wrap[1] + elem + wrap[2];

								// Move to the right depth
								while (depth--) {
									div = div.lastChild;
								}

								// Remove IE's autoinserted <tbody> from table fragments
								if (!JQXLite.support.tbody) {

									// String was a <table>, *may* have spurious <tbody>
									hasBody = rtbody.test(elem);
									tbody = tag === "table" && !hasBody ?
										div.firstChild && div.firstChild.childNodes :

										// String was a bare <thead> or <tfoot>
										wrap[1] === "<table>" && !hasBody ?
											div.childNodes :
											[];

									for (j = tbody.length - 1; j >= 0; --j) {
										if (JQXLite.nodeName(tbody[j], "tbody") && !tbody[j].childNodes.length) {
											tbody[j].parentNode.removeChild(tbody[j]);
										}
									}
								}

								// IE completely kills leading whitespace when innerHTML is used
								if (!JQXLite.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
									div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]), div.firstChild);
								}

								elem = div.childNodes;

								// Take out of fragment container (we need a fresh div each time)
								div.parentNode.removeChild(div);
							}
						}

						if (elem.nodeType) {
							ret.push(elem);
						} else {
							JQXLite.merge(ret, elem);
						}
					}

					// Fix #11356: Clear elements from safeFragment
					if (div) {
						elem = div = safe = null;
					}

					// Reset defaultChecked for any radios and checkboxes
					// about to be appended to the DOM in IE 6/7 (#8060)
					if (!JQXLite.support.appendChecked) {
						for (i = 0; (elem = ret[i]) != null; i++) {
							if (JQXLite.nodeName(elem, "input")) {
								fixDefaultChecked(elem);
							} else if (typeof elem.getElementsByTagName !== "undefined") {
								JQXLite.grep(elem.getElementsByTagName("input"), fixDefaultChecked);
							}
						}
					}

					// Append elements to a provided document fragment
					if (fragment) {
						// Special handling of each script element
						handleScript = function (elem) {
							// Check if we consider it executable
							if (!elem.type || rscriptType.test(elem.type)) {
								// Detach the script and store it in the scripts array (if provided) or the fragment
								// Return truthy to indicate that it has been handled
								return scripts ?
									scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) :
									fragment.appendChild(elem);
							}
						};

						for (i = 0; (elem = ret[i]) != null; i++) {
							// Check if we're done after handling an executable script
							if (!(JQXLite.nodeName(elem, "script") && handleScript(elem))) {
								// Append to fragment and handle embedded scripts
								fragment.appendChild(elem);
								if (typeof elem.getElementsByTagName !== "undefined") {
									// handleScript alters the DOM, so use JQXLite.merge to ensure snapshot iteration
									jsTags = JQXLite.grep(JQXLite.merge([], elem.getElementsByTagName("script")), handleScript);

									// Splice the scripts into ret after their former ancestor and advance our index beyond them
									ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
									i += jsTags.length;
								}
							}
						}
					}

					return ret;
				},

				cleanData: function (elems, /* internal */ acceptData) {
					var data, id, elem, type,
						i = 0,
						internalKey = JQXLite.expando,
						cache = JQXLite.cache,
						deleteExpando = JQXLite.support.deleteExpando,
						special = JQXLite.event.special;

					for (; (elem = elems[i]) != null; i++) {

						if (acceptData || JQXLite.acceptData(elem)) {

							id = elem[internalKey];
							data = id && cache[id];

							if (data) {
								if (data.events) {
									for (type in data.events) {
										if (special[type]) {
											JQXLite.event.remove(elem, type);

											// This is a shortcut to avoid JQXLite.event.remove's overhead
										} else {
											JQXLite.removeEvent(elem, type, data.handle);
										}
									}
								}

								// Remove cache only if it was not already removed by JQXLite.event.remove
								if (cache[id]) {

									delete cache[id];

									// IE does not allow us to delete expando properties from nodes,
									// nor does it have a removeAttribute function on Document nodes;
									// we must handle all of these cases
									if (deleteExpando) {
										delete elem[internalKey];

									} else if (elem.removeAttribute) {
										elem.removeAttribute(internalKey);

									} else {
										elem[internalKey] = null;
									}

									JQXLite.deletedIds.push(id);
								}
							}
						}
					}
				}
			});
			// Limit scope pollution from any deprecated API
			(function () {

				var matched, browser;

				// Use of JQXLite.browser is frowned upon.
				// More details: http://api.jqx.com/JQXLite.browser
				// JQXLite.uaMatch maintained for back-compat
				JQXLite.uaMatch = function (ua) {
					ua = ua.toLowerCase();

					var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
						/(webkit)[ \/]([\w.]+)/.exec(ua) ||
						/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
						/(msie) ([\w.]+)/.exec(ua) ||
						ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
						[];

					return {
						browser: match[1] || "",
						version: match[2] || "0"
					};
				};

				matched = JQXLite.uaMatch(navigator.userAgent);
				browser = {};

				if (matched.browser) {
					browser[matched.browser] = true;
					browser.version = matched.version;
				}

				// Chrome is Webkit, but Webkit is also Safari.
				if (browser.chrome) {
					browser.webkit = true;
				} else if (browser.webkit) {
					browser.safari = true;
				}

				JQXLite.browser = browser;

				JQXLite.sub = function () {
					function jQuerySub(selector, context) {
						return new jQuerySub.fn.init(selector, context);
					}
					JQXLite.extend(true, jQuerySub, this);
					jQuerySub.superclass = this;
					jQuerySub.fn = jQuerySub.prototype = this();
					jQuerySub.fn.constructor = jQuerySub;
					jQuerySub.sub = this.sub;
					jQuerySub.fn.init = function init(selector, context) {
						if (context && context instanceof JQXLite && !(context instanceof jQuerySub)) {
							context = jQuerySub(context);
						}

						return JQXLite.fn.init.call(this, selector, context, rootJQXLiteSub);
					};
					jQuerySub.fn.init.prototype = jQuerySub.fn;
					var rootJQXLiteSub = jQuerySub(document);
					return jQuerySub;
				};

			})();
			var curCSS, iframe, iframeDoc,
				ralpha = /alpha\([^)]*\)/i,
				ropacity = /opacity=([^)]*)/,
				rposition = /^(top|right|bottom|left)$/,
				// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
				// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
				rdisplayswap = /^(none|table(?!-c[ea]).+)/,
				rmargin = /^margin/,
				rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
				rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
				rrelNum = new RegExp("^([-+])=(" + core_pnum + ")", "i"),
				elemdisplay = { BODY: "block" },

				cssShow = { position: "absolute", visibility: "hidden", display: "block" },
				cssNormalTransform = {
					letterSpacing: 0,
					fontWeight: 400
				},

				cssExpand = ["Top", "Right", "Bottom", "Left"],
				cssPrefixes = ["Webkit", "O", "Moz", "ms"],

				eventsToggle = JQXLite.fn.toggle;

			// return a css property mapped to a potentially vendor prefixed property
			function vendorPropName(style, name) {

				// shortcut for names that are not vendor prefixed
				if (name in style) {
					return name;
				}

				// check for vendor prefixed names
				var capName = name.charAt(0).toUpperCase() + name.slice(1),
					origName = name,
					i = cssPrefixes.length;

				while (i--) {
					name = cssPrefixes[i] + capName;
					if (name in style) {
						return name;
					}
				}

				return origName;
			}

			function isHidden(elem, el) {
				elem = el || elem;
				return JQXLite.css(elem, "display") === "none" || !JQXLite.contains(elem.ownerDocument, elem);
			}

			function showHide(elements, show) {
				var elem, display,
					values = [],
					index = 0,
					length = elements.length;

				for (; index < length; index++) {
					elem = elements[index];
					if (!elem.style) {
						continue;
					}
					values[index] = JQXLite._data(elem, "olddisplay");
					if (show) {
						// Reset the inline display of this element to learn if it is
						// being hidden by cascaded rules or not
						if (!values[index] && elem.style.display === "none") {
							elem.style.display = "";
						}

						// Set elements which have been overridden with display: none
						// in a stylesheet to whatever the default browser style is
						// for such an element
						if (elem.style.display === "" && isHidden(elem)) {
							values[index] = JQXLite._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
						}
					} else {
						display = curCSS(elem, "display");

						if (!values[index] && display !== "none") {
							JQXLite._data(elem, "olddisplay", display);
						}
					}
				}

				// Set the display of most of the elements in a second loop
				// to avoid the constant reflow
				for (index = 0; index < length; index++) {
					elem = elements[index];
					if (!elem.style) {
						continue;
					}
					if (!show || elem.style.display === "none" || elem.style.display === "") {
						elem.style.display = show ? values[index] || "" : "none";
					}
				}

				return elements;
			}

			JQXLite.fn.extend({
				css: function (name, value) {
					return JQXLite.access(this, function (elem, name, value) {
						return value !== undefined ?
							JQXLite.style(elem, name, value) :
							JQXLite.css(elem, name);
					}, name, value, arguments.length > 1);
				},
				show: function () {
					return showHide(this, true);
				},
				hide: function () {
					return showHide(this);
				},
				toggle: function (state, fn2) {
					var bool = typeof state === "boolean";

					if (JQXLite.isFunction(state) && JQXLite.isFunction(fn2)) {
						return eventsToggle.apply(this, arguments);
					}

					return this.each(function () {
						if (bool ? state : isHidden(this)) {
							JQXLite(this).show();
						} else {
							JQXLite(this).hide();
						}
					});
				}
			});

			JQXLite.extend({
				// Add in style property hooks for overriding the default
				// behavior of getting and setting a style property
				cssHooks: {
					opacity: {
						get: function (elem, computed) {
							if (computed) {
								// We should always get a number back from opacity
								var ret = curCSS(elem, "opacity");
								return ret === "" ? "1" : ret;

							}
						}
					}
				},

				// Exclude the following css properties to add px
				cssNumber: {
					"fillOpacity": true,
					"fontWeight": true,
					"lineHeight": true,
					"opacity": true,
					"orphans": true,
					"widows": true,
					"zIndex": true,
					"zoom": true
				},

				// Add in properties whose names you wish to fix before
				// setting or getting the value
				cssProps: {
					// normalize float css property
					"float": JQXLite.support.cssFloat ? "cssFloat" : "styleFloat"
				},

				// Get and set the style property on a DOM Node
				style: function (elem, name, value, extra) {
					// Don't set styles on text and comment nodes
					if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
						return;
					}

					// Make sure that we're working with the right name
					var ret, type, hooks,
						origName = JQXLite.camelCase(name),
						style = elem.style;

					name = JQXLite.cssProps[origName] || (JQXLite.cssProps[origName] = vendorPropName(style, origName));

					// gets hook for the prefixed version
					// followed by the unprefixed version
					hooks = JQXLite.cssHooks[name] || JQXLite.cssHooks[origName];

					// Check if we're setting a value
					if (value !== undefined) {
						type = typeof value;

						// convert relative number strings (+= or -=) to relative numbers. #7345
						if (type === "string" && (ret = rrelNum.exec(value))) {
							value = (ret[1] + 1) * ret[2] + parseFloat(JQXLite.css(elem, name));
							// Fixes bug #9237
							type = "number";
						}

						// Make sure that NaN and null values aren't set. See: #7116
						if (value == null || type === "number" && isNaN(value)) {
							return;
						}

						// If a number was passed in, add 'px' to the (except for certain CSS properties)
						if (type === "number" && !JQXLite.cssNumber[origName]) {
							value += "px";
						}

						// If a hook was provided, use that value, otherwise just set the specified value
						if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
							// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
							// Fixes bug #5509
							try {
								style[name] = value;
							} catch (e) { }
						}

					} else {
						// If a hook was provided get the non-computed value from there
						if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
							return ret;
						}

						// Otherwise just get the value from the style object
						return style[name];
					}
				},

				css: function (elem, name, numeric, extra) {
					var val, num, hooks,
						origName = JQXLite.camelCase(name);

					// Make sure that we're working with the right name
					name = JQXLite.cssProps[origName] || (JQXLite.cssProps[origName] = vendorPropName(elem.style, origName));

					// gets hook for the prefixed version
					// followed by the unprefixed version
					hooks = JQXLite.cssHooks[name] || JQXLite.cssHooks[origName];

					// If a hook was provided get the computed value from there
					if (hooks && "get" in hooks) {
						val = hooks.get(elem, true, extra);
					}

					// Otherwise, if a way to get the computed value exists, use that
					if (val === undefined) {
						val = curCSS(elem, name);
					}

					//convert "normal" to computed value
					if (val === "normal" && name in cssNormalTransform) {
						val = cssNormalTransform[name];
					}

					// Return, converting to number if forced or a qualifier was provided and val looks numeric
					if (numeric || extra !== undefined) {
						num = parseFloat(val);
						return numeric || JQXLite.isNumeric(num) ? num || 0 : val;
					}
					return val;
				},

				// A method for quickly swapping in/out CSS properties to get correct calculations
				swap: function (elem, options, callback) {
					var ret, name,
						old = {};

					// Remember the old values, and insert the new ones
					for (name in options) {
						old[name] = elem.style[name];
						elem.style[name] = options[name];
					}

					ret = callback.call(elem);

					// Revert the old values
					for (name in options) {
						elem.style[name] = old[name];
					}

					return ret;
				}
			});

			// NOTE: To any future maintainer, we've window.getComputedStyle
			// because jsdom on node.js will break without it.
			if (window.getComputedStyle) {
				curCSS = function (elem, name) {
					var ret, width, minWidth, maxWidth,
						computed = window.getComputedStyle(elem, null),
						style = elem.style;

					if (computed) {

						// getPropertyValue is only needed for .css('filter') in IE9, see #12537
						ret = computed.getPropertyValue(name) || computed[name];

						if (ret === "" && !JQXLite.contains(elem.ownerDocument, elem)) {
							ret = JQXLite.style(elem, name);
						}

						// A tribute to the "awesome hack by Dean Edwards"
						// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
						// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
						// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
						if (rnumnonpx.test(ret) && rmargin.test(name)) {
							width = style.width;
							minWidth = style.minWidth;
							maxWidth = style.maxWidth;

							style.minWidth = style.maxWidth = style.width = ret;
							ret = computed.width;

							style.width = width;
							style.minWidth = minWidth;
							style.maxWidth = maxWidth;
						}
					}

					return ret;
				};
			} else if (document.documentElement.currentStyle) {
				curCSS = function (elem, name) {
					var left, rsLeft,
						ret = elem.currentStyle && elem.currentStyle[name],
						style = elem.style;

					// Avoid setting ret to empty string here
					// so we don't default to auto
					if (ret == null && style && style[name]) {
						ret = style[name];
					}

					// From the awesome hack by Dean Edwards
					// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

					// If we're not dealing with a regular pixel number
					// but a number that has a weird ending, we need to convert it to pixels
					// but not position css attributes, as those are proportional to the parent element instead
					// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
					if (rnumnonpx.test(ret) && !rposition.test(name)) {

						// Remember the original values
						left = style.left;
						rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

						// Put in the new values to get a computed value out
						if (rsLeft) {
							elem.runtimeStyle.left = elem.currentStyle.left;
						}
						style.left = name === "fontSize" ? "1em" : ret;
						ret = style.pixelLeft + "px";

						// Revert the changed values
						style.left = left;
						if (rsLeft) {
							elem.runtimeStyle.left = rsLeft;
						}
					}

					return ret === "" ? "auto" : ret;
				};
			}

			function setPositiveNumber(elem, value, subtract) {
				var matches = rnumsplit.exec(value);
				return matches ?
					Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") :
					value;
			}

			function augmentWidthOrHeight(elem, name, extra, isBorderBox) {
				var i = extra === (isBorderBox ? "border" : "content") ?
					// If we already have the right measurement, avoid augmentation
					4 :
					// Otherwise initialize for horizontal or vertical properties
					name === "width" ? 1 : 0,

					val = 0;

				for (; i < 4; i += 2) {
					// both box models exclude margin, so add it if we want it
					if (extra === "margin") {
						// we use JQXLite.css instead of curCSS here
						// because of the reliableMarginRight CSS hook!
						val += JQXLite.css(elem, extra + cssExpand[i], true);
					}

					// From this point on we use curCSS for maximum performance (relevant in animations)
					if (isBorderBox) {
						// border-box includes padding, so remove it if we want content
						if (extra === "content") {
							val -= parseFloat(curCSS(elem, "padding" + cssExpand[i])) || 0;
						}

						// at this point, extra isn't border nor margin, so remove border
						if (extra !== "margin") {
							val -= parseFloat(curCSS(elem, "border" + cssExpand[i] + "Width")) || 0;
						}
					} else {
						// at this point, extra isn't content, so add padding
						val += parseFloat(curCSS(elem, "padding" + cssExpand[i])) || 0;

						// at this point, extra isn't content nor padding, so add border
						if (extra !== "padding") {
							val += parseFloat(curCSS(elem, "border" + cssExpand[i] + "Width")) || 0;
						}
					}
				}

				return val;
			}

			function getWidthOrHeight(elem, name, extra) {

				// Start with offset property, which is equivalent to the border-box value
				var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
					valueIsBorderBox = true,
					isBorderBox = JQXLite.support.boxSizing && JQXLite.css(elem, "boxSizing") === "border-box";

				// some non-html elements return undefined for offsetWidth, so check for null/undefined
				// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
				// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
				if (val <= 0 || val == null) {
					// Fall back to computed then uncomputed css if necessary
					val = curCSS(elem, name);
					if (val < 0 || val == null) {
						val = elem.style[name];
					}

					// Computed unit is not pixels. Stop here and return.
					if (rnumnonpx.test(val)) {
						return val;
					}

					// we need the check for style in case a browser which returns unreliable values
					// for getComputedStyle silently falls back to the reliable elem.style
					valueIsBorderBox = isBorderBox && (JQXLite.support.boxSizingReliable || val === elem.style[name]);

					// Normalize "", auto, and prepare for extra
					val = parseFloat(val) || 0;
				}

				// use the active box-sizing model to add/subtract irrelevant styles
				return (val +
					augmentWidthOrHeight(
						elem,
						name,
						extra || (isBorderBox ? "border" : "content"),
						valueIsBorderBox
					)
				) + "px";
			}


			// Try to determine the default display value of an element
			function css_defaultDisplay(nodeName) {
				if (elemdisplay[nodeName]) {
					return elemdisplay[nodeName];
				}

				var elem = JQXLite("<" + nodeName + ">").appendTo(document.body),
					display = elem.css("display");
				elem.remove();

				// If the simple way fails,
				// get element's real default display by attaching it to a temp iframe
				if (display === "none" || display === "") {
					// Use the already-created iframe if possible
					iframe = document.body.appendChild(
						iframe || JQXLite.extend(document.createElement("iframe"), {
							frameBorder: 0,
							width: 0,
							height: 0
						})
					);

					// Create a cacheable copy of the iframe document on first call.
					// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
					// document to it; WebKit & Firefox won't allow reusing the iframe document.
					if (!iframeDoc || !iframe.createElement) {
						iframeDoc = (iframe.contentWindow || iframe.contentDocument).document;
						iframeDoc.write("<!doctype html><html><body>");
						iframeDoc.close();
					}

					elem = iframeDoc.body.appendChild(iframeDoc.createElement(nodeName));

					display = curCSS(elem, "display");
					document.body.removeChild(iframe);
				}

				// Store the correct default display
				elemdisplay[nodeName] = display;

				return display;
			}

			JQXLite.each(["height", "width"], function (i, name) {
				JQXLite.cssHooks[name] = {
					get: function (elem, computed, extra) {
						if (computed) {
							// certain elements can have dimension info if we invisibly show them
							// however, it must have a current display style that would benefit from this
							if (elem.offsetWidth === 0 && rdisplayswap.test(curCSS(elem, "display"))) {
								return JQXLite.swap(elem, cssShow, function () {
									return getWidthOrHeight(elem, name, extra);
								});
							} else {
								return getWidthOrHeight(elem, name, extra);
							}
						}
					},

					set: function (elem, value, extra) {
						return setPositiveNumber(elem, value, extra ?
							augmentWidthOrHeight(
								elem,
								name,
								extra,
								JQXLite.support.boxSizing && JQXLite.css(elem, "boxSizing") === "border-box"
							) : 0
						);
					}
				};
			});

			if (!JQXLite.support.opacity) {
				JQXLite.cssHooks.opacity = {
					get: function (elem, computed) {
						// IE uses filters for opacity
						return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ?
							(0.01 * parseFloat(RegExp.$1)) + "" :
							computed ? "1" : "";
					},

					set: function (elem, value) {
						var style = elem.style,
							currentStyle = elem.currentStyle,
							opacity = JQXLite.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
							filter = currentStyle && currentStyle.filter || style.filter || "";

						// IE has trouble with opacity if it does not have layout
						// Force it by setting the zoom level
						style.zoom = 1;

						// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
						if (value >= 1 && JQXLite.trim(filter.replace(ralpha, "")) === "" &&
							style.removeAttribute) {

							// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
							// if "filter:" is present at all, clearType is disabled, we want to avoid this
							// style.removeAttribute is IE Only, but so apparently is this code path...
							style.removeAttribute("filter");

							// if there there is no filter style applied in a css rule, we are done
							if (currentStyle && !currentStyle.filter) {
								return;
							}
						}

						// otherwise, set new filter values
						style.filter = ralpha.test(filter) ?
							filter.replace(ralpha, opacity) :
							filter + " " + opacity;
					}
				};
			}

			// These hooks cannot be added until DOM ready because the support test
			// for it is not run until after DOM ready
			JQXLite(function () {
				if (!JQXLite.support.reliableMarginRight) {
					JQXLite.cssHooks.marginRight = {
						get: function (elem, computed) {
							// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
							// Work around by temporarily setting element display to inline-block
							return JQXLite.swap(elem, { "display": "inline-block" }, function () {
								if (computed) {
									return curCSS(elem, "marginRight");
								}
							});
						}
					};
				}

				// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
				// getComputedStyle returns percent when specified for top/left/bottom/right
				// rather than make the css module depend on the offset module, we just check for it here
				if (!JQXLite.support.pixelPosition && JQXLite.fn.position) {
					JQXLite.each(["top", "left"], function (i, prop) {
						JQXLite.cssHooks[prop] = {
							get: function (elem, computed) {
								if (computed) {
									var ret = curCSS(elem, prop);
									// if curCSS returns percentage, fallback to offset
									return rnumnonpx.test(ret) ? JQXLite(elem).position()[prop] + "px" : ret;
								}
							}
						};
					});
				}

			});

			if (JQXLite.expr && JQXLite.expr.filters) {
				JQXLite.expr.filters.hidden = function (elem) {
					return (elem.offsetWidth === 0 && elem.offsetHeight === 0) || (!JQXLite.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || curCSS(elem, "display")) === "none");
				};

				JQXLite.expr.filters.visible = function (elem) {
					return !JQXLite.expr.filters.hidden(elem);
				};
			}

			// These hooks are used by animate to expand properties
			JQXLite.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function (prefix, suffix) {
				JQXLite.cssHooks[prefix + suffix] = {
					expand: function (value) {
						var i,

							// assumes a single number if not a string
							parts = typeof value === "string" ? value.split(" ") : [value],
							expanded = {};

						for (i = 0; i < 4; i++) {
							expanded[prefix + cssExpand[i] + suffix] =
								parts[i] || parts[i - 2] || parts[0];
						}

						return expanded;
					}
				};

				if (!rmargin.test(prefix)) {
					JQXLite.cssHooks[prefix + suffix].set = setPositiveNumber;
				}
			});
			var r20 = /%20/g,
				rbracket = /\[\]$/,
				rCRLF = /\r?\n/g,
				rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
				rselectTextarea = /^(?:select|textarea)/i;

			JQXLite.fn.extend({
				serialize: function () {
					return JQXLite.param(this.serializeArray());
				},
				serializeArray: function () {
					return this.map(function () {
						return this.elements ? JQXLite.makeArray(this.elements) : this;
					})
						.filter(function () {
							return this.name && !this.disabled &&
								(this.checked || rselectTextarea.test(this.nodeName) ||
									rinput.test(this.type));
						})
						.map(function (i, elem) {
							var val = JQXLite(this).val();

							return val == null ?
								null :
								JQXLite.isArray(val) ?
									JQXLite.map(val, function (val, i) {
										return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
									}) :
									{ name: elem.name, value: val.replace(rCRLF, "\r\n") };
						}).get();
				}
			});

			//Serialize an array of form elements or a set of
			//key/values into a query string
			JQXLite.param = function (a, traditional) {
				var prefix,
					s = [],
					add = function (key, value) {
						// If value is a function, invoke it and return its value
						value = JQXLite.isFunction(value) ? value() : (value == null ? "" : value);
						s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
					};

				// Set traditional to true for JQXLite <= 1.3.2 behavior.
				if (traditional === undefined) {
					traditional = JQXLite.ajaxSettings && JQXLite.ajaxSettings.traditional;
				}

				// If an array was passed in, assume that it is an array of form elements.
				if (JQXLite.isArray(a) || (a.jqx && !JQXLite.isPlainObject(a))) {
					// Serialize the form elements
					JQXLite.each(a, function () {
						add(this.name, this.value);
					});

				} else {
					// If traditional, encode the "old" way (the way 1.3.2 or older
					// did it), otherwise encode params recursively.
					for (prefix in a) {
						buildParams(prefix, a[prefix], traditional, add);
					}
				}

				// Return the resulting serialization
				return s.join("&").replace(r20, "+");
			};

			function buildParams(prefix, obj, traditional, add) {
				var name;

				if (JQXLite.isArray(obj)) {
					// Serialize array item.
					JQXLite.each(obj, function (i, v) {
						if (traditional || rbracket.test(prefix)) {
							// Treat each array item as a scalar.
							add(prefix, v);

						} else {
							// If array item is non-scalar (array or object), encode its
							// numeric index to resolve deserialization ambiguity issues.
							// Note that rack (as of 1.0.0) can't currently deserialize
							// nested arrays properly, and attempting to do so may cause
							// a server error. Possible fixes are to modify rack's
							// deserialization algorithm or to provide an option or flag
							// to force array serialization to be shallow.
							buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
						}
					});

				} else if (!traditional && JQXLite.type(obj) === "object") {
					// Serialize object item.
					for (name in obj) {
						buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
					}

				} else {
					// Serialize scalar item.
					add(prefix, obj);
				}
			}


			// Create transport if the browser can provide an xhr
			if (JQXLite.support.ajax) {

				JQXLite.ajaxTransport(function (s) {
					// Cross domain only allowed if supported through XMLHttpRequest
					if (!s.crossDomain || JQXLite.support.cors) {

						var callback;

						return {
							send: function (headers, complete) {

								// Get a new xhr
								var handle, i,
									xhr = s.xhr();

								// Open the socket
								// Passing null username, generates a login popup on Opera (#2865)
								if (s.username) {
									xhr.open(s.type, s.url, s.async, s.username, s.password);
								} else {
									xhr.open(s.type, s.url, s.async);
								}

								// Apply custom fields if provided
								if (s.xhrFields) {
									for (i in s.xhrFields) {
										xhr[i] = s.xhrFields[i];
									}
								}

								// Override mime type if needed
								if (s.mimeType && xhr.overrideMimeType) {
									xhr.overrideMimeType(s.mimeType);
								}

								// X-Requested-With header
								// For cross-domain requests, seeing as conditions for a preflight are
								// akin to a jigsaw puzzle, we simply never set it to be sure.
								// (it can always be set on a per-request basis or even using ajaxSetup)
								// For same-domain requests, won't change header if already provided.
								if (!s.crossDomain && !headers["X-Requested-With"]) {
									headers["X-Requested-With"] = "XMLHttpRequest";
								}

								// Need an extra try/catch for cross domain requests in Firefox 3
								try {
									for (i in headers) {
										xhr.setRequestHeader(i, headers[i]);
									}
								} catch (_) { }

								// Do send the request
								// This may raise an exception which is actually
								// handled in JQXLite.ajax (so no try/catch here)
								xhr.send((s.hasContent && s.data) || null);

								// Listener
								callback = function (_, isAbort) {

									var status,
										statusText,
										responseHeaders,
										responses,
										xml;

									// Firefox throws exceptions when accessing properties
									// of an xhr when a network error occurred
									// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
									try {

										// Was never called and is aborted or complete
										if (callback && (isAbort || xhr.readyState === 4)) {

											// Only called once
											callback = undefined;

											// Do not keep as active anymore
											if (handle) {
												xhr.onreadystatechange = JQXLite.noop;
												if (xhrOnUnloadAbort) {
													delete xhrCallbacks[handle];
												}
											}

											// If it's an abort
											if (isAbort) {
												// Abort it manually if needed
												if (xhr.readyState !== 4) {
													xhr.abort();
												}
											} else {
												status = xhr.status;
												responseHeaders = xhr.getAllResponseHeaders();
												responses = {};
												xml = xhr.responseXML;

												// Construct response list
												if (xml && xml.documentElement /* #4958 */) {
													responses.xml = xml;
												}

												// When requesting binary data, IE6-9 will throw an exception
												// on any attempt to access responseText (#11426)
												try {
													responses.text = xhr.responseText;
												} catch (e) {
												}

												// Firefox throws an exception when accessing
												// statusText for faulty cross-domain requests
												try {
													statusText = xhr.statusText;
												} catch (e) {
													// We normalize with Webkit giving an empty statusText
													statusText = "";
												}

												// Filter status for non standard behaviors

												// If the request is local and we have data: assume a success
												// (success with no data won't get notified, that's the best we
												// can do given current implementations)
												if (!status && s.isLocal && !s.crossDomain) {
													status = responses.text ? 200 : 404;
													// IE - #1450: sometimes returns 1223 when it should be 204
												} else if (status === 1223) {
													status = 204;
												}
											}
										}
									} catch (firefoxAccessException) {
										if (!isAbort) {
											complete(-1, firefoxAccessException);
										}
									}

									// Call complete if needed
									if (responses) {
										complete(status, statusText, responses, responseHeaders);
									}
								};

								if (!s.async) {
									// if we're in sync mode we fire the callback
									callback();
								} else if (xhr.readyState === 4) {
									// (IE6 & IE7) if it's in cache and has been
									// retrieved directly we need to fire the callback
									setTimeout(callback, 0);
								} else {
									handle = ++xhrId;
									if (xhrOnUnloadAbort) {
										// Create the active xhrs callbacks list if needed
										// and attach the unload handler
										if (!xhrCallbacks) {
											xhrCallbacks = {};
											JQXLite(window).unload(xhrOnUnloadAbort);
										}
										// Add to list of active xhrs callbacks
										xhrCallbacks[handle] = callback;
									}
									xhr.onreadystatechange = callback;
								}
							},

							abort: function () {
								if (callback) {
									callback(0, 1);
								}
							}
						};
					}
				});
			}
			var fxNow, timerId,
				rfxtypes = /^(?:toggle|show|hide)$/,
				rfxnum = new RegExp("^(?:([-+])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
				rrun = /queueHooks$/,
				animationPrefilters = [defaultPrefilter],
				tweeners = {
					"*": [function (prop, value) {
						var end, unit,
							tween = this.createTween(prop, value),
							parts = rfxnum.exec(value),
							target = tween.cur(),
							start = +target || 0,
							scale = 1,
							maxIterations = 20;

						if (parts) {
							end = +parts[2];
							unit = parts[3] || (JQXLite.cssNumber[prop] ? "" : "px");

							// We need to compute starting value
							if (unit !== "px" && start) {
								// Iteratively approximate from a nonzero starting point
								// Prefer the current property, because this process will be trivial if it uses the same units
								// Fallback to end or a simple constant
								start = JQXLite.css(tween.elem, prop, true) || end || 1;

								do {
									// If previous iteration zeroed out, double until we get *something*
									// Use a string for doubling factor so we don't accidentally see scale as unchanged below
									scale = scale || ".5";

									// Adjust and apply
									start = start / scale;
									JQXLite.style(tween.elem, prop, start + unit);

									// Update scale, tolerating zero or NaN from tween.cur()
									// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
								} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
							}

							tween.unit = unit;
							tween.start = start;
							// If a +=/-= token was provided, we're doing a relative animation
							tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
						}
						return tween;
					}]
				};

			// Animations created synchronously will run synchronously
			function createFxNow() {
				setTimeout(function () {
					fxNow = undefined;
				}, 0);
				return (fxNow = JQXLite.now());
			}

			function createTweens(animation, props) {
				JQXLite.each(props, function (prop, value) {
					var collection = (tweeners[prop] || []).concat(tweeners["*"]),
						index = 0,
						length = collection.length;
					for (; index < length; index++) {
						if (collection[index].call(animation, prop, value)) {

							// we're done with this property
							return;
						}
					}
				});
			}

			function Animation(elem, properties, options) {
				var result,
					index = 0,
					tweenerIndex = 0,
					length = animationPrefilters.length,
					deferred = JQXLite.Deferred().always(function () {
						// don't match elem in the :animated selector
						delete tick.elem;
					}),
					tick = function () {
						var currentTime = fxNow || createFxNow(),
							remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
							// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
							temp = remaining / animation.duration || 0,
							percent = 1 - temp,
							index = 0,
							length = animation.tweens.length;

						for (; index < length; index++) {
							animation.tweens[index].run(percent);
						}

						deferred.notifyWith(elem, [animation, percent, remaining]);

						if (percent < 1 && length) {
							return remaining;
						} else {
							deferred.resolveWith(elem, [animation]);
							return false;
						}
					},
					animation = deferred.promise({
						elem: elem,
						props: JQXLite.extend({}, properties),
						opts: JQXLite.extend(true, { specialEasing: {} }, options),
						originalProperties: properties,
						originalOptions: options,
						startTime: fxNow || createFxNow(),
						duration: options.duration,
						tweens: [],
						createTween: function (prop, end, easing) {
							var tween = JQXLite.Tween(elem, animation.opts, prop, end,
								animation.opts.specialEasing[prop] || animation.opts.easing);
							animation.tweens.push(tween);
							return tween;
						},
						stop: function (gotoEnd) {
							var index = 0,
								// if we are going to the end, we want to run all the tweens
								// otherwise we skip this part
								length = gotoEnd ? animation.tweens.length : 0;

							for (; index < length; index++) {
								animation.tweens[index].run(1);
							}

							// resolve when we played the last frame
							// otherwise, reject
							if (gotoEnd) {
								deferred.resolveWith(elem, [animation, gotoEnd]);
							} else {
								deferred.rejectWith(elem, [animation, gotoEnd]);
							}
							return this;
						}
					}),
					props = animation.props;

				propFilter(props, animation.opts.specialEasing);

				for (; index < length; index++) {
					result = animationPrefilters[index].call(animation, elem, props, animation.opts);
					if (result) {
						return result;
					}
				}

				createTweens(animation, props);

				if (JQXLite.isFunction(animation.opts.start)) {
					animation.opts.start.call(elem, animation);
				}

				JQXLite.fx.timer(
					JQXLite.extend(tick, {
						anim: animation,
						queue: animation.opts.queue,
						elem: elem
					})
				);

				// attach callbacks from options
				return animation.progress(animation.opts.progress)
					.done(animation.opts.done, animation.opts.complete)
					.fail(animation.opts.fail)
					.always(animation.opts.always);
			}

			function propFilter(props, specialEasing) {
				var index, name, easing, value, hooks;

				// camelCase, specialEasing and expand cssHook pass
				for (index in props) {
					name = JQXLite.camelCase(index);
					easing = specialEasing[name];
					value = props[index];
					if (JQXLite.isArray(value)) {
						easing = value[1];
						value = props[index] = value[0];
					}

					if (index !== name) {
						props[name] = value;
						delete props[index];
					}

					hooks = JQXLite.cssHooks[name];
					if (hooks && "expand" in hooks) {
						value = hooks.expand(value);
						delete props[name];

						// not quite $.extend, this wont overwrite keys already present.
						// also - reusing 'index' from above because we have the correct "name"
						for (index in value) {
							if (!(index in props)) {
								props[index] = value[index];
								specialEasing[index] = easing;
							}
						}
					} else {
						specialEasing[name] = easing;
					}
				}
			}

			JQXLite.Animation = JQXLite.extend(Animation, {

				tweener: function (props, callback) {
					if (JQXLite.isFunction(props)) {
						callback = props;
						props = ["*"];
					} else {
						props = props.split(" ");
					}

					var prop,
						index = 0,
						length = props.length;

					for (; index < length; index++) {
						prop = props[index];
						tweeners[prop] = tweeners[prop] || [];
						tweeners[prop].unshift(callback);
					}
				},

				prefilter: function (callback, prepend) {
					if (prepend) {
						animationPrefilters.unshift(callback);
					} else {
						animationPrefilters.push(callback);
					}
				}
			});

			function defaultPrefilter(elem, props, opts) {
				var index, prop, value, length, dataShow, toggle, tween, hooks, oldfire,
					anim = this,
					style = elem.style,
					orig = {},
					handled = [],
					hidden = elem.nodeType && isHidden(elem);

				// handle queue: false promises
				if (!opts.queue) {
					hooks = JQXLite._queueHooks(elem, "fx");
					if (hooks.unqueued == null) {
						hooks.unqueued = 0;
						oldfire = hooks.empty.fire;
						hooks.empty.fire = function () {
							if (!hooks.unqueued) {
								oldfire();
							}
						};
					}
					hooks.unqueued++;

					anim.always(function () {
						// doing this makes sure that the complete handler will be called
						// before this completes
						anim.always(function () {
							hooks.unqueued--;
							if (!JQXLite.queue(elem, "fx").length) {
								hooks.empty.fire();
							}
						});
					});
				}

				// height/width overflow pass
				if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
					// Make sure that nothing sneaks out
					// Record all 3 overflow attributes because IE does not
					// change the overflow attribute when overflowX and
					// overflowY are set to the same value
					opts.overflow = [style.overflow, style.overflowX, style.overflowY];

					// Set display property to inline-block for height/width
					// animations on inline elements that are having width/height animated
					if (JQXLite.css(elem, "display") === "inline" &&
						JQXLite.css(elem, "float") === "none") {

						// inline-level elements accept inline-block;
						// block-level elements need to be inline with layout
						if (!JQXLite.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
							style.display = "inline-block";

						} else {
							style.zoom = 1;
						}
					}
				}

				if (opts.overflow) {
					style.overflow = "hidden";
					if (!JQXLite.support.shrinkWrapBlocks) {
						anim.done(function () {
							style.overflow = opts.overflow[0];
							style.overflowX = opts.overflow[1];
							style.overflowY = opts.overflow[2];
						});
					}
				}


				// show/hide pass
				for (index in props) {
					value = props[index];
					if (rfxtypes.exec(value)) {
						delete props[index];
						toggle = toggle || value === "toggle";
						if (value === (hidden ? "hide" : "show")) {
							continue;
						}
						handled.push(index);
					}
				}

				length = handled.length;
				if (length) {
					dataShow = JQXLite._data(elem, "fxshow") || JQXLite._data(elem, "fxshow", {});
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}

					// store state if its toggle - enables .stop().toggle() to "reverse"
					if (toggle) {
						dataShow.hidden = !hidden;
					}
					if (hidden) {
						JQXLite(elem).show();
					} else {
						anim.done(function () {
							JQXLite(elem).hide();
						});
					}
					anim.done(function () {
						var prop;
						JQXLite.removeData(elem, "fxshow", true);
						for (prop in orig) {
							JQXLite.style(elem, prop, orig[prop]);
						}
					});
					for (index = 0; index < length; index++) {
						prop = handled[index];
						tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
						orig[prop] = dataShow[prop] || JQXLite.style(elem, prop);

						if (!(prop in dataShow)) {
							dataShow[prop] = tween.start;
							if (hidden) {
								tween.end = tween.start;
								tween.start = prop === "width" || prop === "height" ? 1 : 0;
							}
						}
					}
				}
			}

			function Tween(elem, options, prop, end, easing) {
				return new Tween.prototype.init(elem, options, prop, end, easing);
			}
			JQXLite.Tween = Tween;

			Tween.prototype = {
				constructor: Tween,
				init: function (elem, options, prop, end, easing, unit) {
					this.elem = elem;
					this.prop = prop;
					this.easing = easing || "swing";
					this.options = options;
					this.start = this.now = this.cur();
					this.end = end;
					this.unit = unit || (JQXLite.cssNumber[prop] ? "" : "px");
				},
				cur: function () {
					var hooks = Tween.propHooks[this.prop];

					return hooks && hooks.get ?
						hooks.get(this) :
						Tween.propHooks._default.get(this);
				},
				run: function (percent) {
					var eased,
						hooks = Tween.propHooks[this.prop];

					if (this.options.duration) {
						this.pos = eased = JQXLite.easing[this.easing](
							percent, this.options.duration * percent, 0, 1, this.options.duration
						);
					} else {
						this.pos = eased = percent;
					}
					this.now = (this.end - this.start) * eased + this.start;

					if (this.options.step) {
						this.options.step.call(this.elem, this.now, this);
					}

					if (hooks && hooks.set) {
						hooks.set(this);
					} else {
						Tween.propHooks._default.set(this);
					}
					return this;
				}
			};

			Tween.prototype.init.prototype = Tween.prototype;

			Tween.propHooks = {
				_default: {
					get: function (tween) {
						var result;

						if (tween.elem[tween.prop] != null &&
							(!tween.elem.style || tween.elem.style[tween.prop] == null)) {
							return tween.elem[tween.prop];
						}

						// passing any value as a 4th parameter to .css will automatically
						// attempt a parseFloat and fallback to a string if the parse fails
						// so, simple values such as "10px" are parsed to Float.
						// complex values such as "rotate(1rad)" are returned as is.
						result = JQXLite.css(tween.elem, tween.prop, false, "");
						// Empty strings, null, undefined and "auto" are converted to 0.
						return !result || result === "auto" ? 0 : result;
					},
					set: function (tween) {
						// use step hook for back compat - use cssHook if its there - use .style if its
						// available and use plain properties where available
						if (JQXLite.fx.step[tween.prop]) {
							JQXLite.fx.step[tween.prop](tween);
						} else if (tween.elem.style && (tween.elem.style[JQXLite.cssProps[tween.prop]] != null || JQXLite.cssHooks[tween.prop])) {
							JQXLite.style(tween.elem, tween.prop, tween.now + tween.unit);
						} else {
							tween.elem[tween.prop] = tween.now;
						}
					}
				}
			};

			// Remove in 2.0 - this supports IE8's panic based approach
			// to setting things on disconnected nodes

			Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
				set: function (tween) {
					if (tween.elem.nodeType && tween.elem.parentNode) {
						tween.elem[tween.prop] = tween.now;
					}
				}
			};

			JQXLite.each(["toggle", "show", "hide"], function (i, name) {
				var cssFn = JQXLite.fn[name];
				JQXLite.fn[name] = function (speed, easing, callback) {
					return speed == null || typeof speed === "boolean" ||
						// special check for .toggle( handler, handler, ... )
						(!i && JQXLite.isFunction(speed) && JQXLite.isFunction(easing)) ?
						cssFn.apply(this, arguments) :
						this.animate(genFx(name, true), speed, easing, callback);
				};
			});

			JQXLite.fn.extend({
				fadeTo: function (speed, to, easing, callback) {

					// show any hidden elements after setting opacity to 0
					return this.filter(isHidden).css("opacity", 0).show()

						// animate to the value specified
						.end().animate({ opacity: to }, speed, easing, callback);
				},
				animate: function (prop, speed, easing, callback) {
					var empty = JQXLite.isEmptyObject(prop),
						optall = JQXLite.speed(speed, easing, callback),
						doAnimation = function () {
							// Operate on a copy of prop so per-property easing won't be lost
							var anim = Animation(this, JQXLite.extend({}, prop), optall);

							// Empty animations resolve immediately
							if (empty) {
								anim.stop(true);
							}
						};

					return empty || optall.queue === false ?
						this.each(doAnimation) :
						this.queue(optall.queue, doAnimation);
				},
				stop: function (type, clearQueue, gotoEnd) {
					var stopQueue = function (hooks) {
						var stop = hooks.stop;
						delete hooks.stop;
						stop(gotoEnd);
					};

					if (typeof type !== "string") {
						gotoEnd = clearQueue;
						clearQueue = type;
						type = undefined;
					}
					if (clearQueue && type !== false) {
						this.queue(type || "fx", []);
					}

					return this.each(function () {
						var dequeue = true,
							index = type != null && type + "queueHooks",
							timers = JQXLite.timers,
							data = JQXLite._data(this);

						if (index) {
							if (data[index] && data[index].stop) {
								stopQueue(data[index]);
							}
						} else {
							for (index in data) {
								if (data[index] && data[index].stop && rrun.test(index)) {
									stopQueue(data[index]);
								}
							}
						}

						for (index = timers.length; index--;) {
							if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
								timers[index].anim.stop(gotoEnd);
								dequeue = false;
								timers.splice(index, 1);
							}
						}

						// start the next in the queue if the last step wasn't forced
						// timers currently will call their complete callbacks, which will dequeue
						// but only if they were gotoEnd
						if (dequeue || !gotoEnd) {
							JQXLite.dequeue(this, type);
						}
					});
				}
			});

			// Generate parameters to create a standard animation
			function genFx(type, includeWidth) {
				var which,
					attrs = { height: type },
					i = 0;

				// if we include width, step value is 1 to do all cssExpand values,
				// if we don't include width, step value is 2 to skip over Left and Right
				includeWidth = includeWidth ? 1 : 0;
				for (; i < 4; i += 2 - includeWidth) {
					which = cssExpand[i];
					attrs["margin" + which] = attrs["padding" + which] = type;
				}

				if (includeWidth) {
					attrs.opacity = attrs.width = type;
				}

				return attrs;
			}

			// Generate shortcuts for custom animations
			JQXLite.each({
				slideDown: genFx("show"),
				slideUp: genFx("hide"),
				slideToggle: genFx("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" }
			}, function (name, props) {
				JQXLite.fn[name] = function (speed, easing, callback) {
					return this.animate(props, speed, easing, callback);
				};
			});

			JQXLite.speed = function (speed, easing, fn) {
				var opt = speed && typeof speed === "object" ? JQXLite.extend({}, speed) : {
					complete: fn || !fn && easing ||
						JQXLite.isFunction(speed) && speed,
					duration: speed,
					easing: fn && easing || easing && !JQXLite.isFunction(easing) && easing
				};

				opt.duration = JQXLite.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
					opt.duration in JQXLite.fx.speeds ? JQXLite.fx.speeds[opt.duration] : JQXLite.fx.speeds._default;

				// normalize opt.queue - true/undefined/null -> "fx"
				if (opt.queue == null || opt.queue === true) {
					opt.queue = "fx";
				}

				// Queueing
				opt.old = opt.complete;

				opt.complete = function () {
					if (JQXLite.isFunction(opt.old)) {
						opt.old.call(this);
					}

					if (opt.queue) {
						JQXLite.dequeue(this, opt.queue);
					}
				};

				return opt;
			};

			JQXLite.easing = {
				linear: function (p) {
					return p;
				},
				swing: function (p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				}
			};

			JQXLite.timers = [];
			JQXLite.fx = Tween.prototype.init;
			JQXLite.fx.tick = function () {
				var timer,
					timers = JQXLite.timers,
					i = 0;

				fxNow = JQXLite.now();

				for (; i < timers.length; i++) {
					timer = timers[i];
					// Checks the timer has not already been removed
					if (!timer() && timers[i] === timer) {
						timers.splice(i--, 1);
					}
				}

				if (!timers.length) {
					JQXLite.fx.stop();
				}
				fxNow = undefined;
			};

			JQXLite.fx.timer = function (timer) {
				if (timer() && JQXLite.timers.push(timer) && !timerId) {
					timerId = setInterval(JQXLite.fx.tick, JQXLite.fx.interval);
				}
			};

			JQXLite.fx.interval = 13;

			JQXLite.fx.stop = function () {
				clearInterval(timerId);
				timerId = null;
			};

			JQXLite.fx.speeds = {
				slow: 600,
				fast: 200,
				// Default speed
				_default: 400
			};

			// Back Compat <1.8 extension point
			JQXLite.fx.step = {};

			if (JQXLite.expr && JQXLite.expr.filters) {
				JQXLite.expr.filters.animated = function (elem) {
					return JQXLite.grep(JQXLite.timers, function (fn) {
						return elem === fn.elem;
					}).length;
				};
			}
			var rroot = /^(?:body|html)$/i;

			JQXLite.fn.offset = function (options) {
				if (arguments.length) {
					return options === undefined ?
						this :
						this.each(function (i) {
							JQXLite.offset.setOffset(this, options, i);
						});
				}

				var docElem, body, win, clientTop, clientLeft, scrollTop, scrollLeft,
					box = { top: 0, left: 0 },
					elem = this[0],
					doc = elem && elem.ownerDocument;

				if (!doc) {
					return;
				}

				if ((body = doc.body) === elem) {
					return JQXLite.offset.bodyOffset(elem);
				}

				docElem = doc.documentElement;

				// Make sure it's not a disconnected DOM node
				if (!JQXLite.contains(docElem, elem)) {
					return box;
				}

				// If we don't have gBCR, just use 0,0 rather than error
				// BlackBerry 5, iOS 3 (original iPhone)
				if (typeof elem.getBoundingClientRect !== "undefined") {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				clientTop = docElem.clientTop || body.clientTop || 0;
				clientLeft = docElem.clientLeft || body.clientLeft || 0;
				scrollTop = win.pageYOffset || docElem.scrollTop;
				scrollLeft = win.pageXOffset || docElem.scrollLeft;
				return {
					top: box.top + scrollTop - clientTop,
					left: box.left + scrollLeft - clientLeft
				};
			};

			JQXLite.offset = {

				bodyOffset: function (body) {
					var top = body.offsetTop,
						left = body.offsetLeft;

					if (JQXLite.support.doesNotIncludeMarginInBodyOffset) {
						top += parseFloat(JQXLite.css(body, "marginTop")) || 0;
						left += parseFloat(JQXLite.css(body, "marginLeft")) || 0;
					}

					return { top: top, left: left };
				},

				setOffset: function (elem, options, i) {
					var position = JQXLite.css(elem, "position");

					// set position first, in-case top/left are set even on static elem
					if (position === "static") {
						elem.style.position = "relative";
					}

					var curElem = JQXLite(elem),
						curOffset = curElem.offset(),
						curCSSTop = JQXLite.css(elem, "top"),
						curCSSLeft = JQXLite.css(elem, "left"),
						calculatePosition = (position === "absolute" || position === "fixed") && JQXLite.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
						props = {}, curPosition = {}, curTop, curLeft;

					// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
					if (calculatePosition) {
						curPosition = curElem.position();
						curTop = curPosition.top;
						curLeft = curPosition.left;
					} else {
						curTop = parseFloat(curCSSTop) || 0;
						curLeft = parseFloat(curCSSLeft) || 0;
					}

					if (JQXLite.isFunction(options)) {
						options = options.call(elem, i, curOffset);
					}

					if (options.top != null) {
						props.top = (options.top - curOffset.top) + curTop;
					}
					if (options.left != null) {
						props.left = (options.left - curOffset.left) + curLeft;
					}

					if ("using" in options) {
						options.using.call(elem, props);
					} else {
						curElem.css(props);
					}
				}
			};


			JQXLite.fn.extend({
				isRendered: function () {
					var that = this;
					var element = this[0];
					if (element.parentNode == null || (element.offsetWidth === 0 || element.offsetHeight === 0)) {
						return false;
					}

					return true;
				},

				getSizeFromStyle: function () {
					var that = this;
					var width = null;
					var height = null;
					var element = this[0];
					var computedStyle;

					if (element.style.width) {
						width = element.style.width;
					}
					if (element.style.height) {
						height = element.style.height;
					}

					if (window.getComputedStyle) {
						computedStyle = getComputedStyle(element, null);
					}
					else {
						computedStyle = element.currentStyle;
					}

					if (computedStyle) {
						if (computedStyle.width) {
							width = computedStyle.width;
						}
						if (computedStyle.height) {
							height = computedStyle.height;
						}
					}
					if (width === '0px') width = 0;
					if (height === '0px') height = 0;
					if (width === null) width = 0;
					if (height === null) height = 0;

					return { width: width, height: height };
				},

				initAnimate: function () {

				},

				sizeStyleChanged: function (resizeFn) {
					var that = this;

					var watchedElementData;

					var checkForChanges = function (mutations) {
						var data = watchedElementData;
						if (mutations && mutations[0] && mutations[0].attributeName === 'style' && mutations[0].type === 'attributes') {
							if (data.element.offsetWidth !== data.offsetWidth ||
								data.element.offsetHeight !== data.offsetHeight) {
								data.offsetWidth = data.element.offsetWidth;
								data.offsetHeight = data.element.offsetHeight;
								if (that.isRendered()) {
									data.callback();
								}
							}
						}
					}

					watchedElementData = {
						element: that[0],
						offsetWidth: that[0].offsetWidth,
						offsetHeight: that[0].offsetHeight,
						callback: resizeFn
					};

					try {
						if (!that.elementStyleObserver) {
							that.elementStyleObserver = new MutationObserver(checkForChanges);
							that.elementStyleObserver.observe(that[0], {
								attributes: true,
								childList: false,
								characterData: false
							});

						}
					}
					catch (error) { }
				},

				position: function () {
					if (!this[0]) {
						return;
					}

					var elem = this[0],

						// Get *real* offsetParent
						offsetParent = this.offsetParent(),

						// Get correct offsets
						offset = this.offset(),
						parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

					// Subtract element margins
					// note: when an element has margin: auto the offsetLeft and marginLeft
					// are the same in Safari causing offset.left to incorrectly be 0
					offset.top -= parseFloat(JQXLite.css(elem, "marginTop")) || 0;
					offset.left -= parseFloat(JQXLite.css(elem, "marginLeft")) || 0;

					// Add offsetParent borders
					parentOffset.top += parseFloat(JQXLite.css(offsetParent[0], "borderTopWidth")) || 0;
					parentOffset.left += parseFloat(JQXLite.css(offsetParent[0], "borderLeftWidth")) || 0;

					// Subtract the two offsets
					return {
						top: offset.top - parentOffset.top,
						left: offset.left - parentOffset.left
					};
				},

				offsetParent: function () {
					return this.map(function () {
						var offsetParent = this.offsetParent || document.body;
						while (offsetParent && (!rroot.test(offsetParent.nodeName) && JQXLite.css(offsetParent, "position") === "static")) {
							offsetParent = offsetParent.offsetParent;
						}
						return offsetParent || document.body;
					});
				}
			});
			// Create scrollLeft and scrollTop methods
			JQXLite.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
				var top = /Y/.test(prop);

				JQXLite.fn[method] = function (val) {
					return JQXLite.access(this, function (elem, method, val) {
						var win = getWindow(elem);

						if (val === undefined) {
							return win ? (prop in win) ? win[prop] :
								win.document.documentElement[method] :
								elem[method];
						}

						if (win) {
							win.scrollTo(
								!top ? val : JQXLite(win).scrollLeft(),
								top ? val : JQXLite(win).scrollTop()
							);

						} else {
							elem[method] = val;
						}
					}, method, val, arguments.length, null);
				};
			});

			function getWindow(elem) {
				return JQXLite.isWindow(elem) ?
					elem :
					elem.nodeType === 9 ?
						elem.defaultView || elem.parentWindow :
						false;
			}
			// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
			JQXLite.each({ Height: "height", Width: "width" }, function (name, type) {
				JQXLite.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
					// margin is only for outerHeight, outerWidth
					JQXLite.fn[funcName] = function (margin, value) {
						var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
							extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

						return JQXLite.access(this, function (elem, type, value) {
							var doc;

							if (JQXLite.isWindow(elem)) {
								// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
								// isn't a whole lot we can do. See pull request at this URL for discussion:
								// https://github.com/jqx/jqx/pull/764
								return elem.document.documentElement["client" + name];
							}

							// Get document width or height
							if (elem.nodeType === 9) {
								doc = elem.documentElement;

								// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
								// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
								return Math.max(
									elem.body["scroll" + name], doc["scroll" + name],
									elem.body["offset" + name], doc["offset" + name],
									doc["client" + name]
								);
							}

							return value === undefined ?
								// Get width or height on the element, requesting but not forcing parseFloat
								JQXLite.css(elem, type, value, extra) :

								// Set width or height on the element
								JQXLite.style(elem, type, value, extra);
						}, type, chainable ? margin : undefined, chainable, null);
					};
				});
			});
			// Expose JQXLite to the global object
			window.JQXLite = window.jqxHelper = JQXLite;

			// Expose JQXLite as an AMD module, but only for AMD loaders that
			// understand the issues with loading multiple versions of JQXLite
			// in a page that all might call define(). The loader will indicate
			// they have special allowances for multiple JQXLite versions by
			// specifying define.amd.JQXLite = true. Register as a named module,
			// since JQXLite can be concatenated with other files that may use define,
			// but not use a proper concatenation script that understands anonymous
			// AMD modules. A named AMD is safest and most robust way to register.
			// Lowercase jqx is used because AMD module names are derived from
			// file names, and JQXLite is normally delivered in a lowercase file name.
			// Do this after creating the global so that if an AMD module wants to call
			// noConflict to hide this version of JQXLite, it will work.
			if ( true && __webpack_require__.amdO.JQXLite) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return JQXLite; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			}

		})(window);
	}

	// jqxHelper
	(function (window) {
		if (window.jqxCore) {
			window.$$ = window.minQuery = window.JQXLite;

			if (!window.$) {
				window.$ = window.minQuery;
			}

			return;
		}

		if (window.jQuery) {
			window.minQuery = window.JQXLite = window.jQuery;
			return;
		}

		if (!window.$) {
			window.$ = window.minQuery = window.JQXLite;
		}
		else {
			window.minQuery = window.JQXLite = window.$;
		}
	})(window);
	// End of jqxHelper

	JQXLite.generateID = function () {
		var S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};

		var id = "";
		do {
			id = "jqx" + S4() + S4() + S4();
		} while ($('#' + id).length > 0);

		return id;
	}

	var jqxBaseFramework = window.jqxBaseFramework = window.minQuery || window.jQuery;

	(function ($) {

		$.jqx = $.jqx || {}
		window.jqx = $.jqx;

		var jqwidgets = {
			createInstance: function (selector, widgetName, params) {
				if (widgetName == 'jqxDataAdapter') {
					var source = params[0];
					var settings = params[1] || {};
					return new $.jqx.dataAdapter(source, settings);
				}

				$(selector)[widgetName](params || {});
				return $(selector)[widgetName]('getInstance');
			}
		};

		window.jqwidgets = jqwidgets;

		$.jqx.define = function (namespace, classname, baseclass) {
			namespace[classname] = function () {
				if (this.baseType) {
					this.base = new namespace[this.baseType]();
					this.base.defineInstance();
				}
				this.defineInstance();
				this.metaInfo();
			}

			namespace[classname].prototype.defineInstance = function () { };
			namespace[classname].prototype.metaInfo = function () { };
			namespace[classname].prototype.base = null;
			namespace[classname].prototype.baseType = undefined;

			if (baseclass && namespace[baseclass])
				namespace[classname].prototype.baseType = baseclass;
		}

		// method call
		$.jqx.invoke = function (object, args) {
			if (args.length == 0)
				return;

			var method = typeof (args) == Array || args.length > 0 ? args[0] : args;
			var methodArg = typeof (args) == Array || args.length > 1 ? Array.prototype.slice.call(args, 1) : $({}).toArray();

			while (object[method] == undefined && object.base != null) {
				if (object[method] != undefined && $.isFunction(object[method]))
					return object[method].apply(object, methodArg);

				if (typeof method == 'string') {
					var methodLowerCase = method.toLowerCase();
					if (object[methodLowerCase] != undefined && $.isFunction(object[methodLowerCase])) {
						return object[methodLowerCase].apply(object, methodArg);
					}
				}
				object = object.base;
			}

			if (object[method] != undefined && $.isFunction(object[method]))
				return object[method].apply(object, methodArg);

			if (typeof method == 'string') {
				var methodLowerCase = method.toLowerCase();
				if (object[methodLowerCase] != undefined && $.isFunction(object[methodLowerCase])) {
					return object[methodLowerCase].apply(object, methodArg);
				}
			}

			return;
		}

		$.jqx.getByPriority = function (arr) {
			var value = undefined;
			for (var i = 0; i < arr.length && value == undefined; i++) {
				if (value == undefined && arr[i] != undefined)
					value = arr[i];
			}

			return value;
		}

		$.jqx.hasProperty = function (obj, property) {
			if (typeof (property) == 'object') {
				for (var prop in property) {
					var o = obj;
					while (o) {
						if (o.hasOwnProperty(prop))
							return true;
						if (o.hasOwnProperty(prop.toLowerCase()))
							return true;
						o = o.base;
					}
					return false;
				}
			}
			else {
				while (obj) {
					if (obj.hasOwnProperty(property))
						return true;
					if (obj.hasOwnProperty(property.toLowerCase()))
						return true;
					obj = obj.base;
				}
			}

			return false;
		}

		$.jqx.hasFunction = function (object, args) {
			if (args.length == 0)
				return false;

			if (object == undefined)
				return false;

			var method = typeof (args) == Array || args.length > 0 ? args[0] : args;
			var methodArg = typeof (args) == Array || args.length > 1 ? Array.prototype.slice.call(args, 1) : {};

			while (object[method] == undefined && object.base != null) {
				if (object[method] && $.isFunction(object[method]))
					return true;

				if (typeof method == 'string') {
					var methodLowerCase = method.toLowerCase();
					if (object[methodLowerCase] && $.isFunction(object[methodLowerCase]))
						return true;
				}
				object = object.base;
			}

			if (object[method] && $.isFunction(object[method]))
				return true;

			if (typeof method == 'string') {
				var methodLowerCase = method.toLowerCase();
				if (object[methodLowerCase] && $.isFunction(object[methodLowerCase]))
					return true;
			}

			return false;
		}

		$.jqx.isPropertySetter = function (obj, args) {
			if (args.length == 1 && typeof (args[0]) == 'object')
				return true;

			if (args.length == 2 &&
				typeof (args[0]) == 'string' &&
				!$.jqx.hasFunction(obj, args)) {
				return true;
			}

			return false;
		}

		$.jqx.validatePropertySetter = function (obj, args, suppressException) {
			if (!$.jqx.propertySetterValidation)
				return true;

			if (args.length == 1 && typeof (args[0]) == 'object') {
				for (var i in args[0]) {
					var o = obj;
					while (!o.hasOwnProperty(i) && o.base)
						o = o.base;

					if (!o || !o.hasOwnProperty(i)) {
						if (!suppressException) {
							var hasLowerCase = o.hasOwnProperty(i.toString().toLowerCase());
							if (!hasLowerCase) {
								throw 'Invalid property: ' + i;
							}
							else return true;
						}
						return false;
					}
				}

				return true;
			}

			if (args.length != 2) {
				if (!suppressException)
					throw 'Invalid property: ' + args.length >= 0 ? args[0] : '';

				return false;
			}

			while (!obj.hasOwnProperty(args[0]) && obj.base)
				obj = obj.base;

			if (!obj || !obj.hasOwnProperty(args[0])) {
				if (!suppressException)
					throw 'Invalid property: ' + args[0];

				return false;
			}

			return true;
		}

		if (!Object.keys) {
			Object.keys = (function () {
				'use strict';
				var hasOwnProperty = Object.prototype.hasOwnProperty,
					hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
					dontEnums = [
						'toString',
						'toLocaleString',
						'valueOf',
						'hasOwnProperty',
						'isPrototypeOf',
						'propertyIsEnumerable',
						'constructor'
					],
					dontEnumsLength = dontEnums.length;

				return function (obj) {
					if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
						throw new TypeError('Object.keys called on non-object');
					}

					var result = [], prop, i;

					for (prop in obj) {
						if (hasOwnProperty.call(obj, prop)) {
							result.push(prop);
						}
					}

					if (hasDontEnumBug) {
						for (i = 0; i < dontEnumsLength; i++) {
							if (hasOwnProperty.call(obj, dontEnums[i])) {
								result.push(dontEnums[i]);
							}
						}
					}
					return result;
				};
			}());
		}

		$.jqx.set = function (object, args) {
			var newValuesLength = 0;
			if (args.length == 1 && typeof (args[0]) == 'object') {
				if (object.isInitialized && Object.keys && Object.keys(args[0]).length > 1) {
					var element = !object.base ? object.element : object.base.element;
					var initArgs = $.data(element, object.widgetName).initArgs;
					if (initArgs && JSON && JSON.stringify && args[0] && initArgs[0]) {
						try {
							if (JSON.stringify(args[0]) == JSON.stringify(initArgs[0])) {
								var toReturn = true;
								$.each(args[0], function (key, value) {
									if (object[key] != value) {
										toReturn = false;
										return false;
									}
								});
								if (toReturn) {
									return;
								}
							}
						}
						catch (err) {
						}
					}
					object.batchUpdate = args[0];
					var oldValues = {};
					var newValues = {};
					$.each(args[0], function (key, value) {
						var obj = object;
						while (!obj.hasOwnProperty(key) && obj.base != null)
							obj = obj.base;

						if (obj.hasOwnProperty(key)) {
							if (object[key] != value) {
								oldValues[key] = object[key];
								newValues[key] = value;
								newValuesLength++;
							}
						}
						else if (obj.hasOwnProperty(key.toLowerCase())) {
							if (object[key.toLowerCase()] != value) {
								oldValues[key.toLowerCase()] = object[key.toLowerCase()];
								newValues[key.toLowerCase()] = value;
								newValuesLength++;
							}
						}
					});
					if (newValuesLength < 2) {
						object.batchUpdate = null;
					}
				}

				$.each(args[0], function (key, value) {
					var obj = object;
					while (!obj.hasOwnProperty(key) && obj.base != null)
						obj = obj.base;

					if (obj.hasOwnProperty(key)) {
						$.jqx.setvalueraiseevent(obj, key, value);
					}
					else if (obj.hasOwnProperty(key.toLowerCase())) {
						$.jqx.setvalueraiseevent(obj, key.toLowerCase(), value);
					}
					else if ($.jqx.propertySetterValidation)
						throw "jqxCore: invalid property '" + key + "'";
				});

				if (object.batchUpdate != null) {
					object.batchUpdate = null;
					if (object.propertiesChangedHandler && newValuesLength > 1) {
						object.propertiesChangedHandler(object, oldValues, newValues);
					}
				}
			}
			else if (args.length == 2) {
				while (!object.hasOwnProperty(args[0]) && object.base)
					object = object.base;

				if (object.hasOwnProperty(args[0])) {
					$.jqx.setvalueraiseevent(object, args[0], args[1]);
				}
				else if (object.hasOwnProperty(args[0].toLowerCase())) {
					$.jqx.setvalueraiseevent(object, args[0].toLowerCase(), args[1]);
				}
				else if ($.jqx.propertySetterValidation)
					throw "jqxCore: invalid property '" + args[0] + "'";
			}
		}

		$.jqx.setvalueraiseevent = function (object, key, value) {
			var oldVal = object[key];

			object[key] = value;

			if (!object.isInitialized)
				return;

			if (object.propertyChangedHandler != undefined)
				object.propertyChangedHandler(object, key, oldVal, value);

			if (object.propertyChangeMap != undefined && object.propertyChangeMap[key] != undefined)
				object.propertyChangeMap[key](object, key, oldVal, value);
		};

		$.jqx.get = function (object, args) {
			if (args == undefined || args == null)
				return undefined;

			if (object.propertyMap) {
				var newVal = object.propertyMap(args);
				if (newVal != null)
					return newVal;
			}

			if (object.hasOwnProperty(args))
				return object[args];

			if (object.hasOwnProperty(args.toLowerCase()))
				return object[args.toLowerCase()];

			var arg = undefined;
			if (typeof (args) == Array) {
				if (args.length != 1)
					return undefined;
				arg = args[0];
			}
			else if (typeof (args) == 'string')
				arg = args;

			while (!object.hasOwnProperty(arg) && object.base)
				object = object.base;

			if (object)
				return object[arg];

			return undefined;
		}

		$.jqx.serialize = function (obj) {
			var txt = '';
			if ($.isArray(obj)) {
				txt = '['
				for (var i = 0; i < obj.length; i++) {
					if (i > 0)
						txt += ', ';
					txt += $.jqx.serialize(obj[i]);
				}
				txt += ']';
			}
			else if (typeof (obj) == 'object') {
				txt = '{';
				var j = 0;
				for (var i in obj) {
					if (j++ > 0)
						txt += ', ';
					txt += i + ': ' + $.jqx.serialize(obj[i]);
				}
				txt += '}';
			}
			else
				txt = obj.toString();

			return txt;
		}

		$.jqx.propertySetterValidation = true;

		$.jqx.jqxWidgetProxy = function (controlName, element, args) {
			var host = $(element);
			var vars = $.data(element, controlName);
			if (vars == undefined) {
				return undefined;
			}

			var obj = vars.instance;

			if ($.jqx.hasFunction(obj, args))
				return $.jqx.invoke(obj, args);

			if ($.jqx.isPropertySetter(obj, args)) {
				if ($.jqx.validatePropertySetter(obj, args)) {
					$.jqx.set(obj, args);
					return undefined;
				}
			} else {
				if (typeof (args) == 'object' && args.length == 0)
					return;
				else if (typeof (args) == 'object' && args.length == 1 && $.jqx.hasProperty(obj, args[0]))
					return $.jqx.get(obj, args[0]);
				else if (typeof (args) == 'string' && $.jqx.hasProperty(obj, args[0]))
					return $.jqx.get(obj, args);
			}

			throw "jqxCore: Invalid parameter '" + $.jqx.serialize(args) + "' does not exist.";
			//      return undefined;
		}

		$.jqx.applyWidget = function (element, controlName, args, instance) {
			var WinJS = false;
			try {
				WinJS = window.MSApp != undefined;
			}
			catch (e) {
			}

			var host = $(element);
			if (!instance) {
				instance = new $.jqx['_' + controlName]();
			}
			else {
				instance.host = host;
				instance.element = element;
			}
			if (element.id == "") {
				element.id = $.jqx.utilities.createId();
			}

			var vars = { host: host, element: element, instance: instance, initArgs: args };

			instance.widgetName = controlName;
			$.data(element, controlName, vars);
			$.data(element, 'jqxWidget', vars.instance);

			var inits = new Array();
			var instance = vars.instance;
			while (instance) {
				instance.isInitialized = false;
				inits.push(instance);
				instance = instance.base;
			}
			inits.reverse();
			inits[0].theme = $.jqx.theme || '';

			$.jqx.jqxWidgetProxy(controlName, element, args);

			for (var i in inits) {
				instance = inits[i];
				if (i == 0) {
					instance.host = host;
					instance.element = element;
					instance.WinJS = WinJS;
				}
				if (instance != undefined) {
					if (instance.definedInstance) {
						instance.definedInstance();
					}
					if (instance.createInstance != null) {
						if (WinJS) {
							MSApp.execUnsafeLocalFunction(function () {
								instance.createInstance(args);
							});
						}
						else {
							instance.createInstance(args);
						}
					}
				}
			}

			for (var i in inits) {
				if (inits[i] != undefined) {
					inits[i].isInitialized = true;
				}
			}

			if (WinJS) {
				MSApp.execUnsafeLocalFunction(function () {
					vars.instance.refresh(true);
				});
			}
			else {
				vars.instance.refresh(true);
			}

		}

		$.jqx.jqxWidget = function (name, base, params) {

			var WinJS = false;
			try {
				var jqxArgs = Array.prototype.slice.call(params, 0);
			}
			catch (e) {
				var jqxArgs = '';
			}

			try {
				WinJS = window.MSApp != undefined;
			}
			catch (e) {
			}

			var controlName = name;

			var baseControl = '';
			if (base)
				baseControl = '_' + base;
			$.jqx.define($.jqx, '_' + controlName, baseControl);

			var widgets = new Array();

			if (!window[controlName]) {
				var serializeObject = function (data) {
					if (data == null) return "";
					var dataType = $.type(data);
					switch (dataType) {
						case "string":
						case "number":
						case "date":
						case "boolean":
						case "bool":
							if (data === null)
								return "";
							return data.toString()
					}

					var str = "";
					$.each(data, function (index, value) {
						var val = value;
						if (index > 0) str += ', ';
						str += "[";
						var m = 0;

						if ($.type(val) == "object") {
							for (var obj in val) {
								if (m > 0) str += ', ';
								str += '{' + obj + ":" + val[obj] + '}';
								m++;
							}
						}
						else {
							if (m > 0) str += ', ';
							str += '{' + index + ":" + val + '}';
							m++;
						}

						str += "]";
					});
					return str;
				}

				jqwidgets[controlName] = window[controlName] = function (selector, params) {
					var args = [];
					if (!params) {
						params = {};
					}
					args.push(params);

					var uid = selector;
					if ($.type(uid) === "object" && selector[0]) {
						uid = selector[0].id;
						if (uid === "") {
							uid = selector[0].id = $.jqx.utilities.createId();
						}
					} else if ($.type(selector) === "object" && selector && selector.nodeName) {
						uid = selector.id;
						if (uid === "") {
							uid = selector.id = $.jqx.utilities.createId();
						}
					}

					if (window.jqxWidgets && window.jqxWidgets[uid]) {
						if (params) {
							$.each(window.jqxWidgets[uid], function (index) {
								var data = $(this.element).data();
								if (data && data.jqxWidget) {
									$(this.element)[controlName](params);
								}
							});
						}
						if (window.jqxWidgets[uid].length == 1) {
							var data = $(window.jqxWidgets[uid][0].widgetInstance.element).data();
							if (data && data.jqxWidget) {
								return window.jqxWidgets[uid][0];
							}
						}

						var data = $(window.jqxWidgets[uid][0].widgetInstance.element).data();
						if (data && data.jqxWidget) {
							return window.jqxWidgets[uid];
						}
					}

					var elements = $(selector);
					if (elements.length === 0) {
						elements = $("<div></div>");
						if (controlName === "jqxInput" || controlName === "jqxPasswordInput" || controlName === "jqxMaskedInput") {
							elements = $("<input/>");
						}
						if (controlName === "jqxTextArea") {
							elements = $("<textarea></textarea>");
						}
						if (controlName === "jqxButton" || controlName === "jqxRepeatButton" || controlName === "jqxToggleButton") {
							elements = $("<button/>");
						}
						if (controlName === "jqxSplitter") {
							elements = $("<div><div>Panel 1</div><div>Panel 2</div></div>");
						}
						if (controlName === "jqxTabs") {
							elements = $("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>");
						}
						if (controlName === "jqxRibbon") {
							elements = $("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>");
						}
						if (controlName === "jqxDocking") {
							elements = $("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>");
						}
						if (controlName === "jqxWindow") {
							elements = $("<div><div>Title 1</div><div>Content 1</div></div>");
						}
					}
					var instances = [];


					$.each(elements, function (index) {
						var element = elements[index];
						$.jqx.applyWidget(element, controlName, args, undefined);
						if (!widgets[controlName]) {
							var instance = $.data(element, 'jqxWidget');
							var properties = $.jqx["_" + controlName].prototype.defineInstance();
							var metaInfo = {};

							if ($.jqx["_" + controlName].prototype.metaInfo) {
								metaInfo = $.jqx["_" + controlName].prototype.metaInfo();
							}

							if (controlName == "jqxDockingLayout") {
								properties = $.extend(properties, $.jqx["_jqxLayout"].prototype.defineInstance());
							}
							if (controlName == "jqxToggleButton" || controlName == "jqxRepeatButton") {
								properties = $.extend(properties, $.jqx["_jqxButton"].prototype.defineInstance());
							}
							if (controlName == "jqxTreeGrid") {
								properties = $.extend(properties, $.jqx["_jqxDataTable"].prototype.defineInstance());
							}

							var widgetConstructor = function (element) {
								var instance = $.data(element, 'jqxWidget');
								this.widgetInstance = instance;
								var widget = $.extend(this, instance);
								widget.on = widget.addEventListener = function (eventName, callback) {
									widget.addHandler(!widget.base ? widget.host : widget.base.host, eventName, callback);
								}
								widget.off = widget.removeEventListener = function (eventName) {
									widget.removeHandler(!widget.base ? widget.host : widget.base.host, eventName);
								}

								for (var obj in instance) {
									if ($.type(instance[obj]) == "function") {
										widget[obj] = $.proxy(instance[obj], instance);
									}
								}
								return widget;
							}
							widgets[controlName] = widgetConstructor;

							// widget properties
							$.each(properties, function (property, currentValue) {
								Object.defineProperty(widgetConstructor.prototype, property, {
									get: function () {
										if (this.widgetInstance) {
											return this.widgetInstance[property];
										}
										return currentValue;
									},
									set: function (newValue) {
										if (this.widgetInstance && (this.widgetInstance[property] != newValue || property === "width" || property === "height")) {
											var key1 = this.widgetInstance[property];
											var key2 = newValue;
											var dataType1 = $.type(key1);
											var dataType2 = $.type(key2);
											var differentTypes = false;
											if (dataType1 != dataType2 || property === "source" || property === "width" || property === "height") {
												differentTypes = true;
											}
											if (differentTypes || (serializeObject(key1) != serializeObject(key2))) {
												var settings = {};
												settings[property] = newValue;
												if (this.widgetInstance.host) {
													this.widgetInstance.host[controlName](settings);
												}
												else {
													this.widgetInstance.base.host[controlName](settings);
												}
												this.widgetInstance[property] = newValue;
												if (this.widgetInstance.propertyUpdated) {
													this.widgetInstance.propertyUpdated(property, key1, newValue);
												}
											}
										}
									}
								});
							});
						}
						var instance = new widgets[controlName](element);

						instances.push(instance);
						if (!window.jqxWidgets) {
							window.jqxWidgets = new Array();
						}
						if (!window.jqxWidgets[uid]) {
							window.jqxWidgets[uid] = new Array();
						}
						window.jqxWidgets[uid].push(instance);
					});

					if (instances.length === 1)
						return instances[0];

					return instances;

				}
			}

			$.fn[controlName] = function () {
				var args = Array.prototype.slice.call(arguments, 0);

				if (args.length == 0 || (args.length == 1 && typeof (args[0]) == 'object')) {
					if (this.length == 0) {
						if (this.selector) {
							throw new Error('Invalid Selector - ' + this.selector + '! Please, check whether the used ID or CSS Class name is correct.');
						}
						else {
							throw new Error('Invalid Selector! Please, check whether the used ID or CSS Class name is correct.');
						}
					}

					return this.each(function () {
						var host = $(this);
						var element = this; // element == this == host[0]
						var vars = $.data(element, controlName);

						if (vars == null) {
							$.jqx.applyWidget(element, controlName, args, undefined);
						}
						else {
							$.jqx.jqxWidgetProxy(controlName, this, args);
						}
					}); // each
				}
				else {
					if (this.length == 0) {
						if (this.selector) {
							throw new Error('Invalid Selector - ' + this.selector + '! Please, check whether the used ID or CSS Class name is correct.');
						}
						else {
							throw new Error('Invalid Selector! Please, check whether the used ID or CSS Class name is correct.');
						}
					}

					var returnVal = null;

					var cnt = 0;
					this.each(function () {
						var result = $.jqx.jqxWidgetProxy(controlName, this, args);

						if (cnt == 0) {
							returnVal = result;
							cnt++;
						}
						else {
							if (cnt == 1) {
								var tmp = [];
								tmp.push(returnVal);
								returnVal = tmp;
							}
							returnVal.push(result);
						}
					}); // each
				}

				return returnVal;
			}

			try {
				$.extend($.jqx['_' + controlName].prototype, Array.prototype.slice.call(params, 0)[0]);
			}
			catch (e) {
			}

			$.extend($.jqx['_' + controlName].prototype, {
				toThemeProperty: function (propertyName, override) {
					return $.jqx.toThemeProperty(this, propertyName, override);
				},

				isMaterialized: function () {
					if (!this.theme) {
						return false;
					}

					if (this.theme === "fluent") {
						return true;
					}

					if (this.theme === "light") {
						return true;
					}


					if (this.theme === "dark") {
						return true;
					}

					if (this.theme === "deepblue") {
						return true;
					}

					if (this.theme.indexOf("material") >= 0) {
						return true;
					}
				},

				isModern: function () {
					if (!this.theme) {
						return false;
					}

					if (this.theme.indexOf("light") >= 0) {
						return true;
					}

					if (this.theme === "dark") {
						return true;
					}
				},

				_addBarAndLabel: function (host) {
					var that = this;

					var label = $("<label></label");
					label[0].innerHTML = this.placeHolder;
					label.addClass(that.toThemeProperty('jqx-input-label'));
					host.after(label);
					that.label = label;

					var bar = $("<span></span>");
					host.after(bar);
					bar.addClass(that.toThemeProperty('jqx-input-bar'));
					that.bar = bar;
					that.bar.css('top', this.host.height());
				}
			});

			$.jqx['_' + controlName].prototype.refresh = function () {
				if (this.base)
					this.base.refresh(true);
			}
			$.jqx['_' + controlName].prototype.createInstance = function () {
			}

			$.jqx.isPassiveSupported = function () {
				var that = this;

				if (that.supportsPassive !== undefined) {
					return that.supportsPassive;
				}

				that.supportsPassive = false;
				try {
					var opts = Object.defineProperty({
					}, 'passive', {
						// eslint-disable-next-line getter-return
						get: function () {
							that.supportsPassive = true;
						}
					});
					window.addEventListener('testPassive', null, opts);
					window.removeEventListener('testPassive', null, opts);
				}
				catch (e) {
					//
				}

				return that.supportsPassive;
			}

			$.jqx['_' + controlName].prototype.addEventHandler = function (event, fnHandler) {
				if (this.base) {
					this.base.host.on(event, fnHandler);
				}
				else {
					this.host.on(event, fnHandler);
				}
			}

			$.jqx['_' + controlName].prototype.removeEventHandler = function (event, fnHandler) {
				if (this.base) {
					this.base.host.off(event);
				}
				else {
					this.host.off(event);
				}
			}

			$.jqx['_' + controlName].prototype.applyTo = function (element, args) {
				if (!(args instanceof Array)) {
					var a = [];
					a.push(args);
					args = a;
				}

				$.jqx.applyWidget(element, controlName, args, this);
			}

			$.jqx['_' + controlName].prototype.getInstance = function () {
				return this;
			}
			$.jqx['_' + controlName].prototype.propertyChangeMap = {};

			$.jqx['_' + controlName].prototype.addHandler = function (source, events, func, data) {
				$.jqx.addHandler($(source), events, func, data);
			};

			$.jqx['_' + controlName].prototype.removeHandler = function (source, events, func) {
				$.jqx.removeHandler($(source), events, func);
			};

			$.jqx['_' + controlName].prototype.setOptions = function () {
				if (!this.host || !this.host.length || this.host.length != 1)
					return;

				return $.jqx.jqxWidgetProxy(controlName, this.host[0], arguments);
			};
		} // jqxWidget

		$.jqx.toThemeProperty = function (instance, propertyName, override) {
			if (instance.theme == '')
				return propertyName;

			var split = propertyName.split(' ');
			var result = '';
			for (var i = 0; i < split.length; i++) {
				if (i > 0)
					result += ' ';

				var key = split[i];

				if (override != null && override)
					result += key + '-' + instance.theme;
				else
					result += key + ' ' + key + '-' + instance.theme;
			}

			return result;
		}

		$.jqx.addHandler = function (source, eventsList, func, data) {
			var events = eventsList.split(' ');

			for (var i = 0; i < events.length; i++) {
				var event = events[i];

				if (window.addEventListener && source[0]) {
					switch (event) {
						case 'mousewheel':
							if ($.jqx.browser.mozilla) {
								source[0].addEventListener('DOMMouseScroll', func, $.jqx.isPassiveSupported() ? { passive: false } : false);
							}
							else {
								source[0].addEventListener('mousewheel', func, $.jqx.isPassiveSupported() ? { passive: false } : false);
							}
							continue;
						case 'mousemove':
							if (!data) {
								source[0].addEventListener('mousemove', func, false);
								continue;
							}
							break;
						case 'touchmove':
							if (!data) {
								source[0].addEventListener('touchmove', func, false);
								continue;
							}
							else if (data && data.passive) {
								source[0].addEventListener('touchmove', func, data);
								continue;
							}

							break;
					}
				}

				if (data == undefined || data == null) {
					if (source.on)
						source.on(event, func);
					else
						source.bind(event, func);
				}
				else {
					if (source.on)
						source.on(event, data, func);
					else
						source.bind(event, data, func);
				}
			} // for
		};

		$.jqx.removeHandler = function (source, eventsList, func) {
			if (!eventsList) {
				if (source.off)
					source.off();
				else
					source.unbind();
				return;
			}
			var events = eventsList.split(' ');

			for (var i = 0; i < events.length; i++) {
				var event = events[i];

				if (window.removeEventListener) {
					switch (event) {
						case 'mousewheel':
							if ($.jqx.browser.mozilla) {
								source[0].removeEventListener('DOMMouseScroll', func, false);
							}
							else {
								source[0].removeEventListener('mousewheel', func, false);
							}
							continue;
						case 'mousemove':
							if (func) {
								source[0].removeEventListener('mousemove', func, false);
								continue;
							}
							break;
						case 'touchmove':
							if (func) {
								source[0].removeEventListener('touchmove', func, false);
								continue;
							}
							break;
					}
				}

				if (event == undefined) {
					if (source.off)
						source.off();
					else
						source.unbind();
					continue;
				}

				if (func == undefined) {
					if (source.off)
						source.off(event);
					else
						source.unbind(event);
				}
				else {
					if (source.off)
						source.off(event, func);
					else
						source.unbind(event, func);
				}
			}
		};

		$.jqx.credits = $.jqx.credits || "";
		$.jqx.theme = $.jqx.theme || "";
		$.jqx.scrollAnimation = $.jqx.scrollAnimation || false;
		$.jqx.resizeDelay = $.jqx.resizeDelay || 10;

		$.jqx.ready = function () {
			$(window).trigger('jqxReady');
		}
		$.jqx.init = function () {
			$.each(arguments[0], function (index, value) {
				if (index == "theme") {
					$.jqx.theme = value;
				}
				if (index == "scrollBarSize") {
					$.jqx.utilities.scrollBarSize = value;
				}
				if (index == "touchScrollBarSize") {
					$.jqx.utilities.touchScrollBarSize = value;
				}
				if (index == "scrollBarButtonsVisibility") {
					$.jqx.utilities.scrollBarButtonsVisibility = value;
				}
			});
		}

		// Utilities
		$.jqx.utilities = $.jqx.utilities || {};
		$.extend($.jqx.utilities,
			{
				scrollBarSize: 13,
				touchScrollBarSize: 8,
				scrollBarButtonsVisibility: "visible",
				createId: function () {
					var S4 = function () {
						return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
					};
					return "jqxWidget" + S4() + S4() + S4();
				},

				setTheme: function (oldTheme, theme, element) {
					if (typeof element === 'undefined') {
						return;
					}

					if (!element[0].className.split) {
						return;
					}

					if (oldTheme === undefined) {
						oldTheme = '';
					}

					if (theme === undefined) {
						theme = '';
					}

					var classNames = element[0].className.split(' '),
						oldClasses = [], newClasses = [],
						children = element.children();
					for (var i = 0; i < classNames.length; i += 1) {
						if (classNames[i].indexOf(oldTheme) >= 0) {
							if (oldTheme.length > 0) {
								oldClasses.push(classNames[i]);
								newClasses.push(classNames[i].replace(oldTheme, theme));
							}
							else {
								newClasses.push(classNames[i].replace("-" + theme, "") + '-' + theme);
							}
						}
					}
					this._removeOldClasses(oldClasses, element);
					this._addNewClasses(newClasses, element);
					for (var i = 0; i < children.length; i += 1) {
						this.setTheme(oldTheme, theme, $(children[i]));
					}
				},

				_removeOldClasses: function (classes, element) {
					for (var i = 0; i < classes.length; i += 1) {
						element.removeClass(classes[i]);
					}
				},

				_addNewClasses: function (classes, element) {
					for (var i = 0; i < classes.length; i += 1) {
						element.addClass(classes[i]);
					}
				},

				getOffset: function (el) {
					var left = $.jqx.mobile.getLeftPos(el[0]);
					var top = $.jqx.mobile.getTopPos(el[0]);
					return { top: top, left: left };
				},

				resize: function (element, callback, destroy, checkForHidden) {
					if (checkForHidden === undefined) {
						checkForHidden = true;
					}

					var index = -1;
					var that = this;
					var getHiddenIndex = function (element) {
						if (!that.hiddenWidgets) {
							return -1;
						}

						var hiddenIndex = -1;
						for (var i = 0; i < that.hiddenWidgets.length; i++) {
							if (element.id) {
								if (that.hiddenWidgets[i].id == element.id) {
									hiddenIndex = i;
									break;
								}
							}
							else {
								if (that.hiddenWidgets[i].id == element[0].id) {
									hiddenIndex = i;
									break;
								}
							}
						}
						return hiddenIndex;
					}


					if (this.resizeHandlers) {
						for (var i = 0; i < this.resizeHandlers.length; i++) {
							if (element.id) {
								if (this.resizeHandlers[i].id == element.id) {
									index = i;
									break;
								}
							}
							else {
								if (this.resizeHandlers[i].id == element[0].id) {
									index = i;
									break;
								}
							}
						}

						if (destroy === true) {
							if (index != -1) {
								this.resizeHandlers.splice(index, 1);
								if (this.watchedElementData && this.watchedElementData.length > 0) {
									this.watchedElementData.splice(index, 1);
								}
							}

							if (this.resizeHandlers.length == 0) {
								var w = $(window);
								if (w.off) {
									w.off('resize.jqx');
									w.off('orientationchange.jqx');
									w.off('orientationchanged.jqx');
								}
								else {
									w.unbind('resize.jqx');
									w.unbind('orientationchange.jqx');
									w.unbind('orientationchanged.jqx');
								}
								this.resizeHandlers = null;
							}
							var hiddenIndex = getHiddenIndex(element);
							if (hiddenIndex != -1 && this.hiddenWidgets) {
								this.hiddenWidgets.splice(hiddenIndex, 1);
							}
							return;
						}
					}
					else if (destroy === true) {
						var hiddenIndex = getHiddenIndex(element);
						if (hiddenIndex != -1 && this.hiddenWidgets) {
							this.hiddenWidgets.splice(hiddenIndex, 1);
						}
						return;
					}
					var that = this;
					var doResize = function (isHidden, type) {
						if (!that.resizeHandlers)
							return;

						var getParentsCount = function (element) {
							var index = -1;
							var parent = element.parentNode;
							while (parent) {
								index++;
								parent = parent.parentNode;
							}
							return index;
						}

						var compare = function (value1, value2) {
							if (!value1.widget || !value2.widget)
								return 0;

							var parents1 = getParentsCount(value1.widget[0]);
							var parents2 = getParentsCount(value2.widget[0]);

							try {
								if (parents1 < parents2) { return -1; }
								if (parents1 > parents2) { return 1; }
							}
							catch (error) {
								var er = error;
							}

							return 0;
						};
						var handleHiddenWidgets = function (delay) {
							if (that.hiddenWidgets.length > 0) {
								that.hiddenWidgets.sort(compare);
								var updateHiddenWidgets = function () {
									var hasHiddenWidget = false;
									var currentHiddenWidgets = new Array();
									for (var p = 0; p < that.hiddenWidgets.length; p++) {
										var handler = that.hiddenWidgets[p];
										if ($.jqx.isHidden(handler.widget)) {
											hasHiddenWidget = true;
											currentHiddenWidgets.push(handler);
										}
										else {
											if (handler.callback) {
												handler.callback(type);
											}
										}
									}
									that.hiddenWidgets = currentHiddenWidgets;
									if (!hasHiddenWidget) {
										clearInterval(that.__resizeInterval);
									}
								}
								if (delay == false) {
									updateHiddenWidgets();
									if (that.__resizeInterval) clearInterval(that.__resizeInterval);
									return;
								}
								if (that.__resizeInterval) clearInterval(that.__resizeInterval);
								that.__resizeInterval = setInterval(function () {
									updateHiddenWidgets();
								}, 100);
							}
						}

						if (that.hiddenWidgets && that.hiddenWidgets.length > 0) {
							handleHiddenWidgets(false);
						}
						that.hiddenWidgets = new Array();
						that.resizeHandlers.sort(compare);
						for (var i = 0; i < that.resizeHandlers.length; i++) {
							var handler = that.resizeHandlers[i];
							var widget = handler.widget;
							var data = handler.data;
							if (!data) continue;
							if (!data.jqxWidget) continue;

							var width = data.jqxWidget.width;
							var height = data.jqxWidget.height;

							if (data.jqxWidget.base) {
								if (width == undefined) {
									width = data.jqxWidget.base.width;
								}
								if (height == undefined) {
									height = data.jqxWidget.base.height;
								}
							}

							if (width === undefined && height === undefined) {
								width = data.jqxWidget.element.style.width;
								height = data.jqxWidget.element.style.height;
							}

							var percentageSize = false;
							if (width != null && width.toString().indexOf("%") != -1) {
								percentageSize = true;
							}

							if (height != null && height.toString().indexOf("%") != -1) {
								percentageSize = true;
							}

							if ($.jqx.isHidden(widget)) {
								if (getHiddenIndex(widget) === -1) {
									if (percentageSize || isHidden === true) {
										if (handler.data.nestedWidget !== true) {
											that.hiddenWidgets.push(handler);
										}
									}
								}
							}
							else if (isHidden === undefined || isHidden !== true) {
								if (percentageSize) {
									handler.callback(type);
									if (that.watchedElementData) {
										for (var m = 0; m < that.watchedElementData.length; m++) {
											if (that.watchedElementData[m].element == data.jqxWidget.element) {
												that.watchedElementData[m].offsetWidth = data.jqxWidget.element.offsetWidth;
												that.watchedElementData[m].offsetHeight = data.jqxWidget.element.offsetHeight;
												break;
											}
										}
									}
									if (that.hiddenWidgets.indexOf(handler) >= 0) {
										that.hiddenWidgets.splice(that.hiddenWidgets.indexOf(handler), 1);
									}
								}
								if (data.jqxWidget.element) {
									var widgetClass = data.jqxWidget.element.className;
									if (widgetClass.indexOf('dropdownlist') >= 0 || widgetClass.indexOf('datetimeinput') >= 0 || widgetClass.indexOf('combobox') >= 0 || widgetClass.indexOf('menu') >= 0) {
										if (data.jqxWidget.isOpened) {
											var opened = data.jqxWidget.isOpened();
											if (opened) {
												if (type && type == "resize" && $.jqx.mobile.isTouchDevice())
													continue;

												data.jqxWidget.close();
											}
										}
									}
								}
							}
						};

						handleHiddenWidgets();
					}

					if (!this.resizeHandlers) {
						this.resizeHandlers = new Array();

						var w = $(window);
						if (w.on) {
							this._resizeTimer = null;
							this._initResize = null;
							w.on('resize.jqx', function (event) {
								if (that._resizeTimer != undefined) {
									clearTimeout(that._resizeTimer);
								}
								if (!that._initResize) {
									that._initResize = true;
									doResize(null, 'resize');
								}
								else {
									that._resizeTimer = setTimeout(function () {
										doResize(null, 'resize');
									}, $.jqx.resizeDelay);
								}
							});
							w.on('orientationchange.jqx', function (event) {
								doResize(null, 'orientationchange');
							});
							w.on('orientationchanged.jqx', function (event) {
								doResize(null, 'orientationchange');
							});
						}
						else {
							w.bind('resize.jqx', function (event) {
								doResize(null, 'orientationchange');
							});
							w.bind('orientationchange.jqx', function (event) {
								doResize(null, 'orientationchange');
							});
							w.bind('orientationchanged.jqx', function (event) {
								doResize(null, 'orientationchange');
							});
						}
					}
					var elementData = element.data();
					if (checkForHidden) {
						if (index === -1) {
							this.resizeHandlers.push({ id: element[0].id, widget: element, callback: callback, data: elementData });
						}
					}
					try {
						var width = elementData.jqxWidget.width;
						var height = elementData.jqxWidget.height;

						if (elementData.jqxWidget.base) {
							if (width == undefined) {
								width = elementData.jqxWidget.base.width;
							}
							if (height == undefined) {
								height = elementData.jqxWidget.base.height;
							}
						}

						if (width === undefined && height === undefined) {
							width = elementData.jqxWidget.element.style.width;
							height = elementData.jqxWidget.element.style.height;
						}

						var percentageSize = false;
						if (width != null && width.toString().indexOf("%") != -1) {
							percentageSize = true;
						}

						if (height != null && height.toString().indexOf("%") != -1) {
							percentageSize = true;
						}
						if (percentageSize) {
							if (!this.watchedElementData) {
								this.watchedElementData = [];
							}
							var that = this;
							var checkForChanges = function (mutations) {
								if (that.watchedElementData.forEach) {
									that.watchedElementData.forEach(function (data) {
										if (data.element.offsetWidth !== data.offsetWidth ||
											data.element.offsetHeight !== data.offsetHeight) {
											data.offsetWidth = data.element.offsetWidth;
											data.offsetHeight = data.element.offsetHeight;
											if (data.timer) {
												clearTimeout(data.timer);
											}
											data.timer = setTimeout(function () {
												if (!$.jqx.isHidden($(data.element))) {
													data.callback();
												}
												else {
													data.timer = setInterval(function () {
														if (!$.jqx.isHidden($(data.element))) {
															clearInterval(data.timer);
															data.callback();
														}
													}, 100);
												}
											});
										}
									});
								}
							};

							that.watchedElementData.push({
								element: element[0],
								offsetWidth: element[0].offsetWidth,
								offsetHeight: element[0].offsetHeight,
								callback: callback
							});
							if (!that.observer) {
								that.observer = new MutationObserver(checkForChanges);
								that.observer.observe(document.body, {
									attributes: true,
									childList: true,
									characterData: true
								});
							}
						}
					}
					catch (er) {
					}
					if ($.jqx.isHidden(element) && checkForHidden === true) {
						doResize(true);
					}
					$.jqx.resize = function () {
						doResize(null, 'resize');
					}
				},

				parseJSON: function (data) {
					if (!data || typeof data !== "string") {
						return null;
					}
					var rvalidchars = /^[\],:{}\s]*$/,
						rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
						rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
						rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;

					// Make sure leading/trailing whitespace is removed (IE can't handle it)
					data = $.trim(data);

					// Attempt to parse using the native JSON parser first
					if (window.JSON && window.JSON.parse) {
						return window.JSON.parse(data);
					}

					// Make sure the incoming data is actual JSON
					// Logic borrowed from http://json.org/json2.js
					if (rvalidchars.test(data.replace(rvalidescape, "@")
						.replace(rvalidtokens, "]")
						.replace(rvalidbraces, ""))) {

						return (new Function("return " + data))();

					}
					throw new Error("Invalid JSON: " + data);
				},

				html: function (element, value) {
					if (!$(element).on || !$.access) {
						return $(element).html(value);
					}
					try {	
						return $.access(element, function (value) {
							var elem = element[0] || {},
								i = 0,
								l = element.length;

							if (value === undefined) {
								return elem.nodeType === 1 ?
									elem.innerHTML.replace(rinlinejQuery, "") :
									undefined;
							}

							var rnoInnerhtml = /<(?:script|style|link)/i,
								nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
									"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
								rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
								rtagName = /<([\w:]+)/,
								rnocache = /<(?:script|object|embed|option|style)/i,
								rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
								rleadingWhitespace = /^\s+/,
								wrapMap = {
									option: [1, "<select multiple='multiple'>", "</select>"],
									legend: [1, "<fieldset>", "</fieldset>"],
									thead: [1, "<table>", "</table>"],
									tr: [2, "<table><tbody>", "</tbody></table>"],
									td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
									col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
									area: [1, "<map>", "</map>"],
									_default: [0, "", ""]
								};

							if (typeof value === "string" && !rnoInnerhtml.test(value) &&
								($.support.htmlSerialize || !rnoshimcache.test(value)) &&
								($.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
								!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

								value = value.replace(rxhtmlTag, "<$1></$2>");

								try {
									for (; i < l; i++) {
										elem = this[i] || {};
										if (elem.nodeType === 1) {
											$.cleanData(elem.getElementsByTagName("*"));
											elem.innerHTML = value;
										}
									}

									elem = 0;
								} catch (e) { }
							}

							if (elem) {
								element.empty().append(value);
							}
						}, null, value, arguments.length);
					}
					catch (error) {
						return $(element).html(value);
					}
				},

				hasTransform: function (el) {
					var transform = "";
					transform = el.css('transform');

					if (transform == "" || transform == 'none') {
						transform = el.parents().css('transform');
						if (transform == "" || transform == 'none') {
							var browserInfo = $.jqx.utilities.getBrowser();
							if (browserInfo.browser == 'msie') {
								transform = el.css('-ms-transform');
								if (transform == "" || transform == 'none') {
									transform = el.parents().css('-ms-transform');
								}
							}
							else if (browserInfo.browser == 'chrome') {
								transform = el.css('-webkit-transform');
								if (transform == "" || transform == 'none') {
									transform = el.parents().css('-webkit-transform');
								}
							}
							else if (browserInfo.browser == 'opera') {
								transform = el.css('-o-transform');
								if (transform == "" || transform == 'none') {
									transform = el.parents().css('-o-transform');
								}
							}
							else if (browserInfo.browser == 'mozilla') {
								transform = el.css('-moz-transform');
								if (transform == "" || transform == 'none') {
									transform = el.parents().css('-moz-transform');
								}
							}
						} else {
							return transform != "" && transform != 'none';
						}
					}
					if (transform == "" || transform == 'none') {
						transform = $(document.body).css('transform');
					}
					return transform != "" && transform != 'none' && transform != null;
				},

				getBrowser: function () {
					var ua = navigator.userAgent.toLowerCase();

					var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
						/(webkit)[ \/]([\w.]+)/.exec(ua) ||
						/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
						/(msie) ([\w.]+)/.exec(ua) ||
						ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
						[];

					var obj = {
						browser: match[1] || "",
						version: match[2] || "0"
					};
					if (ua.indexOf("rv:11.0") >= 0 && ua.indexOf(".net4.0c") >= 0) {
						obj.browser = "msie";
						obj.version = "11";
						match[1] = "msie";
					}
					if (ua.indexOf("edge") >= 0) {
						obj.browser = "msie";
						obj.version = "12";
						match[1] = "msie";
					}
					obj[match[1]] = match[1];
					return obj;
				}
			});
		$.jqx.browser = $.jqx.utilities.getBrowser();
		$.jqx.isHidden = function (element) {
			if (!element || !element[0])
				return false;

			var w = element[0].offsetWidth, h = element[0].offsetHeight;
			if (w === 0 || h === 0)
				return true;
			else {
				return false;
			}
		};

		$.jqx.ariaEnabled = true;
		$.jqx.aria = function (that, property, value) {
			if (!$.jqx.ariaEnabled)
				return;

			if (property == undefined) {
				$.each(that.aria, function (index, value) {
					var attrValue = !that.base ? that.host.attr(index) : that.base.host.attr(index);
					if (attrValue != undefined && !$.isFunction(attrValue)) {
						var newValue = attrValue;
						switch (value.type) {
							case "number":
								newValue = new Number(attrValue);
								if (isNaN(newValue)) newValue = attrValue;
								break;
							case "boolean":
								newValue = attrValue == "true" ? true : false;
								break;
							case "date":
								newValue = new Date(attrValue);
								if (newValue == "Invalid Date" || isNaN(newValue)) newValue = attrValue;
								break;
						}

						that[value.name] = newValue;
					}
					else {
						var attrValue = that[value.name];
						if ($.isFunction(attrValue)) attrValue = that[value.name]();
						if (attrValue == undefined) attrValue = "";
						try {
							!that.base ? that.host.attr(index, attrValue.toString()) : that.base.host.attr(index, attrValue.toString());
						}
						catch (error) {
						}
					}
				});
			}
			else {
				try {
					if (that.host) {
						if (!that.base) {
							if (that.host) {
								if (that.element.setAttribute) {
									that.element.setAttribute(property, value.toString());
								}
								else {
									that.host.attr(property, value.toString());
								}
							}
							else {
								that.attr(property, value.toString());
							}
						}
						else {
							if (that.base.host) {
								that.base.host.attr(property, value.toString());
							}
							else {
								that.attr(property, value.toString());
							}
						}
					}
					else if (that.setAttribute) {
						that.setAttribute(property, value.toString());
					}
				}
				catch (error) {
				}
			}
		};

		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (elt /*, from*/) {
				var len = this.length;

				var from = Number(arguments[1]) || 0;
				from = (from < 0)
					? Math.ceil(from)
					: Math.floor(from);
				if (from < 0)
					from += len;

				for (; from < len; from++) {
					if (from in this &&
						this[from] === elt)
						return from;
				}
				return -1;
			};
		}

		$.jqx.mobile = $.jqx.mobile || {};
		$.jqx.position = function (event) {
			var left = parseInt(event.pageX);
			var top = parseInt(event.pageY);

			if ($.jqx.mobile.isTouchDevice()) {
				var touches = $.jqx.mobile.getTouches(event);
				var touch = touches[0];
				left = parseInt(touch.pageX);
				top = parseInt(touch.pageY);
			}
			return { left: left, top: top }
		}

		$.extend($.jqx.mobile,
			{
				_touchListener: function (e, me) {
					var createTouchEvent = function (name, e) {
						var event = document.createEvent('MouseEvents');

						event.initMouseEvent(
							name,
							e.bubbles,
							e.cancelable,
							e.view,
							e.detail,
							e.screenX,
							e.screenY,
							e.clientX,
							e.clientY,
							e.ctrlKey,
							e.altKey,
							e.shiftKey,
							e.metaKey,
							e.button,
							e.relatedTarget
						);
						event._pageX = e.pageX;
						event._pageY = e.pageY;

						return event;
					}

					var eventMap = { 'mousedown': 'touchstart', 'mouseup': 'touchend', 'mousemove': 'touchmove' };
					var event = createTouchEvent(eventMap[e.type], e);
					e.target.dispatchEvent(event);

					var fn = e.target['on' + eventMap[e.type]];
					if (typeof fn === 'function') fn(e);
				},

				setMobileSimulator: function (element, value) {
					if (this.isTouchDevice()) {
						return;
					}

					this.simulatetouches = true;
					if (value == false) {
						this.simulatetouches = false;
					}

					var eventMap = { 'mousedown': 'touchstart', 'mouseup': 'touchend', 'mousemove': 'touchmove' };

					var self = this;
					if (window.addEventListener) {
						var subscribeToEvents = function () {
							for (var key in eventMap) {
								if (element.addEventListener) {
									element.removeEventListener(key, self._touchListener);
									element.addEventListener(key, self._touchListener, false);
								}

								//  document.removeEventListener(key, self._touchListener);
								//  document.addEventListener(key, self._touchListener, false);
							}
						}

						if ($.jqx.browser.msie) {
							subscribeToEvents();
						}
						else {
							subscribeToEvents();
						}
					}
				},

				isTouchDevice: function () {
					if (this.touchDevice != undefined)
						return this.touchDevice;

					var txt = "Browser CodeName: " + navigator.appCodeName + "";
					txt += "Browser Name: " + navigator.appName + "";
					txt += "Browser Version: " + navigator.appVersion + "";
					txt += "Platform: " + navigator.platform + "";
					txt += "User-agent header: " + navigator.userAgent + "";

					if (navigator.maxTouchPoints > 1) {
						//return true;
					}

					if (txt.indexOf('Android') != -1)
						return true;

					if (txt.indexOf('IEMobile') != -1)
						return true;

					if (txt.indexOf('Windows Phone') != -1)
						return true;

					if (txt.indexOf('WPDesktop') != -1)
						return true;

					if (txt.indexOf('ZuneWP7') != -1)
						return true;

					if (txt.indexOf('BlackBerry') != -1 && txt.indexOf('Mobile Safari') != -1)
						return true;

					if (txt.indexOf('ipod') != -1)
						return true;

					if (txt.indexOf('nokia') != -1 || txt.indexOf('Nokia') != -1)
						return true;

					if (txt.indexOf('Chrome/17') != -1)
						return false;

					if (txt.indexOf('CrOS') != -1)
						return false;

					if (txt.indexOf('Opera') != -1 && txt.indexOf('Mobi') == -1 && txt.indexOf('Mini') == -1 && txt.indexOf('Platform: Win') != -1) {
						return false;
					}

					if (txt.indexOf("HybridDeviceTouch") != -1) {
						return true
					}

					if (txt.indexOf("HybridDeviceMouse") != -1) {
						return false
					}

					if (txt.indexOf('Opera') != -1 && txt.indexOf('Mobi') != -1 && txt.indexOf('Opera Mobi') != -1) {
						return true;
					}

					if (txt.indexOf('Mozilla/5.0 (X11; Linux x86_64)') != -1) {
						return false;
					}

					var deviceTypes = {
						ios: 'i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ',
						android: '(Android |HTC_|Silk/)',
						blackberry: 'BlackBerry(?:.*)Version\/',
						rimTablet: 'RIM Tablet OS ',
						webos: '(?:webOS|hpwOS)\/',
						bada: 'Bada\/'
					}

					// check for IPad, IPhone, IE and Chrome
					try {
						if (this.touchDevice != undefined)
							return this.touchDevice;

						this.touchDevice = false;
						for (var i in deviceTypes) {
							if (deviceTypes.hasOwnProperty(i)) {
								var prefix = deviceTypes[i];
								var match = txt.match(new RegExp('(?:' + prefix + ')([^\\s;]+)'));
								if (match) {
									if (i.toString() == "blackberry") {
										// handle touches through mouse pointer.
										this.touchDevice = false;
										return false;
									}

									this.touchDevice = true;
									return true;
								}
							}
						}

						var userAgent = navigator.userAgent;
						if (navigator.platform.toLowerCase().indexOf('win') != -1) {
							if (userAgent.indexOf('Windows Phone') >= 0 || userAgent.indexOf('WPDesktop') >= 0 || userAgent.indexOf('IEMobile') >= 0 || userAgent.indexOf('ZuneWP7') >= 0) {
								this.touchDevice = true;
								return true;
							}
							else {
								if (userAgent.indexOf('Touch') >= 0) {
									var supported = ('MSPointerDown' in window) || ('pointerdown' in window);
									if (supported) {
										this.touchDevice = true;
										return true;
									}
									if (userAgent.indexOf('ARM') >= 0) {
										this.touchDevice = true;
										return true;
									}

									this.touchDevice = false;
									return false;
								}
							}
						}

						if (navigator.platform.toLowerCase().indexOf('win') != -1) {
							this.touchDevice = false;
							return false;
						}
						if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
							this.touchDevice = true;
						}
						return this.touchDevice;
					} catch (e) {
						this.touchDevice = false;
						return false;
					}
				},

				getLeftPos: function (inputObj) {
					var returnValue = inputObj.offsetLeft;
					while ((inputObj = inputObj.offsetParent) != null) {
						if (inputObj.tagName != 'HTML') {
							returnValue += inputObj.offsetLeft;
							if (document.all) returnValue += inputObj.clientLeft;
						}
					}
					return returnValue;
				},

				getTopPos: function (inputObj) {
					var returnValue = inputObj.offsetTop;
					var initialOffset = $(inputObj).coord();
					while ((inputObj = inputObj.offsetParent) != null) {
						if (inputObj.tagName != 'HTML') {
							returnValue += (inputObj.offsetTop - inputObj.scrollTop);
							if (document.all) returnValue += inputObj.clientTop;
						}
					}
					var agent = navigator.userAgent.toLowerCase();
					var wp8 = (agent.indexOf('windows phone') != -1 || agent.indexOf('WPDesktop') != -1 || agent.indexOf('ZuneWP7') != -1 || agent.indexOf('msie 9') != -1 || agent.indexOf('msie 11') != -1 || agent.indexOf('msie 10') != -1) && agent.indexOf('touch') != -1;
					if (wp8) {
						return initialOffset.top;
					}

					if (this.isSafariMobileBrowser()) {
						if (this.isSafari4MobileBrowser() && this.isIPadSafariMobileBrowser()) {
							return returnValue;
						}
						if (agent.indexOf('version/7') != -1) {
							return initialOffset.top;
						}
						if (agent.indexOf('version/6') != -1 || agent.indexOf('version/5') != -1) {
							returnValue = returnValue + $(window).scrollTop();
						}
						if (/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)) {
							 return returnValue;
					//       return returnValue + $(window).scrollTop();
						}
						if (/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)) {
							return returnValue;
					//        return returnValue + $(window).scrollTop();
						}

						return initialOffset.top;
					}

					return returnValue;
				},

				isChromeMobileBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = agent.indexOf('android') != -1;
					return result;
				},

				isOperaMiniMobileBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = agent.indexOf('opera mini') != -1 || agent.indexOf('opera mobi') != -1;
					return result;
				},

				isOperaMiniBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = agent.indexOf('opera mini') != -1;
					return result;
				},

				isNewSafariMobileBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = agent.indexOf('ipad') != -1 || agent.indexOf('iphone') != -1 || agent.indexOf('ipod') != -1;
					result = result && (agent.indexOf('version/5') != -1);
					return result;
				},

				isSafari4MobileBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = agent.indexOf('ipad') != -1 || agent.indexOf('iphone') != -1 || agent.indexOf('ipod') != -1;
					result = result && (agent.indexOf('version/4') != -1);
					return result;
				},

				isWindowsPhone: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = (agent.indexOf('windows phone') != -1 || agent.indexOf('WPDesktop') != -1 || agent.indexOf('ZuneWP7') != -1 || agent.indexOf('msie 9') != -1 || agent.indexOf('msie 11') != -1 || agent.indexOf('msie 10') != -1 && agent.indexOf('touch') != -1);
					return result;
				},

				isSafariMobileBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					if (/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)) {
						return true;
					}
					if (/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)) {
						return true;
					}

					var result = agent.indexOf('ipad') != -1 || agent.indexOf('iphone') != -1 || agent.indexOf('ipod') != -1 || agent.indexOf('mobile safari') != -1;
					return result;
				},

				isIPadSafariMobileBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = agent.indexOf('ipad') != -1;
					return result;
				},

				isMobileBrowser: function () {
					var agent = navigator.userAgent.toLowerCase();
					var result = agent.indexOf('ipad') != -1 || agent.indexOf('iphone') != -1 || agent.indexOf('android') != -1;
					return result;
				},

				// Get the touch points from this event
				getTouches: function (e) {
					if (e.originalEvent) {
						if (e.originalEvent.touches && e.originalEvent.touches.length) {
							return e.originalEvent.touches;
						} else if (e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
							return e.originalEvent.changedTouches;
						}
					}

					if (!e.touches) {
						e.touches = new Array();
						e.touches[0] = e.originalEvent != undefined ? e.originalEvent : e;

						if (e.originalEvent != undefined && e.pageX)
							e.touches[0] = e;
						if (e.type == 'mousemove') e.touches[0] = e;
					}

					return e.touches;
				},

				getTouchEventName: function (name) {
					if (this.isWindowsPhone()) {

						var agent = navigator.userAgent.toLowerCase();
						if (agent.indexOf('windows phone 7') != -1) {
							if (name.toLowerCase().indexOf('start') != -1) return 'MSPointerDown';
							if (name.toLowerCase().indexOf('move') != -1) return 'MSPointerMove';
							if (name.toLowerCase().indexOf('end') != -1) return 'MSPointerUp';
						}
						if (name.toLowerCase().indexOf('start') != -1) return 'pointerdown';
						if (name.toLowerCase().indexOf('move') != -1) return 'pointermove';
						if (name.toLowerCase().indexOf('end') != -1) return 'pointerup';
					}
					else {
						return name;
					}
				},

				// Dispatches a fake mouse event from a touch event
				dispatchMouseEvent: function (name, touch, target) {
					if (this.simulatetouches)
						return;

					var e = document.createEvent('MouseEvent');
					e.initMouseEvent(name, true, true, touch.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
					if (target != null) {
						target.dispatchEvent(e);
					}
				},

				// Find the root node of this target
				getRootNode: function (target) {
					while (target.nodeType !== 1) {
						target = target.parentNode;
					}
					return target;
				},

				setTouchScroll: function (enable, key) {
					if (!this.enableScrolling) this.enableScrolling = [];
					this.enableScrolling[key] = enable;
				},

				touchScroll: function (element, scrollHeight, callback, key, horizontalScroll, verticalScroll) {
					if (element == null)
						return;

					var me = this;
					var scrollY = 0;
					var touchY = 0;
					var movedY = 0;
					var scrollX = 0;
					var touchX = 0;
					var movedX = 0;
					if (!this.scrolling) this.scrolling = [];
					this.scrolling[key] = false;
					var moved = false;
					var $element = $(element);
					var touchTags = ['select', 'input', 'textarea'];
					var touchStart = 0;
					var touchEnd = 0;
					if (!this.enableScrolling) this.enableScrolling = [];
					this.enableScrolling[key] = true;
					var key = key;
					var touchStartName = this.getTouchEventName('touchstart') + ".touchScroll";
					var touchEndName = this.getTouchEventName('touchend') + ".touchScroll";
					var touchMoveName = this.getTouchEventName('touchmove') + ".touchScroll";

					//            horizontalScroll.fadeOut(0);
					//            verticalScroll.fadeOut(0);

					var view, indicator, relative, xframe, xdelta,
						xmax, min, max, offset, reference, pressed, xform,
						jqxAnimations, xjqxAnimations, frame, timestamp, ticker,
						amplitude, target, xtarget, xreference, timeConstant;
					max = scrollHeight;
					var min = 0;
					var offset = 0;
					var xoffset = 0;
					var initialOffset = 0;
					var initialXOffset = 0;
					var xmax = horizontalScroll.jqxScrollBar('max');
					var timeConstant = 325; // ms

					function ypos(e) {
						// touch event
						if (e.targetTouches && (e.targetTouches.length >= 1)) {
							return e.targetTouches[0].clientY;
						}
						else if (e.originalEvent && e.originalEvent.clientY !== undefined) {
							return e.originalEvent.clientY;
						}
						else {
							var touches = me.getTouches(e);
							return touches[0].clientY;
						}

						// mouse event
						//    return e.clientY;
					}

					function xpos(e) {
						// touch event
						if (e.targetTouches && (e.targetTouches.length >= 1)) {
							return e.targetTouches[0].clientX;
						}
						else if (e.originalEvent && e.originalEvent.clientX !== undefined) {
							return e.originalEvent.clientX;
						}
						else {
							var touches = me.getTouches(e);
							return touches[0].clientX;
						}

						// mouse event
						//   return e.clientX;
					}

					var track = function () {
						var now, elapsed, delta, v;

						now = Date.now();
						elapsed = now - timestamp;
						timestamp = now;
						delta = offset - frame;
						var xdelta = xoffset - xframe;
						frame = offset;
						xframe = xoffset;
						pressed = true;
						v = 1000 * delta / (1 + elapsed);
						var xv = 1000 * xdelta / (1 + elapsed);
						jqxAnimations = 0.8 * v + 0.2 * jqxAnimations;
						xjqxAnimations = 0.8 * xv + 0.2 * xjqxAnimations;
					}

					var tapped = false;

					var touchStart = function (event) {
						if (!me.enableScrolling[key])
							return true;

						// Allow certain HTML tags to receive touch events
						if ($.inArray(event.target.tagName.toLowerCase(), touchTags) !== -1) {
							return;
						}
						offset = verticalScroll.jqxScrollBar('value');
						xoffset = horizontalScroll.jqxScrollBar('value');

						var touches = me.getTouches(event);
						var touch = touches[0];
						if (touches.length == 1) {
							me.dispatchMouseEvent('mousedown', touch, me.getRootNode(touch.target));
						}
						xmax = horizontalScroll.jqxScrollBar('max');
						max = verticalScroll.jqxScrollBar('max');
						function tap(e) {
							tapped = false;
							pressed = true;
							reference = ypos(e);
							xreference = xpos(e);
							jqxAnimations = amplitude = xjqxAnimations = 0;
							frame = offset;
							xframe = xoffset;
							timestamp = Date.now();
							clearInterval(ticker);
							ticker = setInterval(track, 100);
							initialOffset = offset;
							initialXOffset = xoffset;

							if (offset > 0 && offset < max && verticalScroll[0].style.visibility != "hidden") {
								//      e.preventDefault();
							}
							//    if (xoffset > 0 && xoffset < xmax && horizontalScroll[0].style.visibility != "hidden") {
							//        e.preventDefault();

							//      e.stopPropagation();
							//   e.stopPropagation();
							// return false;
						}

						tap(event);
						moved = false;
						touchY = touch.pageY;
						touchX = touch.pageX;
						if (me.simulatetouches) {
							if (touch._pageY != undefined) {
								touchY = touch._pageY;
								touchX = touch._pageX;
							}
						}
						me.scrolling[key] = true;
						scrollY = 0;
						scrollX = 0;
						return true;
					}

					if ($element.on) {
						$element.on(touchStartName, touchStart);
					}
					else {
						$element.bind(touchStartName, touchStart);
					}

					var scroll = function (top, event) {
						offset = (top > max) ? max : (top < min) ? min : top;
						callback(null, top, 0, 0, event);

						return (top > max) ? "max" : (top < min) ? "min" : "value";
					}

					var hscroll = function (left, event) {
						xoffset = (left > xmax) ? xmax : (left < min) ? min : left;
						callback(left, null, 0, 0, event);

						return (left > xmax) ? "max" : (left < min) ? "min" : "value";
					}

					function autoScroll() {
						var elapsed, delta;
						if (amplitude) {
							elapsed = Date.now() - timestamp;
							delta = -amplitude * Math.exp(-elapsed / timeConstant);
							if (delta > 0.5 || delta < -0.5) {
								scroll(target + delta);
								requestAnimationFrame(autoScroll);
							} else {
								scroll(target);
								//     verticalScroll.fadeOut('fast');
							}
						}
					}
					function hAutoScroll() {
						var elapsed, delta;
						if (amplitude) {
							elapsed = Date.now() - timestamp;
							delta = -amplitude * Math.exp(-elapsed / timeConstant);
							if (delta > 0.5 || delta < -0.5) {
								hscroll(xtarget + delta);
								requestAnimationFrame(hAutoScroll);
							} else {
								hscroll(xtarget);
								//        horizontalScroll.fadeOut('fast');
							}

						}
					}
					var touchMove = function (event) {
						if (!me.enableScrolling[key])
							return true;

						if (!me.scrolling[key]) {
							return true;
						}

						if (tapped) {
							event.preventDefault();
							event.stopPropagation();
						}

						var touches = me.getTouches(event);
						if (touches.length > 1) {
							return true;
						}

						var pageY = touches[0].pageY;
						var pageX = touches[0].pageX;

						if (me.simulatetouches) {
							if (touches[0]._pageY != undefined) {
								pageY = touches[0]._pageY;
								pageX = touches[0]._pageX;
							}
						}


						var dy = pageY - touchY;
						var dx = pageX - touchX;
						touchEnd = pageY;
						var touchHorizontalEnd = pageX;
						movedY = dy - scrollY;
						movedX = dx - scrollX;
						moved = true;
						scrollY = dy;
						scrollX = dx;

						var hScrollVisible = horizontalScroll != null ? horizontalScroll[0].style.visibility != 'hidden' : true;
						var vScrollVisible = verticalScroll != null ? verticalScroll[0].style.visibility != 'hidden' : true;


						function drag(e) {
							var y, delta, x;
							if (pressed) {
								y = ypos(e);
								x = xpos(e);
								delta = reference - y;
								xdelta = xreference - x;
								var dragged = "value";
								if (delta > 2 || delta < -2) {
									reference = y;
									dragged = scroll(offset + delta, e);
									track();

									if (dragged == "min" && initialOffset === 0) {
										return true;
									}
									if (dragged == "max" && initialOffset === max) {
										return true;
									}

									if (!vScrollVisible) {
										return true;
									}
									e.preventDefault();
									e.stopPropagation();
									tapped = true;

									return false;
								}
								else {
									if (xdelta > 2 || xdelta < -2) {
										xreference = x;
										dragged = hscroll(xoffset + xdelta, e);
										track();

										if (dragged == "min" && initialXOffset === 0) {
											return true;
										}
										if (dragged == "max" && initialXOffset === xmax) {
											return true;
										}

										if (!hScrollVisible) {
											return true;
										}
										tapped = true;
										e.preventDefault();
										e.stopPropagation();
										return false;
									}
								}
								e.preventDefault();
							}
						}

						if (hScrollVisible || vScrollVisible) {
							if ((hScrollVisible) || (vScrollVisible)) {
								drag(event);

								//      callback(-movedX * 1, -movedY * 1, dx, dy, event);
								//event.preventDefault();
								//event.stopPropagation();
								//if (event.preventManipulation) {
								//    event.preventManipulation();
								//}
								//return false;
							}
						}
					}

					if ($element.on) {
						$element.on(touchMoveName, touchMove);
					}
					else $element.bind(touchMoveName, touchMove);



					var touchCancel = function (event) {
						if (!me.enableScrolling[key])
							return true;

						var touch = me.getTouches(event)[0];
						if (!me.scrolling[key]) {
							return true;
						}

						pressed = false;
						clearInterval(ticker);
						if (jqxAnimations > 10 || jqxAnimations < -10) {
							amplitude = 0.8 * jqxAnimations;
							target = Math.round(offset + amplitude);
							timestamp = Date.now();
							requestAnimationFrame(autoScroll);
							//             verticalScroll.fadeIn(100);
						}
						else if (xjqxAnimations > 10 || xjqxAnimations < -10) {
							amplitude = 0.8 * xjqxAnimations;
							xtarget = Math.round(xoffset + amplitude);
							timestamp = Date.now();
							requestAnimationFrame(hAutoScroll);
							//          horizontalScroll.fadeIn(100);
						}
						else {
							//        horizontalScroll.fadeOut(100);
							//        verticalScroll.fadeOut(100);
						}

						me.scrolling[key] = false;
						if (moved) {
							me.dispatchMouseEvent('mouseup', touch, event.target);
						} else {
							var touch = me.getTouches(event)[0],
								t = me.getRootNode(touch.target);

							//        event.preventDefault();
							//         event.stopPropagation();
							// Dispatch fake mouse up and click events if this touch event did not move
							me.dispatchMouseEvent('mouseup', touch, t);
							me.dispatchMouseEvent('click', touch, t);
							return true;
						}
					}

					if (this.simulatetouches) {
						var windowBindFunc = $(window).on != undefined || $(window).bind;
						var windowMouseUp = function (event) {
							try {
								touchCancel(event);
							}
							catch (er) {
							}
							me.scrolling[key] = false;
						};
						$(window).on != undefined ? $(document).on('mouseup.touchScroll', windowMouseUp) : $(document).bind('mouseup.touchScroll', windowMouseUp);

						if (window.frameElement) {
							if (window.top != null) {
								var eventHandle = function (event) {
									try {
										touchCancel(event);
									}
									catch (er) {
									}
									me.scrolling[key] = false;
								};

								if (window.top.document) {
									$(window.top.document).on ? $(window.top.document).on('mouseup', eventHandle) : $(window.top.document).bind('mouseup', eventHandle);
								}
							}
						}

						var docBindFunc = $(document).on != undefined || $(document).bind;
						var touchEndFunc = function (event) {
							if (!me.scrolling[key]) {
								return true;
							}

							me.scrolling[key] = false;
							var touch = me.getTouches(event)[0],
								target = me.getRootNode(touch.target);

							// Dispatch fake mouse up and click events if this touch event did not move
							me.dispatchMouseEvent('mouseup', touch, target);
							me.dispatchMouseEvent('click', touch, target);
						};

						$(document).on != undefined ? $(document).on('touchend', touchEndFunc) : $(document).bind('touchend', touchEndFunc);
					}

					if ($element.on) {
						$element.on('dragstart', function (event) {
							event.preventDefault();
						});
						$element.on('selectstart', function (event) {
							event.preventDefault();
						});
					}
					$element.on ? $element.on(touchEndName + ' touchcancel.touchScroll', touchCancel) : $element.bind(touchEndName + ' touchcancel.touchScroll', touchCancel);
				}

			});

		$.jqx.cookie = $.jqx.cookie || {};
		$.extend($.jqx.cookie,
			{
				cookie: function (key, value, options) {
					// set cookie.
					if (arguments.length > 1 && String(value) !== "[object Object]") {
						options = $.extend({}, options);

						if (value === null || value === undefined) {
							options.expires = -1;
						}

						if (typeof options.expires === 'number') {
							var days = options.expires, t = options.expires = new Date();
							t.setDate(t.getDate() + days);
						}

						value = String(value);

						return (document.cookie = [
							encodeURIComponent(key), '=',
							options.raw ? value : encodeURIComponent(value),
							options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
							options.path ? '; path=' + options.path : '',
							options.domain ? '; domain=' + options.domain : '',
							options.secure ? '; secure' : ''
						].join(''));
					}
					// get cookie...
					options = value || {};
					var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
					return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
				}
			});

		// stringutilities
		$.jqx.string = $.jqx.string || {};
		$.extend($.jqx.string,
			{
				replace: function (text, stringToFind, stringToReplace) {
					if (stringToFind === stringToReplace) return this;
					var temp = text;
					var index = temp.indexOf(stringToFind);
					while (index != -1) {
						temp = temp.replace(stringToFind, stringToReplace);
						index = temp.indexOf(stringToFind);
					}
					return temp;
				},

				contains: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					return fullString.indexOf(value) != -1;
				},

				containsIgnoreCase: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					return fullString.toString().toUpperCase().indexOf(value.toString().toUpperCase()) != -1;
				},

				equals: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					fullString = this.normalize(fullString);

					if (value.length == fullString.length) {
						return fullString.slice(0, value.length) == value;
					}

					return false;
				},

				equalsIgnoreCase: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					fullString = this.normalize(fullString);

					if (value.length == fullString.length) {
						return fullString.toUpperCase().slice(0, value.length) == value.toUpperCase();
					}

					return false;
				},

				startsWith: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					return fullString.slice(0, value.length) == value;
				},

				startsWithIgnoreCase: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					return fullString.toUpperCase().slice(0, value.length) == value.toUpperCase();
				},

				normalize: function (fullString) {
					if (fullString.charCodeAt(fullString.length - 1) == 65279) {
						fullString = fullString.substring(0, fullString.length - 1);
					}

					return fullString;
				},

				endsWith: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					fullString = this.normalize(fullString);
					return fullString.slice(-value.length) == value;
				},

				endsWithIgnoreCase: function (fullString, value) {
					if (fullString == null || value == null)
						return false;

					fullString = this.normalize(fullString);

					return fullString.toUpperCase().slice(-value.length) == value.toUpperCase();
				}
			});

		$.extend($.easing, {
			easeOutBack: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
			},
			easeInQuad: function (x, t, b, c, d) {
				return c * (t /= d) * t + b;
			},
			easeInOutCirc: function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
				return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
			},
			easeInOutSine: function (x, t, b, c, d) {
				return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
			},
			easeInCubic: function (x, t, b, c, d) {
				return c * (t /= d) * t * t + b;
			},
			easeOutCubic: function (x, t, b, c, d) {
				return c * ((t = t / d - 1) * t * t + 1) + b;
			},
			easeInOutCubic: function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
				return c / 2 * ((t -= 2) * t * t + 2) + b;
			},
			easeInSine: function (x, t, b, c, d) {
				return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
			},
			easeOutSine: function (x, t, b, c, d) {
				return c * Math.sin(t / d * (Math.PI / 2)) + b;
			},
			easeInOutSine: function (x, t, b, c, d) {
				return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
			}
		});
	})(jqxBaseFramework);

	(function ($) {
		if ($.event && $.event.special) {
			$.extend($.event.special,
				{
					"close": { noBubble: true },
					"open": { noBubble: true },
					"cellclick": { noBubble: true },
					"rowclick": { noBubble: true },
					"tabclick": { noBubble: true },
					"selected": { noBubble: true },
					"expanded": { noBubble: true },
					"collapsed": { noBubble: true },
					"valuechanged": { noBubble: true },
					"expandedItem": { noBubble: true },
					"collapsedItem": { noBubble: true },
					"expandingItem": { noBubble: true },
					"collapsingItem": { noBubble: true }
				});
		}
		if ($.fn.extend) {
			$.fn.extend({
				ischildof: function (filter_string) {
					if (!$(this).parents) {
						var result = filter_string.element.contains(this.element)
						return result;
					}

					var parents = $(this).parents().get();

					for (var j = 0; j < parents.length; j++) {
						if (typeof filter_string != "string") {
							var parent = parents[j];
							if (filter_string !== undefined) {
								if (parent == filter_string[0])
									return true;
							}
						}
						else {
							if (filter_string !== undefined) {
								if ($(parents[j]).is(filter_string)) {
									return true;
								}
							}
						}
					}

					return false;
				}
			});
		}

		$.fn.jqxProxy = function () {
			var widget = $(this).data().jqxWidget;
			var args = Array.prototype.slice.call(arguments, 0);
			var element = widget.element;
			if (!element) element = widget.base.element;
			return $.jqx.jqxWidgetProxy(widget.widgetName, element, args);
		}

		var originalVal = $.originalVal = $.fn.val;
		$.fn.val = function (value) {
			if (typeof value == 'undefined') {
				if ($(this).hasClass('jqx-widget') || $(this).hasClass('jqx-input-group')) {
					var widget = $(this).data().jqxWidget;
					if (widget && widget.val) {
						return widget.val();
					}
				}
				if (this[0] && this[0].tagName.toLowerCase().indexOf('angular') >= 0) {
					var widget = $(this).find('.jqx-widget').data().jqxWidget;
					if (widget && widget.val) {
						return widget.val();
					}

				}
				return originalVal.call(this);
			}
			else {
				if ($(this).hasClass('jqx-widget') || $(this).hasClass('jqx-input-group')) {
					var widget = $(this).data().jqxWidget;
					if (widget && widget.val) {
						if (arguments.length != 2) {
							return widget.val(value);
						}
						else {
							return widget.val(value, arguments[1]);
						}
					}
				}
				if (this[0] && this[0].tagName.toLowerCase().indexOf('angular') >= 0) {
					var widget = $(this).find('.jqx-widget').data().jqxWidget;
					if (widget && widget.val) {
						if (arguments.length != 2) {
							return widget.val(value);
						}
						else {
							return widget.val(value, arguments[1]);
						}
					}

				}

				return originalVal.call(this, value);
			}
		};

		if ($.fn.modal && $.fn.modal.Constructor) {
			$.fn.modal.Constructor.prototype.enforceFocus = function () {
				$(document)
					.off('focusin.bs.modal') // guard against infinite focus loop
					.on('focusin.bs.modal', $.proxy(function (e) {
						if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
							if ($(e.target).parents().hasClass('jqx-popup'))
								return true;
							this.$element.trigger('focus')
						}
					}, this));
			}
		}

		$.fn.coord = function (options) {
			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[0],
				doc = elem && elem.ownerDocument;
			if (!doc) {
				return;
			}
			docElem = doc.documentElement;
			if (!$.contains(docElem, elem)) {
				return box;
			}
			if (typeof elem.getBoundingClientRect !== undefined) {
				box = elem.getBoundingClientRect();
			}
			var getWindow = function (elem) {
				return $.isWindow(elem) ?
					elem :
					elem.nodeType === 9 ?
						elem.defaultView || elem.parentWindow :
						false;
			};

			win = getWindow(doc);
			var additionalLeftOffset = 0;
			var additionalTopOffset = 0;
			var agent = navigator.userAgent.toLowerCase();
			var result = agent.indexOf('ipad') != -1 || agent.indexOf('iphone') != -1;
			if (result) {
				// fix for iphone/ipad left offsets.
				additionalLeftOffset = 2;
			}
			if (true == options) {
				if (document.body.style.position != 'static' && document.body.style.position != '') {
					var coords = $(document.body).coord();
					additionalLeftOffset = -coords.left;
					additionalTopOffset = -coords.top;
				}
			}

			return {
				top: additionalTopOffset + box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
				left: additionalLeftOffset + box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
			};
		};

		$.jqx.ripplers = [];
		$.jqx.ripple = function (element, hostElement, hostElementType) {
			if (!hostElement) {
				hostElement = element;
			}

			var rippler = $(element);
			var mouseCaptured = false;

			rippler.append("<span class='ink'></span>");
			var ink = rippler.find('.ink');


			var hasRippler = false;

			for (var i = 0; i < $.jqx.ripplers.length; i++) {
				var ripplerItem = $.jqx.ripplers[i];

				if (ripplerItem.element[0] === element[0]) {
					hasRippler = true;
					break;
				}
			}

			if (!hasRippler) {
				$.jqx.ripplers.push({ ink: ink, element: element, hostElement: hostElement, hostElementType: hostElementType });
			}

			if (hostElementType === "checkbox" || hostElementType === "radiobutton") {

				// set .ink diametr
				var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
				ink.css({ height: d, width: d });

				var x = rippler.width() / 2 - ink.width() / 2;
				var y = rippler.height() / 2 - ink.height() / 2;

				// set .ink position and add class .animate
				ink.css({
					top: y + 'px',
					left: x + 'px'
				});
			}

			// Ripple-effect animation
			if ($.jqx.ripplers.length === 1) {
				$(document).on('mouseup', function (e) {
					$.jqx.ripple.mouseCaptured = false;

					for (var i = 0; i < $.jqx.ripplers.length; i++) {
						var rippler = $.jqx.ripplers[i];

						rippler.ink.removeClass('active');
						rippler.element.removeClass('active');

						if (hostElementType !== "checkbox" && hostElementType !== "radiobutton") {
							if (rippler.ink.hasClass('animate')) {
								rippler.ink.removeClass('animate');
							}
						}
					}
				});
			}
			hostElement.off('mousedown.ripple');
			hostElement.on('mousedown.ripple', function (e) {
				var rippler = $(element);

				$.jqx.ripple.mouseCaptured = true;

				setTimeout(function () {
					// create .ink element if it doesn't exist

					if (rippler.find('.ink').length == 0) {
						rippler.append("<span class='ink'></span>");
					}

					var ink = rippler.find('.ink');

					// prevent quick double clicks
					ink.removeClass('animate');


					// set .ink diametr
					if (!ink.height() && !ink.width()) {
						var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
						ink.css({ height: d, width: d });
					}

					if (hostElementType === "checkbox" || hostElementType === "radiobutton") {
						if (hostElementType === "checkbox") {
							if (hostElement.jqxCheckBox('disabled')) {
								return;
							}
						}

						if (hostElementType === "radiobutton") {
							if (hostElement.jqxRadioButton('disabled')) {
								return;
							}
						}

						// get click coordinates
						var x = rippler.width() / 2 - ink.width() / 2;
						var y = rippler.height() / 2 - ink.height() / 2;

						// set .ink position and add class .animate
						ink.css({
							top: y + 'px',
							left: x + 'px'
						}).addClass('animate');

						ink.on('animationend', function () {
							if ($.jqx.ripple.mouseCaptured) {
								ink.removeClass('animate')
								ink.addClass('active')
								element.addClass('active')
							}
						});

						return;
					}

					// get click coordinates
					var x = e.pageX - rippler.offset().left - ink.width() / 2;
					var y = e.pageY - rippler.offset().top - ink.height() / 2;

					// set .ink position and add class .animate
					ink.css({
						top: y + 'px',
						left: x + 'px'
					}).addClass('animate');
				});
			});
		}
	})(jqxBaseFramework);
})();


















/***/ }),

/***/ 4198:
/***/ (() => {

﻿/* tslint:disable */
/* eslint-disable */
(function(){
	if (typeof document === 'undefined') { 
		return;
	}

( function ( $ ) {

    if ( !Array.prototype.find ) {
        Object.defineProperty( Array.prototype, 'find', {
            value: function ( predicate ) {
                // 1. Let O be ? ToObject(this value).
                if ( this == null ) {
                    throw TypeError( '"this" is null or not defined' );
                }

                var o = Object( this );

                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;

                // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                if ( typeof predicate !== 'function' ) {
                    throw TypeError( 'predicate must be a function' );
                }

                // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                var thisArg = arguments[ 1 ];

                // 5. Let k be 0.
                var k = 0;

                // 6. Repeat, while k < len
                while ( k < len ) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                    // d. If testResult is true, return kValue.
                    var kValue = o[ k ];
                    if ( predicate.call( thisArg, kValue, k, o ) ) {
                        return kValue;
                    }
                    // e. Increase k by 1.
                    k++;
                }

                // 7. Return undefined.
                return undefined;
            },
            configurable: true,
            writable: true
        } );
    }

    $.jqx.observableArray = function ( items, observeFunction ) {
        if ( typeof ( items ) == 'string' ) {
            items = $.parseJSON( items );
        }

        if ( !Object.defineProperty ||
            !( function () { try { Object.defineProperty( {}, 'x', {} ); return true; } catch ( e ) { return false; } }() ) ) {
            var orig = Object.defineProperty;
            Object.defineProperty = function ( o, prop, desc ) {
                // In IE8 try built-in implementation for defining properties on DOM prototypes.
                if ( orig ) { try { return orig( o, prop, desc ); } catch ( e ) { } }

                if ( o !== Object( o ) ) { throw TypeError( "Object.defineProperty called on non-object" ); }
                if ( Object.prototype.__defineGetter__ && ( 'get' in desc ) ) {
                    Object.prototype.__defineGetter__.call( o, prop, desc.get );
                }
                if ( Object.prototype.__defineSetter__ && ( 'set' in desc ) ) {
                    Object.prototype.__defineSetter__.call( o, prop, desc.set );
                }
                if ( 'value' in desc ) {
                    o[ prop ] = desc.value;
                }
                else if ( !o[ prop ] ) {
                    o[ prop ] = desc;
                }

                return o;
            };
        }

        if ( !Array.prototype.forEach ) {
            Array.prototype.forEach = function ( fun /*, thisp */ ) {
                if ( this === void 0 || this === null ) { throw TypeError(); }

                var t = Object( this );
                var len = t.length >>> 0;
                if ( typeof fun !== "function" ) { throw TypeError(); }

                var thisp = arguments[ 1 ], i;
                for ( i = 0; i < len; i++ ) {
                    if ( i in t ) {
                        fun.call( thisp, t[ i ], i, t );
                    }
                }
            };
        }

        if ( typeof Object.getOwnPropertyNames !== "function" ) {
            Object.getOwnPropertyNames = function ( o ) {
                if ( o !== Object( o ) ) { throw TypeError( "Object.getOwnPropertyNames called on non-object" ); }
                var props = [], p;
                for ( p in o ) {
                    if ( Object.prototype.hasOwnProperty.call( o, p ) ) {
                        props.push( p );
                    }
                }
                return props;
            };
        }

        var that = this, notifier, array = [];
        that.notifier = null;
        that.name = "observableArray";
        that.observing = true;
        that.changes = new Array();

        var observeFunction = observeFunction;
        that.observe = function () {
            that.observing = true;
            if ( arguments.length == 1 ) {
                observeFunction = arguments[ 0 ];
            }
        }

        that.unobserve = function () {
            that.observing = false;
        }

        that.toArray = function () {
            return array.slice( 0 );
        }

        that.toJSON = function ( keys, subArray ) {
            var value = array;
            if ( subArray ) {
                value = subArray;
            }
            var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                meta = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                };

            function quote( string ) {
                return '"' + string.replace( escapable, function ( a ) {
                    var c = meta[ a ];
                    return typeof c === 'string' ? c : '\\u' + ( '0000' + a.charCodeAt( 0 ).toString( 16 ) ).slice( -4 );
                } ) + '"';
            }

            function formatNumber( n ) {
                return n < 10 ? '0' + n : n;
            }

            function stringifyDate( value ) {
                var date;
                if ( isFinite( value.valueOf() ) ) {
                    date = value.getUTCFullYear() + '-' + formatNumber( value.getUTCMonth() + 1 ) + '-' +
                        formatNumber( value.getUTCDate() ) + 'T' + formatNumber( value.getUTCHours() ) + ':' +
                        formatNumber( value.getUTCMinutes() ) + ':' + formatNumber( value.getUTCSeconds() ) + 'Z"';
                } else {
                    date = 'null';
                }
                return date;
            }

            function stringifyArray( value ) {
                var len = value.length,
                    partial = [],
                    i;
                for ( i = 0; i < len; i++ ) {
                    partial.push( str( i, value ) || 'null' );
                }

                return '[' + partial.join( ',' ) + ']';
            }

            function stringifyObject( value ) {
                var partial = [],
                    i, v;
                for ( i in value ) {
                    if ( Object.prototype.hasOwnProperty.call( value, i ) ) {
                        if ( i != "" && keys && keys.indexOf( i ) === -1 ) {
                            continue;
                        }

                        v = str( i, value );
                        if ( v ) {
                            partial.push( quote( i ) + ':' + v );
                        }
                    }
                }
                return '{' + partial.join( ',' ) + '}';
            }

            function stringifyReference( value ) {
                switch ( Object.prototype.toString.call( value ) ) {
                    case '[object Date]':
                        return stringifyDate( value );
                    case '[object Array]':
                        return stringifyArray( value );
                }
                return stringifyObject( value );
            }

            function stringifyPrimitive( value, type ) {
                switch ( type ) {
                    case 'string':
                        return quote( value );
                    case 'number':
                    case 'float':
                    case 'integer':
                    case 'int':
                        return isFinite( value ) ? value : 'null';
                    case 'boolean':
                        return value;
                }
                return 'null';
            }

            function str( key, holder ) {
                var value = holder[ key ], type = typeof value;

                if ( value && typeof value === 'object' && typeof value.toJSON === 'function' ) {
                    value = value.toJSON( key );
                    type = typeof value;
                }
                if ( /(number|float|int|integer|string|boolean)/.test( type ) || ( !value && type === 'object' ) ) {
                    return stringifyPrimitive( value, type );
                } else {
                    return stringifyReference( value );
                }
            }
            if ( !keys && window.JSON && typeof window.JSON.stringify === 'function' ) {
                return window.JSON.stringify( value );
            }

            return str( "", { "": value } );
        }

        that.defineIndexProperty = function ( index ) {
            if ( !( index in that ) ) {
                var defineProperty = function ( obj, property, path, context ) {
                    var newValue = obj[ property ];
                    var oldValue = newValue;
                    var getter = function () {
                        return oldValue;
                    }
                    var setter = function ( val ) {
                        newValue = val;
                        if ( oldValue !== newValue ) {
                            var oldValueArg = oldValue;
                            oldValue = newValue;
                            if ( typeof notifier === "function" ) {
                                var index = array.indexOf( context );

                                var propertyPath = "";
                                var getPath = function ( obj, path ) {
                                    Object.getOwnPropertyNames( obj ).forEach( function ( name ) {
                                        var type = $.type( obj[ name ] );
                                        if ( type == "array" || type == "object" ) {
                                            getPath( obj[ name ], path + "." + name );
                                        }
                                        else if ( property === name ) {
                                            propertyPath = path + "." + name;
                                        }
                                    } );
                                }
                                getPath( context, index );

                                notifier( { object: that, type: 'update', path: propertyPath, index: index, name: property, newValue: newValue, oldValue: oldValueArg } );
                            }
                        }
                        oldValue = newValue;
                        return newValue;
                    }
                    if ( obj[ property ] != undefined && property != "length" ) {
                        if ( Object.defineProperty )
                            Object.defineProperty( obj, property, {
                                get: getter,
                                set: setter
                            } );
                        else if ( Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__ ) {
                            Object.prototype.__defineGetter__.call( obj, property, getter );
                            Object.prototype.__defineSetter__.call( obj, property, setter );
                        }
                    }
                }

                var defineProperties = function ( obj, path, context ) {
                    var type = $.type( obj );
                    if ( /(number|float|int|integer|string|boolean)/.test( type ) ) {
                        return;
                    }

                    if ( obj === undefined ) {
                        return;
                    }

                    Object.getOwnPropertyNames( obj ).forEach( function ( name ) {
                        var type = $.type( obj[ name ] );
                        if ( type == "array" || type == "object" ) {
                            defineProperty( obj, name, path + "." + name, context );
                            defineProperties( obj[ name ], path + "." + name, context );
                        }
                        else {
                            defineProperty( obj, name, path + "." + name, context );
                        }
                    } );
                }

                Object.defineProperty( that, index, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        return array[ index ];
                    },
                    set: function ( newValue ) {
                        var oldValue = array[ index ];
                        if ( that.toJSON( null, oldValue ) != that.toJSON( null, newValue ) ) {
                            array[ index ] = newValue;
                            if ( typeof notifier === "function" ) {
                                notifier( { object: that, type: 'update', path: index.toString(), index: index, name: "index", newValue: newValue, oldValue: oldValue } );
                            }
                            defineProperties( newValue, index, newValue );
                        }
                    }
                } );
                defineProperties( that[ index ], index, that[ index ] );
            }
        }

        that.push = function () {
            var index;
            for ( var i = 0, ln = arguments.length; i < ln; i++ ) {
                index = array.length;
                array.push( arguments[ i ] );
                that.defineIndexProperty( index );
                if ( typeof notifier === "function" ) {
                    notifier( { object: that, type: 'add', name: "length", index: index, newValue: array.length, oldValue: index } );
                }
            }
            return array.length;
        };

        that.pop = function () {
            if ( ~array.length ) {
                var index = array.length - 1,
                    item = array.pop();
                delete that[ index ];
                if ( typeof notifier === "function" ) {
                    notifier( { object: that, type: 'delete', name: "length", index: index, newValue: array.length, oldValue: index } );
                }
                return item;
            }
        };

        that.unshift = function () {
            var index = array.length;
            for ( var i = 0, ln = arguments.length; i < ln; i++ ) {
                array.splice( i, 0, arguments[ i ] );
                that.defineIndexProperty( array.length - 1 );
            }
            if ( typeof notifier === "function" ) {
                notifier( { object: that, type: 'add', index: 0, name: "length", newValue: array.length, oldValue: index } );
            }
            return array.length;
        };

        that.shift = function () {
            var index = array.length;
            if ( ~array.length ) {
                var item = array.shift();
                array.length === 0 && delete that[ index ];
                if ( typeof notifier === "function" ) {
                    notifier( { object: that, type: 'delete', index: index, name: "length", newValue: array.length, oldValue: index } );
                }
                return item;
            }
        };

        that.slice = function ( start, end, observeFunction ) {
            var newArray = array.slice( start, end );
            var observableArray = new $.jqx.observableArray( newArray, observeFunction );
            return observableArray;
        }

        that.splice = function ( index, howMany, observeFunction ) {
            var removed = [],
                item,
                pos;

            index = !~index ? array.length - index : index;

            howMany = ( howMany == null ? array.length - index : howMany ) || 0;

            while ( howMany-- ) {
                item = array.splice( index, 1 )[ 0 ];
                removed.push( item );
                delete that[ array.length ];
                if ( typeof notifier === "function" ) {
                    notifier( { object: that, type: 'delete', index: index, name: "length", newValue: -1, oldValue: index } );
                }
            }

            for ( var i = 2, ln = arguments.length; i < ln; i++ ) {
                array.splice( index, 0, arguments[ i ] );
                this.defineIndexProperty( array.length - 1 );
                if ( typeof notifier === "function" ) {
                    notifier( { object: that, type: 'add', index: index, name: "length", newValue: array.length - 1, oldValue: index } );
                }
                index++;
            }

            var observableArray = new $.jqx.observableArray( removed, observeFunction );
            return observableArray;
        };

        Object.defineProperty( that, "length", {
            configurable: false,
            enumerable: true,
            get: function () {
                return array.length;
            },
            set: function ( value ) {
                var n = Number( value );
                if ( n % 1 === 0 && n >= 0 ) {
                    if ( n < array.length ) {
                        that.splice( n );
                    } else if ( n > array.length ) {
                        that.push.apply( that, new Array( n - array.length ) );
                    }
                } else {
                    throw new RangeError( "Invalid array length" );
                }
                return value;
            }
        } );

        $.jqx.observableArray.prototype.fromArray = function ( array, observeFunction ) {
            var observableArray = new $.jqx.observableArray( array, observeFunction );
            return observableArray;
        }

        $.jqx.observableArray.prototype.clone = function () {
            var observableArray = new $.jqx.observableArray( array, observeFunction );
            observableArray.observing = that.observing;
            observableArray.changes = that.changes;
            observableArray.notifier = that.notifier;
            return observableArray;
        }

        that.remove = function ( index ) {
            if ( index < 0 || index >= that.length ) {
                throw new Error( 'Invalid index : ' + index );
            }
            if ( that.hasOwnProperty( index ) ) {
                var oldValue = that[ index ];
                that[ index ] = undefined;
                array[ index ] = undefined;
                if ( typeof notifier === "function" ) {
                    notifier( { object: that, type: 'delete', index: index, name: "index", newValue: undefined, oldValue: oldValue } );
                }
                return true;
            }
            return false;
        };

        that.concat = function ( args, observeFunction ) {
            var newArray = array.concat( args );
            var observableArray = new $.jqx.observableArray( newArray, observeFunction );
            return observableArray;
        };

        Object.getOwnPropertyNames( Array.prototype ).forEach( function ( name ) {
            if ( !( name in that ) ) {
                var fn = function () {
                    var tmp = that.observing;
                    that.observing = false;
                    var arrayFn = array[ name ];
                    var result = arrayFn.apply( array, arguments );
                    that.observing = tmp;
                    return result;
                }
                Object.defineProperty( that, name, {
                    configurable: false,
                    enumerable: true,
                    writeable: false,
                    value: fn
                } );
            }
        } );


        that.set = function ( index, value ) {
            if ( $.type( index ) == "string" && index.split( "." ).length > 1 ) {
                var items = index.split( "." );
                var obj = that;
                for ( var i = 0; i < items.length; i++ ) {
                    if ( i === 0 ) {
                        if ( items[ i ] >= that.length ) {
                            throw new Error( "Invalid Index: " + index );
                        }
                    }
                    if ( i < items.length - 1 ) {
                        obj = obj[ items[ i ] ];
                    }
                    else {
                        obj[ items[ i ] ] = value;
                    }
                }
                return true;
            }
            if ( index >= that.length ) {
                that.push( value );
            }
            else {
                that[ index ] = value;
            }
            return true;
        }

        that.get = function ( index ) {
            return that[ index ];
        }

        if ( items instanceof Array ) {
            that.push.apply( that, items );
        }

        notifier = function () {
            if ( !that.observing ) {
                return;
            }

            if ( arguments && arguments[ 0 ] ) {
                that.changes.push( arguments[ 0 ] );
            }

            if ( observeFunction ) {
                observeFunction.apply( that, arguments );
            }
            if ( that.notifier ) {
                that.notifier.apply( that, arguments );
            }
        }

        return that;
    }

    $.jqx.formatDate = function ( value, format, calendar ) {
        var result = $.jqx.dataFormat.formatdate( value, format, calendar );
        return result;
    }

    $.jqx.formatNumber = function ( value, format, calendar ) {
        var result = $.jqx.dataFormat.formatnumber( value, format, calendar );
        return result;
    }

    $.jqx.dataAdapter = function ( source, options ) {
        if ( source != undefined ) {
            if ( source.dataFields !== undefined ) {
                source.datafields = source.dataFields;
            }
            if ( source.dataType !== undefined ) {
                source.datatype = source.dataType;
            }
            if ( source.localData !== undefined ) {
                source.localdata = source.localData;
            }
            if ( source.sortColumn !== undefined ) {
                source.sortcolumn = source.sortColumn;
            }
            if ( source.sortDirection !== undefined ) {
                source.sortdirection = source.sortDirection;
            }
            if ( source.sortColumns !== undefined ) {
                source.sortcolumns = source.sortColumns;
            }
            if ( source.sortDirections !== undefined ) {
                source.sortdirections = source.sortDirections;
            }
            if ( source.sortOrder !== undefined ) {
                source.sortdirection = source.sortOrder;
            }
            if ( source.formatData !== undefined ) {
                source.formatdata = source.formatData;
            }
            if ( source.processData !== undefined ) {
                source.processdata = source.processData;
            }
            if ( source.pageSize !== undefined ) {
                source.pagesize = source.pageSize;
            }
            if ( source.pageNum !== undefined ) {
                source.pagenum = source.pageNum;
            }
            if ( source.updateRow !== undefined ) {
                source.updaterow = source.updateRow;
            }
            if ( source.addRow !== undefined ) {
                source.addrow = source.addRow;
            }
            if ( source.deleteRow !== undefined ) {
                source.deleterow = source.deleteRow;
            }
            if ( source.contentType !== undefined ) {
                source.contenttype = source.contentType;
            }
            if ( source.totalRecords != undefined ) {
                source.totalrecords = source.totalRecords;
            }
            if ( source.loadError != undefined ) {
                source.loadError = source.loadError;
            }
            if ( source.sortComparer != undefined ) {
                source.sortcomparer = source.sortComparer;
            }
        }

        this._source = source;
        this._options = options || {};
        if ( source.beforeLoadComplete != undefined ) {
            this._options.beforeLoadComplete = this._source.beforeLoadComplete;
        }
        if ( source.downloadComplete != undefined ) {
            this._options.downloadComplete = this._source.downloadComplete;
        }
        if ( source.loadComplete != undefined ) {
            this._options.loadComplete = this._source.loadComplete;
        }
        if ( source.autoBind != undefined ) {
            this._options.downloadComplete = this._source.autoBind;
        }
        if ( source.formatData != undefined ) {
            this._options.formatData = this._source.formatData;
        }
        if ( source.loadError != undefined ) {
            this._options.loadError = this._source.loadError;
        }
        if ( source.beforeSend != undefined ) {
            this._options.beforeSend = this._source.beforeSend;
        }
        if ( source.contentType != undefined ) {
            this._options.contentType = this._source.contentType;
        }
        if ( source.async != undefined ) {
            this._options.async = this._source.async;
        }
        if ( source.loadServerData != undefined ) {
            this._options.loadServerData = this._source.loadServerData;
        }
        if ( source.uniqueDataFields != undefined ) {
            this._options.uniqueDataFields = this._source.uniqueDataFields;
        }

        this.records = new Array();
        this._downloadComplete = new Array();
        this._bindingUpdate = new Array();

        if ( source != undefined && source.localdata != null && typeof source.localdata == "function" ) {
            var localData = source.localdata();
            if ( localData != null ) {
                source._localdata = source.localdata;
                var me = this;
                if ( source._localdata.subscribe ) {
                    me._oldlocaldata = [];
                    source._localdata.subscribe( function ( value ) {
                        var deepClone = function ( objThing ) {
                            if ( $.isArray( objThing ) ) {
                                return $.makeArray( deepClone( $( objThing ) ) );
                            }
                            return $.extend( true, {}, objThing );
                        };
                        if ( me.suspendKO == false || me.suspendKO == undefined || me._oldlocaldata.length == 0 ) {
                            me._oldlocaldata = deepClone( value );
                        }
                    }, source._localdata, 'beforeChange' );

                    source._localdata.subscribe( function ( value ) {
                        if ( me.suspendKO == false || me.suspendKO == undefined ) {
                            var changeType = "";
                            me._oldrecords = me.records;
                            if ( me._oldlocaldata.length == 0 ) {
                                source.localdata = source._localdata();
                            }

                            if ( me._oldlocaldata.length == 0 ) {
                                changeType = 'change';
                            }
                            else {
                                if ( value ) {
                                    if ( me._oldlocaldata.length == value.length ) {
                                        changeType = 'update';
                                    }
                                    if ( me._oldlocaldata.length > value.length ) {
                                        changeType = 'remove';
                                    }
                                    if ( me._oldlocaldata.length < value.length ) {
                                        changeType = 'add';
                                    }
                                }
                            }
                            me.dataBind( null, changeType );
                        }
                    }, source._localdata, 'change' );

                    me._knockoutdatasource = true;
                }

                source.localdata = localData;
            }
        }
        if ( this._options.autoBind == true ) {
            this.dataBind();
        }
    }

    $.jqx.dataAdapter.prototype = {
        getrecords: function () {
            return this.records;
        },

        beginUpdate: function () {
            this.isUpdating = true;
        },

        endUpdate: function ( refresh ) {
            this.isUpdating = false;
            if ( refresh != false ) {
                if ( this._changedrecords && this._changedrecords.length > 0 ) {
                    this.callBindingUpdate( "update" );
                    this._changedrecords = [];
                }
                else {
                    this.dataBind( null, "" );
                }
            }
        },

        formatDate: function ( value, format, calendar ) {
            var result = $.jqx.dataFormat.formatdate( value, format, calendar );
            return result;
        },

        formatNumber: function ( value, format, calendar ) {
            var result = $.jqx.dataFormat.formatnumber( value, format, calendar );
            return result;
        },

        dataBind: function ( objectuniqueId, collectionChanged ) {
            if ( this.isUpdating == true )
                return;

            var source = this._source;
            if ( !source )
                return;

            if ( source.generatedfields ) {
                source.datafields = null;
                source.generatedfields = null;
            }

            $.jqx.dataFormat.datescache = new Array();
            if ( source.dataFields != null ) {
                source.datafields = source.dataFields;
            }

            if ( source.recordstartindex == undefined ) {
                source.recordstartindex = 0;
            }
            if ( source.recordendindex == undefined ) {
                source.recordendindex = 0;
            }
            if ( source.loadallrecords == undefined ) {
                source.loadallrecords = true;
            }
            if ( source.root == undefined ) source.root = '';
            if ( source.record == undefined ) source.record = '';

            if ( source.sort != undefined ) {
                this.sort = source.sort;
            }

            if ( source.filter != undefined ) {
                this.filter = source.filter;
            }
            else this.filter = null;

            if ( source.sortcolumn != undefined ) {
                this.sortcolumn = source.sortcolumn;
            }

            if ( source.sortdirection != undefined ) {
                this.sortdirection = source.sortdirection;
            }
            if ( source.sortcolumns != undefined ) {
                this.sortcolumns = source.sortcolumns;
            }

            if ( source.sortdirections != undefined ) {
                this.sortdirections = source.sortdirections;
            }

            if ( source.sortcomparer != undefined ) {
                this.sortcomparer = source.sortcomparer;
            }

            this.records = new Array();
            var options = this._options || {};
            this.virtualmode = options.virtualmode != undefined ? options.virtualmode : false;
            this.totalrecords = options.totalrecords != undefined ? options.totalrecords : 0;
            this.pageable = options.pageable != undefined ? options.pageable : false;
            this.pagesize = options.pagesize != undefined ? options.pagesize : 0;
            this.pagenum = options.pagenum != undefined ? options.pagenum : 0;
            this.cachedrecords = options.cachedrecords != undefined ? options.cachedrecords : new Array();
            this.originaldata = new Array();
            this.recordids = new Array();
            this.updaterow = options.updaterow != undefined ? options.updaterow : null;
            this.addrow = options.addrow != undefined ? options.addrow : null;
            this.deleterow = options.deleterow != undefined ? options.deleterow : null;
            this.cache = options.cache != undefined ? options.cache : false;
            this.unboundmode = false;
            if ( source.formatdata != undefined ) {
                options.formatData = source.formatdata;
            }
            if ( source.data != undefined ) {
                if ( options.data == undefined ) {
                    options.data = {};
                }
                $.extend( options.data, source.data );
            }

            if ( source.mapChar != undefined ) {
                source.mapchar = source.mapChar;
            }

            if ( source.mapchar != undefined ) {
                this.mapChar = source.mapchar ? source.mapchar : '>';
            }
            else {
                this.mapChar = options.mapChar ? options.mapChar : '>';
            }

            if ( options.unboundmode || source.unboundmode ) {
                this.unboundmode = options.unboundmode || source.unboundmode;
            }

            if ( source.cache != undefined ) {
                this.cache = source.cache;
            }

            if ( this.koSubscriptions ) {
                for ( var subscription = 0; subscription < this.koSubscriptions.length; subscription++ ) {
                    this.koSubscriptions[ subscription ].dispose();
                }
            }
            this.koSubscriptions = new Array();

            if ( this.pagenum < 0 ) {
                this.pagenum = 0;
            }

            var me = this;

            var datatype = source.datatype;

            if ( source.datatype === 'csv' || source.datatype === 'tab' || source.datatype === 'tsv' || source.datatype == 'text' )
                datatype = 'text';

            var async = options.async != undefined ? options.async : true;

            if ( source.async != undefined ) {
                async = source.async;
            }

            if ( datatype === "xlsx" && source.url ) {
                source.localdata = [];
                datatype = "array";
                if ( window.jqxDataSource ) {
                    var data = new window.jqxDataSource( {
                        dataSource: source.url,
                        async: false,
                        dataFields: source.datafields
                    } );
                    data.notify( function () {
                        source.url = null;
                        source.localdata = data.boundSource;
                        source.datatype = "array";
                        me.dataBind();
                    } );
                }
            }

            switch ( datatype ) {
                case "local":
                case "array":
                case "observablearray":
                case "observableArray":
                default:
                    if ( source.localdata == undefined && source.length ) {
                        source.localdata = new Array();
                        for ( var i = 0; i < source.length; i++ ) {
                            source.localdata[ source.localdata.length ] = source[ i ];
                            source[ i ].uid = i;
                        }
                    }
                    if ( source.beforeprocessing && $.isFunction( source.beforeprocessing ) ) {
                        source.beforeprocessing( source.localdata );
                    }

                    var length = source.localdata.length;
                    this.totalrecords = this.virtualmode ? ( source.totalrecords || length ) : length;

                    if ( this.unboundmode ) {
                        this.totalrecords = this.unboundmode ? ( source.totalrecords || length ) : length;
                        var datafieldslength = source.datafields ? source.datafields.length : 0;
                        if ( datafieldslength > 0 ) {
                            for ( var i = 0; i < this.totalrecords; i++ ) {
                                var record = {};
                                for ( var j = 0; j < datafieldslength; j++ ) {
                                    record[ source.datafields[ j ].name ] = "";
                                }
                                record.uid = i;
                                source.localdata[ source.localdata.length ] = record;
                            }
                        }
                    }

                    if ( this.totalrecords == undefined ) {
                        this.totalrecords = 0;
                    }

                    var datafieldslength = source.datafields ? source.datafields.length : 0;
                    var getrecord = function ( record, datafieldslength ) {
                        var datarow = {};
                        for ( var j = 0; j < datafieldslength; j++ ) {
                            var datafield = source.datafields ? source.datafields[ j ] : {};
                            var value = '';
                            if ( undefined == datafield || datafield == null ) {
                                continue;
                            }

                            if ( datafield.map ) {
                                if ( $.isFunction( datafield.map ) ) {
                                    value = datafield.map( record );
                                }
                                else {
                                    var splitMap = datafield.map.split( me.mapChar );
                                    if ( splitMap.length > 0 ) {
                                        var datarecord = record;
                                        for ( var p = 0; p < splitMap.length; p++ ) {
                                            if ( !datarecord ) continue;
                                            datarecord = datarecord[ splitMap[ p ] ];
                                        }
                                        value = datarecord;
                                    }
                                    else {
                                        value = record[ datafield.map ];
                                    }
                                }

                                if ( value != undefined && value != null ) {
                                    value = value.toString();
                                }
                                else {
                                    if ( value == undefined && value != null ) {
                                        value = '';
                                    }
                                }
                            }
                            var isEmptyString = false;
                            // searches by both selectors when necessary.
                            if ( value == '' ) {
                                isEmptyString = true;
                                value = record[ datafield.name ];
                                if ( value != undefined && value != null ) {
                                    if ( source._localdata && value.subscribe ) {
                                        value = value();
                                    }
                                    else {
                                        if ( datafield.type != "array" ) {
                                            if ( datafield.type === 'date' ) {
                                                if ( value && value instanceof Date ) {
                                                    value = value;
                                                }
                                            }
                                            else {
                                                value = value.toString();
                                            }
                                        }
                                    }
                                }
                            }
                            if ( value == "[object Object]" && datafield.map && isEmptyString ) {
                                value = '';
                            }

                            value = me.getvaluebytype( value, datafield );
                            if ( datafield.displayname != undefined ) {
                                datarow[ datafield.displayname ] = value;
                            }
                            else {
                                datarow[ datafield.name ] = value;
                            }
                        }
                        return datarow;
                    }

                    if ( source._localdata ) {
                        this._changedrecords = [];
                        this.records = new Array();
                        var localdata = source._localdata();

                        $.each( localdata, function ( i, value ) {
                            if ( typeof value === 'string' ) {
                                me.records.push( value );
                            }
                            else {
                                var record = {};
                                var _koindex = 0;
                                var dataObject = this;
                                $.each( this, function ( obj, objvalue ) {
                                    var map = null;
                                    var type = 'string';
                                    var dataFieldName = obj;
                                    if ( datafieldslength > 0 ) {
                                        var hasField = false;
                                        var hasMap = false;
                                        for ( var j = 0; j < datafieldslength; j++ ) {
                                            var datafield = source.datafields[ j ];
                                            if ( datafield != undefined && ( datafield.name == obj ) ) {
                                                hasField = true;
                                                map = datafield.map;
                                                type = datafield.type;
                                                dataFieldName = datafield.name;
                                                break;
                                            }
                                            else if ( datafield != undefined && datafield.map && ( datafield.map.indexOf( obj ) >= 0 ) ) {
                                                hasField = true;
                                                map = datafield.map;
                                                type = datafield.type;
                                                dataFieldName = datafield.name;
                                                hasMap = true;
                                                var value = dataObject[ obj ];
                                                if ( map != null ) {
                                                    var splitMap = map.split( me.mapChar );
                                                    if ( splitMap.length > 0 ) {
                                                        var datarecord = dataObject;
                                                        for ( var p = 0; p < splitMap.length; p++ ) {
                                                            datarecord = datarecord[ splitMap[ p ] ];
                                                        }
                                                        value = datarecord;
                                                    }
                                                    else {
                                                        value = dataObject[ map ];
                                                    }
                                                }

                                                if ( type != 'string' ) {
                                                    value = me.getvaluebytype( value, { type: type } );
                                                }
                                                record[ dataFieldName ] = value;
                                                if ( record[ dataFieldName ] != undefined ) {
                                                    _koindex += record[ dataFieldName ].toString().length + record[ dataFieldName ].toString().substr( 0, 1 );
                                                }
                                            }
                                        }
                                        if ( !hasField ) return true;
                                        if ( hasMap ) return true;
                                    }

                                    var isFunction = $.isFunction( dataObject[ obj ] );
                                    if ( isFunction ) {
                                        var value = dataObject[ obj ]();
                                        if ( type != 'string' ) {
                                            value = me.getvaluebytype( value, { type: type } );
                                        }
                                        record[ obj ] = value;
                                        if ( dataObject[ obj ].subscribe ) {
                                            var recordindex = i;
                                            me.koSubscriptions[ me.koSubscriptions.length ] = dataObject[ obj ].subscribe( function ( value ) {
                                                var _changeindex = recordindex;
                                                record[ obj ] = value;
                                                var changedRecord = { index: _changeindex, oldrecord: record, record: record };
                                                me._changedrecords.push( changedRecord );
                                                if ( me.isUpdating )
                                                    return;

                                                me.callBindingUpdate( "update" );
                                                me._changedrecords = [];
                                                return false;
                                            } );
                                        }
                                    }
                                    else {
                                        var value = dataObject[ obj ];
                                        if ( map != null ) {
                                            var splitMap = map.split( me.mapChar );
                                            if ( splitMap.length > 0 ) {
                                                var datarecord = dataObject;
                                                for ( var p = 0; p < splitMap.length; p++ ) {
                                                    datarecord = datarecord[ splitMap[ p ] ];
                                                }
                                                value = datarecord;
                                            }
                                            else {
                                                value = dataObject[ map ];
                                            }
                                        }

                                        if ( type != 'string' ) {
                                            value = me.getvaluebytype( value, { type: type } );
                                        }
                                        record[ dataFieldName ] = value;
                                        if ( record[ dataFieldName ] != undefined ) {
                                            _koindex += record[ dataFieldName ].toString().length + record[ dataFieldName ].toString().substr( 0, 1 );
                                        }
                                    }
                                } );

                                var recordid = me.getid( source.id, dataObject, i );
                                record.uid = recordid;
                                me.records.push( record );

                                record._koindex = _koindex;
                                if ( me._oldrecords ) {
                                    var _changeindex = me.records.length - 1;
                                    if ( collectionChanged == 'update' ) {
                                        if ( me._oldrecords[ _changeindex ]._koindex != _koindex ) {
                                            var changedRecord = { index: _changeindex, oldrecord: me._oldrecords[ _changeindex ], record: record };
                                            me._changedrecords.push( changedRecord );
                                        }
                                    }
                                }
                            }
                        } );
                        if ( collectionChanged == 'add' ) {
                            var length = me.records.length;
                            for ( var i = 0; i < length; i++ ) {
                                var record = me.records[ i ];
                                var hasOldRecord = false;
                                for ( var p = 0; p < me._oldrecords.length; p++ ) {
                                    if ( me._oldrecords[ p ]._koindex === record._koindex ) {
                                        hasOldRecord = true;
                                        break;
                                    }
                                }
                                if ( !hasOldRecord ) {
                                    me._changedrecords.push( { index: i, oldrecord: null, record: record, position: ( i != 0 ? "last" : "first" ) } );
                                }
                            }
                        }
                        else if ( collectionChanged == 'remove' ) {
                            var length = me._oldrecords.length;
                            for ( var i = 0; i < length; i++ ) {
                                var oldrecord = me._oldrecords[ i ];
                                if ( !me.records[ i ] ) {
                                    me._changedrecords.push( { index: i, oldrecord: oldrecord, record: null } );
                                }
                                else {
                                    if ( me.records[ i ]._koindex != oldrecord._koindex ) {
                                        me._changedrecords.push( { index: i, oldrecord: oldrecord, record: null } );
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if ( !$.isArray( source.localdata ) ) {
                            this.records = new Array();
                            var fields = 0;
                            var generatedfields = new Array();
                            $.each( source.localdata, function ( i ) {
                                var recordid = me.getid( source.id, this, i );
                                if ( datafieldslength == 0 ) {
                                    if ( !( typeof this === "string" || this instanceof String ) ) {
                                        for ( var obj in this ) {
                                            fields++;
                                            var valueType = $.type( this[ obj ] );

                                            generatedfields.push( { name: obj, type: valueType } );
                                        }
                                        datafieldslength = fields;
                                        source.datafields = generatedfields;
                                        source.generatedfields = generatedfields;
                                    }
                                }
                                if ( datafieldslength > 0 ) {
                                    var record = this;
                                    var datarow = getrecord( record, datafieldslength );
                                    datarow.uid = recordid;
                                    me.records[ me.records.length ] = datarow;
                                }
                                else {
                                    this.uid = recordid;
                                    me.records[ me.records.length ] = this;
                                }
                            } );
                        }
                        else {
                            if ( datafieldslength == 0 ) {
                                var fields = 0;
                                var generatedfields = new Array();

                                $.each( source.localdata, function ( i, value ) {
                                    //      var record = $.extend({}, this);
                                    var record = new Object( this );
                                    if ( typeof value === "string" ) {
                                        me.records = source.localdata;
                                        return false;
                                    }
                                    else {
                                        var recordid = me.getid( source.id, record, i );
                                        if ( typeof ( recordid ) === "object" ) {
                                            recordid = i;
                                        }
                                        record.uid = recordid;
                                        if ( i == 0 ) {
                                            for ( var obj in this ) {
                                                fields++;
                                                var valueType = $.type( this[ obj ] );

                                                generatedfields.push( { name: obj, type: valueType } );
                                            }
                                            datafieldslength = fields;
                                            source.datafields = generatedfields;
                                            source.generatedfields = generatedfields;
                                        }
                                        if ( datafieldslength > 0 ) {
                                            var datarow = getrecord( record, datafieldslength );
                                            datarow.uid = recordid;
                                            me.records[ me.records.length ] = datarow;
                                        }
                                        else {
                                            me.records[ me.records.length ] = record;
                                        }
                                    }
                                } );
                            }
                            else {
                                $.each( source.localdata, function ( i ) {
                                    var record = this;
                                    var datarow = getrecord( record, datafieldslength );
                                    var recordid = me.getid( source.id, datarow, i );
                                    if ( typeof ( recordid ) === "object" ) {
                                        recordid = i;
                                    }
                                    //      var record = $.extend({}, datarow);
                                    var record = new Object( datarow );
                                    record.uid = recordid;
                                    me.records[ me.records.length ] = record;
                                } );
                            }
                        }
                    }

                    this.originaldata = source.localdata;
                    this.cachedrecords = this.records;
                    this.addForeignValues( source );
                    if ( options.uniqueDataFields ) {
                        var uniquerecords = this.getUniqueRecords( this.records, options.uniqueDataFields );
                        this.records = uniquerecords;
                        this.cachedrecords = uniquerecords;
                    }

                    if ( options.beforeLoadComplete ) {
                        var newRecords = options.beforeLoadComplete( me.records, this.originaldata );
                        if ( newRecords != undefined ) {
                            me.records = newRecords;
                            me.cachedrecords = newRecords;
                        }
                    }

                    if ( options.autoSort && options.autoSortField ) {
                        var tmpToString = Object.prototype.toString;
                        Object.prototype.toString = ( typeof field == "function" ) ? field : function () { return this[ options.autoSortField ] };
                        me.records.sort( function ( value1, value2 ) {
                            if ( value1 === undefined ) { value1 = null; }
                            if ( value2 === undefined ) { value2 = null; }
                            if ( value1 === null && value2 === null ) {
                                return 0;
                            }
                            if ( value1 === null && value2 !== null ) {
                                return 1;
                            }
                            if ( value1 !== null && value2 === null ) {
                                return -1;
                            }

                            value1 = value1.toString();
                            value2 = value2.toString();
                            if ( value1 === null && value2 === null ) {
                                return 0;
                            }
                            if ( value1 === null && value2 !== null ) {
                                return 1;
                            }
                            if ( value1 !== null && value2 === null ) {
                                return -1;
                            }
                            if ( $.jqx.dataFormat.isNumber( value1 ) && $.jqx.dataFormat.isNumber( value2 ) ) {
                                if ( value1 < value2 ) { return -1; }
                                if ( value1 > value2 ) { return 1; }
                                return 0;
                            }
                            else if ( $.jqx.dataFormat.isDate( value1 ) && $.jqx.dataFormat.isDate( value2 ) ) {
                                if ( value1 < value2 ) { return -1; }
                                if ( value1 > value2 ) { return 1; }
                                return 0;
                            }
                            else if ( !$.jqx.dataFormat.isNumber( value1 ) && !$.jqx.dataFormat.isNumber( value2 ) ) {
                                value1 = String( value1 ).toLowerCase();
                                value2 = String( value2 ).toLowerCase();
                            }

                            try {
                                if ( value1 < value2 ) { return -1; }
                                if ( value1 > value2 ) { return 1; }
                            }
                            catch ( error ) {
                                var er = error;
                            }

                            return 0;
                        } );
                        Object.prototype.toString = tmpToString;
                    }

                    me.loadedData = source.localdata;
                    me.buildHierarchy();

                    if ( $.isFunction( options.loadComplete ) ) {
                        options.loadComplete( source.localdata, me.records );
                    }
                    break;
                case "json":
                case "jsonp":
                case "xml":
                case "xhtml":
                case "script":
                case "text":
                case "ics":
                    {
                        if ( source.localdata != null && !source.url ) {
                            if ( $.isFunction( source.beforeprocessing ) ) {
                                source.beforeprocessing( source.localdata );
                            }
                            if ( source.datatype === "xml" ) {
                                me.loadxml( source.localdata, source.localdata, source );
                            }
                            else if ( datatype === "text" ) {
                                me.loadtext( source.localdata, source );
                            }
                            else if ( datatype === "ics" ) {
                                me.loadics( source.localdata, source );
                            }
                            else {
                                me.loadjson( source.localdata, source.localdata, source );
                            }
                            me.addForeignValues( source );
                            if ( options.uniqueDataFields ) {
                                var uniquerecords = me.getUniqueRecords( me.records, options.uniqueDataFields );
                                me.records = uniquerecords;
                                me.cachedrecords = uniquerecords;
                            }

                            if ( options.beforeLoadComplete ) {
                                var newRecords = options.beforeLoadComplete( me.records, this.originaldata );
                                if ( newRecords != undefined ) {
                                    me.records = newRecords;
                                    me.cachedrecords = newRecords;
                                }
                            }

                            me.loadedData = source.localdata;
                            me.buildHierarchy.call( me );
                            if ( $.isFunction( options.loadComplete ) ) {
                                options.loadComplete( source.localdata, me.records );
                            }
                            me.callBindingUpdate( collectionChanged );
                            return;
                        }

                        var postdata = options.data != undefined ? options.data : {};
                        // call the source object's processdata function.
                        if ( source.processdata ) {
                            source.processdata( postdata );
                        }
                        // call the adapter's process data function.
                        if ( $.isFunction( options.processData ) ) {
                            options.processData( postdata );
                        }

                        // call the adapter's format data function.
                        if ( $.isFunction( options.formatData ) ) {
                            var newpostdata = options.formatData( postdata );
                            if ( newpostdata != undefined ) {
                                postdata = newpostdata;
                            }
                        }

                        var contentType = 'application/x-www-form-urlencoded';
                        if ( options.contentType ) {
                            contentType = options.contentType;
                        }

                        var type = "GET";
                        if ( source.type ) {
                            type = source.type;
                        }

                        if ( options.type ) {
                            type = options.type;
                        }

                        var dataType = datatype;
                        if ( datatype == "ics" ) dataType = "text";
                        if ( source.url && source.url.length > 0 ) {
                            if ( $.isFunction( options.loadServerData ) ) {
                                me._requestData( postdata, source, options );
                            }
                            else {
                                this.xhr = $.jqx.data.ajax( {
                                    dataType: dataType,
                                    cache: this.cache,
                                    type: type,
                                    url: source.url,
                                    async: async,
                                    timeout: source.timeout,
                                    contentType: contentType,
                                    data: postdata,
                                    success: function ( data, status, xhr ) {
                                        if ( $.isFunction( source.beforeprocessing ) ) {
                                            var tmpdata = source.beforeprocessing( data, status, xhr );
                                            if ( tmpdata != undefined ) {
                                                data = tmpdata;
                                            }
                                        }
                                        if ( $.isFunction( options.downloadComplete ) ) {
                                            var tmpdata = options.downloadComplete( data, status, xhr );
                                            if ( tmpdata != undefined ) {
                                                data = tmpdata;
                                            }
                                        }

                                        if ( data == null ) {
                                            me.records = new Array();
                                            me.cachedrecords = new Array();
                                            me.originaldata = new Array();

                                            me.callDownloadComplete();
                                            if ( $.isFunction( options.loadComplete ) ) {
                                                options.loadComplete( new Array() );
                                            }
                                            return;
                                        }

                                        var records = data;
                                        if ( data.records ) {
                                            records = data.records;
                                        }

                                        if ( data.totalrecords != undefined ) {
                                            source.totalrecords = data.totalrecords;
                                        }
                                        else if ( data.totalRecords != undefined ) {
                                            source.totalrecords = data.totalRecords;
                                        }

                                        if ( source.datatype === "xml" ) {
                                            me.loadxml( null, records, source );
                                        }
                                        else if ( datatype === "text" ) {
                                            me.loadtext( records, source );
                                        }
                                        else if ( datatype === "ics" ) {
                                            me.loadics( records, source );
                                        }
                                        else {
                                            me.loadjson( null, records, source );
                                        }

                                        // add foreign values.
                                        me.addForeignValues( source );

                                        if ( options.uniqueDataFields ) {
                                            var uniquerecords = me.getUniqueRecords( me.records, options.uniqueDataFields );
                                            me.records = uniquerecords;
                                            me.cachedrecords = uniquerecords;
                                        }

                                        if ( options.beforeLoadComplete ) {
                                            var newRecords = options.beforeLoadComplete( me.records, data );
                                            if ( newRecords != undefined ) {
                                                me.records = newRecords;
                                                me.cachedrecords = newRecords;
                                            }
                                        }

                                        me.loadedData = data;
                                        me.buildHierarchy.call( me );

                                        me.callDownloadComplete();
                                        if ( $.isFunction( options.loadComplete ) ) {
                                            options.loadComplete( data, status, xhr, me.records );
                                        }
                                    },
                                    error: function ( xhr, status, error ) {
                                        if ( $.isFunction( source.loaderror ) ) { source.loaderror( xhr, status, error ); }
                                        if ( $.isFunction( options.loadError ) ) { options.loadError( xhr, status, error ); }
                                        xhr = null;
                                        me.callDownloadComplete();
                                    },
                                    beforeSend: function ( xhr, settings ) {
                                        if ( $.isFunction( options.beforeSend ) ) { options.beforeSend( xhr, settings ); }
                                        if ( $.isFunction( source.beforesend ) ) { source.beforesend( xhr, settings ); }
                                    }
                                } );
                            }
                        }
                        else {
                            me.buildHierarchy( new Array() );
                            me.callDownloadComplete();
                            if ( $.isFunction( options.loadComplete ) ) {
                                if ( !data ) {
                                    var data = {};
                                }
                                options.loadComplete( data );
                            }
                        }
                    }
                    break;
            }
            this.callBindingUpdate( collectionChanged );
        },

        buildHierarchy: function ( dataRecords ) {
            var source = this._source;
            var hierarchy = new Array();
            if ( !source.datafields ) {
                return;
            }

            if ( source.hierarchy && !source.hierarchy.reservedNames ) {
                source.hierarchy.reservedNames = {
                    leaf: "leaf",
                    parent: "parent",
                    expanded: "expanded",
                    checked: "checked",
                    selected: "selected",
                    level: "level",
                    icon: "icon",
                    data: "data"
                }
            }
            else {
                if ( source.hierarchy ) {
                    var names = source.hierarchy.reservedNames;
                    if ( !names.leaf ) names.leaf = "leaf";
                    if ( !names.parent ) names.parent = "parent";
                    if ( !names.expanded ) names.expanded = "expanded";
                    if ( !names.checked ) names.checked = "checked";
                    if ( !names.selected ) names.selected = "selected";
                    if ( !names.level ) names.level = "level";
                    if ( !names.data ) names.data = "data";
                }
            }

            if ( !source.hierarchy ) {
                return;
            }

            var that = this;
            var names = source.hierarchy.reservedNames;
            if ( source.hierarchy.root ) {
                if ( source.dataType == "xml" ) {
                    var hierarchy = this.getRecordsHierarchy( 'uid', 'parentuid', 'records', null, dataRecords );
                    this.hierarchy = hierarchy;
                    return hierarchy;
                }
                else {
                    this.hierarchy = this.records;
                    var root = source.hierarchy.root;
                    for ( var i = 0; i < this.records.length; i++ ) {
                        var record = this.records[ i ];
                        if ( !record ) {
                            continue;
                        }

                        var addRecords = function ( record ) {
                            if ( source.hierarchy.record ) {
                                record.records = record[ root ][ source.hierarchy.record ];
                            }
                            else {
                                var splitMap = root.split( that.mapChar );
                                var records = null;
                                if ( splitMap.length > 1 ) {
                                    var d = record;
                                    for ( var p = 0; p < splitMap.length; p++ ) {
                                        if ( d != undefined ) {
                                            d = d[ splitMap[ p ] ];
                                        }
                                    }
                                    records = d;
                                }
                                else records = record[ root ];
                                record.records = records;
                            }
                            if ( record.records == null || ( record.records && record.records.length == 0 ) ) {
                                record[ names.leaf ] = true;
                            }
                        }
                        addRecords( record );
                        record[ names.level ] = 0;
                        var recordid = this.getid( source.id, record, i );
                        record.uid = recordid;
                        record[ names.parent ] = null;
                        record[ names.data ] = record;
                        if ( record[ names.expanded ] === undefined ) {
                            record[ names.expanded ] = false;
                        }
                        var drillThrough = function ( parent, records ) {
                            if ( !records ) {
                                parent.records = new Array();
                                return;
                            }

                            for ( var i = 0; i < records.length; i++ ) {
                                var record = records[ i ];
                                if ( !record ) {
                                    continue;
                                }

                                addRecords( record );
                                record[ names.level ] = parent[ names.level ] + 1;
                                record[ names.parent ] = parent;
                                record[ names.data ] = record;
                                var recordid = that.getid( source.id, record, i );
                                if ( recordid == i && source.id == null ) {
                                    record.uid = parent.uid + "_" + recordid;
                                }
                                else {
                                    record.uid = recordid;
                                }

                                if ( record[ names.expanded ] === undefined ) {
                                    record[ names.expanded ] = false;
                                }
                                drillThrough( record, record.records );
                            }
                        }
                        drillThrough( record, record.records );
                    }
                }
                return this.hierarchy;
            }

            if ( source.hierarchy.keyDataField && source.hierarchy.parentDataField ) {
                var hierarchy = this.getRecordsHierarchy( source.hierarchy.keyDataField.name, source.hierarchy.parentDataField.name, 'records', null, dataRecords );
                this.hierarchy = hierarchy;
                return hierarchy;
            }

            if ( source.hierarchy.groupingDataFields ) {
                var groups = new Array();
                for ( var i = 0; i < source.hierarchy.groupingDataFields.length; i++ ) {
                    groups.push( source.hierarchy.groupingDataFields[ i ].name );
                }

                var hierarchy = this.getGroupedRecords( groups, 'records', 'label', null, 'data', null, 'parent', dataRecords );
                this.hierarchy = hierarchy;
                return hierarchy;
            }
        },

        addRecord: function ( record, position, parentID, virtualMode ) {
            var that = this;
            var reservedNames = function () {
                return {
                    leaf: "leaf",
                    parent: "parent",
                    expanded: "expanded",
                    checked: "checked",
                    selected: "selected",
                    level: "level",
                    icon: "icon",
                    data: "data"
                }
            }
            if ( record != undefined ) {
                if ( parentID != undefined ) {
                    if ( this.hierarchy.length > 0 ) {
                        var traverse = function ( records ) {
                            if ( records ) {
                                for ( var i = 0; i < records.length; i++ ) {
                                    var r = records[ i ];
                                    if ( r.uid == parentID ) {
                                        var names = ( that._source && that._source.hierarchy ) ? that._source.hierarchy.reservedNames : null;
                                        if ( names == null ) names = reservedNames();

                                        record[ names.parent ] = r;
                                        record[ names.level ] = r[ names.level ] + 1;

                                        if ( !r.records ) {
                                            r.records = new Array();
                                            r[ names.leaf ] = false;
                                        }
                                        else {
                                            r[ names.leaf ] = false;
                                        }

                                        if ( position == 'last' ) {
                                            r.records.push( record );
                                        }
                                        else if ( typeof position === 'number' && isFinite( position ) ) {
                                            r.records.splice( position, 0, record );
                                        }
                                        else {
                                            r.records.splice( 0, 0, record );
                                        }
                                        return true;
                                    }
                                    if ( r.records ) {
                                        traverse( r.records );
                                    }
                                }
                            }
                        }
                        traverse( this.hierarchy );
                    }
                }
                else {
                    if ( this.hierarchy && this.hierarchy.length >= 0 && ( this._source.hierarchy || virtualMode ) ) {
                        var names = ( that._source && that._source.hierarchy ) ? that._source.hierarchy.reservedNames : null;
                        if ( names == null ) names = reservedNames();

                        record[ names.level ] = 0;

                        if ( position == 'last' ) {
                            this.hierarchy.push( record );
                        }
                        else if ( typeof position === 'number' && isFinite( position ) ) {
                            this.hierarchy.splice( position, 0, record );
                        }
                        else {
                            this.hierarchy.splice( 0, 0, record );
                        }
                    }
                    else {
                        if ( position == 'last' ) {
                            this.records.push( record );
                        }
                        else if ( typeof position === 'number' && isFinite( position ) ) {
                            this.records.splice( position, 0, record );
                        }
                        else {
                            this.records.splice( 0, 0, record );
                        }
                    }
                    return true;
                }
            }
            return false;
        },

        deleteRecord: function ( uid ) {
            var that = this;
            if ( this.hierarchy.length > 0 ) {
                var traverse = function ( records ) {
                    if ( records ) {
                        for ( var i = 0; i < records.length; i++ ) {
                            var r = records[ i ];
                            if ( r.uid == uid ) {
                                records.splice( i, 1 );
                                if ( that.recordids[ uid ] ) {
                                    delete that.recordids[ uid ];
                                }

                                var removeChildren = function ( children ) {
                                    for ( var x = 0; x < children.length; x++ ) {
                                        var uid = children[ x ].uid;
                                        for ( var j = 0; j < that.records.length; j++ ) {
                                            var r = that.records[ j ];
                                            if ( r.uid == uid ) {
                                                that.records.splice( j, 1 );
                                                break;
                                            }
                                        }
                                        if ( children[ x ].records ) {
                                            removeChildren( children[ x ].records );
                                        }
                                    }
                                }
                                if ( r.records ) {
                                    removeChildren( r.records );
                                }
                                for ( var j = 0; j < that.records.length; j++ ) {
                                    var r = that.records[ j ];
                                    if ( r.uid == uid ) {
                                        that.records.splice( j, 1 );
                                        break;
                                    }
                                }
                                return true;
                            }
                            if ( r.records ) {
                                traverse( r.records );
                            }
                        }
                    }
                }
                traverse( this.hierarchy );
            }
            else {
                for ( var i = 0; i < this.records.length; i++ ) {
                    var r = this.records[ i ];
                    if ( r.uid == uid ) {
                        this.records.splice( i, 1 );
                        return true;
                    }
                }
            }
            return false;
        },

        addForeignValues: function ( source ) {
            var me = this;
            var datafieldslength = source.datafields ? source.datafields.length : 0;
            for ( var j = 0; j < datafieldslength; j++ ) {
                var datafield = source.datafields[ j ];
                if ( datafield != undefined ) {
                    if ( datafield.values != undefined ) {
                        if ( datafield.value == undefined ) datafield.value = datafield.name;
                        if ( datafield.values[ 'value' ] == undefined ) {
                            datafield.values[ 'value' ] = datafield.value;
                        }

                        var matchedIDs = new Array();
                        var start, end;
                        if ( me.pageable && me.virtualmode ) {
                            start = me.pagenum * me.pagesize;
                            end = start + me.pagesize;
                            if ( end > me.totalrecords ) {
                                end = me.totalrecords;
                            }
                        }
                        else if ( me.virtualmode ) {
                            start = source.recordstartindex;
                            end = source.recordendindex;
                            if ( end > me.totalrecords ) {
                                end = me.totalrecords;
                            }
                        }
                        else {
                            start = 0;
                            end = me.records.length;
                        }

                        for ( var i = start; i < end; i++ ) {
                            var record = me.records[ i ];
                            var name = datafield.name;
                            var value = record[ datafield.value ];

                            if ( matchedIDs[ value ] != undefined ) {
                                record[ name ] = matchedIDs[ value ];
                            }
                            else {
                                for ( var p = 0; p < datafield[ 'values' ].source.length; p++ ) {
                                    var sourcerecord = datafield.values.source[ p ];
                                    var sourcevalue = sourcerecord[ datafield.values[ 'value' ] ];
                                    if ( sourcevalue == undefined ) {
                                        sourcevalue = sourcerecord.uid;
                                    }
                                    if ( sourcevalue == value ) {
                                        var label = sourcerecord[ datafield.values[ 'name' ] ];
                                        record[ name ] = label;
                                        matchedIDs[ value ] = label;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    else if ( datafield.value != undefined ) {
                        for ( var i = 0; i < me.records.length; i++ ) {
                            var record = me.records[ i ];
                            record[ datafield.name ] = record[ datafield.value ];
                        }
                    }
                }
            }
        },

        abort: function () {
            if ( this.xhr && this.xhr.readyState != 4 ) {
                this.xhr.abort();
                this.callDownloadComplete();
            }
        },

        _requestData: function ( postdata, source, options ) {
            var me = this;
            var success = function ( requestedData ) {
                if ( requestedData.totalrecords ) {
                    source.totalrecords = requestedData.totalrecords;
                    me.totalrecords = requestedData.totalrecords;
                }
                if ( requestedData.records ) {
                    me.records = requestedData.records;
                    me.cachedrecords = requestedData.records;
                }
                // add foreign values.
                me.addForeignValues( source );

                if ( options.uniqueDataFields ) {
                    var uniquerecords = me.getUniqueRecords( me.records, options.uniqueDataFields );
                    me.records = uniquerecords;
                    me.cachedrecords = uniquerecords;
                }

                if ( options.beforeLoadComplete ) {
                    var newRecords = options.beforeLoadComplete( me.records, requestedData );
                    if ( newRecords != undefined ) {
                        me.records = newRecords;
                        me.cachedrecords = newRecords;
                    }
                }
                for ( var i = 0; i < me.records.length; i++ ) {
                    var record = me.records[ i ];
                    if ( undefined == record ) {
                        continue;
                    }

                    if ( undefined == record.uid ) {
                        record.uid = me.getid( source.id, record, i );
                    }
                }

                me.buildHierarchy.call( me );
                if ( $.isFunction( options.loadComplete ) ) {
                    options.loadComplete( requestedData );
                }
                me.callDownloadComplete();
            }
            options.loadServerData( postdata, source, success );
        },

        getUniqueRecords: function ( records, dataFields ) {
            if ( records && dataFields ) {
                var length = records.length;
                var datafieldslength = dataFields.length;

                var uniqueRecords = new Array();
                var lookupkeys = new Array();
                // loop through all records.
                for ( var urec = 0; urec < length; urec++ ) {
                    var datarow = records[ urec ];
                    var lookupkey = "";
                    if ( datarow == undefined )
                        continue;
                    // build lookup key from the datafield values.
                    for ( var datafieldindex = 0; datafieldindex < datafieldslength; datafieldindex++ ) {
                        var datafield = dataFields[ datafieldindex ];
                        if ( datarow[ datafield ] !== undefined ) {
                            lookupkey += datarow[ datafield ] + "_";
                        }
                    }
                    // add the unique record.
                    if ( !lookupkeys[ lookupkey ] && lookupkey ) {
                        uniqueRecords[ uniqueRecords.length ] = datarow;
                    }
                    // add the lookup key.
                    lookupkeys[ lookupkey ] = true;
                }
            }

            return uniqueRecords;
        },

        getAggregatedData: function ( aggregates, calendar, records, level ) {
            var dataRecords = records;
            if ( !dataRecords ) {
                dataRecords = this.records;
            }
            var data = {};
            var dataValuesByAggregate = new Array();
            var length = dataRecords.length;
            if ( length == 0 ) return;
            if ( length == undefined ) return;
            for ( var i = 0; i < length; i++ ) {
                var record = dataRecords[ i ];
                for ( var j = 0; j < aggregates.length; j++ ) {
                    var aggregate = aggregates[ j ];
                    var value = record[ aggregate.name ];
                    //            if (value === null) continue;
                    if ( aggregate.aggregates ) {
                        data[ aggregate.name ] = data[ aggregate.name ] || {};
                        dataValuesByAggregate[ aggregate.name ] = dataValuesByAggregate[ aggregate.name ] || 0;
                        dataValuesByAggregate[ aggregate.name ]++;
                        var _customCalcFunc = function ( aggObject ) {
                            for ( var obj in aggObject ) {
                                var oldValue = data[ aggregate.name ][ obj ];
                                if ( oldValue == null ) {
                                    data[ aggregate.name ][ obj ] = 0;
                                    oldValue = 0;
                                }
                                if ( $.isFunction( aggObject[ obj ] ) ) {
                                    oldValue = aggObject[ obj ]( oldValue, value, aggregate.name, record, level );
                                }
                                data[ aggregate.name ][ obj ] = oldValue;
                            }
                        }

                        var canParse = parseFloat( value );
                        if ( isNaN( canParse ) ) canParse = false; else canParse = true;
                        if ( canParse )
                            value = parseFloat( value );

                        if ( typeof value === 'number' && isFinite( value ) ) {
                            $.each( aggregate.aggregates, function () {
                                var oldValue = data[ aggregate.name ][ this ];
                                if ( oldValue == null ) {
                                    oldValue = 0;
                                    if ( this == 'min' ) oldValue = 9999999999999;
                                    if ( this == 'max' ) oldValue = -9999999999999;
                                }
                                if ( this == 'sum' || this == 'avg' || this == 'stdev'
                                    || this == 'stdevp' || this == 'var' || this == 'varp' ) {
                                    oldValue += parseFloat( value );
                                }
                                else if ( this == 'product' ) {
                                    if ( i == 0 )
                                        oldValue = parseFloat( value );
                                    else
                                        oldValue *= parseFloat( value );
                                }
                                else if ( this == 'min' ) {
                                    oldValue = Math.min( oldValue, parseFloat( value ) );
                                }
                                else if ( this == 'max' ) {
                                    oldValue = Math.max( oldValue, parseFloat( value ) );
                                }
                                else if ( this == 'count' ) {
                                    oldValue++;
                                }
                                else if ( typeof ( this ) == 'object' ) {
                                    _customCalcFunc( this );
                                    return;
                                }
                                data[ aggregate.name ][ this ] = oldValue;
                            } );
                        }
                        else {
                            $.each( aggregate.aggregates, function () {
                                if ( this == 'min' || this == 'max' || this == 'count' || this == 'product' || this == 'sum'
                                    || this == 'avg' || this == 'stdev'
                                    || this == 'stdevp' || this == 'var' || this == 'varp' ) {
                                    if ( value === null ) return true;

                                    var oldValue = data[ aggregate.name ][ this ];
                                    if ( oldValue == null ) {
                                        oldValue = 0;
                                    }
                                    data[ aggregate.name ][ this ] = oldValue;
                                    return true;
                                }

                                if ( typeof ( this ) == 'object' ) {
                                    _customCalcFunc( this );
                                }
                            } );
                        }
                    }
                }
            }

            for ( var j = 0; j < aggregates.length; j++ ) {
                var aggregate = aggregates[ j ];
                if ( !data[ aggregate.name ] ) {
                    data[ aggregate.name ] = {};
                    $.each( aggregate.aggregates, function ( index ) {
                        data[ aggregate.name ][ this ] = 0;
                    } );
                }

                if ( data[ aggregate.name ][ 'avg' ] != undefined ) {
                    var value = data[ aggregate.name ][ 'avg' ];
                    var dataValues = dataValuesByAggregate[ aggregate.name ];
                    if ( dataValues === 0 || dataValues == undefined ) {
                        data[ aggregate.name ][ 'avg' ] = 0;
                    }
                    else {
                        data[ aggregate.name ][ 'avg' ] = value / dataValues;
                    }
                }
                else if ( data[ aggregate.name ][ 'count' ] != undefined ) {
                    data[ aggregate.name ][ 'count' ] = length;
                }

                // stdev, stdevp, var, varp.
                // stdev - Standard deviation on a sample.
                // varp - Variance on an entire population.
                // var - Variance on a sample.
                if ( data[ aggregate.name ][ 'stdev' ] || data[ aggregate.name ][ 'stdevp' ]
                    || data[ aggregate.name ][ 'var' ] || data[ aggregate.name ][ 'varp' ] ) {
                    $.each( aggregate.aggregates, function ( index ) {
                        if ( this == 'stdev' || this == 'var' || this == 'varp' || this == 'stdevp' ) {
                            var value = data[ aggregate.name ][ this ];
                            var count = length;
                            var average = ( value / length );
                            var sumSq = 0.0;
                            for ( var i = 0; i < length; i++ ) {
                                var record = dataRecords[ i ];
                                var recordvalue = record[ aggregate.name ];
                                sumSq += ( recordvalue - average ) * ( recordvalue - average );
                            }

                            var denominator = ( this == 'stdevp' || this == 'varp' ) ? count : count - 1;
                            if ( denominator == 0 )
                                denominator = 1;

                            if ( this == 'var' || this == 'varp' ) {
                                data[ aggregate.name ][ this ] = sumSq / denominator;
                            }
                            else if ( this == 'stdevp' || this == 'stdev' ) {
                                data[ aggregate.name ][ this ] = Math.sqrt( sumSq / denominator );
                            }
                        }
                    } );
                }

                if ( aggregate.formatStrings ) {
                    $.each( aggregate.aggregates, function ( index ) {
                        var formatString = aggregate.formatStrings[ index ];
                        if ( formatString ) {
                            if ( this == 'min' || this == 'max' || this == 'count' || this == 'product' || this == 'sum'
                                || this == 'avg' || this == 'stdev'
                                || this == 'stdevp' || this == 'var' || this == 'varp' ) {
                                var value = data[ aggregate.name ][ this ];
                                data[ aggregate.name ][ this ] = $.jqx.dataFormat.formatnumber( value, formatString, calendar );
                            }
                            else if ( typeof this == 'object' ) {
                                for ( var obj in this ) {
                                    var value = data[ aggregate.name ][ obj ];
                                    data[ aggregate.name ][ obj ] = $.jqx.dataFormat.formatnumber( value, formatString, calendar );
                                }
                            }
                        }
                    } );
                }
            }
            return data;
        },

        bindDownloadComplete: function ( id, func ) {
            this._downloadComplete[ this._downloadComplete.length ] = { id: id, func: func };

        },

        unbindDownloadComplete: function ( id ) {
            for ( var i = 0; i < this._downloadComplete.length; i++ ) {
                if ( this._downloadComplete[ i ].id == id ) {
                    this._downloadComplete[ i ].func = null;
                    this._downloadComplete.splice( i, 1 );
                    break;
                }
            }
        },

        callDownloadComplete: function () {
            for ( var complete = 0; complete < this._downloadComplete.length; complete++ ) {
                var downloadComplete = this._downloadComplete[ complete ];
                if ( downloadComplete.func != null ) {
                    downloadComplete.func();
                }
            }
        },

        setSource: function ( source ) {
            this._source = source;
        },

        generatekey: function () {
            var S4 = function () {
                return ( ( ( 1 + Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
            };
            return ( S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4() );
        },

        getGroupedRecords: function ( groups, collectionName, groupName, mappingFields, recordName, valueName, parentName, data, startIndex ) {
            var visualRows = 0;
            var self = this;
            if ( !startIndex ) startIndex = 0;
            var groupHashCodes = new Array();
            for ( var iGroupColumn = 0; iGroupColumn < groups.length; iGroupColumn++ ) {
                groupHashCodes[ iGroupColumn ] = self.generatekey();
            }

            if ( !collectionName ) {
                collectionName = 'items';
            }

            if ( !groupName ) {
                groupName = 'group';
            }

            if ( !recordName ) {
                recordName = 'record';
            }

            if ( !parentName ) {
                parentName = 'parentItem';
            }

            if ( undefined === valueName ) {
                valueName = 'value';
            }

            var grouprecords = new Array();
            var grouprecordsindex = 0;
            var hashRowGroups = new Array();
            var groupslength = groups.length;
            var groupsHierarchy = new Array();
            if ( !data ) {
                var data = this.records;
            }

            var dataLength = data.length;

            var itemByRecord = function ( record ) {
                var itemObj = record;
                if ( mappingFields ) {
                    $.each( mappingFields, function () {
                        if ( this.name && this.map ) {
                            itemObj[ this.map ] = itemObj[ this.name ];
                        }
                    } );
                }

                return itemObj;
            }

            for ( var obj = 0; obj < dataLength; obj++ ) {
                var item = itemByRecord( data[ obj ] );
                var id = item[ self.uniqueId ];
                var itemKeysHierarchy = new Array();
                var keys = 0;
                for ( iGroupColumn = 0; iGroupColumn < groupslength; iGroupColumn++ ) {
                    var group = groups[ iGroupColumn ];
                    var value = item[ group ];

                    if ( null == value )
                        continue;

                    itemKeysHierarchy[ keys++ ] = { value: value, hash: groupHashCodes[ iGroupColumn ] };
                }

                if ( itemKeysHierarchy.length != groupslength )
                    break;

                var parentItem = null;

                var lookupKey = "";
                var iLevel = -1;
                for ( var q = 0; q < itemKeysHierarchy.length; q++ ) {
                    iLevel++;
                    var itemKey = itemKeysHierarchy[ q ].value;
                    var columnHash = itemKeysHierarchy[ q ].hash;
                    lookupKey = lookupKey + "_" + columnHash + "_" + itemKey;
                    if ( hashRowGroups[ lookupKey ] != undefined && hashRowGroups[ lookupKey ] != null ) {
                        parentItem = hashRowGroups[ lookupKey ];
                        continue;
                    }
                    if ( parentItem == null ) {
                        parentItem = { level: 0 };
                        parentItem[ parentName ] = null;
                        parentItem[ groupName ] = itemKey;
                        parentItem[ recordName ] = item;
                        if ( item.expanded !== undefined ) {
                            parentItem.expanded = item.expanded;
                        }
                        else {
                            parentItem.expanded = false;
                        }

                        if ( valueName ) {
                            parentItem[ valueName ] = item[ valueName ];
                        }
                        parentItem[ collectionName ] = new Array();
                        var uid = grouprecords.length + startIndex;
                        if ( !this._source.id || typeof item.uid === "number" || isFinite( item.uid ) ) {
                            uid = "Row" + uid;
                        }
                        parentItem.uid = uid;
                        grouprecords[ grouprecordsindex++ ] = parentItem;
                    }
                    else {
                        var subItem = { level: parentItem.level + 1 };
                        subItem[ parentName ] = parentItem;
                        subItem[ groupName ] = itemKey;
                        subItem[ collectionName ] = new Array();
                        subItem[ recordName ] = item;
                        if ( item.expanded !== undefined ) {
                            subItem.expanded = item.expanded;
                        }
                        else {
                            subItem.expanded = false;
                        }

                        if ( valueName ) {
                            subItem[ valueName ] = item[ valueName ];
                        }
                        subItem.uid = parentItem.uid + "_" + parentItem[ collectionName ].length;
                        parentItem[ collectionName ][ parentItem[ collectionName ].length ] = subItem;
                        parentItem = subItem;
                    }

                    hashRowGroups[ lookupKey ] = parentItem;
                }

                if ( item ) {
                    item.leaf = true;
                }

                if ( parentItem != null ) {
                    if ( this._source.id == null ) {
                        if ( undefined == item.uid ) {
                            item.uid = parentItem.uid + "_" + parentItem[ collectionName ].length;
                        }
                        else {
                            if ( item.uid.toString().indexOf( parentItem.uid ) == -1 ) {
                                item.uid = parentItem.uid + "_" + item.uid;
                            }
                        }
                    }
                    item[ parentName ] = parentItem;
                    item.level = parentItem.level + 1;
                    parentItem[ collectionName ][ parentItem[ collectionName ].length ] = item;
                }
                else {
                    if ( undefined == item.uid ) {
                        item.uid = this.generatekey();
                    }
                }
            }
            return grouprecords;
        },

        getRecordsHierarchy: function ( fieldName, parentFieldName, collectionName, mappingFields, dataRecords ) {
            var recordsHierarchy = new Array();
            var flatData = this.records;
            if ( dataRecords ) {
                flatData = dataRecords;
            }

            if ( this.records.length == 0 )
                return null;

            var subItemsName = collectionName != null ? collectionName : "items";
            var items = [];
            var data = flatData;
            var dataLength = data.length;
            var names = ( this._source && this._source.hierarchy ) ? this._source.hierarchy.reservedNames : null;

            var itemByRecord = function ( record ) {
                var itemObj = record;
                if ( mappingFields ) {
                    $.each( mappingFields, function () {
                        if ( this.name && this.map ) {
                            itemObj[ this.map ] = itemObj[ this.name ];
                        }
                    } );
                }

                return itemObj;
            }

            // build hierarchical source.
            for ( var i = 0; i < dataLength; i++ ) {
                var item = $.extend( {}, data[ i ] );
                var parentid = item[ parentFieldName ];
                var id = item[ fieldName ];
                items[ id ] = { parentid: parentid, item: item };
            }

            for ( var i = 0; i < dataLength; i++ ) {
                var item = $.extend( {}, data[ i ] );
                var parentid = item[ parentFieldName ];
                var id = item[ fieldName ];

                if ( items[ parentid ] != undefined ) {
                    var item = { parentid: parentid, item: items[ id ].item };
                    var parentItem = items[ parentid ].item;
                    if ( !parentItem[ subItemsName ] ) {
                        parentItem[ subItemsName ] = [];
                    }
                    var length = parentItem[ subItemsName ].length;
                    var record = item.item;

                    if ( !names ) {
                        if ( record.parent == undefined ) {
                            record.parent = parentItem;
                        }
                    }
                    else {
                        if ( record[ names.parent ] == undefined ) {
                            record[ names.parent ] = parentItem;
                        }
                    }

                    var itemObj = itemByRecord( record );
                    parentItem[ subItemsName ][ length ] = itemObj;
                    items[ parentid ].item = parentItem;
                    items[ id ] = item;
                }
                else {
                    var record = items[ id ].item;
                    if ( !names ) {
                        if ( record.parent == undefined ) {
                            record.parent = null;
                        }
                    }
                    else {
                        if ( record[ names.parent ] == undefined ) {
                            record[ names.parent ] = null;
                        }
                    }

                    var itemObj = itemByRecord( record );
                    if ( !names ) {
                        itemObj.level = 0;
                    }
                    else {
                        itemObj[ names.level ] = 0;
                    }

                    recordsHierarchy[ recordsHierarchy.length ] = itemObj;
                }
            }
            if ( recordsHierarchy.length != 0 ) {
                var updateLevels = function ( level, records ) {
                    for ( var i = 0; i < records.length; i++ ) {
                        if ( !names ) {
                            records[ i ].level = level;
                        }
                        else {
                            records[ i ][ names.level ] = level;
                        }

                        var subRecords = records[ i ][ subItemsName ];
                        if ( subRecords ) {
                            if ( subRecords.length > 0 ) {
                                updateLevels( level + 1, subRecords );
                            }
                            else {
                                if ( !names ) {
                                    records[ i ].leaf = true;
                                }
                                else {
                                    records[ i ][ names.leaf ] = true;
                                }
                            }
                        }
                        else {
                            if ( !names ) {
                                records[ i ].leaf = true;
                            }
                            else {
                                records[ i ][ names.leaf ] = true;
                            }
                        }
                    }
                };
                updateLevels( 0, recordsHierarchy );
            }
            return recordsHierarchy;
        },

        bindBindingUpdate: function ( id, func ) {
            this._bindingUpdate[ this._bindingUpdate.length ] = { id: id, func: func };

        },

        unbindBindingUpdate: function ( id ) {
            for ( var i = 0; i < this._bindingUpdate.length; i++ ) {
                if ( this._bindingUpdate[ i ].id == id ) {
                    this._bindingUpdate[ i ].func = null;
                    this._bindingUpdate.splice( i, 1 );
                    break;
                }
            }
        },

        callBindingUpdate: function ( collectionChanged ) {
            for ( var update = 0; update < this._bindingUpdate.length; update++ ) {
                var bindingUpdate = this._bindingUpdate[ update ];
                if ( bindingUpdate.func != null ) {
                    bindingUpdate.func( collectionChanged );
                }
            }
        },

        getid: function ( id, record, index ) {
            if ( id != null && id.name != undefined ) {
                if ( id.name ) {
                    var result = $( record ).attr( id.name );
                    if ( result != null && result.toString().length > 0 ) {
                        return result;
                    }
                    else if ( id.map ) {
                        try {
                            var result = $( record ).attr( id.map );
                            if ( result != null && result.toString().length > 0 ) {
                                return result;
                            }
                            else if ( $( id.map, record ).length > 0 ) {
                                return $( id.map, record ).text();
                            }
                            else if ( $( id.name, record ).length > 0 ) {
                                return $( id.name, record ).text();
                            }
                        }
                        catch ( error ) {
                            return index;
                        }
                    }
                    return;
                }
            }

            if ( $( id, record ).length > 0 ) {
                return $( id, record ).text();
            }

            if ( id ) {
                if ( id.toString().length > 0 ) {
                    var result = $( record ).attr( id );
                    if ( result != null && result.toString().length > 0 ) {
                        return $.trim( result ).split( " " ).join( "" ).replace( /([ #;?%&,.+*~\':"!^$[\]()=>|\/\\@])/g, '' );
                    }
                    else {
                        var splitMap = id.split( this.mapChar );
                        if ( splitMap.length > 1 ) {
                            var d = record;
                            for ( var p = 0; p < splitMap.length; p++ ) {
                                if ( d != undefined ) {
                                    d = d[ splitMap[ p ] ];
                                }
                            }
                            if ( d != undefined ) {
                                return d;
                            }
                        }
                        else {
                            if ( record[ id ] != undefined ) {
                                return record[ id ];
                            }
                        }
                    }
                }
            }

            return index;
        },

        loadjson: function ( jsondata, data, source ) {
            if ( typeof ( jsondata ) == 'string' ) {
                jsondata = $.parseJSON( jsondata );
            }

            if ( source.root == undefined ) source.root = '';
            if ( source.record == undefined ) source.record = '';

            var jsondata = jsondata || data;
            if ( !jsondata ) {
                jsondata = [];
            }

            var me = this;
            if ( source.root != '' ) {
                var splitMap = source.root.split( me.mapChar );
                if ( splitMap.length > 1 ) {
                    var d = jsondata;
                    for ( var p = 0; p < splitMap.length; p++ ) {
                        if ( d != undefined ) {
                            d = d[ splitMap[ p ] ];
                        }
                    }
                    jsondata = d;
                }
                else {
                    if ( jsondata[ source.root ] !== undefined ) {
                        jsondata = jsondata[ source.root ];
                    }
                    else if ( jsondata[ 0 ] && jsondata[ 0 ][ source.root ] !== undefined ) {
                        jsondata = jsondata[ 0 ][ source.root ];
                    }
                    else {
                        $.each( jsondata, function ( i ) {
                            var root = this;
                            if ( this == source.root ) {
                                jsondata = this;
                                return false;
                            }
                            else if ( this[ source.root ] != undefined ) {
                                jsondata = this[ source.root ];
                            }
                        } );
                    }

                    if ( !jsondata ) {
                        var splitMap = source.root.split( me.mapChar );
                        if ( splitMap.length > 0 ) {
                            var d = jsondata;
                            for ( var p = 0; p < splitMap.length; p++ ) {
                                if ( d != undefined ) {
                                    d = d[ splitMap[ p ] ];
                                }
                            }
                            jsondata = d;
                        }
                    }
                }
            }
            else {
                if ( !jsondata.length ) {
                    for ( var obj in jsondata ) {
                        if ( $.isArray( jsondata[ obj ] ) ) {
                            jsondata = jsondata[ obj ];
                            break;
                        }
                    }
                }
            }

            if ( jsondata != null && jsondata.length == undefined ) {
                jsondata = $.makeArray( jsondata );
            }

            if ( jsondata == null || jsondata == undefined || jsondata == "undefined" || jsondata.length == undefined ) {
                throw new Error( 'jqxDataAdapter: JSON Parse error! Invalid JSON. Please, check your JSON or your jqxDataAdapter initialization!' );
                return;
            }

            if ( jsondata.length == 0 ) {
                this.totalrecords = 0;
                return;
            }

            var length = jsondata.length;
            this.totalrecords = this.virtualmode ? ( source.totalrecords || length ) : length;
            this.records = new Array();
            this.originaldata = new Array();

            var records = this.records;
            var recordsstartindex = !this.pageable ? source.recordstartindex : this.pagesize * this.pagenum;

            this.recordids = new Array();

            if ( source.loadallrecords ) {
                recordsstartindex = 0;
                length = this.totalrecords;
            }

            var dataoffset = 0;
            if ( this.virtualmode ) {
                recordsstartindex = !this.pageable ? source.recordstartindex : this.pagesize * this.pagenum;
                dataoffset = recordsstartindex;
                recordsstartindex = 0;
                length = this.totalrecords;
            }

            var datafieldslength = source.datafields ? source.datafields.length : 0;
            // auto-generate data columns
            if ( datafieldslength == 0 ) {
                var firstrecord = jsondata[ 0 ];
                var datafields = new Array();
                for ( var obj in firstrecord ) {
                    var field = obj;
                    datafields[ datafields.length ] = { name: field };
                }
                source.datafields = datafields;
                source.generatedfields = source.datafields;
                datafieldslength = datafields.length;
            }

            var index = recordsstartindex;
            for ( var i = recordsstartindex; i < length; i++ ) {
                var record = jsondata[ i ];

                if ( record == undefined )
                    break;

                if ( source.record && source.record != '' ) {
                    record = record[ source.record ];
                    if ( record == undefined )
                        continue;
                }

                var recordid = this.getid( source.id, record, i );
                if ( typeof ( recordid ) === "object" ) {
                    recordid = i;
                }

                if ( !this.recordids[ recordid ] ) {
                    this.recordids[ recordid ] = record;
                    var datarow = {};

                    for ( var j = 0; j < datafieldslength; j++ ) {
                        var datafield = source.datafields[ j ];
                        var value = '';
                        if ( undefined == datafield || datafield == null ) {
                            continue;
                        }

                        if ( datafield.map ) {
                            if ( $.isFunction( datafield.map ) ) {
                                value = datafield.map( record );
                            }
                            else {
                                var splitMap = datafield.map.split( me.mapChar );
                                if ( splitMap.length > 0 ) {
                                    var datarecord = record;
                                    for ( var p = 0; p < splitMap.length; p++ ) {
                                        if ( datarecord != undefined ) {
                                            datarecord = datarecord[ splitMap[ p ] ];
                                        }
                                    }
                                    value = datarecord;
                                }
                                else {
                                    value = record[ datafield.map ];
                                }
                            }

                            if ( value != undefined && value != null ) {
                                value = this.getvaluebytype( value, datafield );
                            }
                            else if ( value == undefined && value != null ) {
                                value = '';
                            }
                        }

                        // searches by both selectors when necessary.
                        if ( value == '' && !datafield.map ) {
                            value = record[ datafield.name ];
                            if ( value == undefined && value != null ) {
                                value = '';
                            }
                            // the datafield.value allows you to load values like: "Nombre":{"#text":"FASE 1"}, where the datafield is Nombre, the value is object.
                            // If the datafield.value is "#text", the value that will be loaded will be "FASE 1".
                            if ( datafield.value != undefined ) {
                                if ( value != undefined ) {
                                    var tmpvalue = value[ datafield.value ];
                                    if ( tmpvalue != undefined ) {
                                        value = tmpvalue;
                                    }
                                }
                            }
                        }

                        value = this.getvaluebytype( value, datafield );
                        if ( datafield.displayname != undefined ) {
                            datarow[ datafield.displayname ] = value;
                        }
                        else {
                            datarow[ datafield.name ] = value;
                        }

                        if ( datafield.type === "array" ) {
                            var updateValues = function ( records ) {
                                if ( !records ) return;
                                for ( var t = 0; t < records.length; t++ ) {
                                    var record = records[ t ];
                                    if ( !record ) {
                                        continue;
                                    }

                                    for ( var c = 0; c < datafieldslength; c++ ) {
                                        var datafield = source.datafields[ c ];
                                        var value = '';
                                        if ( undefined == datafield || datafield == null ) {
                                            continue;
                                        }

                                        if ( datafield.map ) {
                                            if ( $.isFunction( datafield.map ) ) {
                                                value = datafield.map( record );
                                            }
                                            else {
                                                var splitMap = datafield.map.split( me.mapChar );
                                                if ( splitMap.length > 0 ) {
                                                    var datarecord = record;
                                                    for ( var p = 0; p < splitMap.length; p++ ) {
                                                        if ( datarecord != undefined ) {
                                                            datarecord = datarecord[ splitMap[ p ] ];
                                                        }
                                                    }
                                                    value = datarecord;
                                                }
                                                else {
                                                    value = record[ datafield.map ];
                                                }
                                            }

                                            if ( value != undefined && value != null ) {
                                                value = this.getvaluebytype( value, datafield );
                                            }
                                            else if ( value == undefined && value != null ) {
                                                value = '';
                                            }
                                        }

                                        // searches by both selectors when necessary.
                                        if ( value == '' && !datafield.map ) {
                                            value = record[ datafield.name ];
                                            if ( value == undefined && value != null ) {
                                                value = '';
                                            }
                                            // the datafield.value allows you to load values like: "Nombre":{"#text":"FASE 1"}, where the datafield is Nombre, the value is object.
                                            // If the datafield.value is "#text", the value that will be loaded will be "FASE 1".
                                            if ( datafield.value != undefined ) {
                                                if ( value != undefined ) {
                                                    var tmpvalue = value[ datafield.value ];
                                                    if ( tmpvalue != undefined ) {
                                                        value = tmpvalue;
                                                    }
                                                }
                                            }
                                        }

                                        value = this.getvaluebytype( value, datafield );
                                        if ( datafield.displayname != undefined ) {
                                            record[ datafield.displayname ] = value;
                                        }
                                        else {
                                            record[ datafield.name ] = value;
                                        }
                                        if ( datafield.type === "array" ) {
                                            updateValues.call( this, value );
                                        }
                                    }
                                }
                            }
                            updateValues.call( this, value );
                        }
                    }

                    if ( source.recordendindex <= 0 || recordsstartindex < source.recordendindex ) {
                        //      records[dataoffset + index] = $.extend({}, datarow);
                        records[ dataoffset + index ] = new Object( datarow );
                        records[ dataoffset + index ].uid = recordid;

                        this.originaldata[ dataoffset + index ] = new Object( records[ i ] );

                        //     this.originaldata[dataoffset + index] = $.extend({}, records[i]);
                        index++;
                    }
                }
            }
            this.records = records;
            this.cachedrecords = this.records;
        },

        loadxml: function ( xmldata, data, source ) {
            if ( typeof ( xmldata ) == 'string' ) {
                xmldata = data = $( $.parseXML( xmldata ) );
                xmldata = null;
            }

            if ( source.root == undefined ) source.root = '';
            if ( source.record == undefined ) source.record = '';


            var xmldata;

            if ( $.jqx.browser.msie && data ) {
                if ( data.xml != undefined ) {
                    xmldata = $( source.root + " " + source.record, $.parseXML( data.xml ) );
                }
                else {
                    xmldata = xmldata || $( source.root + " " + source.record, data );
                }
            }
            else xmldata = xmldata || $( source.root + " " + source.record, data );

            if ( !xmldata ) {
                xmldata = [];
            }

            var length = xmldata.length;
            if ( xmldata.length == 0 ) {
                return;
            }

            this.totalrecords = this.virtualmode ? ( source.totalrecords || length ) : length;
            this.records = new Array();
            this.originaldata = new Array();

            var records = this.records;
            var recordsstartindex = !this.pageable ? source.recordstartindex : this.pagesize * this.pagenum;

            this.recordids = new Array();

            if ( source.loadallrecords ) {
                recordsstartindex = 0;
                length = this.totalrecords;
            }

            var dataoffset = 0;
            if ( this.virtualmode ) {
                recordsstartindex = !this.pageable ? source.recordstartindex : this.pagesize * this.pagenum;
                dataoffset = recordsstartindex;
                recordsstartindex = 0;
                length = this.totalrecords;
            }

            var datafieldslength = source.datafields ? source.datafields.length : 0;
            // auto-generate data columns
            if ( datafieldslength == 0 ) {
                var firstrecord = xmldata[ 0 ];
                var datafields = new Array();
                for ( var obj in firstrecord ) {
                    var field = obj;
                    datafields[ datafields.length ] = { name: field };
                }
                source.datafields = datafields;
                source.generatedfields = source.datafields;

                datafieldslength = datafields.length;
            }

            var p = recordsstartindex;
            var hasArray = false;
            for ( var i = recordsstartindex; i < length; i++ ) {
                var record = xmldata[ i ];
                if ( record == undefined )
                    break;

                var recordid = this.getid( source.id, record, i );
                if ( !this.recordids[ recordid ] ) {
                    this.recordids[ recordid ] = record;
                    var datarow = {};

                    var multiLevel = false;
                    if ( source.hierarchy && source.hierarchy.root ) {
                        multiLevel = true;
                    }

                    for ( var j = 0; j < datafieldslength; j++ ) {
                        var datafield = source.datafields[ j ];
                        var value = '';
                        if ( undefined == datafield || datafield == null ) {
                            continue;
                        }

                        if ( datafield.map ) {
                            if ( $.isFunction( datafield.map ) ) {
                                value = datafield.map( record );
                            }
                            else {
                                var attributeStartIndex = datafield.map.indexOf( '[' );
                                if ( attributeStartIndex < 0 ) {
                                    value = $( datafield.map, record );
                                    if ( value.length == 1 ) value = value.text();
                                    else {
                                        hasArray = true;
                                        var subArray = new Array();
                                        for ( var f = 0; f < value.length; f++ ) {
                                            subArray.push( $( value[ f ] ).text() );
                                        }
                                        value = subArray;
                                        if ( multiLevel && subArray.length > 0 ) {
                                            value = subArray[ 0 ];
                                        }
                                    }
                                }
                                else {
                                    var submap = datafield.map.substring( 0, attributeStartIndex - 1 );
                                    var attributeEndIndex = datafield.map.indexOf( ']' );
                                    var attribute = datafield.map.substring( attributeStartIndex + 1, attributeEndIndex );
                                    value = $( submap, record ).attr( attribute );
                                    if ( value == undefined ) {
                                        value = $( record ).attr( attribute );
                                    }

                                    if ( value == undefined ) value = '';
                                }
                                if ( value == '' ) {
                                    value = $( record ).attr( datafield.map );
                                    if ( value == undefined ) value = '';
                                }
                            }
                        }
                        // searches by both selectors when necessary.
                        if ( value == '' ) {
                            value = $( datafield.name, record );
                            if ( value.length == 1 ) value = value.text();
                            else {
                                var subArray = new Array();
                                for ( var f = 0; f < value.length; f++ ) {
                                    subArray.push( $( value[ f ] ).text() );
                                }
                                value = subArray;
                                if ( multiLevel && subArray.length > 0 ) {
                                    value = subArray[ 0 ];
                                }
                            }

                            if ( value == '' ) {
                                value = $( record ).attr( datafield.name );
                                if ( value == undefined ) value = '';
                            }
                            if ( value == '' ) {
                                if ( record.nodeName && record.nodeName == datafield.name && record.firstChild ) {
                                    value = $( record.firstChild ).text();
                                }
                            }
                        }

                        var originalvalue = value;
                        value = this.getvaluebytype( value, datafield );
                        if ( datafield.displayname != undefined ) {
                            datarow[ datafield.displayname ] = value;
                        }
                        else {
                            datarow[ datafield.name ] = value;
                        }
                    }
                    if ( source.recordendindex <= 0 || recordsstartindex < source.recordendindex ) {
                        records[ dataoffset + p ] = $.extend( {}, datarow );
                        records[ dataoffset + p ].uid = recordid;

                        this.originaldata[ dataoffset + p ] = $.extend( {}, records[ i ] );
                        p++;
                    }
                }
            }

            if ( source.hierarchy && source.hierarchy.root ) {
                for ( var i = recordsstartindex; i < length; i++ ) {
                    var record = xmldata[ i ];
                    var dataRecord = records[ i ];

                    if ( $( record ).parent().length > 0 ) {
                        var recordid = this.getid( source.id, $( record ).parents( source.hierarchy.record + ":first" ) );
                        dataRecord.parentuid = recordid;
                    }
                    else {
                        dataRecord.parentuid = null;
                    }
                }
            }

            this.records = records;
            this.cachedrecords = this.records;
        },

        loadics: function ( data, source ) {
            if ( data == null ) {
                return;
            }

            var rowDelimiter = source.rowDelimiter || this.rowDelimiter || '\n';
            var rows = data.split( rowDelimiter );
            var length = rows.length;
            var rowsWithNewRowDelimiter = data.split( '\r' );
            if ( length == 1 && rowsWithNewRowDelimiter.length > 1 ) {
                rows = rowsWithNewRowDelimiter;
                length = rows.length;
            }
            this.records = new Array();
            this.originaldata = new Array();

            var records = this.records;
            this.recordids = new Array();

            var dataoffset = 0;

            var stringToDate = function ( until ) {
                var re = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/;
                var bits = re.exec( until );
                if ( !bits ) {
                    throw new Error( 'Invalid UNTIL value: ' + until )
                }
                return new Date(
                    Date.UTC( bits[ 1 ],
                        bits[ 2 ] - 1,
                        bits[ 3 ],
                        bits[ 5 ] || 0,
                        bits[ 6 ] || 0,
                        bits[ 7 ] || 0
                    ) );
            }

            for ( var i = 0; i < length; i++ ) {
                var record = rows[ i ];
                if ( record == "BEGIN:VEVENT" ) {
                    var appointment = {};
                    continue;
                }

                if ( record.indexOf( "SUMMARY" ) >= 0 ) {
                    appointment.SUMMARY = record.substring( record.indexOf( "SUMMARY" ) + 8 );
                    continue;
                }
                if ( record.indexOf( "LOCATION" ) >= 0 ) {
                    appointment.LOCATION = record.substring( record.indexOf( "LOCATION" ) + 9 );
                    continue;
                }
                if ( record.indexOf( "DESCRIPTION" ) >= 0 ) {
                    appointment.DESCRIPTION = record.substring( record.indexOf( "DESCRIPTION" ) + 12 );
                    continue;
                }
                if ( record.indexOf( "RRULE" ) >= 0 ) {
                    appointment.RRULE = record.substring( record.indexOf( "RRULE" ) + 6 );
                    continue;
                }
                if ( record.indexOf( "EXDATE" ) >= 0 ) {
                    var exDate = record.substring( record.indexOf( "EXDATE" ) + 7 );
                    appointment.EXDATE = exDate;
                    continue;
                }
                if ( record.indexOf( "DTEND" ) >= 0 ) {
                    appointment.DTEND = stringToDate( record.substring( record.indexOf( "DTEND" ) + 6 ) );
                    continue;
                }
                if ( record.indexOf( "DTSTART" ) >= 0 ) {
                    appointment.DTSTART = stringToDate( record.substring( record.indexOf( "DTSTART" ) + 8 ) );
                    continue;
                }
                if ( record.indexOf( "UID" ) >= 0 ) {
                    appointment.uid = appointment.UID = record.substring( record.indexOf( "UID" ) + 4 );
                    continue;
                }
                if ( record.indexOf( "STATUS" ) >= 0 ) {
                    appointment.STATUS = record.substring( record.indexOf( "STATUS" ) + 7 );
                    continue;
                }
                if ( record == "END:VEVENT" ) {
                    records.push( appointment );
                    continue;
                }
            }
            this.records = records;
            this.cachedrecords = this.records;
        },

        loadtext: function ( data, source ) {
            if ( data == null ) {
                return;
            }

            var rowDelimiter = source.rowDelimiter || this.rowDelimiter || '\n';
            var rows = data.split( rowDelimiter );
            var length = rows.length;
            var rowsWithNewRowDelimiter = data.split( '\r' );
            if ( length == 1 && rowsWithNewRowDelimiter.length > 1 ) {
                rows = rowsWithNewRowDelimiter;
                length = rows.length;
            }
            this.totalrecords = this.virtualmode ? ( source.totalrecords || length ) : length;
            this.records = new Array();
            this.originaldata = new Array();

            var records = this.records;
            var recordsstartindex = !this.pageable ? source.recordstartindex : this.pagesize * this.pagenum;

            this.recordids = new Array();

            if ( source.loadallrecords ) {
                recordsstartindex = 0;
                length = this.totalrecords;
            }

            var dataoffset = 0;
            if ( this.virtualmode ) {
                recordsstartindex = !this.pageable ? source.recordstartindex : this.pagesize * this.pagenum;
                dataoffset = recordsstartindex;
                recordsstartindex = 0;
                length = this.totalrecords;
            }

            var datafieldslength = source.datafields.length;
            var columnDelimiter = source.columnDelimiter || this.columnDelimiter;
            if ( !columnDelimiter )
                columnDelimiter = ( source.datatype === 'tab' || source.datatype === 'tsv' ) ? '\t' : ',';

            for ( var i = recordsstartindex; i < length; i++ ) {
                var record = rows[ i ];
                var recordid = null;
                if ( !this.recordids[ recordid ] ) {
                    if ( source.id == null ) {
                        recordid = i;
                        this.recordids[ recordid ] = record;
                    }

                    var datarow = {};
                    var columns = rows[ i ].split( columnDelimiter );

                    for ( var j = 0; j < datafieldslength; j++ ) {
                        if ( j >= columns.length )
                            continue;
                        var datafield = source.datafields[ j ];

                        var value = columns[ j ];
                        if ( datafield.map && $.isFunction( datafield.map ) ) {
                            value = datafield.map( record );
                        }

                        if ( datafield.type ) {
                            value = this.getvaluebytype( value, datafield );
                        }

                        var key = datafield.map || datafield.name || j.toString();
                        datarow[ key ] = value;
                        if ( source.id != null ) {
                            if ( source.id === datafield.name ) {
                                recordid = value;
                                this.recordids[ recordid ] = record;
                            }
                        }
                    }
                    if ( recordid == null ) {
                        recordid = i;
                    }

                    records[ dataoffset + i ] = $.extend( {}, datarow );
                    records[ dataoffset + i ].uid = recordid;

                    this.originaldata[ dataoffset + i ] = $.extend( {}, records[ i ] );
                }
            }
            this.records = records;
            this.cachedrecords = this.records;
        },

        getvaluebytype: function ( value, datafield ) {
            var originalvalue = value;
            if ( value == null ) return value;
            if ( $.isArray( value ) && datafield.type != "array" ) {
                for ( var t = 0; t < value.length; t++ ) {
                    value[ t ] = this.getvaluebytype( value[ t ], datafield );
                }
                return value;
            }

            if ( datafield.type == 'date' ) {
                if ( value == "NaN" ) {
                    value = "";
                }
                else {
                    if ( value && value instanceof Date ) {
                        return value;
                    }

                    var tmpvalue = new Date( value );

                    if ( typeof value == 'string' ) {
                        if ( datafield.format ) {
                            var newtmpvalue = $.jqx.dataFormat.parsedate( value, datafield.format );
                            if ( newtmpvalue != null ) {
                                tmpvalue = newtmpvalue;
                            }
                        }
                    }

                    if ( tmpvalue.toString() == 'NaN' || tmpvalue.toString() == "Invalid Date" ) {
                        if ( $.jqx.dataFormat ) {
                            value = $.jqx.dataFormat.tryparsedate( value );
                        }
                        else value = tmpvalue;
                    }
                    else {
                        value = tmpvalue;
                    }

                    if ( value == null ) {
                        value = originalvalue;
                    }
                }
            }
            else if ( datafield.type == 'float' || datafield.type == 'number' || datafield.type == 'decimal' ) {
                if ( value == "NaN" ) value = "";
                else {
                    var value = parseFloat( value );
                    if ( isNaN( value ) ) {
                        value = originalvalue;
                    }
                }
            }
            else if ( datafield.type == 'int' || datafield.type == 'integer' ) {
                var value = parseInt( value );
                if ( isNaN( value ) ) {
                    value = originalvalue;
                }
            }
            else if ( datafield.type == 'bool' || datafield.type == 'boolean' ) {
                if ( value != null ) {
                    if ( value.toLowerCase != undefined ) {
                        if ( value.toLowerCase() == 'false' ) {
                            value = false;
                        }
                        else if ( value.toLowerCase() == 'true' ) {
                            value = true;
                        }
                    }
                }

                if ( value == 1 ) {
                    value = true;
                }
                else if ( value == 0 && value !== "" ) {
                    value = false;
                }
                else value = '';
            }

            return value;
        }
    }

    $.jqx.dataFormat = {};

    $.extend( $.jqx.dataFormat, {
        regexTrim: /^\s+|\s+$/g,
        regexInfinity: /^[+-]?infinity$/i,
        regexHex: /^0x[a-f0-9]+$/i,
        regexParseFloat: /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,
        toString: Object.prototype.toString,

        isBoolean: function ( value ) {
            return typeof value === 'boolean';
        },

        isObject: function ( value ) {
            return ( value && ( typeof value === 'object' || $.isFunction( value ) ) ) || false;
        },

        isDate: function ( value ) {
            return value instanceof Date;
        },

        arrayIndexOf: function ( array, item ) {
            if ( array.indexOf ) {
                return array.indexOf( item );
            }
            for ( var i = 0, length = array.length; i < length; i++ ) {
                if ( array[ i ] === item ) {
                    return i;
                }
            }
            return -1;
        },

        isString: function ( value ) {
            return typeof value === 'string';
        },

        isNumber: function ( value ) {
            return typeof value === 'number' && isFinite( value );
        },

        isNull: function ( value ) {
            return value === null;
        },

        isUndefined: function ( value ) {
            return typeof value === 'undefined';
        },

        isValue: function ( value ) {
            return ( this.isObject( value ) || this.isString( value ) || this.isNumber( value ) || this.isBoolean( value ) );
        },

        isEmpty: function ( value ) {
            if ( !this.isString( value ) && this.isValue( value ) ) {
                return false;
            } else if ( !this.isValue( value ) ) {
                return true;
            }
            value = $.trim( value ).replace( /\&nbsp\;/ig, '' ).replace( /\&#160\;/ig, '' );
            return value === "";
        },

        startsWith: function ( value, pattern ) {
            return value.indexOf( pattern ) === 0;
        },

        endsWith: function ( value, pattern ) {
            return value.substr( value.length - pattern.length ) === pattern;
        },

        trim: function ( value ) {
            return ( value + "" ).replace( this.regexTrim, "" );
        },

        isArray: function ( obj ) {
            return this.toString.call( obj ) === "[object Array]";
        },

        defaultcalendar: function () {
            var calendar = {
                // separator of parts of a date (e.g. '/' in 11/05/1955)
                '/': "/",
                // separator of parts of a time (e.g. ':' in 05:44 PM)
                ':': ":",
                // the first day of the week (0 = Sunday, 1 = Monday, etc)
                firstDay: 0,
                days: {
                    // full day names
                    names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                    // abbreviated day names
                    namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                    // shortest day names
                    namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
                },
                months: {
                    // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                    names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
                    // abbreviated month names
                    namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
                },
                // AM and PM designators in one of these forms:
                // The usual view, and the upper and lower case versions
                //      [standard,lowercase,uppercase]
                // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
                //      null
                AM: [ "AM", "am", "AM" ],
                PM: [ "PM", "pm", "PM" ],
                eras: [
                    // eras in reverse chronological order.
                    // name: the name of the era in this culture (e.g. A.D., C.E.)
                    // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                    // offset: offset in years from gregorian calendar
                    { "name": "A.D.", "start": null, "offset": 0 }
                ],
                twoDigitYearMax: 2029,
                patterns: {
                    // short date pattern
                    d: "M/d/yyyy",
                    // long date pattern
                    D: "dddd, MMMM dd, yyyy",
                    // short time pattern
                    t: "h:mm tt",
                    // long time pattern
                    T: "h:mm:ss tt",
                    // long date, short time pattern
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    // long date, long time pattern
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    // month/day pattern
                    M: "MMMM dd",
                    // month/year pattern
                    Y: "yyyy MMMM",
                    // S is a sortable format that does not vary by culture
                    S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
                    // formatting of dates in MySQL DataBases
                    ISO: "yyyy-MM-dd hh:mm:ss",
                    ISO2: "yyyy-MM-dd HH:mm:ss",
                    d1: "dd.MM.yyyy",
                    d2: "dd-MM-yyyy",
                    d3: "MM-dd-yyyy",
                    zone1: "yyyy-MM-ddTHH:mm:ss-HH:mm",
                    zone2: "yyyy-MM-ddTHH:mm:ss+HH:mm",
                    custom: "yyyy-MM-ddTHH:mm:ss.fff",
                    custom2: "yyyy-MM-dd HH:mm:ss.fff"
                },
                percentsymbol: "%",
                currencysymbol: "$",
                currencysymbolposition: "before",
                decimalseparator: '.',
                thousandsseparator: ','
            }
            return calendar;
        },

        expandFormat: function ( calendar, format ) {
            // expands unspecified or single character date formats into the full pattern.
            format = format || "F";
            var pattern,
                patterns = calendar.patterns,
                len = format.length;
            if ( len === 1 ) {
                pattern = patterns[ format ];
                if ( !pattern ) {
                    throw "Invalid date format string '" + format + "'.";
                }
                format = pattern;
            }
            else if ( len === 2 && format.charAt( 0 ) === "%" ) {
                // %X escape format -- intended as a custom format string that is only one character, not a built-in format.
                format = format.charAt( 1 );
            }
            return format;
        },

        getEra: function ( date, eras ) {
            if ( !eras ) return 0;
            if ( typeof date === 'string' ) {
                return 0;
            }

            var start, ticks = date.getTime();
            for ( var i = 0, l = eras.length; i < l; i++ ) {
                start = eras[ i ].start;
                if ( start === null || ticks >= start ) {
                    return i;
                }
            }
            return 0;
        },

        toUpper: function ( value ) {
            // 'he-IL' has non-breaking space in weekday names.
            return value.split( "\u00A0" ).join( ' ' ).toUpperCase();
        },

        toUpperArray: function ( arr ) {
            var results = [];
            for ( var i = 0, l = arr.length; i < l; i++ ) {
                results[ i ] = this.toUpper( arr[ i ] );
            }
            return results;
        },

        getEraYear: function ( date, cal, era, sortable ) {
            var year = date.getFullYear();
            if ( !sortable && cal.eras ) {
                // convert normal gregorian year to era-shifted gregorian
                // year by subtracting the era offset
                year -= cal.eras[ era ].offset;
            }
            return year;
        },

        toUpper: function ( value ) {
            if ( value ) {
                return value.toUpperCase();
            }
            return "";
        },

        getDayIndex: function ( cal, value, abbr ) {
            var ret,
                days = cal.days,
                upperDays = cal._upperDays;
            if ( !upperDays ) {
                cal._upperDays = upperDays = [
                    this.toUpperArray( days.names ),
                    this.toUpperArray( days.namesAbbr ),
                    this.toUpperArray( days.namesShort )
                ];
            }
            value = value.toUpperCase();
            if ( abbr ) {
                ret = this.arrayIndexOf( upperDays[ 1 ], value );
                if ( ret === -1 ) {
                    ret = this.arrayIndexOf( upperDays[ 2 ], value );
                }
            }
            else {
                ret = this.arrayIndexOf( upperDays[ 0 ], value );
            }
            return ret;
        },

        getMonthIndex: function ( cal, value, abbr ) {
            var months = cal.months,
                monthsGen = cal.monthsGenitive || cal.months,
                upperMonths = cal._upperMonths,
                upperMonthsGen = cal._upperMonthsGen;
            if ( !upperMonths ) {
                cal._upperMonths = upperMonths = [
                    this.toUpperArray( months.names ),
                    this.toUpperArray( months.namesAbbr )
                ];
                cal._upperMonthsGen = upperMonthsGen = [
                    this.toUpperArray( monthsGen.names ),
                    this.toUpperArray( monthsGen.namesAbbr )
                ];
            }
            value = this.toUpper( value );
            var i = this.arrayIndexOf( abbr ? upperMonths[ 1 ] : upperMonths[ 0 ], value );
            if ( i < 0 ) {
                i = this.arrayIndexOf( abbr ? upperMonthsGen[ 1 ] : upperMonthsGen[ 0 ], value );
            }
            return i;
        },

        appendPreOrPostMatch: function ( preMatch, strings ) {
            // appends pre- and post- token match strings while removing escaped characters.
            // Returns a single quote count which is used to determine if the token occurs
            // in a string literal.
            var quoteCount = 0,
                escaped = false;
            for ( var i = 0, il = preMatch.length; i < il; i++ ) {
                var c = preMatch.charAt( i );
                switch ( c ) {
                    case '\'':
                        if ( escaped ) {
                            strings.push( "'" );
                        }
                        else {
                            quoteCount++;
                        }
                        escaped = false;
                        break;
                    case '\\':
                        if ( escaped ) {
                            strings.push( "\\" );
                        }
                        escaped = !escaped;
                        break;
                    default:
                        strings.push( c );
                        escaped = false;
                        break;
                }
            }
            return quoteCount;
        },

        getTokenRegExp: function () {
            // regular expression for matching date and time tokens in format strings.
            return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g;
        },

        formatlink: function ( value, format ) {
            var target = '';
            if ( format && format.target ) { target = 'target=' + format.target; }
            if ( target != '' ) {
                return "<a " + target + " href=\"" + value + "\">" + value + "</a>";
            }
            return "<a href=\"" + value + "\">" + value + "</a>";
        },

        formatemail: function ( value ) {
            return "<a href=\"mailto:" + value + "\">" + value + "</a>";
        },

        formatNumber: function ( value, format, calendar ) {
            return this.formatnumber( value, format, calendar );
        },

        formatnumber: function ( value, format, calendar ) {
            if ( calendar == undefined || calendar == null || calendar == "" ) {
                calendar = this.defaultcalendar();
            }

            if ( format === "" || format === null ) {
                return value;
            }

            if ( !this.isNumber( value ) ) {
                value *= 1;
            }
            var precision;
            if ( format.length > 1 ) precision = parseInt( format.slice( 1 ), 10 );

            var options = {}
            var current = format.charAt( 0 ).toUpperCase();

            options.thousandsSeparator = calendar.thousandsseparator;
            options.decimalSeparator = calendar.decimalseparator;
            switch ( current ) {
                case "D":
                case "d":
                case "F":
                case "f":
                    options.decimalPlaces = precision;
                    break;
                case "N":
                case "n":
                    options.decimalPlaces = 0;
                    break;
                case "C":
                case "c":
                    options.decimalPlaces = precision;
                    if ( calendar.currencysymbolposition == "before" ) {
                        options.prefix = calendar.currencysymbol;
                    }
                    else {
                        options.suffix = calendar.currencysymbol;
                    }
                    break;
                case "P":
                case "p":
                    options.suffix = calendar.percentsymbol;
                    options.decimalPlaces = precision;
                    break;
                default:
                    throw "Bad number format specifier: " + current;
            }

            if ( this.isNumber( value ) ) {
                var negative = ( value < 0 );
                var output = value + "";
                var decimalseparator = ( options.decimalSeparator ) ? options.decimalSeparator : ".";
                var decimalindex;
                if ( this.isNumber( options.decimalPlaces ) ) {
                    // Round to the correct decimal place
                    var decimalplaces = options.decimalPlaces;
                    var decimal = Math.pow( 10, decimalplaces );
                    output = ( value * decimal ).toFixed( 0 ) / decimal + "";
                    decimalindex = output.lastIndexOf( "." );
                    if ( decimalplaces > 0 ) {
                        // Add the decimal separator
                        if ( decimalindex < 0 ) {
                            output += decimalseparator;
                            decimalindex = output.length - 1;
                        }
                        // Replace the "."
                        else if ( decimalseparator !== "." ) {
                            output = output.replace( ".", decimalseparator );
                        }
                        // Add missing zeros
                        while ( ( output.length - 1 - decimalindex ) < decimalplaces ) {
                            output += "0";
                        }
                    }
                }
                else {
                    var output = value + "";
                    decimalindex = output.lastIndexOf( "." );
                    if ( decimalindex > 0 && decimalplaces == undefined ) {
                        // Replace the "."
                        if ( decimalseparator !== "." ) {
                            output = output.replace( ".", decimalseparator );
                        }
                    }
                }

                if ( options.thousandsSeparator ) {
                    var groupseparator = options.thousandsSeparator;
                    decimalindex = output.lastIndexOf( decimalseparator );
                    decimalindex = ( decimalindex > -1 ) ? decimalindex : output.length;
                    var newoutput = output.substring( decimalindex );
                    var nCount = -1;
                    for ( var i = decimalindex; i > 0; i-- ) {
                        nCount++;
                        if ( ( nCount % 3 === 0 ) && ( i !== decimalindex ) && ( !negative || ( i > 1 ) ) ) {
                            newoutput = groupseparator + newoutput;
                        }
                        newoutput = output.charAt( i - 1 ) + newoutput;
                    }
                    output = newoutput;
                }
                // Prepend prefix
                output = ( options.prefix ) ? options.prefix + output : output;
                // Append suffix
                output = ( options.suffix ) ? output + options.suffix : output;
                return output;

            } else {
                return value;
            }
        },

        tryparsedate: function ( value, calendar ) {
            if ( calendar == undefined || calendar == null ) {
                calendar = this.defaultcalendar();
            }
            var me = this;
            if ( value == "" )
                return null;

            if ( value != null && !value.substring ) {
                value = value.toString();
            }

            if ( value != null && value.substring( 0, 6 ) == "/Date(" ) {
                var jsonDateRE = /^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/;

                var date = new Date( +value.replace( /\/Date\((\d+)\)\//, '$1' ) );
                if ( date == "Invalid Date" ) {
                    var m = value.match( /^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/ );
                    var date = null;
                    if ( m )
                        date = new Date( 1 * m[ 1 ] + 3600000 * m[ 2 ] + 60000 * m[ 3 ] );
                }
                if ( date == null || date == "Invalid Date" || isNaN( date ) ) {
                    var arr = jsonDateRE.exec( value );
                    if ( arr ) {
                        // 0 - complete results; 1 - ticks; 2 - sign; 3 - minutes
                        var result = new Date( parseInt( arr[ 1 ] ) );
                        if ( arr[ 2 ] ) {
                            var mins = parseInt( arr[ 3 ] );
                            if ( arr[ 2 ] === "-" ) {
                                mins = -mins;
                            }
                            var current = result.getUTCMinutes();
                            result.setUTCMinutes( current - mins );
                        }
                        if ( !isNaN( result.valueOf() ) ) {
                            return result;
                        }
                    }
                }

                return date;
            }

            var patterns = calendar.patterns;
            for ( var prop in patterns ) {
                date = me.parsedate( value, patterns[ prop ], calendar );
                if ( date ) {
                    if ( prop == "ISO" ) {
                        var tmpDate = me.parsedate( value, patterns[ "ISO2" ], calendar );
                        if ( tmpDate ) return tmpDate;
                    }
                    return date;
                }
            }

            if ( value != null ) {
                var tmpDate = null;
                var dateParts = [ ':', '/', '-' ];
                var canParse = true;
                for ( var part = 0; part < dateParts.length; part++ ) {
                    if ( value.indexOf( dateParts[ part ] ) != -1 ) {
                        canParse = false;
                    }
                }

                if ( canParse ) {
                    var number = new Number( value );
                    if ( !isNaN( number ) ) {
                        return new Date( number );
                    }
                }
            }

            if ( $.type( value ) === "string" ) {
                var that = me;
                value = that.trim( value );
                var splitParts = [ ':', '/', '-', ' ', ',' ];
                var replaceAll = function ( find, replace, str ) {
                    return str.replace( new RegExp( find, 'g' ), replace );
                }
                value = replaceAll( ', ', ',', value );
                var timePart = "";
                var datePart = value;
                if ( value.indexOf( ":" ) >= 0 ) {
                    timePart = value.substring( value.indexOf( ":" ) - 2 );
                    timePart = that.trim( timePart );
                    datePart = value.substring( 0, value.indexOf( ":" ) - 2 );
                }
                else if ( value.toUpperCase().indexOf( "AM" ) >= 0 ) {
                    timePart = value.substring( value.toUpperCase().indexOf( "AM" ) - 2 );
                    timePart = that.trim( timePart );
                    datePart = value.substring( 0, value.toUpperCase().indexOf( "AM" ) - 2 );
                }
                else if ( value.toUpperCase().indexOf( "PM" ) >= 0 ) {
                    timePart = value.substring( value.toUpperCase().indexOf( "PM" ) - 2 );
                    timePart = that.trim( timePart );
                    datePart = value.substring( 0, value.toUpperCase().indexOf( "PM" ) - 2 );
                }
                var parseDate = new Date();
                var parsed = false;
                if ( datePart ) {
                    for ( var i = 0; i < splitParts.length; i++ ) {
                        if ( datePart.indexOf( splitParts[ i ] ) >= 0 ) {
                            dateParts = datePart.split( splitParts[ i ] );
                            break;
                        }
                    }

                    var days = new Array();
                    var months = new Array();
                    var years = new Array();
                    var dayPart = null;
                    var monthPart = null;
                    for ( var i = 0; i < dateParts.length; i++ ) {
                        var part = dateParts[ i ];
                        var isDay = that.parsedate( part, "d", calendar ) || that.parsedate( part, "dd", calendar ) || that.parsedate( part, "ddd", calendar ) || that.parsedate( part, "dddd", calendar );
                        if ( isDay ) {
                            if ( part.length <= 2 ) {
                                dayPart = i;
                                days.push( isDay.getDate() );
                                break
                            }
                        }
                    }
                    for ( var i = 0; i < dateParts.length; i++ ) {
                        var part = dateParts[ i ];
                        var isMonth = that.parsedate( part, "M", calendar ) || that.parsedate( part, "MM", calendar ) || that.parsedate( part, "MMM", calendar ) || that.parsedate( part, "MMMM", calendar );
                        if ( isMonth ) {
                            if ( dayPart != undefined && dayPart == i )
                                continue;

                            months.push( isMonth.getMonth() );

                            if ( part.length > 2 ) {
                                monthPart = i;
                                break;
                            }
                        }
                    }
                    for ( var i = 0; i < dateParts.length; i++ ) {
                        var part = dateParts[ i ];
                        var isYear = that.parsedate( part, "yyyy", calendar );
                        if ( isYear ) {
                            if ( dayPart != undefined && dayPart == i )
                                continue;

                            if ( monthPart != undefined && monthPart == i )
                                continue;

                            years.push( isYear.getFullYear() );
                        }
                    }
                    var dates = new Array();
                    for ( var d = 0; d < days.length; d++ ) {
                        for ( var m = 0; m < months.length; m++ ) {
                            for ( var y = 0; y < years.length; y++ ) {
                                var result = new Date( years[ y ], months[ m ], days[ d ] );
                                if ( years[ y ] < 1970 )
                                    result.setFullYear( years[ y ] );
                                if ( result.getTime() != NaN ) {
                                    dates.push( result );
                                }
                            }
                        }
                    }
                    if ( dates.length > 0 ) {
                        parseDate = dates[ 0 ];
                        parsed = true;
                    }
                }
                if ( timePart ) {
                    var timeParts = timePart.indexOf( ":" ) >= 0 ? timePart.split( ':' ) : timePart;
                    var parsedTime = that.parsedate( timePart, "h:mm tt", calendar ) || that.parsedate( timePart, "h:mm:ss tt", calendar ) || that.parsedate( timePart, "HH:mm:ss.fff", calendar ) || that.parsedate( timePart, "HH:mm:ss.ff", calendar ) || that.parsedate( timePart, "HH:mm:ss.tttt", calendar ) || that.parsedate( timePart, "HH:mm:ss", calendar ) || that.parsedate( timePart, "HH:mm", calendar ) || that.parsedate( timePart, "HH", calendar );

                    var hour = 0, minute = 0, second = 0, milisecond = 0;
                    if ( parsedTime && parsedTime.getTime() != NaN ) {
                        hour = parsedTime.getHours();
                        minute = parsedTime.getMinutes();
                        second = parsedTime.getSeconds();
                        milisecond = parsedTime.getMilliseconds();
                    }
                    else {
                        if ( timeParts.length == 1 ) {
                            hour = parseInt( timeParts[ 0 ] );
                        }
                        if ( timeParts.length == 2 ) {
                            hour = parseInt( timeParts[ 0 ] );
                            minute = parseInt( timeParts[ 1 ] );
                        }
                        if ( timeParts.length == 3 ) {
                            hour = parseInt( timeParts[ 0 ] );
                            minute = parseInt( timeParts[ 1 ] );
                            if ( timeParts[ 2 ].indexOf( "." ) >= 0 ) {
                                second = parseInt( timeParts[ 2 ].toString().split( "." )[ 0 ] );
                                milisecond = parseInt( timeParts[ 2 ].toString().split( "." )[ 1 ] );
                            }
                            else {
                                second = parseInt( timeParts[ 2 ] );
                            }
                        }
                        if ( timeParts.length == 4 ) {
                            hour = parseInt( timeParts[ 0 ] );
                            minute = parseInt( timeParts[ 1 ] );
                            second = parseInt( timeParts[ 2 ] );
                            milisecond = parseInt( timeParts[ 3 ] );
                        }
                    }
                    if ( parseDate && !isNaN( hour ) && !isNaN( minute ) && !isNaN( second ) && !isNaN( milisecond ) ) {
                        parseDate.setHours( hour, minute, second, milisecond );
                        parsed = true;
                    }
                }
                if ( parsed ) {
                    return parseDate;
                }
            }

            return null;
        },

        getparseregexp: function ( cal, format ) {
            // converts a format string into a regular expression with groups that
            // can be used to extract date fields from a date string.
            // check for a cached parse regex.
            var re = cal._parseRegExp;
            if ( !re ) {
                cal._parseRegExp = re = {};
            }
            else {
                var reFormat = re[ format ];
                if ( reFormat ) {
                    return reFormat;
                }
            }

            // expand single digit formats, then escape regular expression characters.
            var expFormat = this.expandFormat( cal, format ).replace( /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1" ),
                regexp = [ "^" ],
                groups = [],
                index = 0,
                quoteCount = 0,
                tokenRegExp = this.getTokenRegExp(),
                match;

            // iterate through each date token found.
            while ( ( match = tokenRegExp.exec( expFormat ) ) !== null ) {
                var preMatch = expFormat.slice( index, match.index );
                index = tokenRegExp.lastIndex;

                // don't replace any matches that occur inside a string literal.
                quoteCount += this.appendPreOrPostMatch( preMatch, regexp );
                if ( quoteCount % 2 ) {
                    regexp.push( match[ 0 ] );
                    continue;
                }

                // add a regex group for the token.
                var m = match[ 0 ],
                    len = m.length,
                    add;
                switch ( m ) {
                    case 'dddd': case 'ddd':
                    case 'MMMM': case 'MMM':
                    case 'gg': case 'g':
                        add = "(\\D+)";
                        break;
                    case 'tt': case 't':
                        add = "(\\D*)";
                        break;
                    case 'yyyy':
                    case 'fff':
                    case 'ff':
                    case 'f':
                        add = "(\\d{" + len + "})";
                        break;
                    case 'dd': case 'd':
                    case 'MM': case 'M':
                    case 'yy': case 'y':
                    case 'HH': case 'H':
                    case 'hh': case 'h':
                    case 'mm': case 'm':
                    case 'ss': case 's':
                        add = "(\\d\\d?)";
                        break;
                    case 'zzz':
                        add = "([+-]?\\d\\d?:\\d{2})";
                        break;
                    case 'zz': case 'z':
                        add = "([+-]?\\d\\d?)";
                        break;
                    case '/':
                        add = "(\\" + cal[ "/" ] + ")";
                        break;
                    default:
                        throw "Invalid date format pattern '" + m + "'.";
                        break;
                }
                if ( add ) {
                    regexp.push( add );
                }
                groups.push( match[ 0 ] );
            }
            this.appendPreOrPostMatch( expFormat.slice( index ), regexp );
            regexp.push( "$" );

            // allow whitespace to differ when matching formats.
            var regexpStr = regexp.join( '' ).replace( /\s+/g, "\\s+" ),
                parseRegExp = { 'regExp': regexpStr, 'groups': groups };

            // cache the regex for this format.
            return re[ format ] = parseRegExp;
        },

        outOfRange: function ( value, low, high ) {
            return value < low || value > high;
        },

        expandYear: function ( cal, year ) {
            // expands 2-digit year into 4 digits.
            var now = new Date(),
                era = this.getEra( now );
            if ( year < 100 ) {
                var twoDigitYearMax = cal.twoDigitYearMax;
                twoDigitYearMax = typeof twoDigitYearMax === 'string' ? new Date().getFullYear() % 100 + parseInt( twoDigitYearMax, 10 ) : twoDigitYearMax;
                var curr = this.getEraYear( now, cal, era );
                year += curr - ( curr % 100 );
                if ( year > twoDigitYearMax ) {
                    year -= 100;
                }
            }
            return year;
        },

        parsedate: function ( value, format, calendar ) {
            if ( calendar == undefined || calendar == null ) {
                calendar = this.defaultcalendar();
            }
            // try to parse the date string by matching against the format string
            // while using the specified culture for date field names.
            value = this.trim( value );
            var cal = calendar,
                // convert date formats into regular expressions with groupings.
                // use the regexp to determine the input format and extract the date fields.
                parseInfo = this.getparseregexp( cal, format ),
                match = new RegExp( parseInfo.regExp ).exec( value );
            if ( match === null ) {
                return null;
            }
            // found a date format that matches the input.
            var groups = parseInfo.groups,
                era = null, year = null, month = null, date = null, weekDay = null,
                hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
                pmHour = false;
            // iterate the format groups to extract and set the date fields.
            for ( var j = 0, jl = groups.length; j < jl; j++ ) {
                var matchGroup = match[ j + 1 ];
                if ( matchGroup ) {
                    var current = groups[ j ],
                        clength = current.length,
                        matchInt = parseInt( matchGroup, 10 );
                    switch ( current ) {
                        case 'dd': case 'd':
                            // Day of month.
                            date = matchInt;
                            // check that date is generally in valid range, also checking overflow below.
                            if ( this.outOfRange( date, 1, 31 ) ) return null;
                            break;
                        case 'MMM':
                        case 'MMMM':
                            month = this.getMonthIndex( cal, matchGroup, clength === 3 );
                            if ( this.outOfRange( month, 0, 11 ) ) return null;
                            break;
                        case 'M': case 'MM':
                            // Month.
                            month = matchInt - 1;
                            if ( this.outOfRange( month, 0, 11 ) ) return null;
                            break;
                        case 'y': case 'yy':
                        case 'yyyy':
                            year = clength < 4 ? this.expandYear( cal, matchInt ) : matchInt;
                            if ( this.outOfRange( year, 0, 9999 ) ) return null;
                            break;
                        case 'h': case 'hh':
                            // Hours (12-hour clock).
                            hour = matchInt;
                            if ( hour === 12 ) hour = 0;
                            if ( this.outOfRange( hour, 0, 11 ) ) return null;
                            break;
                        case 'H': case 'HH':
                            // Hours (24-hour clock).
                            hour = matchInt;
                            if ( this.outOfRange( hour, 0, 23 ) ) return null;
                            break;
                        case 'm': case 'mm':
                            // Minutes.
                            min = matchInt;
                            if ( this.outOfRange( min, 0, 59 ) ) return null;
                            break;
                        case 's': case 'ss':
                            // Seconds.
                            sec = matchInt;
                            if ( this.outOfRange( sec, 0, 59 ) ) return null;
                            break;
                        case 'tt': case 't':
                            // AM/PM designator.
                            // see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
                            // the AM tokens. If not, fail the parse for this format.
                            pmHour = cal.PM && ( matchGroup === cal.PM[ 0 ] || matchGroup === cal.PM[ 1 ] || matchGroup === cal.PM[ 2 ] );
                            if ( !pmHour && ( !cal.AM || ( matchGroup !== cal.AM[ 0 ] && matchGroup !== cal.AM[ 1 ] && matchGroup !== cal.AM[ 2 ] ) ) ) return null;
                            break;
                        case 'f':
                        // Deciseconds.
                        case 'ff':
                        // Centiseconds.
                        case 'fff':
                            // Milliseconds.
                            msec = matchInt * Math.pow( 10, 3 - clength );
                            if ( this.outOfRange( msec, 0, 999 ) ) return null;
                            break;
                        case 'ddd':
                        // Day of week.
                        case 'dddd':
                            // Day of week.
                            weekDay = this.getDayIndex( cal, matchGroup, clength === 3 );
                            if ( this.outOfRange( weekDay, 0, 6 ) ) return null;
                            break;
                        case 'zzz':
                            // Time zone offset in +/- hours:min.
                            var offsets = matchGroup.split( /:/ );
                            if ( offsets.length !== 2 ) return null;
                            hourOffset = parseInt( offsets[ 0 ], 10 );
                            if ( this.outOfRange( hourOffset, -12, 13 ) ) return null;
                            var minOffset = parseInt( offsets[ 1 ], 10 );
                            if ( this.outOfRange( minOffset, 0, 59 ) ) return null;
                            tzMinOffset = ( hourOffset * 60 ) + ( this.startsWith( matchGroup, '-' ) ? -minOffset : minOffset );
                            break;
                        case 'z': case 'zz':
                            // Time zone offset in +/- hours.
                            hourOffset = matchInt;
                            if ( this.outOfRange( hourOffset, -12, 13 ) ) return null;
                            tzMinOffset = hourOffset * 60;
                            break;
                        case 'g': case 'gg':
                            var eraName = matchGroup;
                            if ( !eraName || !cal.eras ) return null;
                            eraName = this.trim( eraName.toLowerCase() );
                            for ( var i = 0, l = cal.eras.length; i < l; i++ ) {
                                if ( eraName === cal.eras[ i ].name.toLowerCase() ) {
                                    era = i;
                                    break;
                                }
                            }
                            // could not find an era with that name
                            if ( era === null ) return null;
                            break;
                    }
                }
            }
            var result = new Date(), defaultYear, convert = cal.convert;
            defaultYear = result.getFullYear();
            if ( year === null ) {
                year = defaultYear;
            }
            else if ( cal.eras ) {
                // year must be shifted to normal gregorian year
                // but not if year was not specified, its already normal gregorian
                // per the main if clause above.
                year += cal.eras[ ( era || 0 ) ].offset;
            }
            // set default day and month to 1 and January, so if unspecified, these are the defaults
            // instead of the current day/month.
            if ( month === null ) {
                month = 0;
            }
            if ( date === null ) {
                date = 1;
            }
            // now have year, month, and date, but in the culture's calendar.
            // convert to gregorian if necessary
            if ( convert ) {
                result = convert.toGregorian( year, month, date );
                // conversion failed, must be an invalid match
                if ( result === null ) return null;
            }
            else {
                // have to set year, month and date together to avoid overflow based on current date.
                result.setFullYear( year, month, date );
                // check to see if date overflowed for specified month (only checked 1-31 above).
                if ( result.getDate() !== date ) return null;
                // invalid day of week.
                if ( weekDay !== null && result.getDay() !== weekDay ) {
                    return null;
                }
            }
            // if pm designator token was found make sure the hours fit the 24-hour clock.
            if ( pmHour && hour < 12 ) {
                hour += 12;
            }
            result.setHours( hour, min, sec, msec );
            if ( tzMinOffset !== null ) {
                // adjust timezone to utc before applying local offset.
                var adjustedMin = result.getMinutes() - ( tzMinOffset + result.getTimezoneOffset() );
                // Safari limits hours and minutes to the range of -127 to 127.  We need to use setHours
                // to ensure both these fields will not exceed this range.  adjustedMin will range
                // somewhere between -1440 and 1500, so we only need to split this into hours.
                result.setHours( result.getHours() + parseInt( adjustedMin / 60, 10 ), adjustedMin % 60 );
            }
            return result;
        },

        cleardatescache: function () {
            this.datescache = new Array();
        },

        formatDate: function ( value, format, calendar ) {
            return this.formatdate( value, format, calendar );
        },

        formatdate: function ( value, format, calendar ) {
            if ( calendar == undefined || calendar == null ) {
                calendar = this.defaultcalendar();
            }

            if ( typeof value === 'string' ) {
                return value;
            }

            var lookupkey = value.toString() + "_" + format;
            if ( this.datescache && this.datescache[ lookupkey ] ) {
                if ( format.indexOf( 'f' ) == -1 ) {
                    return this.datescache[ lookupkey ];
                }
            }

            if ( !format || !format.length || format === 'i' ) {
                var ret;
                ret = this.formatDate( value, calendar.patterns.F, calendar );
                return ret;
            }

            var eras = calendar.eras,
                sortable = format === "s";
            format = this.expandFormat( calendar, format );

            // Start with an empty string
            ret = [];
            var hour,
                zeros = [ '0', '00', '000' ],
                foundDay,
                checkedDay,
                dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
                quoteCount = 0,
                tokenRegExp = this.getTokenRegExp(),
                converted;

            function padZeros( num, c ) {
                var r, s = num + '';
                if ( c > 1 && s.length < c ) {
                    r = ( zeros[ c - 2 ] + s );
                    return r.substr( r.length - c, c );
                }
                else {
                    r = s;
                }
                return r;
            }

            function hasDay() {
                if ( foundDay || checkedDay ) {
                    return foundDay;
                }
                foundDay = dayPartRegExp.test( format );
                checkedDay = true;
                return foundDay;
            }

            function getPart( date, part ) {
                if ( converted ) {
                    return converted[ part ];
                }
                if ( date.getMonth != undefined ) {
                    switch ( part ) {
                        case 0: return date.getFullYear();
                        case 1: return date.getMonth();
                        case 2: return date.getDate();
                    }
                }
            }

            for ( ; ; ) {
                // Save the current index
                var index = tokenRegExp.lastIndex,
                    // Look for the next pattern
                    ar = tokenRegExp.exec( format );

                // Append the text before the pattern (or the end of the string if not found)
                var preMatch = format.slice( index, ar ? ar.index : format.length );
                quoteCount += this.appendPreOrPostMatch( preMatch, ret );

                if ( !ar ) {
                    break;
                }

                // do not replace any matches that occur inside a string literal.
                if ( quoteCount % 2 ) {
                    ret.push( ar[ 0 ] );
                    continue;
                }

                var current = ar[ 0 ],
                    clength = current.length;

                switch ( current ) {
                    case "ddd":
                    //Day of the week, as a three-letter abbreviation
                    case "dddd":
                        // Day of the week, using the full name
                        var names = ( clength === 3 ) ? calendar.days.namesAbbr : calendar.days.names;
                        ret.push( names[ value.getDay() ] );
                        break;
                    case "d":
                    // Day of month, without leading zero for single-digit days
                    case "dd":
                        // Day of month, with leading zero for single-digit days
                        foundDay = true;
                        ret.push( padZeros( getPart( value, 2 ), clength ) );
                        break;
                    case "MMM":
                    // Month, as a three-letter abbreviation
                    case "MMMM":
                        // Month, using the full name
                        var part = getPart( value, 1 );
                        ret.push( calendar.months[ clength === 3 ? "namesAbbr" : "names" ][ part ] );
                        break;
                    case "M":
                    // Month, as digits, with no leading zero for single-digit months
                    case "MM":
                        // Month, as digits, with leading zero for single-digit months
                        ret.push( padZeros( getPart( value, 1 ) + 1, clength ) );
                        break;
                    case "y":
                    // Year, as two digits, but with no leading zero for years less than 10
                    case "yy":
                    // Year, as two digits, with leading zero for years less than 10
                    case "yyyy":
                        // Year represented by four full digits
                        part = this.getEraYear( value, calendar, this.getEra( value, eras ), sortable );
                        if ( clength < 4 ) {
                            part = part % 100;
                        }
                        ret.push( padZeros( part, clength ) );
                        break;
                    case "h":
                    // Hours with no leading zero for single-digit hours, using 12-hour clock
                    case "hh":
                        // Hours with leading zero for single-digit hours, using 12-hour clock
                        hour = value.getHours() % 12;
                        if ( hour === 0 ) hour = 12;
                        ret.push( padZeros( hour, clength ) );
                        break;
                    case "H":
                    // Hours with no leading zero for single-digit hours, using 24-hour clock
                    case "HH":
                        // Hours with leading zero for single-digit hours, using 24-hour clock
                        ret.push( padZeros( value.getHours(), clength ) );
                        break;
                    case "m":
                    // Minutes with no leading zero  for single-digit minutes
                    case "mm":
                        // Minutes with leading zero  for single-digit minutes
                        ret.push( padZeros( value.getMinutes(), clength ) );
                        break;
                    case "s":
                    // Seconds with no leading zero for single-digit seconds
                    case "ss":
                        // Seconds with leading zero for single-digit seconds
                        ret.push( padZeros( value.getSeconds(), clength ) );
                        break;
                    case "t":
                    // One character am/pm indicator ("a" or "p")
                    case "tt":
                        // Multicharacter am/pm indicator
                        part = value.getHours() < 12 ? ( calendar.AM ? calendar.AM[ 0 ] : " " ) : ( calendar.PM ? calendar.PM[ 0 ] : " " );
                        ret.push( clength === 1 ? part.charAt( 0 ) : part );
                        break;
                    case "f":
                    // Deciseconds
                    case "ff":
                    // Centiseconds
                    case "fff":
                        // Milliseconds
                        ret.push( padZeros( value.getMilliseconds(), 3 ).substr( 0, clength ) );
                        break;
                    case "z":
                    // Time zone offset, no leading zero
                    case "zz":
                        // Time zone offset with leading zero
                        hour = value.getTimezoneOffset() / 60;
                        ret.push( ( hour <= 0 ? '+' : '-' ) + padZeros( Math.floor( Math.abs( hour ) ), clength ) );
                        break;
                    case "zzz":
                        // Time zone offset with leading zero
                        hour = value.getTimezoneOffset() / 60;
                        ret.push( ( hour <= 0 ? '+' : '-' ) + padZeros( Math.floor( Math.abs( hour ) ), 2 ) +
                            // Hard coded ":" separator, rather than using calendar.TimeSeparator
                            // Repeated here for consistency, plus ":" was already assumed in date parsing.
                            ":" + padZeros( Math.abs( value.getTimezoneOffset() % 60 ), 2 ) );
                        break;
                    case "g":
                    case "gg":
                        if ( calendar.eras ) {
                            ret.push( calendar.eras[ this.getEra( value, eras ) ].name );
                        }
                        break;
                    case "/":
                        ret.push( calendar[ "/" ] );
                        break;
                    default:
                        throw "Invalid date format pattern '" + current + "'.";
                        break;
                }
            }

            var result = ret.join( '' );

            if ( !this.datescache ) {
                this.datescache = new Array();
            }

            this.datescache[ lookupkey ] = result;
            return result;
        }
    } );

    // AJAX
    $.jqx.data = {};
    var
        ajaxLocParts,
        ajaxLocation,

        rhash = /#.*$/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rquery = /\?/,
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        rts = /([?&])_=[^&]*/,
        rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        core_rspace = /\s+/,
        _load = $.fn.load,
        prefilters = {},
        transports = {},
        allTypes = [ "*/" ] + [ "*" ];

    try {
        ajaxLocation = location.href;
    } catch ( e ) {
        ajaxLocation = document.createElement( "a" );
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }

    ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

    function addToPrefiltersOrTransports( structure ) {

        return function ( dataTypeExpression, func ) {

            if ( typeof dataTypeExpression !== "string" ) {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType, list, placeBefore,
                dataTypes = dataTypeExpression.toLowerCase().split( core_rspace ),
                i = 0,
                length = dataTypes.length;

            if ( $.isFunction( func ) ) {
                for ( ; i < length; i++ ) {
                    dataType = dataTypes[ i ];
                    placeBefore = /^\+/.test( dataType );
                    if ( placeBefore ) {
                        dataType = dataType.substr( 1 ) || "*";
                    }
                    list = structure[ dataType ] = structure[ dataType ] || [];
                    list[ placeBefore ? "unshift" : "push" ]( func );
                }
            }
        };
    }

    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
        dataType /* internal */, inspected /* internal */ ) {

        dataType = dataType || options.dataTypes[ 0 ];
        inspected = inspected || {};

        inspected[ dataType ] = true;

        var selection,
            list = structure[ dataType ],
            i = 0,
            length = list ? list.length : 0,
            executeOnly = ( structure === prefilters );

        for ( ; i < length && ( executeOnly || !selection ); i++ ) {
            selection = list[ i ]( options, originalOptions, jqXHR );
            if ( typeof selection === "string" ) {
                if ( !executeOnly || inspected[ selection ] ) {
                    selection = undefined;
                } else {
                    options.dataTypes.unshift( selection );
                    selection = inspectPrefiltersOrTransports(
                        structure, options, originalOptions, jqXHR, selection, inspected );
                }
            }
        }
        if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
            selection = inspectPrefiltersOrTransports(
                structure, options, originalOptions, jqXHR, "*", inspected );
        }
        return selection;
    }

    function ajaxExtend( target, src ) {
        var key, deep,
            flatOptions = $.jqx.data.ajaxSettings.flatOptions || {};
        for ( key in src ) {
            if ( src[ key ] !== undefined ) {
                ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
            }
        }
        if ( deep ) {
            $.extend( true, target, deep );
        }
    }

    $.extend( $.jqx.data, {
        ajaxSetup: function ( target, settings ) {
            if ( settings ) {
                ajaxExtend( target, $.jqx.data.ajaxSettings );
            } else {
                settings = target;
                target = $.jqx.data.ajaxSettings;
            }
            ajaxExtend( target, settings );
            return target;
        },

        ajaxSettings: {
            url: ajaxLocation,
            isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: true,
            async: true,

            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": allTypes
            },

            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },

            converters: {
                "* text": window.String,
                "text html": true,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },

            flatOptions: {
                context: true,
                url: true
            }
        },

        ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
        ajaxTransport: addToPrefiltersOrTransports( transports ),

        ajax: function ( url, options ) {

            if ( typeof url === "object" ) {
                options = url;
                url = undefined;
            }

            options = options || {};

            var ifModifiedKey,
                responseHeadersString,
                responseHeaders,
                transport,
                timeoutTimer,
                parts,
                fireGlobals,
                i,
                s = $.jqx.data.ajaxSetup( {}, options ),
                callbackContext = s.context || s,
                globalEventContext = callbackContext !== s &&
                    ( callbackContext.nodeType || callbackContext instanceof $ ) ?
                    $( callbackContext ) : $.event,
                deferred = $.Deferred(),
                completeDeferred = $.Callbacks( "once memory" ),
                statusCode = s.statusCode || {},
                requestHeaders = {},
                requestHeadersNames = {},
                state = 0,
                strAbort = "canceled",
                jqXHR = {
                    readyState: 0,
                    setRequestHeader: function ( name, value ) {
                        if ( !state ) {
                            var lname = name.toLowerCase();
                            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
                            requestHeaders[ name ] = value;
                        }
                        return this;
                    },
                    getAllResponseHeaders: function () {
                        return state === 2 ? responseHeadersString : null;
                    },
                    getResponseHeader: function ( key ) {
                        var match;
                        if ( state === 2 ) {
                            if ( !responseHeaders ) {
                                responseHeaders = {};
                                while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                                    responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
                                }
                            }
                            match = responseHeaders[ key.toLowerCase() ];
                        }
                        return match === undefined ? null : match;
                    },

                    overrideMimeType: function ( type ) {
                        if ( !state ) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    abort: function ( statusText ) {
                        statusText = statusText || strAbort;
                        if ( transport ) {
                            transport.abort( statusText );
                        }
                        done( 0, statusText );
                        return this;
                    }
                };

            function done( status, nativeStatusText, responses, headers ) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                if ( state === 2 ) {
                    return;
                }

                state = 2;
                if ( timeoutTimer ) {
                    clearTimeout( timeoutTimer );
                }

                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;

                if ( responses ) {
                    response = ajaxHandleResponses( s, jqXHR, responses );
                }

                if ( status >= 200 && status < 300 || status === 304 ) {

                    if ( s.ifModified ) {

                        modified = jqXHR.getResponseHeader( "Last-Modified" );
                        if ( modified ) {
                            $.lastModified[ ifModifiedKey ] = modified;
                        }
                        modified = jqXHR.getResponseHeader( "Etag" );
                        if ( modified ) {
                            $.etag[ ifModifiedKey ] = modified;
                        }
                    }

                    if ( status === 304 ) {
                        statusText = "notmodified";
                        isSuccess = true;
                    } else {

                        isSuccess = ajaxConvert( s, response );
                        statusText = isSuccess.state;
                        success = isSuccess.data;
                        error = isSuccess.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if ( !statusText || status ) {
                        statusText = "error";
                        if ( status < 0 ) {
                            status = 0;
                        }
                    }
                }

                jqXHR.status = status;
                jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                if ( isSuccess ) {
                    deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                } else {
                    deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                }

                jqXHR.statusCode( statusCode );
                statusCode = undefined;

                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
                        [ jqXHR, s, isSuccess ? success : error ] );
                }

                completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
                    if ( !( --$.active ) ) {
                        $.event.trigger( "ajaxStop" );
                    }
                }
            }

            deferred.promise( jqXHR );
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            jqXHR.complete = completeDeferred.add;

            jqXHR.statusCode = function ( map ) {
                if ( map ) {
                    var tmp;
                    if ( state < 2 ) {
                        for ( tmp in map ) {
                            statusCode[ tmp ] = [ statusCode[ tmp ], map[ tmp ] ];
                        }
                    } else {
                        tmp = map[ jqXHR.status ];
                        jqXHR.always( tmp );
                    }
                }
                return this;
            };

            s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
            s.dataTypes = $.trim( s.dataType || "*" ).toLowerCase().split( core_rspace );

            if ( s.crossDomain == null ) {
                parts = rurl.exec( s.url.toLowerCase() );
                s.crossDomain = !!( parts &&
                    ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
                        ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
                        ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
                );
            }

            if ( s.data && s.processData && typeof s.data !== "string" ) {
                s.data = $.param( s.data, s.traditional );
            }

            inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

            if ( state === 2 ) {
                return jqXHR;
            }

            fireGlobals = s.global;
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test( s.type );

            if ( fireGlobals && $.active++ === 0 ) {
                $.event.trigger( "ajaxStart" );
            }

            if ( !s.hasContent ) {
                if ( s.data ) {
                    s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
                    delete s.data;
                }

                ifModifiedKey = s.url;

                if ( s.cache === false ) {

                    var ts = ( new Date() ).getTime(),
                        ret = s.url.replace( rts, "$1_=" + ts );

                    s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
                }
            }

            if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                jqXHR.setRequestHeader( "Content-Type", s.contentType );
            }

            if ( s.ifModified ) {
                ifModifiedKey = ifModifiedKey || s.url;
                if ( $.lastModified[ ifModifiedKey ] ) {
                    jqXHR.setRequestHeader( "If-Modified-Since", $.lastModified[ ifModifiedKey ] );
                }
                if ( $.etag[ ifModifiedKey ] ) {
                    jqXHR.setRequestHeader( "If-None-Match", $.etag[ ifModifiedKey ] );
                }
            }

            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
                    s.accepts[ s.dataTypes[ 0 ] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                    s.accepts[ "*" ]
            );

            for ( i in s.headers ) {
                jqXHR.setRequestHeader( i, s.headers[ i ] );
            }

            if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
                return jqXHR.abort();

            }

            strAbort = "abort";

            for ( i in { success: 1, error: 1, complete: 1 } ) {
                jqXHR[ i ]( s[ i ] );
            }

            transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

            if ( !transport ) {
                done( -1, "No Transport" );
            } else {
                jqXHR.readyState = 1;
                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                }
                if ( s.async && s.timeout > 0 ) {
                    timeoutTimer = setTimeout( function () {
                        jqXHR.abort( "timeout" );
                    }, s.timeout );
                }

                try {
                    state = 1;
                    transport.send( requestHeaders, done );
                } catch ( e ) {
                    if ( state < 2 ) {
                        done( -1, e );
                    } else {
                        throw e;
                    }
                }
            }

            return jqXHR;
        },

        active: 0,

        lastModified: {},
        etag: {}

    } );

    function ajaxHandleResponses( s, jqXHR, responses ) {

        var ct, type, finalDataType, firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes,
            responseFields = s.responseFields;

        for ( type in responseFields ) {
            if ( type in responses ) {
                jqXHR[ responseFields[ type ] ] = responses[ type ];
            }
        }

        while ( dataTypes[ 0 ] === "*" ) {
            dataTypes.shift();
            if ( ct === undefined ) {
                ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
            }
        }

        if ( ct ) {
            for ( type in contents ) {
                if ( contents[ type ] && contents[ type ].test( ct ) ) {
                    dataTypes.unshift( type );
                    break;
                }
            }
        }

        if ( dataTypes[ 0 ] in responses ) {
            finalDataType = dataTypes[ 0 ];
        } else {
            for ( type in responses ) {
                if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
                    finalDataType = type;
                    break;
                }
                if ( !firstDataType ) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }

        if ( finalDataType ) {
            if ( finalDataType !== dataTypes[ 0 ] ) {
                dataTypes.unshift( finalDataType );
            }
            return responses[ finalDataType ];
        }
    }

    function ajaxConvert( s, response ) {
        var conv, conv2, current, tmp,
            dataTypes = s.dataTypes.slice(),
            prev = dataTypes[ 0 ],
            converters = {},
            i = 0;

        if ( s.dataFilter ) {
            response = s.dataFilter( response, s.dataType );
        }

        if ( dataTypes[ 1 ] ) {
            for ( conv in s.converters ) {
                converters[ conv.toLowerCase() ] = s.converters[ conv ];
            }
        }

        for ( ; ( current = dataTypes[ ++i ] ); ) {
            if ( current !== "*" ) {
                if ( prev !== "*" && prev !== current ) {
                    conv = converters[ prev + " " + current ] || converters[ "* " + current ];

                    if ( !conv ) {
                        for ( conv2 in converters ) {
                            tmp = conv2.split( " " );
                            if ( tmp[ 1 ] === current ) {
                                conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                    converters[ "* " + tmp[ 0 ] ];
                                if ( conv ) {
                                    if ( conv === true ) {
                                        conv = converters[ conv2 ];

                                    } else if ( converters[ conv2 ] !== true ) {
                                        current = tmp[ 0 ];
                                        dataTypes.splice( i--, 0, current );
                                    }

                                    break;
                                }
                            }
                        }
                    }

                    if ( conv !== true ) {
                        if ( conv && s[ "throws" ] ) {
                            response = conv( response );
                        } else {
                            try {
                                response = conv( response );
                            } catch ( e ) {
                                return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
                            }
                        }
                    }
                }

                prev = current;
            }
        }

        return { state: "success", data: response };
    }
    var oldCallbacks = [],
        rquestion = /\?/,
        rjsonp = /(=)\?(?=&|$)|\?\?/,
        nonce = ( new Date() ).getTime();

    $.jqx.data.ajaxSetup( {
        jsonp: "callback",
        jsonpCallback: function () {
            var callback = oldCallbacks.pop() || ( $.expando + "_" + ( nonce++ ) );
            this[ callback ] = true;
            return callback;
        }
    } );

    $.jqx.data.ajaxPrefilter( "json jsonp", function ( s, originalSettings, jqXHR ) {

        var callbackName, overwritten, responseContainer,
            data = s.data,
            url = s.url,
            hasCallback = s.jsonp !== false,
            replaceInUrl = hasCallback && rjsonp.test( url ),
            replaceInData = hasCallback && !replaceInUrl && typeof data === "string" &&
                !( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) &&
                rjsonp.test( data );

        if ( s.dataTypes[ 0 ] === "jsonp" || replaceInUrl || replaceInData ) {

            callbackName = s.jsonpCallback = $.isFunction( s.jsonpCallback ) ?
                s.jsonpCallback() :
                s.jsonpCallback;
            overwritten = window[ callbackName ];

            if ( replaceInUrl ) {
                s.url = url.replace( rjsonp, "$1" + callbackName );
            } else if ( replaceInData ) {
                s.data = data.replace( rjsonp, "$1" + callbackName );
            } else if ( hasCallback ) {
                s.url += ( rquestion.test( url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
            }

            s.converters[ "script json" ] = function () {
                if ( !responseContainer ) {
                    $.error( callbackName + " was not called" );
                }
                return responseContainer[ 0 ];
            };

            s.dataTypes[ 0 ] = "json";

            window[ callbackName ] = function () {
                responseContainer = arguments;
            };

            jqXHR.always( function () {
                window[ callbackName ] = overwritten;
                if ( s[ callbackName ] ) {
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    oldCallbacks.push( callbackName );
                }

                if ( responseContainer && $.isFunction( overwritten ) ) {
                    overwritten( responseContainer[ 0 ] );
                }

                responseContainer = overwritten = undefined;
            } );

            return "script";
        }
    } );

    $.jqx.data.ajaxSetup( {
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function ( text ) {
                $.globalEval( text );
                return text;
            }
        }
    } );

    $.jqx.data.ajaxPrefilter( "script", function ( s ) {
        if ( s.cache === undefined ) {
            s.cache = false;
        }
        if ( s.crossDomain ) {
            s.type = "GET";
            s.global = false;
        }
    } );

    $.jqx.data.ajaxTransport( "script", function ( s ) {
        if ( s.crossDomain ) {
            var script,
                head = document.head || document.getElementsByTagName( "head" )[ 0 ] || document.documentElement;

            return {

                send: function ( _, callback ) {

                    script = document.createElement( "script" );

                    script.async = "async";

                    if ( s.scriptCharset ) {
                        script.charset = s.scriptCharset;
                    }

                    script.src = s.url;

                    script.onload = script.onreadystatechange = function ( _, isAbort ) {

                        if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

                            script.onload = script.onreadystatechange = null;

                            if ( head && script.parentNode ) {
                                head.removeChild( script );
                            }

                            script = undefined;

                            if ( !isAbort ) {
                                callback( 200, "success" );
                            }
                        }
                    };
                    head.insertBefore( script, head.firstChild );
                },

                abort: function () {
                    if ( script ) {
                        script.onload( 0, 1 );
                    }
                }
            };
        }
    } );
    var xhrCallbacks,
        xhrOnUnloadAbort = window.ActiveXObject ? function () {
            for ( var key in xhrCallbacks ) {
                xhrCallbacks[ key ]( 0, 1 );
            }
        } : false,
        xhrId = 0;

    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch ( e ) { }
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject( "Microsoft.XMLHTTP" );
        } catch ( e ) { }
    }

    $.jqx.data.ajaxSettings.xhr = window.ActiveXObject ?
        function () {
            return !this.isLocal && createStandardXHR() || createActiveXHR();
        } :
        createStandardXHR;

    ( function ( xhr ) {
        $.extend( $.support, {
            ajax: !!xhr,
            cors: !!xhr && ( "withCredentials" in xhr )
        } );
    } )( $.jqx.data.ajaxSettings.xhr() );

    if ( !$.support ) $.support = { ajax: true };
    if ( $.support.ajax ) {

        $.jqx.data.ajaxTransport( function ( s ) {
            if ( !s.crossDomain || $.support.cors ) {

                var callback;

                return {
                    send: function ( headers, complete ) {

                        var handle, i,
                            xhr = s.xhr();

                        if ( s.username ) {
                            xhr.open( s.type, s.url, s.async, s.username, s.password );
                        } else {
                            xhr.open( s.type, s.url, s.async );
                        }

                        if ( s.xhrFields ) {
                            for ( i in s.xhrFields ) {
                                xhr[ i ] = s.xhrFields[ i ];
                            }
                        }

                        if ( s.mimeType && xhr.overrideMimeType ) {
                            xhr.overrideMimeType( s.mimeType );
                        }


                        if ( !s.crossDomain && !headers[ "X-Requested-With" ] ) {
                            headers[ "X-Requested-With" ] = "XMLHttpRequest";
                        }

                        try {
                            for ( i in headers ) {
                                xhr.setRequestHeader( i, headers[ i ] );
                            }
                        } catch ( _ ) { }

                        xhr.send( ( s.hasContent && s.data ) || null );

                        callback = function ( _, isAbort ) {

                            var status,
                                statusText,
                                responseHeaders,
                                responses,
                                xml;
                            try {

                                if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
                                    callback = undefined;
                                    if ( handle ) {
                                        xhr.onreadystatechange = function () { };
                                        if ( xhrOnUnloadAbort ) {
                                            delete xhrCallbacks[ handle ];
                                        }
                                    }

                                    if ( isAbort ) {
                                        if ( xhr.readyState !== 4 ) {
                                            xhr.abort();
                                        }
                                    } else {
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        responses = {};
                                        xml = xhr.responseXML;

                                        if ( xml && xml.documentElement /* #4958 */ ) {
                                            responses.xml = xml;
                                        }

                                        try {
                                            responses.text = xhr.responseText;
                                        } catch ( e ) {
                                        }

                                        try {
                                            statusText = xhr.statusText;
                                        } catch ( e ) {
                                            statusText = "";
                                        }

                                        if ( !status && s.isLocal && !s.crossDomain ) {
                                            status = responses.text ? 200 : 404;
                                        } else if ( status === 1223 ) {
                                            status = 204;
                                        }
                                    }
                                }
                            } catch ( firefoxAccessException ) {
                                if ( !isAbort ) {
                                    complete( -1, firefoxAccessException );
                                }
                            }

                            if ( responses ) {
                                complete( status, statusText, responses, responseHeaders );
                            }
                        };

                        if ( !s.async ) {
                            callback();
                        } else if ( xhr.readyState === 4 ) {
                            setTimeout( callback, 0 );
                        } else {
                            handle = ++xhrId;
                            if ( xhrOnUnloadAbort ) {
                                if ( !xhrCallbacks ) {
                                    xhrCallbacks = {};
                                    $( window ).unload( xhrOnUnloadAbort );
                                }
                                xhrCallbacks[ handle ] = callback;
                            }
                            xhr.onreadystatechange = callback;
                        }
                    },

                    abort: function () {
                        if ( callback ) {
                            callback( 0, 1 );
                        }
                    }
                };
            }
        } );
    }
    $.jqx.filter = function () {
        this.operator = 'and';
        var and_operator = 0;
        var or_operator = 1;
        var stringcomparisonoperators = [ 'EMPTY', 'NOT_EMPTY', 'CONTAINS', 'CONTAINS_CASE_SENSITIVE',
            'DOES_NOT_CONTAIN', 'DOES_NOT_CONTAIN_CASE_SENSITIVE', 'STARTS_WITH', 'STARTS_WITH_CASE_SENSITIVE',
            'ENDS_WITH', 'ENDS_WITH_CASE_SENSITIVE', 'EQUAL', 'EQUAL_CASE_SENSITIVE', 'NULL', 'NOT_NULL' ];
        var numericcomparisonoperators = [ 'EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL' ];
        var datecomparisonoperators = [ 'EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL' ];
        var booleancomparisonoperators = [ 'EQUAL', 'NOT_EQUAL' ];

        var filters = new Array();
        var comparisonoperators = new Array();

        this.evaluate = function ( value ) {
            var result = true;
            for ( var i = 0; i < filters.length; i++ ) {
                var currentResult = filters[ i ].evaluate( value );
                if ( i == 0 ) {
                    result = currentResult;
                }
                else {
                    if ( comparisonoperators[ i ] == or_operator || comparisonoperators[ i ] == "or" )
                        result = result || currentResult;
                    else
                        result = result && currentResult;
                }
            }

            return result;
        }

        this.getfilterscount = function () {
            return filters.length;
        }

        this.setoperatorsbyfiltertype = function ( type, array ) {
            switch ( type ) {
                case "numericfilter":
                    numericcomparisonoperators = array;
                    break;
                case "stringfilter":
                    stringcomparisonoperators = array;
                    break;
                case "datefilter":
                    datecomparisonoperators = array;
                    break;
                case "booleanfilter":
                    booleancomparisonoperators = array;
                    break;
            }
        }

        this.getoperatorsbyfiltertype = function ( type ) {
            var array = new Array();
            switch ( type ) {
                case "numericfilter":
                    array = numericcomparisonoperators.slice( 0 );
                    break;
                case "stringfilter":
                    array = stringcomparisonoperators.slice( 0 );
                    break;
                case "datefilter":
                    array = datecomparisonoperators.slice( 0 );
                    break;
                case "booleanfilter":
                    array = booleancomparisonoperators.slice( 0 );
                    break;
            }
            return array;
        }

        var generatefilterkey = function () {
            var S4 = function () {
                return ( ( ( 1 + Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
            };
            return ( S4() + "-" + S4() + "-" + S4() );
        }

        this.createfilter = function ( filtertype, filtervalue, filtercomparisonoperator, customfilter, formatstring, localization ) {
            if ( filtertype == null || filtertype == undefined )
                return null;

            switch ( filtertype ) {
                case 'numericfilter':
                    return new numericfilter( filtervalue, filtercomparisonoperator.toUpperCase() );
                case 'stringfilter':
                    return new stringfilter( filtervalue, filtercomparisonoperator.toUpperCase() );
                case 'datefilter':
                    return new datefilter( filtervalue, filtercomparisonoperator.toUpperCase(), formatstring, localization );
                case 'booleanfilter':
                    return new booleanfilter( filtervalue, filtercomparisonoperator.toUpperCase() );
                case 'custom':
                    return new filter( filtervalue, filtercomparisonoperator.toUpperCase(), customfilter );
            }

            throw new Error( "jqxGrid: There is no such filter type. The available filter types are: 'numericfilter', 'stringfilter', 'datefilter' and 'booleanfilter'" );
            return null;
        }

        this.getfilters = function () {
            var filtersarray = new Array();
            for ( var i = 0; i < filters.length; i++ ) {
                var filter = { value: filters[ i ].filtervalue, condition: filters[ i ].comparisonoperator, operator: comparisonoperators[ i ], type: filters[ i ].type };
                if ( filters[ i ].data ) {
                    filter.id = filters[ i ].data;
                }
                filtersarray[ i ] = filter;
            }
            return filtersarray;
        }

        this.addfilter = function ( comparisonoperator, filter ) {
            filters[ filters.length ] = filter;
            filter.key = generatefilterkey();
            comparisonoperators[ comparisonoperators.length ] = comparisonoperator;
        }

        this.removefilter = function ( filter ) {
            for ( var i = 0; i < filters.length; i++ ) {
                if ( filters[ i ].key == filter.key ) {
                    filters.splice( i, 1 );
                    comparisonoperators.splice( i, 1 );
                    break;
                }
            }
        }

        this.getoperatorat = function ( index ) {
            if ( index == undefined || index == null )
                return null;

            if ( index < 0 || index > filters.length )
                return null;

            return comparisonoperators[ index ];
        }

        this.setoperatorat = function ( index, comparisonoperator ) {
            if ( index == undefined || index == null )
                return null;

            if ( index < 0 || index > filters.length )
                return null;

            comparisonoperators[ comparisonoperator ] = comparisonoperator;
        }

        this.getfilterat = function ( index ) {
            if ( index == undefined || index == null )
                return null;

            if ( index < 0 || index > filters.length )
                return null;

            return filters[ index ];
        }

        this.setfilterat = function ( index, filter ) {
            if ( index == undefined || index == null )
                return null;

            if ( index < 0 || index > filters.length )
                return null;

            filter.key = generatefilterkey();
            filters[ index ] = filter;
        }

        this.clear = function () {
            filters = new Array();
            comparisonoperators = new Array();
        }

        var stringfilter = function ( filtervalue, comparisonoperator ) {
            this.filtervalue = filtervalue;
            this.comparisonoperator = comparisonoperator;
            this.type = 'stringfilter';
            this.evaluate = function ( value ) {
                var filtervalue = this.filtervalue;
                var comparisonoperator = this.comparisonoperator;
                if ( value == null || value == undefined || value == "" ) {
                    if ( comparisonoperator == 'NULL' )
                        return true;

                    if ( comparisonoperator == 'NOT_NULL' )
                        return false;

                    if ( comparisonoperator == "EQUAL" && value == filtervalue ) {
                        return true;
                    }

                    if ( comparisonoperator == "NOT_EQUAL" && value != filtervalue ) {
                        return true;
                    }

                    if ( comparisonoperator != 'EMPTY' )
                        return false;
                    else if ( value == "" )
                        return true;
                }

                var val = "";
                try {
                    val = value.toString();
                }
                catch ( error ) {
                    return true;
                }

                var compare = function ( val, filtervalue ) {
                    switch ( comparisonoperator ) {
                        case 'EQUAL':
                            return $.jqx.string.equalsIgnoreCase( val, filtervalue );
                        case 'EQUAL_CASE_SENSITIVE':
                            return $.jqx.string.equals( val, filtervalue );
                        case 'NOT_EQUAL':
                            return !$.jqx.string.equalsIgnoreCase( val, filtervalue );
                        case 'NOT_EQUAL_CASE_SENSITIVE':
                            return !$.jqx.string.equals( val, filtervalue );
                        case 'CONTAINS':
                            return $.jqx.string.containsIgnoreCase( val, filtervalue );
                        case 'CONTAINS_CASE_SENSITIVE':
                            return $.jqx.string.contains( val, filtervalue );
                        case 'DOES_NOT_CONTAIN':
                            return !$.jqx.string.containsIgnoreCase( val, filtervalue );
                        case 'DOES_NOT_CONTAIN_CASE_SENSITIVE':
                            return !$.jqx.string.contains( val, filtervalue );
                        case 'EMPTY':
                            return val == '';
                        case 'NOT_EMPTY':
                            return val != '';
                        case 'NOT_NULL':
                            return val != null;
                        case 'STARTS_WITH':
                            return $.jqx.string.startsWithIgnoreCase( val, filtervalue );
                        case 'ENDS_WITH':
                            return $.jqx.string.endsWithIgnoreCase( val, filtervalue );
                        case 'ENDS_WITH_CASE_SENSITIVE':
                            return $.jqx.string.endsWith( val, filtervalue );
                        case 'STARTS_WITH_CASE_SENSITIVE':
                            return $.jqx.string.startsWith( val, filtervalue );
                        default:
                            return false;
                    }
                }

                var filterValues = new Array();
                if ( filtervalue && filtervalue.indexO && comparisonoperator !== 'NOT_EQUAL' ) {
                    if ( filtervalue.indexOf( "|" ) >= 0 || filtervalue.indexOf( " AND " ) >= 0 || filtervalue.indexOf( " OR " ) >= 0 || filtervalue.indexOf( " and " ) >= 0 || filtervalue.indexOf( " or " ) >= 0 ) {
                        var result = compare( val, filtervalue );
                        if ( result ) {
                            return result;
                        }

                        var andFilters = filtervalue.indexOf( " AND " ) >= 0 ? filtervalue.split( " AND " ) : new Array();
                        var orFilters = filtervalue.indexOf( " OR " ) >= 0 ? filtervalue.split( " OR " ) : new Array();
                        var andLowerCaseFilters = filtervalue.indexOf( " and " ) >= 0 ? filtervalue.split( " and " ) : new Array();
                        var orLowerCaseFilters = filtervalue.indexOf( " or " ) >= 0 ? filtervalue.split( " or " ) : new Array();
                        var delimiterFilters = filtervalue.indexOf( "|" ) >= 0 ? filtervalue.split( "|" ) : new Array();
                        if ( delimiterFilters.length > 0 ) {
                            for ( var i = 0; i < delimiterFilters.length; i++ ) {
                                delimiterFilters[ i ] = $.trim( delimiterFilters[ i ] );
                            }
                        }
                        var commaFilters = filtervalue.indexOf( " " ) >= 0 ? filtervalue.split( " " ) : new Array();
                        if ( commaFilters.length > 0 ) {
                            for ( var i = 0; i < commaFilters.length; i++ ) {
                                commaFilters[ i ] = $.trim( commaFilters[ i ] );
                            }
                        }

                        andFilters = andFilters.concat( commaFilters );
                        andFilters = andFilters.concat( andLowerCaseFilters );
                        orFilters = orFilters.concat( delimiterFilters );
                        orFilters = orFilters.concat( orLowerCaseFilters );

                        if ( andFilters.length > 0 ) {
                            for ( var i = 0; i < andFilters.length; i++ ) {
                                if ( !andFilters[ i ].indexOf( " OR " ) >= 0 ) {
                                    filterValues.push( andFilters[ i ] );
                                }
                            }
                        }
                        if ( orFilters.length > 0 ) {
                            for ( var i = 0; i < orFilters.length; i++ ) {
                                if ( !orFilters[ i ].indexOf( " AND " ) >= 0 ) {
                                    filterValues.push( orFilters[ i ] );
                                }
                            }
                        }

                        var filterresult = undefined;
                        for ( var j = 0; j < filterValues.length; j++ ) {
                            var value = filterValues[ j ];
                            var result = compare( val, value );
                            var filteroperator = j < andFilters.length ? "and" : "or";
                            if ( filterresult == undefined ) {
                                filterresult = result;
                            }
                            else {
                                if ( filteroperator == 'or' ) {
                                    filterresult = filterresult || result;
                                }
                                else {
                                    filterresult = filterresult && result;
                                }
                            }
                        }
                        return filterresult;
                    }
                }

                return compare( val, filtervalue );
            }
        }

        var booleanfilter = function ( filtervalue, comparisonoperator ) {
            this.filtervalue = filtervalue;
            this.comparisonoperator = comparisonoperator;
            this.type = 'booleanfilter';
            this.evaluate = function ( value ) {
                var filtervalue = this.filtervalue;
                var comparisonoperator = this.comparisonoperator;
                if ( value == null || value == undefined ) {
                    if ( comparisonoperator == 'NULL' )
                        return true;

                    return false;
                }

                var val = value;

                switch ( comparisonoperator ) {
                    case 'EQUAL':
                        return val == filtervalue || val.toString() == filtervalue.toString();
                    case 'NOT_EQUAL':
                        return val != filtervalue && val.toString() != filtervalue.toString();
                    default:
                        return false;
                }
            }
        }

        var numericfilter = function ( filtervalue, comparisonoperator ) {
            this.filtervalue = filtervalue;
            this.comparisonoperator = comparisonoperator;
            this.type = 'numericfilter';
            this.evaluate = function ( value ) {
                var filtervalue = this.filtervalue;
                var comparisonoperator = this.comparisonoperator;
                if ( value === null || value === undefined || value === "" ) {
                    if ( comparisonoperator == 'NOT_NULL' )
                        return false;

                    if ( comparisonoperator == 'NULL' )
                        return true;
                    else {
                        switch ( comparisonoperator ) {
                            case 'EQUAL':
                                return value == filtervalue;
                            case 'NOT_EQUAL':
                                return value != filtervalue;
                        }
                        return false;
                    }
                }
                else {
                    if ( comparisonoperator == 'NULL' )
                        return false;

                    if ( comparisonoperator == 'NOT_NULL' )
                        return true;
                }

                var val = value;

                try {
                    val = parseFloat( val );
                }
                catch ( error ) {
                    if ( value.toString() != "" )
                        return false;
                }

                var compare = function ( val, filtervalue ) {
                    switch ( comparisonoperator ) {
                        case 'EQUAL':
                            return val == filtervalue;
                        case 'NOT_EQUAL':
                            return val != filtervalue;
                        case 'GREATER_THAN':
                            return val > filtervalue;
                        case 'GREATER_THAN_OR_EQUAL':
                            return val >= filtervalue;
                        case 'LESS_THAN':
                            return val < filtervalue;
                        case 'LESS_THAN_OR_EQUAL':
                            return val <= filtervalue;
                        case 'STARTS_WITH':
                            return $.jqx.string.startsWithIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'ENDS_WITH':
                            return $.jqx.string.endsWithIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'ENDS_WITH_CASE_SENSITIVE':
                            return $.jqx.string.endsWith( val.toString(), filtervalue.toString() );
                        case 'STARTS_WITH_CASE_SENSITIVE':
                            return $.jqx.string.startsWith( val.toString(), filtervalue.toString() );
                        case 'CONTAINS':
                            return $.jqx.string.containsIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'CONTAINS_CASE_SENSITIVE':
                            return $.jqx.string.contains( val.toString(), filtervalue.toString() );
                        case 'DOES_NOT_CONTAIN':
                            return !$.jqx.string.containsIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'DOES_NOT_CONTAIN_CASE_SENSITIVE':
                            return !$.jqx.string.contains( val.toString(), filtervalue.toString() );
                        default:
                            return true;
                    }
                }

                var filterValues = new Array();

                if ( filtervalue && filtervalue.indexOf )
                    filtervalue = filtervalue.replace( '$', '' );

                if ( filtervalue && filtervalue.indexOf && ( filtervalue.indexOf( "|" ) >= 0 || filtervalue.indexOf( " AND " ) >= 0 || filtervalue.indexOf( " OR " ) >= 0 || filtervalue.indexOf( " and " ) >= 0 || filtervalue.indexOf( " or " ) >= 0 ) ) {
                    var result = compare( val, filtervalue );
                    if ( result ) {
                        return result;
                    }
                    filtervalue = filtervalue.toString();
                    var andFilters = filtervalue.indexOf( " AND " ) >= 0 ? filtervalue.split( " AND " ) : new Array();
                    var orFilters = filtervalue.indexOf( " OR " ) >= 0 ? filtervalue.split( " OR " ) : new Array();
                    var andLowerCaseFilters = filtervalue.indexOf( " and " ) >= 0 ? filtervalue.split( " and " ) : new Array();
                    var orLowerCaseFilters = filtervalue.indexOf( " or " ) >= 0 ? filtervalue.split( " or " ) : new Array();
                    andFilters = andFilters.concat( andLowerCaseFilters );
                    orFilters = orFilters.concat( orLowerCaseFilters );
                    var delimiterFilters = filtervalue.indexOf( "|" ) >= 0 ? filtervalue.split( "|" ) : new Array();
                    if ( delimiterFilters.length > 0 ) {
                        for ( var i = 0; i < delimiterFilters.length; i++ ) {
                            delimiterFilters[ i ] = $.trim( delimiterFilters[ i ] );
                        }
                    }
                    orFilters = orFilters.concat( delimiterFilters );

                    if ( andFilters.length > 0 ) {
                        for ( var i = 0; i < andFilters.length; i++ ) {
                            if ( !andFilters[ i ].indexOf( " OR " ) >= 0 ) {
                                filterValues.push( andFilters[ i ] );
                            }
                        }
                    }
                    if ( orFilters.length > 0 ) {
                        for ( var i = 0; i < orFilters.length; i++ ) {
                            if ( !orFilters[ i ].indexOf( " AND " ) >= 0 ) {
                                filterValues.push( orFilters[ i ] );
                            }
                        }
                    }

                    var filterresult = undefined;
                    for ( var j = 0; j < filterValues.length; j++ ) {
                        var value = filterValues[ j ];

                        if ( value && value.indexOf && value.indexOf( ".." ) >= 0 ) {
                            var values = value.toString().split( ".." );
                            if ( values.length == 2 ) {
                                result = val >= values[ 0 ] && val <= values[ 1 ];
                            }
                        }
                        else {
                            var result = compare( val, value );
                        }
                        var filteroperator = j < andFilters.length ? "and" : "or";
                        if ( filterresult == undefined ) {
                            filterresult = result;
                        }
                        else {
                            if ( filteroperator == 'or' ) {
                                filterresult = filterresult || result;
                            }
                            else {
                                filterresult = filterresult && result;
                            }
                        }
                    }
                    return filterresult;
                }
                if ( filtervalue && filtervalue.indexOf && filtervalue.indexOf( ".." ) >= 0 ) {
                    filterValues = filtervalue.toString().split( ".." );
                    if ( filterValues.length == 2 ) {
                        return val >= filterValues[ 0 ] && val <= filterValues[ 1 ];
                    }
                }
                return compare( val, filtervalue );
            }
        }

        var datefilter = function ( filtervalue, comparisonoperator, formatstring, localization ) {
            this.filtervalue = filtervalue;
            this.type = 'datefilter';
            var that = this;
            if ( formatstring != undefined && localization != undefined ) {
                var parsedDate = $.jqx.dataFormat.parsedate( filtervalue, formatstring, localization );
                if ( parsedDate != null ) {
                    this.filterdate = parsedDate;
                }
                else {
                    var result = $.jqx.dataFormat.tryparsedate( filtervalue, localization );
                    if ( result != null ) this.filterdate = result;
                }

            }
            else {
                var tmpvalue = new Date( filtervalue );
                if ( tmpvalue.toString() == 'NaN' || tmpvalue.toString() == "Invalid Date" ) {
                    this.filterdate = $.jqx.dataFormat.tryparsedate( filtervalue );
                }
                else {
                    this.filterdate = tmpvalue;
                }
            }
            if ( !this.filterdate ) {
                var tmpvalue = new Date( filtervalue );
                if ( tmpvalue.toString() == 'NaN' || tmpvalue.toString() == "Invalid Date" ) {
                    this.filterdate = $.jqx.dataFormat.tryparsedate( filtervalue );
                }
                else {
                    this.filterdate = tmpvalue;
                }
            }

            this.comparisonoperator = comparisonoperator;
            this.evaluate = function ( value ) {
                var filtervalue = this.filtervalue;
                var comparisonoperator = this.comparisonoperator;
                if ( value == null || value == undefined || value == "" ) {
                    if ( comparisonoperator == 'NOT_NULL' )
                        return false;

                    if ( comparisonoperator == 'NULL' )
                        return true;
                    else {
                        switch ( comparisonoperator ) {
                            case 'EQUAL':
                                return value == filtervalue;
                            case 'NOT_EQUAL':
                                return value != filtervalue;
                        }
                        return false;
                    }
                }
                else {
                    if ( comparisonoperator == 'NULL' )
                        return false;

                    if ( comparisonoperator == 'NOT_NULL' )
                        return true;
                }

                var val = new Date();
                val.setFullYear( 1900, 0, 1 );
                val.setHours( 12, 0, 0, 0 );
                try {
                    var tmpvalue = new Date( value );

                    if ( tmpvalue.toString() == 'NaN' || tmpvalue.toString() == "Invalid Date" ) {
                        value = $.jqx.dataFormat.tryparsedate( value );
                    }
                    else {
                        value = tmpvalue;
                    }

                    val = value;

                    var compareTimePart = false;
                    if ( formatstring != undefined && localization != undefined ) {
                        if ( formatstring.indexOf( 't' ) >= 0 || formatstring.indexOf( 'T' ) >= 0 || formatstring.indexOf( ':' ) >= 0 || formatstring.indexOf( 'f' ) >= 0 ) {
                            compareTimePart = true;
                            if ( filtervalue && filtervalue.toString().indexOf( ':' ) == -1 ) {
                                var result = $.jqx.dataFormat.tryparsedate( filtervalue.toString() + ":00", localization );
                                if ( result != null ) that.filterdate = result;
                            }
                        }
                    }
                    if ( formatstring != undefined ) {
                        if ( formatstring.indexOf( 'hh' ) >= 0 || formatstring.indexOf( 't' ) >= 0 ) {
                            compareTimePart = true;
                        }
                    }

                    if ( !compareTimePart ) {
                        val.setHours( 0 );
                        val.setMinutes( 0 );
                        val.setSeconds( 0 );
                    }
                }
                catch ( error ) {
                    if ( value && value.toString() != "" )
                        return false;
					
					return false;
                }

                if ( that.filterdate != null ) {
                    filtervalue = that.filterdate;
                }
                else {
                    if ( filtervalue && filtervalue.indexOf ) {
                        if ( filtervalue.indexOf( ':' ) != -1 || !isNaN( parseInt( filtervalue ) ) ) {
                            var tmpFilter = new Date( val );
                            tmpFilter.setHours( 12, 0, 0, 0 );
                            var timeStrings = filtervalue.split( ':' );
                            for ( var i = 0; i < timeStrings.length; i++ ) {
                                if ( i == 0 ) {
                                    tmpFilter.setHours( timeStrings[ i ] );
                                }
                                if ( i == 1 ) {
                                    tmpFilter.setMinutes( timeStrings[ i ] );
                                }
                                if ( i == 2 ) {
                                    tmpFilter.setSeconds( timeStrings[ i ] );
                                }
                            }
                            filtervalue = tmpFilter;
                        }
                    }
                }
                if ( compareTimePart ) {
                    if ( filtervalue && filtervalue.setFullYear ) {
                        if ( val && val.getFullYear ) {
                            if ( formatstring.indexOf( 'd' ) == -1 && formatstring.indexOf( 'M' ) == -1 && formatstring.indexOf( 'y' ) == -1 ) {
                                filtervalue.setFullYear( val.getFullYear(), val.getMonth(), val.getDate() );
                            }
                        }
                    }
                }


                var compare = function ( val, filtervalue ) {
                    if ( val == null ) val = "";
                    switch ( comparisonoperator ) {
                        case 'EQUAL':
                            return val.toString() == filtervalue.toString();
                        case 'NOT_EQUAL':
                            return val.toString() != filtervalue.toString();
                        case 'GREATER_THAN':
                            return val > filtervalue;
                        case 'GREATER_THAN_OR_EQUAL':
                            return val >= filtervalue;
                        case 'LESS_THAN':
                            return val < filtervalue;
                        case 'LESS_THAN_OR_EQUAL':
                            return val <= filtervalue;
                        case 'STARTS_WITH':
                            return $.jqx.string.startsWithIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'ENDS_WITH':
                            return $.jqx.string.endsWithIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'ENDS_WITH_CASE_SENSITIVE':
                            return $.jqx.string.endsWith( val.toString(), filtervalue.toString() );
                        case 'STARTS_WITH_CASE_SENSITIVE':
                            return $.jqx.string.startsWith( val.toString(), filtervalue.toString() );
                        case 'CONTAINS':
                            return $.jqx.string.containsIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'CONTAINS_CASE_SENSITIVE':
                            return $.jqx.string.contains( val.toString(), filtervalue.toString() );
                        case 'DOES_NOT_CONTAIN':
                            return !$.jqx.string.containsIgnoreCase( val.toString(), filtervalue.toString() );
                        case 'DOES_NOT_CONTAIN_CASE_SENSITIVE':
                            return !$.jqx.string.contains( val.toString(), filtervalue.toString() );
                        default:
                            return true;
                    }
                }
                var filterValues = new Array();
                if ( filtervalue && filtervalue.indexOf )
                    if ( filtervalue.indexOf( "|" ) >= 0 || filtervalue.indexOf( " AND " ) >= 0 || filtervalue.indexOf( " OR " ) >= 0 || filtervalue.indexOf( " and " ) >= 0 || filtervalue.indexOf( " or " ) >= 0 ) {
                        var result = compare( val, filtervalue );
                        if ( result ) {
                            return result;
                        }
                        var andFilters = filtervalue.indexOf( " AND " ) >= 0 ? filtervalue.split( " AND " ) : new Array();
                        var orFilters = filtervalue.indexOf( " OR " ) >= 0 ? filtervalue.split( " OR " ) : new Array();
                        var andLowerCaseFilters = filtervalue.indexOf( " and " ) >= 0 ? filtervalue.split( " and " ) : new Array();
                        var orLowerCaseFilters = filtervalue.indexOf( " or " ) >= 0 ? filtervalue.split( " or " ) : new Array();
                        andFilters = andFilters.concat( andLowerCaseFilters );
                        orFilters = orFilters.concat( orLowerCaseFilters );
                        var delimiterFilters = filtervalue.indexOf( "|" ) >= 0 ? filtervalue.split( "|" ) : new Array();
                        if ( delimiterFilters.length > 0 ) {
                            for ( var i = 0; i < delimiterFilters.length; i++ ) {
                                delimiterFilters[ i ] = $.trim( delimiterFilters[ i ] );
                            }
                        }
                        orFilters = orFilters.concat( delimiterFilters );

                        if ( andFilters.length > 0 ) {
                            for ( var i = 0; i < andFilters.length; i++ ) {
                                if ( !andFilters[ i ].indexOf( " OR " ) >= 0 ) {
                                    filterValues.push( andFilters[ i ] );
                                }
                            }
                        }
                        if ( orFilters.length > 0 ) {
                            for ( var i = 0; i < orFilters.length; i++ ) {
                                if ( !orFilters[ i ].indexOf( " AND " ) >= 0 ) {
                                    filterValues.push( orFilters[ i ] );
                                }
                            }
                        }

                        var filterresult = undefined;
                        for ( var j = 0; j < filterValues.length; j++ ) {
                            var value = filterValues[ j ];
                            if ( value && value.indexOf && value.indexOf( ".." ) >= 0 ) {
                                var values = value.toString().split( ".." );
                                if ( values.length == 2 ) {
                                    result = val >= values[ 0 ] && val <= values[ 1 ];
                                }
                            }
                            else {
                                var result = compare( val, value );
                            }
                            var filteroperator = j < andFilters.length ? "and" : "or";
                            if ( filterresult == undefined ) {
                                filterresult = result;
                            }
                            else {
                                if ( filteroperator == 'or' ) {
                                    filterresult = filterresult || result;
                                }
                                else {
                                    filterresult = filterresult && result;
                                }
                            }
                        }
                        return filterresult;
                    }
                if ( filtervalue && filtervalue.indexOf && filtervalue.indexOf( ".." ) >= 0 ) {
                    filterValues = filtervalue.toString().split( ".." );
                    if ( filterValues.length == 2 ) {
                        return val >= filterValues[ 0 ] && val <= filterValues[ 1 ];
                    }
                }
                return compare( val, filtervalue );
            }
        }

        var filter = function ( filtervalue, comparisonoperator, customfilter ) {
            this.filtervalue = filtervalue;
            this.comparisonoperator = comparisonoperator;
            this.evaluate = function ( value, comparisonoperator ) {
                return customfilter( this.filtervalue, value, this.comparisonoperator );
            }
        }
    }
} )( jqxBaseFramework );
})();

















/***/ }),

/***/ 3601:
/***/ (() => {

/* tslint:disable */
/* eslint-disable */
(function(){
	if (typeof document === 'undefined') { 
		return;
	}

(function ($) {

    $.jqx.jqxWidget('jqxDragDrop', '', {});

    $.extend($.jqx._jqxDragDrop.prototype, {
        defineInstance: function () {
            var settings = {
                restricter: 'document',
                handle: false,
                feedback: 'clone',
                opacity: 0.6,
                revert: false,
                revertDuration: 400,
                distance: 5,
                disabled: false,
                tolerance: 'intersect',
                data: null,
                dropAction: 'default',
                dragZIndex: 999999,
                appendTo: 'parent',
                cursor: 'move',
                onDragEnd: null,
                onDrag: null,
                onDragStart: null,
                onTargetDrop: null,
                onDropTargetEnter: null,
                onDropTargetLeave: null,
                initFeedback: null,
                dropTarget: null,
                isDestroyed: false,
                triggerEvents: true,
                _touchEvents: {
                    'mousedown': $.jqx.mobile.getTouchEventName('touchstart'),
                    'click': $.jqx.mobile.getTouchEventName('touchstart'),
                    'mouseup': $.jqx.mobile.getTouchEventName('touchend'),
                    'mousemove': $.jqx.mobile.getTouchEventName('touchmove'),
                    'mouseenter': 'mouseenter',
                    'mouseleave': 'mouseleave'
                },
                _restricter: null,
                _zIndexBackup: 0,
                _targetEnterFired: false,
                _oldOpacity: 1,
                _feedbackType: undefined,
                _isTouchDevice: false,
                _events: [
                    'dragStart', 'dragEnd', 'dragging', 'dropTargetEnter', 'dropTargetLeave'
                ]
            };
            if (this === $.jqx._jqxDragDrop.prototype) {
                return settings;
            }
            $.extend(true, this, settings);
            return settings;
        },

        createInstance: function () {
            this._createDragDrop();
        },

        _createDragDrop: function () {
            var count = $.data(document.body, 'jqx-draggables') || 1;
            this.appendTo = this._getParent();
            this._isTouchDevice = $.jqx.mobile.isTouchDevice();
            if ((/(static|relative)/).test(this.host.css('position'))) {
                if (!this.feedback || this.feedback === 'original') {
                    var pos = this._getRelativeOffset(this.host);
                    var parentOffset = this.appendTo.offset();
                    if (this.appendTo.css('position') != 'static') {
                        parentOffset = { left: 0, top: 0 };
                    }

                    this.element.style.position = 'absolute';
                    this.element.style.left = parentOffset.left + pos.left + 'px';
                    this.element.style.top = parentOffset.top + pos.top + 'px';
                }
            }
            this._validateProperties();
            this._idHandler(count);
            if (this.disabled) {
                this.disable();
            }
            if (typeof this.dropTarget === 'string') {
                this.dropTarget = $(this.dropTarget);
            }
            this._refresh();
            count += 1;
            $.data(document.body, 'jqx-draggables', count);
            this.host.addClass('jqx-draggable');
            if (!this.disabled) {
                this.host.css('cursor', this.cursor);
            }
        },

        _getParent: function () {
            var parent = this.appendTo;
            if (typeof this.appendTo === 'string') {
                switch (this.appendTo) {
                    case 'parent':
                        parent = this.host.parent();
                        break;
                    case 'document':
                        parent = $(document);
                        break;
                    case 'body':
                        parent = $(document.body);
                        break;
                    default:
                        parent = $(this.appendTo);
                        break
                }
            }
            return parent;
        },

        _idHandler: function (count) {
            if (!this.element.id) {
                var id = 'jqx-draggable-' + count;
                this.element.id = id;
            }
        },

        _refresh: function () {
            this._removeEventHandlers();
            this._addEventHandlers();
        },

        _getEvent: function (event) {
            if (this._isTouchDevice) {
                return this._touchEvents[event];
            } else {
                return event;
            }
        },

        _validateProperties: function () {
            if (this.feedback === 'clone') {
                this._feedbackType = 'clone';
            } else {
                this._feedbackType = 'original';
            }
            if (this.dropAction !== 'default') {
                this.dropAction = 'nothing';
            }
        },

        _removeEventHandlers: function () {
            this.removeHandler(this.host, 'dragstart');
            this.removeHandler(this.host, this._getEvent('mousedown') + '.draggable.' + this.element.id, this._mouseDown);
            this.removeHandler($(document), this._getEvent('mousemove') + '.draggable.' + this.element.id, this._mouseMove);
            this.removeHandler($(document), this._getEvent('mouseup') + '.draggable.' + this.element.id, this._mouseUp);
        },

        _addEventHandlers: function () {
            var self = this;
            this.addHandler(this.host, 'dragstart', function (event) {
                if (self.disabled) {
                    return true;
                }
                var isTouchDevice = $.jqx.mobile.isTouchDevice();
                if (!isTouchDevice) {
                    event.preventDefault();
                    return false;
                }
            });

            this.addHandler(this.host, this._getEvent('mousedown') + '.draggable.' + this.element.id, this._mouseDown, { self: this });
            this.addHandler($(document), this._getEvent('mousemove') + '.draggable.' + this.element.id, this._mouseMove, { self: this });
            this.addHandler(
                $(document),
                this._getEvent('mouseup') + '.draggable.' + this.element.id,
                function (event)
                {
                    self._mouseUp(event);
                },
                { self: this }
            );

            try {
                if (document.referrer != "" || window.frameElement) {
                    if (window.top != null && window.top != window.self) {
                        var parentLocation = '';
                        if (window.parent && document.referrer) {
                            parentLocation = document.referrer;
                        }

                        if (parentLocation.indexOf(document.location.host) != -1) {
                            if (window.top.document.addEventListener) {
                                window.top.document.addEventListener('mouseup', function () { self._mouseUp(self) }, false);

                            } else if (window.top.document.attachEvent) {
                                window.top.document.attachEvent("on" + 'mouseup', function () { self._mouseUp(self) });
                            }
                        }
                    }
                }
            }
            catch (error) {
            }
        },

        _mouseDown: function (event) {
  //          event.stopPropagation();
//            event.stopImmediatePropagation();

            var self = event.data.self;
            var mouseCoordinates = self._getMouseCoordinates(event);
            var mouseCapture = self._mouseCapture(event);

            self._originalPageX = mouseCoordinates.left;
            self._originalPageY = mouseCoordinates.top;
            if (self.disabled) {
                return true;
            }

            var captured = false;
            if (!self._mouseStarted) {
                self._clear(event);
                captured = true;
            }

            if (mouseCapture) {
                self._mouseDownEvent = event;
            }

            if (self._isTouchDevice) {
                return true;
            }

            if (event.which !== 1 || !mouseCapture) {
                return true;
            }

            event.preventDefault();
        },

        _mouseMove: function (event) {
            var self = event.data.self;
            if (self.disabled) {
                return true;
            }
            if (self._mouseStarted) {
                self._mouseDrag(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
                return false;
            }

            if (self._mouseDownEvent && self._isMovedDistance(event)) {
                if (self._mouseStart(self._mouseDownEvent, event)) {
                    self._mouseStarted = true;
                } else {
                    self._mouseStarted = false;
                }
                if (self._mouseStarted) {
                    self._mouseDrag(event);
                } else {
                    self._mouseUp(event);
                }
            }
            return !self._mouseStarted;
        },

        _mouseUp: function (event) {
            this._clear(event);
        },

        _clear: function(event)
        {
            var self;
            if (event.data && event.data.self) {
                self = event.data.self;
            } else {
                self = this;
            }
            if (self.disabled) {
                return true;
            }
            self._mouseDownEvent = false;
            self._movedDistance = false;
            if (self._mouseStarted) {
                self._mouseStarted = false;
                self._mouseStop(event);
            }
            if (self.feedback && self.feedback[0] && self._feedbackType !== 'original' && typeof self.feedback.remove === 'function' && !self.revert) {
                self.feedback.remove();
            }
            if (!self._isTouchDevice) {
                return false;
            }
        },

        cancelDrag: function () {
            var revertDuration = this.revertDuration;
            this.revertDuration = 0;
            this._mouseDownEvent = false;
            this._movedDistance = false;
            this._mouseStarted = false;
            this._mouseStop();
            this.feedback.remove();
            this.revertDuration = revertDuration;
        },

        _isMovedDistance: function (event) {
            var mc = this._getMouseCoordinates(event);
            if (this._movedDistance) {
                return true;
            }
            if (mc.left >= this._originalPageX + this.distance ||
                mc.left <= this._originalPageX - this.distance ||
                mc.top >= this._originalPageY + this.distance ||
                mc.top <= this._originalPageY - this.distance) {
                this._movedDistance = true;
                return true;
            }
            return false;
        },

        _getMouseCoordinates: function (event) {
            if (this._isTouchDevice) {
                var pos = $.jqx.position(event);

                return {
                    left: pos.left,
                    top: pos.top
                };
            } else {
                return {
                    left: event.pageX,
                    top: event.pageY
                };
            }
        },

        destroy: function () {
            this._enableSelection(this.host);
            this.host
            .removeData('draggable')
            .off('.draggable')
            .removeClass('jqx-draggable'
                + ' jqx-draggable-dragging'
                + ' jqx-draggable-disabled');
            this._removeEventHandlers();
            this.isDestroyed = true;
            return this;
        },

        _disableSelection: function (element) {
            element.each(function () {
                $(this).attr('unselectable', 'on')
                    .css({
                        '-ms-user-select': 'none',
                        '-moz-user-select': 'none',
                        '-webkit-user-select': 'none',
                        'user-select': 'none'
                    })
                    .each(function () {
                        this.onselectstart = function () {
                            return false;
                        };
                    });
            });
        },

        _enableSelection: function (element) {
            element.each(function () {
                $(this).attr('unselectable', 'off')
                .css({
                    '-ms-user-select': 'text',
                    '-moz-user-select': 'text',
                    '-webkit-user-select': 'text',
                    'user-select': 'text'
                })
                .each(function () {
                    this.onselectstart = null;
                });
            });
        },

        _mouseCapture: function (event) {
            if (this.disabled) {
                return false;
            }
            if (!this._getHandle(event)) {
                return false;
            }
            this._disableSelection(this.host);
            return true;
        },

        _getScrollParent: function (element) {
            var scrollParent;
            if (($.jqx.browser.msie && (/(static|relative)/).test(element.css('position'))) ||
            (/absolute/).test(element.css('position'))) {
                scrollParent = element.parents().filter(function () {
                    return (/(relative|absolute|fixed)/).test($.css(this, 'position', 1)) &&
                    (/(auto|scroll)/).test($.css(this, 'overflow', 1) + $.css(this, 'overflow-y', 1) + $.css(this, 'overflow-x', 1));
                }).eq(0);
            } else {
                scrollParent = element.parents().filter(function () {
                    return (/(auto|scroll)/).test($.css(this, 'overflow', 1) + $.css(this, 'overflow-y', 1) + $.css(this, 'overflow-x', 1));
                }).eq(0);
            }

            return (/fixed/).test(element.css('position')) || !scrollParent.length ? $(document) : scrollParent;
        },

        _mouseStart: function (event) {
            var mouseCoordinates = this._getMouseCoordinates(event),
                parentOffset = this._getParentOffset(this.host);
            this.feedback = this._createFeedback(event);
            this._zIndexBackup = this.feedback.css('z-index');
            this.feedback[0].style.zIndex = this.dragZIndex;
            this._backupFeedbackProportions();
            this._backupeMargins();
            this._positionType = this.feedback.css('position');
            this._scrollParent = this._getScrollParent(this.feedback);
            this._offset = this.positionAbs = this.host.offset();
            this._offset = {
                top: this._offset.top - this.margins.top,
                left: this._offset.left - this.margins.left
            };
            $.extend(this._offset, {
                click: {
                    left: mouseCoordinates.left - this._offset.left,
                    top: mouseCoordinates.top - this._offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset(),
                hostRelative: this._getRelativeOffset(this.host)
            });
            this.position = this._generatePosition(event);
            this.originalPosition = this._fixPosition();
            if (this.restricter) {
                this._setRestricter();
            }
            this.feedback.addClass(this.toThemeProperty('jqx-draggable-dragging'));
            var result = this._raiseEvent(0, event);
            if (this.onDragStart && typeof this.onDragStart === 'function') {
                this.onDragStart(this.position);
            }
            this._mouseDrag(event, true);
            return true;
        },

        _fixPosition: function () {
            var parentOffset = this._getRelativeOffset(this.host),
                position = this.position;
            //if (this.feedback.parent()[0] !== this.host.parent()[0]) {
            position = {
                left: this.position.left + parentOffset.left,
                top: this.position.top + parentOffset.top
            }
            //}
            return position;
        },

        _mouseDrag: function (event, noPropagation) {
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo('absolute');
            this.feedback[0].style.left = this.position.left + 'px';
            this.feedback[0].style.top = this.position.top + 'px';
            this._raiseEvent(2, event);
            if (this.onDrag && typeof this.onDrag === 'function') {
                this.onDrag(this.data, this.position);
            }
            this._handleTarget();
            return false;
        },

        _over: function (position, dw, dh) {
            if (this.dropTarget) {
                var over = false, self = this;
                $.each(this.dropTarget, function (idx, droppable) {
                    over = self._overItem(droppable, position, dw, dh);
                    if (over.over) {
                        return false;
                    }
                });
            }
            return over;
        },

        _overItem: function (droppable, position, dw, dh) {
            droppable = $(droppable);
            var dropOffset = droppable.offset(),
                ch = droppable.outerHeight(),
                cw = droppable.outerWidth(),
                over;
            if (!droppable || droppable[0] === this.element) {
                return;
            }
            var over = false;
            switch (this.tolerance) {
                case 'intersect':
                    if (position.left + dw > dropOffset.left &&
                        position.left < dropOffset.left + cw &&
                        position.top + dh > dropOffset.top &&
                        position.top < dropOffset.top + ch) {
                        over = true;
                    }
                    break;
                case 'fit':
                    if (dw + position.left <= dropOffset.left + cw &&
                        position.left >= dropOffset.left &&
                        dh + position.top <= dropOffset.top + ch &&
                        position.top >= dropOffset.top) {
                        over = true;
                    }
                    break;
            }
            return { over: over, target: droppable };
        },

        _handleTarget: function () {
            if (this.dropTarget) {
                var position = this.feedback.offset(),
                    dw = this.feedback.outerWidth(),
                    dh = this.feedback.outerHeight(),
                    over = this._over(position, dw, dh);
                if (over.over) {
                    if (this._targetEnterFired && over.target.length > 0 && this._oldtarget && this._oldtarget.length > 0 && over.target[0] != this._oldtarget[0]) {
                        this._raiseEvent(4, { target: this._oldtarget });
                        if (this.onDropTargetLeave && typeof this.onDropTargetLeave === 'function') {
                            this.onDropTargetLeave(this._oldtarget);
                        }
                    }

                    if (!this._targetEnterFired || (over.target.length > 0 && this._oldtarget && this._oldtarget.length > 0 && over.target[0] != this._oldtarget[0])) {
                        this._targetEnterFired = true;
                        this._raiseEvent(3, { target: over.target });
                        if (this.onDropTargetEnter && typeof this.onDropTargetEnter === 'function') {
                            this.onDropTargetEnter(over.target);
                        }
                    }
                    this._oldtarget = over.target;
                } else {
                    if (this._targetEnterFired) {
                        this._targetEnterFired = false;
                        this._raiseEvent(4, { target: this._oldtarget || over.target });
                        if (this.onDropTargetLeave && typeof this.onDropTargetLeave === 'function') {
                            this.onDropTargetLeave(this._oldtarget || over.target);
                        }
                    }
                }
            }
        },

        _mouseStop: function (event) {
            var dropped = false,
                dropPosition = this._fixPosition(),
                size = {
                    width: this.host.outerWidth(),
                    height: this.host.outerHeight()
                };
            this.feedback[0].style.opacity = this._oldOpacity;
            if (!this.revert) {
                this.feedback[0].style.zIndex = this._zIndexBackup;
            }
            this._enableSelection(this.host);
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }
            if ((!this.element || !this.element.parentNode) && this.feedback === 'original') {
                return false;
            }
            this._dropElement(dropPosition);
            //   return;
            this.feedback.removeClass(this.toThemeProperty('jqx-draggable-dragging'));
            this._raiseEvent(1, event);
            if (this.onDragEnd && typeof this.onDragEnd === 'function') {
                this.onDragEnd(this.data);
            }
            if (this.onTargetDrop && typeof this.onTargetDrop === 'function' && this._over(dropPosition, size.width, size.height).over) {
                this.onTargetDrop(this._over(dropPosition, size.width, size.height).target);
            }
            this._revertHandler();
            return false;
        },

        _dropElement: function (dropPosition) {
            if (this.dropAction === 'default' &&
                this.feedback && this.feedback[0] !== this.element &&
                this.feedback !== 'original') {
                if (!this.revert) {
                    if (!(/(fixed|absolute)/).test(this.host.css('position'))) {
                        this.host.css('position', 'relative')
                        var offset = this._getRelativeOffset(this.host);
                        dropPosition = this.position;
                        dropPosition.left -= offset.left;
                        dropPosition.top -= offset.top;

                        this.element.style.left = dropPosition.left + 'px';
                        this.element.style.top = dropPosition.top + 'px';
                    }
                }
            }
        },

        _revertHandler: function () {
            if (this.revert || ($.isFunction(this.revert) && this.revert())) {
                var self = this;
                if (this._feedbackType != 'original') {
                    if (this.feedback != null) {
                        if (this.dropAction != 'none') {
                            $(this.feedback).animate({
                                left: self.originalPosition.left - self._offset.hostRelative.left,
                                top: self.originalPosition.top - self._offset.hostRelative.top
                            }, parseInt(this.revertDuration, 10), function () {
                                if (self.feedback && self.feedback[0] && self._feedbackType !== 'original' && typeof self.feedback.remove === 'function') {
                                    self.feedback.remove();
                                }
                            });
                        }
                        else {
                            if (self.feedback && self.feedback[0] && self._feedbackType !== 'original' && typeof self.feedback.remove === 'function') {
                                self.feedback.remove();
                            }
                        }
                    }
                }
                else {
                    this.element.style.zIndex = this.dragZIndex;
                    $(this.host).animate({
                        left: self.originalPosition.left - self._offset.hostRelative.left,
                        top: self.originalPosition.top - self._offset.hostRelative.top
                    }, parseInt(this.revertDuration, 10), function () {
                        self.element.style.zIndex = self._zIndexBackup;
                    });
                }
            }
        },

        _getHandle: function (event) {
            var handle;
            if (!this.handle) {
                handle = true;
            } else {
                $(this.handle, this.host).find('*').andSelf().each(function () {
                    if (this == event.target) handle = true;
                });
            }
            return handle;
        },

        _createFeedback: function (event) {
            var feedback;
            if (typeof this._feedbackType === 'function') {
                feedback = this._feedbackType();
            } else if (this._feedbackType === 'clone') {
                feedback = this.host.clone().removeAttr('id');
            } else {
                feedback = this.host;
            }
            if (!(/(absolute|fixed)/).test(feedback.css('position'))) {
                feedback.css('position', 'absolute');
            }
            if (this.appendTo[0] !== this.host.parent()[0] ||
                feedback[0] !== this.element) {
                var pos = {};
                feedback.css({
                    left: this.host.offset().left - this._getParentOffset(this.host).left + this._getParentOffset(feedback).left,
                    top: this.host.offset().top - this._getParentOffset(this.host).top + this._getParentOffset(feedback).top
                });
                feedback.appendTo(this.appendTo);
            }
            if (typeof this.initFeedback === 'function') {
                this.initFeedback(feedback);
            }
            return feedback;
        },

        _getParentOffset: function (element) {
            var element = element || this.feedback;
            this._offsetParent = element.offsetParent();
            var parentOffset = this._offsetParent.offset();
            if (this._positionType == 'absolute' && this._scrollParent[0] !== document && $.contains(this._scrollParent[0], this._offsetParent[0])) {
                parentOffset.left += this._scrollParent.scrollLeft();
                parentOffset.top += this._scrollParent.scrollTop();
            }
            if ((this._offsetParent[0] == document.body) ||
                (this._offsetParent[0].tagName && this._offsetParent[0].tagName.toLowerCase() == 'html' && $.jqx.browser.msie)) {
                parentOffset = { top: 0, left: 0 };
            }
            return {
                top: parentOffset.top + (parseInt(this._offsetParent.css('border-top-width'), 10) || 0),
                left: parentOffset.left + (parseInt(this._offsetParent.css('border-left-width'), 10) || 0)
            };

        },

        _getRelativeOffset: function (element) {
            var parent = this._scrollParent || element.parent();
            element = element || this.feedback;
            if (element.css('position') === 'relative') {
                var position = this.host.position();
                return {
                    top: position.top - (parseInt(element.css('top'), 10) || 0),
                    left: position.left - (parseInt(element.css('left'), 10) || 0)
                };
            } else {
                return { top: 0, left: 0 };
            }
        },

        _backupeMargins: function () {
            this.margins = {
                left: (parseInt(this.host.css('margin-left'), 10) || 0),
                top: (parseInt(this.host.css('margin-top'), 10) || 0),
                right: (parseInt(this.host.css('margin-right'), 10) || 0),
                bottom: (parseInt(this.host.css('margin-bottom'), 10) || 0)
            };
        },

        _backupFeedbackProportions: function () {
            this.feedback[0].style.opacity = this.opacity;
            this._feedbackProportions = {
                width: this.feedback.outerWidth(),
                height: this.feedback.outerHeight()
            };
        },

        _setRestricter: function () {
            if (this.restricter == 'parent') {
                this.restricter = this.feedback[0].parentNode;
            }
            if (this.restricter == 'document' || this.restricter == 'window') {
                this._handleNativeRestricter();
            }
            if (typeof this.restricter.left !== 'undefined' && typeof this.restricter.top !== 'undefined' &&
                       typeof this.restricter.height !== 'undefined' && typeof this.restricter.width !== 'undefined') {
                this._restricter = [this.restricter.left, this.restricter.top, this.restricter.width, this.restricter.height];
            } else if (!(/^(document|window|parent)$/).test(this.restricter) && this.restricter.constructor != Array) {
                this._handleDOMParentRestricter();

            } else if (this.restricter.constructor == Array) {
                this._restricter = this.restricter;
            }

        },

        _handleNativeRestricter: function () {
            this._restricter = [
                    this.restricter === 'document' ? 0 : $(window).scrollLeft() - this._offset.relative.left - this._offset.parent.left,
                    this.restricter === 'document' ? 0 : $(window).scrollTop() - this._offset.relative.top - this._offset.parent.top,
                    (this.restricter === 'document' ? 0 : $(window).scrollLeft()) + $(this.restricter === 'document' ? document : window).width() - this._feedbackProportions.width - this.margins.left,
                    (this.restricter === 'document' ? 0 : $(window).scrollTop()) + ($(this.restricter === 'document' ? document : window).height() || document.body.parentNode.scrollHeight) - this._feedbackProportions.height - this.margins.top
            ];
        },

        _handleDOMParentRestricter: function () {
            var restricter = $(this.restricter),
                restricterElement = restricter[0];
            if (!restricterElement) {
                return;
            }
            var over = ($(restricterElement).css('overflow') !== 'hidden');
            this._restricter = [
                (parseInt($(restricterElement).css('borderLeftWidth'), 10) || 0) + (parseInt($(restricterElement).css('paddingLeft'), 10) || 0),
                (parseInt($(restricterElement).css('borderTopWidth'), 10) || 0) + (parseInt($(restricterElement).css('paddingTop'), 10) || 0),
                (over ? Math.max(restricterElement.scrollWidth, restricterElement.offsetWidth) : restricterElement.offsetWidth) - (parseInt($(restricterElement).css('borderLeftWidth'), 10) || 0) - (parseInt($(restricterElement).css('paddingRight'), 10) || 0) - this._feedbackProportions.width - this.margins.left - this.margins.right,
                (over ? Math.max(restricterElement.scrollHeight, restricterElement.offsetHeight) : restricterElement.offsetHeight) - (parseInt($(restricterElement).css('borderTopWidth'), 10) || 0) - (parseInt($(restricterElement).css('paddingBottom'), 10) || 0) - this._feedbackProportions.height - this.margins.top - this.margins.bottom
            ];
            this._restrictiveContainer = restricter;
        },

        _convertPositionTo: function (d, position) {
            if (!position) {
                position = this.position;
            }
            var mod, scroll, scrollIsRootNode;
            if (d === 'absolute') {
                mod = 1;
            } else {
                mod = -1;
            }
            if (this._positionType === 'absolute' && !(this._scrollParent[0] != document && $.contains(this._scrollParent[0], this._offsetParent[0]))) {
                scroll = this._offsetParent;
            } else {
                scroll = this._scrollParent;
            }
            scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
            return this._getPosition(position, mod, scrollIsRootNode, scroll);

        },

        _getPosition: function (position, mod, scrollIsRootNode, scroll) {
            return {
                top: (
                    position.top
                    + this._offset.relative.top * mod
                    + this._offset.parent.top * mod
                    - ($.jqx.browser.safari && $.jqx.browser.version < 526 && this._positionType == 'fixed' ? 0 : (this._positionType == 'fixed' ? -this._scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())) * mod)
                ),
                left: (
                    position.left
                    + this._offset.relative.left * mod
                    + this._offset.parent.left * mod
                    - ($.jqx.browser.safari && $.jqx.browser.version < 526 && this._positionType == 'fixed' ? 0 : (this._positionType == 'fixed' ? -this._scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod)
                )
            };
        },

        _generatePosition: function (event) {
            var scroll =
                this._positionType == 'absolute' &&
                !(this._scrollParent[0] != document &&
                $.contains(this._scrollParent[0], this._offsetParent[0])) ?
                this._offsetParent :
                this._scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            var mouseCoordinates = this._getMouseCoordinates(event),
                pageX = mouseCoordinates.left,
                pageY = mouseCoordinates.top;
            if (this.originalPosition) {
                var restricter;
                if (this.restricter) {
                    if (this._restrictiveContainer) {
                        var co = this._restrictiveContainer.offset();
                        restricter = [this._restricter[0] + co.left,
                             this._restricter[1] + co.top,
                             this._restricter[2] + co.left,
                             this._restricter[3] + co.top];
                    } else {
                        restricter = this._restricter;
                    }
                    if (mouseCoordinates.left - this._offset.click.left < restricter[0]) {
                        pageX = restricter[0] + this._offset.click.left;
                    }
                    if (mouseCoordinates.top - this._offset.click.top < restricter[1]) {
                        pageY = restricter[1] + this._offset.click.top;
                    }
                    if (mouseCoordinates.left - this._offset.click.left > restricter[2]) {
                        pageX = restricter[2] + this._offset.click.left;
                    }
                    if (mouseCoordinates.top - this._offset.click.top > restricter[3]) {
                        pageY = restricter[3] + this._offset.click.top;
                    }
                }
            }
            return {
                top: (
                    pageY - this._offset.click.top - this._offset.relative.top - this._offset.parent.top + ($.jqx.browser.safari && $.jqx.browser.version < 526 && this._positionType == 'fixed' ? 0 : (this._positionType == 'fixed' ? -this._scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())))
                ),
                left: (
                    pageX - this._offset.click.left - this._offset.relative.left - this._offset.parent.left + ($.jqx.browser.safari && $.jqx.browser.version < 526 && this._positionType == 'fixed' ? 0 : (this._positionType == 'fixed' ? -this._scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()))
                )
            };
        },

        _raiseEvent: function (eventId, data) {
            if (this.triggerEvents != undefined && this.triggerEvents == false)
                return;

            var eventName = this._events[eventId],
            event = $.Event(eventName),
            data = data || {};
            data.position = this.position;
            data.element = this.element;
            $.extend(data, this.data);
            data.feedback = this.feedback;
            // this.data = data;
            event.args = data;

            return this.host.trigger(event);
        },

        disable: function () {
            this.disabled = true;
            this.host.addClass(this.toThemeProperty('jqx-draggable-disabled'));
            this._enableSelection(this.host);
        },

        enable: function () {
            this.disabled = false;
            this.host.removeClass(this.toThemeProperty('jqx-draggable-disabled'));
        },

        propertyChangedHandler: function (object, key, oldvalue, value) {
            if (key === 'dropTarget') {
                if (typeof value === 'string') {
                    object.dropTarget = $(value);
                }
            }
            else if (key == "disabled") {
                if (value) {
                    object._enableSelection(object.host);
                }
            }
            else if (key == 'cursor') {
                object.host.css('cursor', object.cursor);
            }
        }

    });

})(jqxBaseFramework);
(function ($) {

    window.jqxListBoxDragDrop = function () {
        $.extend($.jqx._jqxListBox.prototype,
        {
            _hitTestBounds: function (listBox, hitLeft, hitTop) {
                var selfOffset = listBox.host.offset();
                var y = hitTop - parseInt(selfOffset.top);
                var x = hitLeft - parseInt(selfOffset.left);
                var item = listBox._hitTest(x, y);

                if (y < 0)
                    return null;

                if (item != null) {
                    var left = parseInt(selfOffset.left);
                    var right = left + listBox.host.width();
                    if (left <= hitLeft + item.width / 2 && hitLeft <= right)
                        return item;

                    return null;
                }


                if (listBox.items && listBox.items.length > 0) {
                    var lastItem = listBox.items[listBox.items.length - 1];
                    if (listBox.groups.length < 2)
                    {
                        if (lastItem.top + lastItem.height + 15 >= y) {
                            return lastItem;
                        }
                    }
                }

                return null;
            },

            _handleDragStart: function (elements, me) {
                var isTouchDevice = $.jqx.mobile.isTouchDevice();
                if (isTouchDevice) {
                    if (me.allowDrag) {
                        elements.on($.jqx.mobile.getTouchEventName('touchstart'), function () {
                            $.jqx.mobile.setTouchScroll(false, me.element.id);
                        });
                    }
                }

                elements.off('dragStart');
                elements.on('dragStart', function (event) {
                    if (me.allowDrag && !me.disabled) {
                        me.feedbackElement = $("<div style='z-index: 99999; position: absolute;'></div>");
                        me.feedbackElement.addClass(me.toThemeProperty('jqx-listbox-feedback'));
                        me.feedbackElement.appendTo($(document.body));
                        me.feedbackElement.hide();
                        me.isDragging = true;
                        me._dragCancel = false;
                        var mousePosition = me._getMouseCoordinates(event);
                        var item = me._hitTestBounds(me, mousePosition.left, mousePosition.top);
                        var listBoxes = $.find('.jqx-listbox');
                        me._listBoxes = listBoxes;
                        $.each(me._listBoxes, function () {
                            if ($.jqx.isHidden($(this)))
                                return;

                            var listBoxInstance = $.data(this, "jqxListBox").instance;
                            listBoxInstance._enableHover = listBoxInstance.enableHover;
                            listBoxInstance.enableHover = false;
                            $.jqx.mobile.setTouchScroll(false, me.element.id);
                        });

                        var stopDrag = function () {
                            me._dragCancel = true;
                            $(event.args.element).jqxDragDrop({ triggerEvents: false });
                            $(event.args.element).jqxDragDrop('cancelDrag');
                            clearInterval(me._autoScrollTimer);
                            $(event.args.element).jqxDragDrop({ triggerEvents: true });
                            $.each(me._listBoxes, function () {
                                if ($.jqx.isHidden($(this)))
                                    return;

                                var listBoxInstance = $.data(this, "jqxListBox").instance;
                                if (listBoxInstance._enableHover != undefined) {
                                    listBoxInstance.enableHover = listBoxInstance._enableHover;
                                    $.jqx.mobile.setTouchScroll(true, me.element.id);
                                }
                            });
                        }

                        if (item != null && !item.isGroup) {
                            me._dragItem = item;
                            if (me.dragStart) {
                                var result = me.dragStart(item);
                                if (result == false) {
                                    stopDrag();
                                    return false;
                                }
                            }
                            if (item.disabled) {
                                stopDrag();
                            }

                            me._raiseEvent(4, { label: item.label, value: item.value, dragSourceElement: me.element, originalEvent: event.args });
                        }
                        else if (item == null) {
                            stopDrag();
                        }
                    }
                    return false;
                });
            },

            _handleDragging: function (elements, me) {
                var self = this;

                elements.off('dragging');
                elements.on('dragging', function (event) {
                    var args = event.args;
                    if (me._dragCancel)
                        return;

                    var mousePosition = me._getMouseCoordinates(event);
                    me._lastDraggingPosition = mousePosition;

                    me._dragOverItem = null;
                    me.feedbackElement.hide();

                    var bestMatch = self._getBestMatchItem(me, mousePosition);

                    $.each(me._listBoxes, function () {
                        if ($.jqx.isHidden($(this)))
                            return true;

                        var offset = $(this).offset();
                        var top = offset.top + 20;
                        var bottom = $(this).height() + top - 40;
                        var left = offset.left;
                        var width = $(this).width();
                        var right = left + width;
                        var listBoxInstance = $.data(this, "jqxListBox").instance;

                        var item = listBoxInstance._hitTestBounds(listBoxInstance, mousePosition.left, mousePosition.top);
                        var vScrollInstance = listBoxInstance.vScrollInstance;
                        if (!item)
                            return;

                        if (!listBoxInstance.allowDrop || listBoxInstance.disabled || !item.element)
                            return;

                        if (!bestMatch || !bestMatch.item || $(this)[0] != bestMatch.item[0])
                            return;

                        me._dragOverItem = item;
                        me.feedbackElement.show();

                        var itemTop = $(item.element).offset().top + 1;
                        if (mousePosition.top > itemTop + item.height / 2) {
                            itemTop = itemTop + item.height;
                        }

                        me.feedbackElement.css('top', itemTop);
                        me.feedbackElement.css('left', left);

                        if (listBoxInstance.vScrollBar.css('visibility') != 'visible') {
                            me.feedbackElement.width($(this).width());
                        }
                        else {
                            me.feedbackElement.width($(this).width() - 20);
                        }

                        if (mousePosition.left >= left && mousePosition.left < right) {
                            if (args.position.top < top && args.position.top >= top - 30) {
                                clearInterval(listBoxInstance._autoScrollTimer);
                                if (vScrollInstance.value != 0) {
                                    me.feedbackElement.hide();
                                }
                                listBoxInstance._autoScrollTimer = setInterval(function () {
                                    var scrolled = listBoxInstance.scrollUp();
                                    if (!scrolled) clearInterval(listBoxInstance._autoScrollTimer);
                                }, 100);
                            }
                            else if (args.position.top > bottom && args.position.top < bottom + 30) {
                                clearInterval(listBoxInstance._autoScrollTimer);
                                if ((listBoxInstance.vScrollBar.css('visibility') != 'hidden') && vScrollInstance.value != vScrollInstance.max) {
                                    me.feedbackElement.hide();
                                }

                                listBoxInstance._autoScrollTimer = setInterval(function () {
                                    var scrolled = listBoxInstance.scrollDown();
                                    if (!scrolled) clearInterval(listBoxInstance._autoScrollTimer);
                                }, 100);
                            }
                            else {
                                clearInterval(listBoxInstance._autoScrollTimer);
                            }
                        }
                        else {
                            if (me._dragOverItem == null) {
                                me.feedbackElement.hide();
                            }
                            clearInterval(listBoxInstance._autoScrollTimer);
                        }
                    });
                });
            },

            _getBestMatchItem: function(me, position)
            {
                var bestMatch = {};
                var listBoxes = $.find('.jqx-listbox');

                for (var i = 0; i < listBoxes.length; i++) {
                    var listBox = $(listBoxes[i]);
                    if ($.jqx.isHidden(listBox))
                        continue;

                    var left = parseInt(listBox.offset().left);
                    var right = left + listBox.width();
                    var listBoxInstance = listBox.jqxListBox('getInstance');
                    clearInterval(listBoxInstance._autoScrollTimer);
                    if (listBoxInstance._enableHover != undefined) {
                        listBoxInstance.enableHover = listBoxInstance._enableHover;
                        $.jqx.mobile.setTouchScroll(true, me.element.id);
                    }

                    if (me._dragItem != null) {
                        var matchCursor = position.left >= left && position.left <= right;
                        var matchItemLeft = position.left - me._dragItem.width / 2 >= left && position.left - me._dragItem.width / 2 <= right;
                        var matchItemRight = position.left - me._dragItem.width / 2 >= left && position.left - me._dragItem.width / 2 <= right;
                        if (matchCursor || matchItemLeft || matchItemRight) {
                            var top = parseInt(listBox.offset().top);
                            var bottom = top + listBox.height();
                            if (position.top >= top && position.top <= bottom) {
                                var distance = (position.left + me._dragItem.width / 2) - (left + right) / 2;

                                if (isNaN(bestMatch.distance) || bestMatch.distance > distance)
                                    bestMatch = { distance: distance, item: listBox };
                            }
                        }
                    }
                }

                return bestMatch;
            },

            _handleDragEnd: function (elements, me) {
                var self = this;
                var listBoxes = $.find('.jqx-listbox');
                elements.off('dragEnd');
                elements.on('dragEnd', function (event) {
                    clearInterval(me._autoScrollTimer);
                    var _isTouchDevice = $.jqx.mobile.isTouchDevice();
                    var position = _isTouchDevice ? me._lastDraggingPosition : me._getMouseCoordinates(event);

                    var listBoxes = $.find('.jqx-listbox');
                    me.feedbackElement.remove();
                    if (me._dragCancel) {
                        event.stopPropagation();
                        return;
                    }

                    var bestMatch = self._getBestMatchItem(me, position);

                    var listBox = bestMatch.item;

                    var oldItem = me._dragItem;
                    var dropTargetElement = null;
                    if (listBox != null && listBox.length > 0) {
                        var listBoxInstance = $.data(listBox[0], "jqxListBox").instance;
                        var allowDrop = listBoxInstance.allowDrop;
                        dropTargetElement = listBoxInstance.element;

                        if (allowDrop && !listBoxInstance.disabled) {
                            var listBoxInstance = $.data(listBox[0], "jqxListBox").instance;
                            var item = listBoxInstance._hitTestBounds(listBoxInstance, position.left, position.top);
                            item = me._dragOverItem;
                            if (item != null && !item.isGroup) {
                                var result = true;
                                if (me.dragEnd) {

                                    result = me.dragEnd(oldItem, item, event.args);
                                    if (result == false) {
                                        $(event.args.element).jqxDragDrop({ triggerEvents: false });
                                        $(event.args.element).jqxDragDrop('cancelDrag');
                                        clearInterval(me._autoScrollTimer);
                                        $(event.args.element).jqxDragDrop({ triggerEvents: true });
                                        if (event.preventDefault) {
                                            event.preventDefault();
                                        }
                                        if (event.stopPropagation) {
                                            event.stopPropagation();
                                        }
                                        return false;
                                    }
                                    if (result == undefined) result = true;
                                }
                                if (result) {
                                    var itemIndex = item.visibleIndex;
                                    var getCorrectIndexAfterDrop = function () {
                                        var index = item.visibleIndex;
                                        for (var m = index - 2; m <= index + 2; m++) {
                                            if (listBoxInstance.items && listBoxInstance.items.length > m) {
                                                var currentItem = listBoxInstance.items[m];
                                                if (currentItem != null) {
                                                    if (currentItem.value == oldItem.value)
                                                        return currentItem.visibleIndex;
                                                }
                                            }
                                        }
                                        return index;
                                    }

                                    if (listBoxInstance.dropAction != 'none') {
                                        if (item.element) {
                                            var itemTop = $(item.element).offset().top + 1;
                                        }
                                        else {
                                            var itemTop = $(listBoxInstance.element).offset().top + 1;
                                        }
                                        if (listBoxInstance.content.find('.draggable').length > 0) {
                                            listBoxInstance.content.find('.draggable').jqxDragDrop('destroy');
                                        }
                                        if (position.top > itemTop + item.height / 2) {
                                            listBoxInstance.insertAt(me._dragItem, item.index + 1);
                                        }
                                        else {
                                            listBoxInstance.insertAt(me._dragItem, item.index);
                                        }

                                        if (me.dropAction == 'default') {
                                            if (oldItem.visibleIndex > 0) {
                                                me.clearSelection();
                                                me.selectIndex(oldItem.visibleIndex - 1);
                                            }
                                            me.removeItem(oldItem, true);
                                        }
                                        var index = getCorrectIndexAfterDrop();
                                        listBoxInstance.clearSelection();
                                        listBoxInstance.selectIndex(index);
                                    }
                                }
                            }
                            else {
                                if (listBoxInstance.dropAction != 'none') {
                                    if (listBoxInstance.content.find('.draggable').length > 0) {
                                        listBoxInstance.content.find('.draggable').jqxDragDrop('destroy');
                                    }
                                    if (me.dragEnd) {
                                        var result = me.dragEnd(me._dragItem, null, event.args);
                                        if (result == false) {
                                            $(event.args.element).jqxDragDrop({ triggerEvents: false });
                                            $(event.args.element).jqxDragDrop('cancelDrag');
                                            clearInterval(me._autoScrollTimer);
                                            $(event.args.element).jqxDragDrop({ triggerEvents: true });
                                            if (event.preventDefault) {
                                                event.preventDefault();
                                            }
                                            if (event.stopPropagation) {
                                                event.stopPropagation();
                                            }
                                            return false;
                                        }
                                        if (result == undefined) result = true;
                                    }
                                    listBoxInstance.addItem(me._dragItem);
                                    if (listBoxInstance.dropAction == 'default') {
                                        if (oldItem.visibleIndex > 0) {
                                            me.selectIndex(oldItem.visibleIndex - 1);
                                        }
                                        me.removeItem(oldItem, true);
                                    }

                                    listBoxInstance.clearSelection();
                                    listBoxInstance.selectIndex(listBoxInstance.items.length - 1);
                                }
                            }
                        }
                    }
                    else {
                        if (me.dragEnd) {
                            var dragEnd = me.dragEnd(oldItem, event.args);
                            if (false == dragEnd) {
                                if (event.preventDefault) {
                                    event.preventDefault();
                                }
                                if (event.stopPropagation) {
                                    event.stopPropagation();
                                }
                                return false;
                            }
                        }
                    }

                    if (oldItem != null) {
                        me._raiseEvent(5, { label: oldItem.label, value: oldItem.value, index: oldItem.index, dropTargetElement: dropTargetElement, originalEvent: event.args });
                    }
                    return false;
                });
            },

            _enableDragDrop: function () {
                if (this.allowDrag && this.host.jqxDragDrop) {
                    var elements = this.content.find('.draggable');
                    if (elements.length > 0) {
                        var me = this;
                        elements.jqxDragDrop({
                            cursor: 'arrow', revertDuration: 0, appendTo: 'body', dragZIndex: 99999, revert: true,
                            initFeedback: function (feedback) {
                                var title = $('<span style="white-space: nowrap;" class="' + me.toThemeProperty('jqx-fill-state-normal') + '">' + feedback.text() + '</span>');
                                $(document.body).append(title);
                                var width = title.width();
                                title.remove();
                                feedback.width(width + 5);
                                feedback.addClass(me.toThemeProperty('jqx-fill-state-pressed'));
                            }
                        });
                        this._autoScrollTimer = null;
                        me._dragItem = null;
                        me._handleDragStart(elements, me);
                        me._handleDragging(elements, me);
                        me._handleDragEnd(elements, me);
                    }
                }
            },

            _getMouseCoordinates: function (event) {
                this._isTouchDevice = $.jqx.mobile.isTouchDevice();
                if (this._isTouchDevice) {
                    var pos = $.jqx.position(event.args);
                    return {
                        left: pos.left,
                        top: pos.top
                    };
                } else {
                    return {
                        left: event.args.pageX,
                        top: event.args.pageY
                    };
                }
            }
        });
    }

    window.jqxTreeDragDrop = function () {
        $.extend($.jqx._jqxTree.prototype,
        {
            _hitTestBounds: function (treeInstance, left, top) {
                var me = this;
                var treeItem = null;
                if (treeInstance._visibleItems) {
                    var hostLeft = parseInt(treeInstance.host.offset().left);
                    var hostWidth = treeInstance.host.outerWidth();

                    $.each(treeInstance._visibleItems, function (index) {
                        if (left >= hostLeft && left < hostLeft + hostWidth)
                            if (this.top + 5 < top && top < this.top + this.height) {
                                var parentElement = $(this.element).parents('li:first');
                                if (parentElement.length > 0) {
                                    treeItem = treeInstance.getItem(parentElement[0]);
                                    if (treeItem != null) {
                                        treeItem.height = this.height;
                                        treeItem.top = this.top;
                                        return false;
                                    }
                                }
                            }
                    });
                }
                return treeItem;
            },

            _handleDragStart: function (elements, me) {
                if (me._dragOverItem) {
                    me._dragOverItem.titleElement.removeClass(me.toThemeProperty('jqx-fill-state-hover'));
                }

                var isTouchDevice = $.jqx.mobile.isTouchDevice();
                if (isTouchDevice) {
                    if (me.allowDrag) {
                        elements.on($.jqx.mobile.getTouchEventName('touchstart'), function () {
                            $.jqx.mobile.setTouchScroll(false, 'panel' + me.element.id);
                        });
                    }
                }

                elements.off('dragStart');
                elements.on('dragStart', function (event) {
                    me.feedbackElement = $("<div style='z-index: 99999; position: absolute;'></div>");
                    me.feedbackElement.addClass(me.toThemeProperty('jqx-listbox-feedback'));
                    me.feedbackElement.appendTo($(document.body));
                    me.feedbackElement.hide();
                    me._dragCancel = false;
                    var position = event.args.position;
                    var trees = $.find('.jqx-tree');
                    me._trees = trees;
                    $.each(trees, function () {
                        var treeInstance = $.data(this, "jqxTree").instance;
                        var elements = treeInstance.host.find('.draggable');
                        treeInstance._syncItems(elements);
                        if (treeInstance.allowDrag && !treeInstance.disabled) {
                            var parentElement = $(event.target).parents('li:first');
                            if (parentElement.length > 0) {
                                var item = treeInstance.getItem(parentElement[0]);
                                if (item) {
                                    me._dragItem = item;
                                    if (treeInstance.dragStart) {
                                        var result = treeInstance.dragStart(item);
                                        if (result == false) {
                                            me._dragCancel = true;
                                            $(event.args.element).jqxDragDrop({ triggerEvents: false });
                                            $(event.args.element).jqxDragDrop('cancelDrag');
                                            clearInterval(me._autoScrollTimer);
                                            $(event.args.element).jqxDragDrop({ triggerEvents: treeInstance });
                                            return false;
                                        }
                                    }
                                    treeInstance._raiseEvent(8, { label: item.label, value: item.value, originalEvent: event.args })
                                }
                            }
                        }
                    });

                    return false;
                });
            },

            _getMouseCoordinates: function (event) {
                this._isTouchDevice = $.jqx.mobile.isTouchDevice();
                if (this._isTouchDevice) {
                    var pos = $.jqx.position(event.args);
                    return {
                        left: pos.left,
                        top: pos.top
                    };
                } else {
                    return {
                        left: event.args.pageX,
                        top: event.args.pageY
                    };
                }
            },

            _handleDragging: function (elements, me) {
                var elements = this.host.find('.draggable');
                elements.off('dragging');
                elements.on('dragging', function (event) {
                    var args = event.args;
                    var position = args.position;
                    var trees = me._trees;
                    if (me._dragCancel)
                        return;

                    if (me._dragOverItem) {
                        me._dragOverItem.titleElement.removeClass(me.toThemeProperty('jqx-fill-state-hover'));
                    }

                    var outsideTree = true;
                    var mouseCoordinates = me._getMouseCoordinates(event);
                    me._lastDraggingPosition = mouseCoordinates;
                    $.each(trees, function () {
                        if ($.jqx.isHidden($(this)))
                            return true;

                        var offset = $(this).offset();
                        var top = offset.top + 20;
                        var bottom = $(this).height() + top - 40;
                        var left = offset.left;
                        var width = $(this).width();
                        var right = left + width;
                        var treeInstance = $.data(this, "jqxTree").instance;

                        if (treeInstance.disabled || !treeInstance.allowDrop)
                            return;

                        var vScrollInstance = treeInstance.vScrollInstance;
                        var item = treeInstance._hitTestBounds(treeInstance, mouseCoordinates.left, mouseCoordinates.top);
                        if (item != null) {
                            if (me._dragOverItem) {
                                me._dragOverItem.titleElement.removeClass(treeInstance.toThemeProperty('jqx-fill-state-hover'));
                            }
                            me._dragOverItem = item;
                            if (item.element) {
                                me.feedbackElement.show();
                                var itemTop = item.top;
                                var topPos = mouseCoordinates.top;
                                me._dropPosition = 'before';
                                if (topPos > itemTop + item.height / 3) {
                                    itemTop = item.top + item.height / 2;
                                    me._dragOverItem.titleElement.addClass(me.toThemeProperty('jqx-fill-state-hover'));
                                    me.feedbackElement.hide();
                                    me._dropPosition = 'inside';
                                }
                                if (topPos > (item.top + item.height) - item.height / 3) {
                                    itemTop = item.top + item.height;
                                    me._dragOverItem.titleElement.removeClass(me.toThemeProperty('jqx-fill-state-hover'));
                                    me.feedbackElement.show();
                                    me._dropPosition = 'after';
                                }

                                me.feedbackElement.css('top', itemTop);
                                var left = -2 + parseInt(item.titleElement.offset().left);
                                me.feedbackElement.css('left', left);
                                me.feedbackElement.width($(item.titleElement).width() + 12);
                            }
                        }

                        if (mouseCoordinates.left >= left && mouseCoordinates.left < right) {
                            if (mouseCoordinates.top + 20 >= top && mouseCoordinates.top <= top + treeInstance.host.height()) {
                                outsideTree = false;
                            }

                            if (mouseCoordinates.top < top && mouseCoordinates.top >= top - 30) {
                                clearInterval(treeInstance._autoScrollTimer);
                                if (vScrollInstance.value != 0) {
                                    me.feedbackElement.hide();
                                }
                                treeInstance._autoScrollTimer = setInterval(function () {
                                    var scrolled = treeInstance.panelInstance.scrollUp();
                                    var treeElements = treeInstance.host.find('.draggable');
                                    treeInstance._syncItems(treeElements);
                                    if (!scrolled) clearInterval(treeInstance._autoScrollTimer);
                                }, 100);
                            }
                            else if (mouseCoordinates.top > bottom && mouseCoordinates.top < bottom + 30) {
                                clearInterval(treeInstance._autoScrollTimer);
                                if (vScrollInstance.value != vScrollInstance.max) {
                                    me.feedbackElement.hide();
                                }

                                treeInstance._autoScrollTimer = setInterval(function () {
                                    var scrolled = treeInstance.panelInstance.scrollDown();
                                    var treeElements = treeInstance.host.find('.draggable');
                                    treeInstance._syncItems(treeElements);
                                    if (!scrolled) clearInterval(treeInstance._autoScrollTimer);
                                }, 100);
                            }
                            else {
                                clearInterval(treeInstance._autoScrollTimer);
                            }
                        }
                        else {
                            clearInterval(treeInstance._autoScrollTimer);
                        }
                    });
                    if (outsideTree) {
                        if (me.feedbackElement) {
                            me.feedbackElement.hide();
                        }
                    }
                });
            },

            _handleDragEnd: function (elements, me) {
                elements.off('dragEnd');
                elements.on('dragEnd', function (event) {
                    var elements = me.host.find('.draggable');
                    clearInterval(me._autoScrollTimer);
                    var position = event.args.position;
                    var trees = me._trees;
                    var tree = null;
                    var _isTouchDevice = $.jqx.mobile.isTouchDevice();
                    var mouseCoordinates = _isTouchDevice ? me._lastDraggingPosition : me._getMouseCoordinates(event);

                    me.feedbackElement.remove();
                    if (me._dragCancel)
                        return false;

                    if (me._dragOverItem) {
                        me._dragOverItem.titleElement.removeClass(me.toThemeProperty('jqx-fill-state-hover'));
                    }

                    $.each(trees, function () {
                        if ($.jqx.isHidden($(this)))
                            return true;

                        var left = parseInt($(this).offset().left);
                        var right = left + $(this).width();
                        var treeInstance = $.data(this, "jqxTree").instance;
                        clearInterval(treeInstance._autoScrollTimer);
                        if (me._dragItem != null) {
                            if (mouseCoordinates.left >= left && mouseCoordinates.left < right) {
                                var top = parseInt($(this).offset().top);
                                var bottom = top + $(this).height();
                                if (mouseCoordinates.top >= top && mouseCoordinates.top <= bottom) {
                                    tree = $(this);
                                }
                            }
                        }
                    });
                    var oldItem = me._dragItem;
                    if (tree != null && tree.length > 0) {
                        var allowDrop = tree.jqxTree('allowDrop');
                        if (allowDrop) {
                            var treeInstance = $.data(tree[0], "jqxTree").instance;
                            var item = me._dragOverItem;
                            if (item != null && me._dragOverItem.treeInstance.element.id == treeInstance.element.id) {
                                var result = true;
                                if (me.dragEnd) {
                                    result = me.dragEnd(oldItem, item, event.args, me._dropPosition, tree);
                                    if (result == false) {
                                        $(event.args.element).jqxDragDrop({ triggerEvents: false });
                                        $(event.args.element).jqxDragDrop('cancelDrag');
                                        clearInterval(me._autoScrollTimer);
                                        $(event.args.element).jqxDragDrop({ triggerEvents: true });
                                    }
                                    if (undefined == result) result = true;
                                }
                                if (result) {
                                    var updateSourceTree = function () {
                                        var oldTreeInstance = me._dragItem.treeInstance;
                                        oldTreeInstance._refreshMapping();
                                        oldTreeInstance._updateItemsNavigation();
                                        oldTreeInstance._render(true, false);
                                        if (oldTreeInstance.checkboxes) {
                                            oldTreeInstance._updateCheckStates();
                                        }
                                        me._dragItem.treeInstance = treeInstance;
                                        me._syncItems(me._dragItem.treeInstance.host.find('.draggable'));
                                        //       oldTreeInstance._enableDragDrop();
                                    }

                                    if (treeInstance.dropAction != 'none') {
                                        if (me._dragItem.id != me._dragOverItem.id) {
                                            if (me._dropPosition == 'inside') {
                                                treeInstance._drop(me._dragItem.element, me._dragOverItem.element, -1, treeInstance);
                                                updateSourceTree();
                                            }
                                            else {
                                                var offset = 0;
                                                if (me._dropPosition == 'after') offset++;
                                                treeInstance._drop(me._dragItem.element, me._dragOverItem.parentElement, offset + $(me._dragOverItem.element).index(), treeInstance);
                                                updateSourceTree();
                                            }
                                        }
                                    }

                                    treeInstance._render(true, false);
                                    var treeElements = treeInstance.host.find('.draggable');
                                    me._syncItems(treeElements);
                                    me._dragOverItem = null;
                                    me._dragItem = null;
                                    treeInstance._refreshMapping();
                                    treeInstance._updateItemsNavigation();
                                    treeInstance.selectedItem = null;
                                    treeInstance.selectItem(oldItem.element);
                                    if (treeInstance.checkboxes) {
                                        treeInstance._updateCheckStates();
                                    }
                                    treeInstance._render(true, false);
                                    //      treeInstance._enableDragDrop();
                                }
                            }
                            else {
                                if (treeInstance.dropAction != 'none') {
                                    if (treeInstance.allowDrop) {
                                        var result = true;
                                        if (me.dragEnd) {
                                            result = me.dragEnd(oldItem, item, event.args, me._dropPosition, tree);
                                            if (result == false) {
                                                $(event.args.element).jqxDragDrop({ triggerEvents: false });
                                                $(event.args.element).jqxDragDrop('cancelDrag');
                                                clearInterval(me._autoScrollTimer);
                                                $(event.args.element).jqxDragDrop({ triggerEvents: true });
                                            }
                                            if (undefined == result) result = true;
                                        }
                                        if (result) {
                                            me._dragItem.parentElement = null;
                                            treeInstance._drop(me._dragItem.element, null, -1, treeInstance);
                                            var oldInstance = me._dragItem.treeInstance;
                                            oldInstance._refreshMapping();
                                            oldInstance._updateItemsNavigation();
                                            if (oldInstance.checkboxes) {
                                                oldInstance._updateCheckStates();
                                            }
                                            var treeElements = oldInstance.host.find('.draggable');
                                            me._syncItems(treeElements);
                                            me._dragItem.treeInstance = treeInstance;
                                            treeInstance.items[treeInstance.items.length] = me._dragItem;
                                            treeInstance._render(true, false);
                                            treeInstance._refreshMapping();
                                            treeInstance.selectItem(oldItem.element);
                                            treeInstance._updateItemsNavigation();
                                            var treeElements = treeInstance.host.find('.draggable');
                                            treeInstance._syncItems(treeElements);
                                            if (treeInstance.checkboxes) {
                                                treeInstance._updateCheckStates();
                                            }
                                            me._dragOverItem = null;
                                            me._dragItem = null;
                                            //          treeInstance._enableDragDrop();
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (me.dragEnd) {
                            var dropResult = me.dragEnd(oldItem, event.args);
                            if (false == dropResult) {
                                return false;
                            }
                        }
                    }
                    if (oldItem != null) {
                        me._raiseEvent(7, { label: oldItem.label, value: oldItem.value, originalEvent: event.args });
                    }
                    return false;
                });
            },

            _drop: function (element, parentElement, index, treeInstance) {
                if ($(parentElement).parents('#' + element.id).length > 0)
                    return;

                if (parentElement != null) {
                    if (parentElement.id == element.id)
                        return;
                }

                var me = this;
                if (treeInstance.element.innerHTML.indexOf('UL')) {
                    var innerElement = treeInstance.host.find('ul:first');
                }

                if (parentElement == undefined && parentElement == null) {
                    if (index == undefined || index == -1) {
                        innerElement.append(element);
                    }
                    else {
                        if (innerElement.children('li').eq(index).length == 0) {
                            innerElement.children('li').eq(index - 1).after(element);
                        }
                        else {
                            if (innerElement.children('li').eq(index)[0].id != element.id) {
                                innerElement.children('li').eq(index).before(element);
                            }
                        }
                    }
                }
                else if (index == undefined || index == -1) {
                    parentElement = $(parentElement);
                    var parentUL = parentElement.find('ul:first');
                    if (parentUL.length == 0) {
                        var ulElement = $('<ul></ul>');
                        $(parentElement).append(ulElement);
                        parentUL = parentElement.find('ul:first');
                        var item = treeInstance.itemMapping["id" + parentElement[0].id].item;
                        item.subtreeElement = parentUL[0];
                        item.hasItems = true;
                        parentUL.addClass(treeInstance.toThemeProperty('jqx-tree-dropdown'));
                        parentUL.append(element);
                        element = parentUL.find('li:first');
                        item.parentElement = element;
                    }
                    else {
                        parentUL.append(element);
                    }
                }
                else {
                    parentElement = $(parentElement);
                    var parentUL = parentElement.find('ul:first');
                    if (parentUL.length == 0) {
                        var ulElement = $('<ul></ul>');
                        $(parentElement).append(ulElement);
                        parentUL = parentElement.find('ul:first');
                        if (parentElement) {
                            var item = treeInstance.itemMapping["id" + parentElement[0].id].item;
                            item.subtreeElement = parentUL[0];
                            item.hasItems = true;
                        }

                        parentUL.addClass(treeInstance.toThemeProperty('jqx-tree-dropdown'));
                        parentUL.append(element);
                        element = parentUL.find('li:first');
                        item.parentElement = element;
                    }
                    else {
                        if (parentUL.children('li').eq(index).length == 0) {
                            parentUL.children('li').eq(index - 1).after(element);
                        }
                        else {
                            if (parentUL.children('li').eq(index)[0].id != element.id) {
                                parentUL.children('li').eq(index).before(element);
                            }
                        }
                    }
                }
            },

            _enableDragDrop: function () {
                if (this.allowDrag && this.host.jqxDragDrop) {
                    var elements = this.host.find('.draggable');
                    var me = this;

                    if (elements.length > 0) {
                        elements.jqxDragDrop({
                            cursor: 'arrow', revertDuration: 0, appendTo: 'body', dragZIndex: 99999, revert: true,
                            initFeedback: function (feedback) {
                                var title = $('<span style="white-space: nowrap;" class="' + me.toThemeProperty('jqx-fill-state-normal') + '">' + feedback.text() + '</span>');
                                $(document.body).append(title);
                                var width = title.width();
                                title.remove();
                                feedback.width(width + 5);
                                feedback.addClass(me.toThemeProperty('jqx-fill-state-pressed'));
                            }
                        });
                        var destroyed = elements.jqxDragDrop('isDestroyed');
                        if (destroyed === true) {
                            elements.jqxDragDrop('_createDragDrop');
                        }

                        this._autoScrollTimer = null;
                        me._dragItem = null;
                        me._handleDragStart(elements, me);
                        me._handleDragging(elements, me);
                        me._handleDragEnd(elements, me);
                    }
                }
            }
        });
    }
})(jqxBaseFramework);
})();



















/***/ }),

/***/ 678:
/***/ (() => {

/* tslint:disable */
/* eslint-disable */
(function () {
    if (typeof document === 'undefined') {
        return;
    }

    (function ($) {

        $.jqx.jqxWidget("jqxPanel", "", {});

        $.extend($.jqx._jqxPanel.prototype, {

            defineInstance: function () {
                var settings = {
                    //Type: String.
                    //Default: null.
                    //Sets the panel width.
                    width: null,
                    //Type: String.
                    //Default: null.
                    //Sets the panel height.
                    height: null,
                    // gets or sets whether the panel is disabled.
                    disabled: false,
                    // Type: Number
                    // Default: 15
                    // gets or sets the scrollbars size.
                    scrollBarSize: $.jqx.utilities.scrollBarSize,
                    // Type: String
                    // Default: 'fixed'
                    // Sets the sizing mode. In the 'fixed' mode, the panel displays scrollbars, if its content requires it. 
                    // In the wrap mode, the scrollbars are not displayed and the panel automatically changes its size.
                    // Possible Values: 'fixed', 'wrap'
                    sizeMode: 'fixed',
                    // Type: Boolean
                    // Default: false
                    // Automatically updates the panel, if its children size is changed.
                    autoUpdate: false,
                    // Type: Number
                    // Default: 500
                    // Gets or sets the autoUpdate interval.
                    autoUpdateInterval: 500,
                    touchMode: 'auto',
                    horizontalScrollBarMax: null,
                    verticalScrollBarMax: null,
                    touchModeStyle: 'auto',
                    rtl: false,
                    focused: false,
                    // jqxPanel events.
                    events:
                        [
                            // occurs when the layout is performed.
                            'layout'
                        ]
                };
                if (this === $.jqx._jqxPanel.prototype) {
                    return settings;
                }
                $.extend(true, this, settings);
                return settings;
            },

            // creates a new jqxPanel instance.
            createInstance: function (args) {
                this.render();
            },

            render: function () {
                var self = this;
                if ($.jqx.utilities.scrollBarSize != 15) {
                    this.scrollBarSize = $.jqx.utilities.scrollBarSize;
                }
                this.host.addClass(this.toThemeProperty("jqx-panel"));
                this.host.addClass(this.toThemeProperty("jqx-widget"));
                this.host.addClass(this.toThemeProperty("jqx-widget-content"));
                this.host.addClass(this.toThemeProperty("jqx-rc-all"));

                var panelStructure = "<div id='panelWrapper' style='overflow: hidden; width: 100%; height: 100%; background-color: transparent; -webkit-appearance: none; outline: none; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'>" +
                    "<div id='panelContent' style='-webkit-appearance: none; -moz-box-sizing: border-box; box-sizing: border-box; width: 100%; height: 100%; outline: none; border: none; padding: 0px; position: absolute; margin: 0px; align:left; valign:top; left: 0px; top: 0px;'></div>" +
                    "<div id='verticalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>" +
                    "<div id='horizontalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>" +
                    "<div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>" +
                    "</div>";

                if (!this.host.jqxButton) {
                    throw new Error("jqxPanel: Missing reference to jqxbuttons.js.");
                }
                if (!this.host.jqxScrollBar) {
                    throw new Error("jqxPanel: Missing reference to jqxscrollbar.js.");
                }

                var children = this.host.children();
                this._rtl = false;
                if (children.length > 0 && children.css('direction') == 'rtl') {
                    this.rtl = true;
                    this._rtl = true;
                }

                this.host.wrapInner(panelStructure);
                var verticalScrollBar = this.host.find("#verticalScrollBar");
                verticalScrollBar[0].id = this.element.id + 'verticalScrollBar';

                this.vScrollBar = verticalScrollBar.jqxScrollBar({ 'vertical': true, rtl: this.rtl, touchMode: this.touchMode, theme: this.theme });
                var horizontalScrollBar = this.host.find("#horizontalScrollBar");
                horizontalScrollBar[0].id = this.element.id + 'horizontalScrollBar';
                this.hScrollBar = horizontalScrollBar.jqxScrollBar({ 'vertical': false, rtl: this.rtl, touchMode: this.touchMode, theme: this.theme });
                this.content = this.host.find("#panelContent");
                this.wrapper = this.host.find("#panelWrapper");
                this.content.addClass(this.toThemeProperty('jqx-widget-content'));
                this.wrapper[0].id = this.wrapper[0].id + this.element.id;
                this.content[0].id = this.content[0].id + this.element.id;
                this.bottomRight = this.host.find("#bottomRight").addClass(this.toThemeProperty('jqx-panel-bottomright')).addClass(this.toThemeProperty('jqx-scrollbar-state-normal'));
                this.bottomRight[0].id = 'bottomRight' + this.element.id;

                this.vScrollBar.css('visibility', 'inherit');
                this.hScrollBar.css('visibility', 'inherit');
                this.vScrollInstance = $.data(this.vScrollBar[0], 'jqxScrollBar').instance;
                this.hScrollInstance = $.data(this.hScrollBar[0], 'jqxScrollBar').instance;

                var me = this;
                this.propertyChangeMap['disabled'] = function (instance, key, oldVal, value) {
                    me.vScrollBar.jqxScrollBar({ disabled: me.disabled });
                    me.hScrollBar.jqxScrollBar({ disabled: me.disabled });
                };

                this.vScrollBar.jqxScrollBar({ disabled: this.disabled });
                this.hScrollBar.jqxScrollBar({ disabled: this.disabled });

                this._addHandlers();

                if (this.width == null) this.width = this.content.width();
                if (this.height == null) this.height = this.content.height();

                this._arrange();

                this.contentWidth = me.content[0].scrollWidth;
                this.contentHeight = me.content[0].scrollHeight;

                if (this.autoUpdate) {
                    me._autoUpdate();
                }

                this.propertyChangeMap['autoUpdate'] = function (instance, key, oldVal, value) {
                    if (me.autoUpdate) {
                        me._autoUpdate();
                    }
                    else {
                        clearInterval(me.autoUpdateId);
                        me.autoUpdateId = null;
                    }
                }
                /*
                            // unload
                            this.addHandler($(window), 'unload', function () {
                                if (me.autoUpdateId != null) {
                                    clearInterval(me.autoUpdateId);
                                    me.autoUpdateId = null;
                                    me.destroy();
                                }
                            });*/

                this._updateTouchScrolling();
                this._render();
            },

            hiddenParent: function () {
                return $.jqx.isHidden(this.host);
            },

            _updateTouchScrolling: function () {
                var self = this;
                if (this.touchMode == true) {
                    $.jqx.mobile.setMobileSimulator(this.element);
                }

                var isTouchDevice = this.isTouchDevice();
                if (isTouchDevice) {
                    $.jqx.mobile.touchScroll(this.element, self.vScrollInstance.max, function (left, top) {
                        if (self.vScrollBar.css('visibility') != 'hidden' && top != null) {
                            var oldValue = self.vScrollInstance.value;
                            self.vScrollInstance.setPosition(top);
                        }
                        if (self.hScrollBar.css('visibility') != 'hidden' && left != null) {
                            var oldValue = self.hScrollInstance.value;
                            self.hScrollInstance.setPosition(left);
                        }
                    }, this.element.id, this.hScrollBar, this.vScrollBar);
                    this._arrange();
                }

                this.vScrollBar.jqxScrollBar({ touchMode: this.touchMode });
                this.hScrollBar.jqxScrollBar({ touchMode: this.touchMode });
            },

            isTouchDevice: function () {
                var isTouchDevice = $.jqx.mobile.isTouchDevice();
                if (this.touchMode == true) {
                    isTouchDevice = true;
                }
                else if (this.touchMode == false) {
                    isTouchDevice = false;
                }
                if (isTouchDevice && this.touchModeStyle != false) {
                    this.scrollBarSize = $.jqx.utilities.touchScrollBarSize;
                }
                return isTouchDevice;
            },

            // append element.
            // @param element
            append: function (element) {
                if (element != null) {
                    this.content.append(element);
                    this._arrange();
                }
            },

            setcontent: function (html) {
                this.content[0].innerHTML = html;
                this._arrange();
                var that = this;
                setTimeout(function () {
                    that._arrange();
                }, 100);
            },

            // prepend element.
            // @param element
            prepend: function (element) {
                if (element != null) {
                    this.content.prepend(element);
                    this._arrange();
                }
            },

            // clears the content.
            clearcontent: function () {
                this.content.text('');
                this.content.children().remove();
                this._arrange();
            },

            // remove element.
            // @param element
            remove: function (element) {
                if (element != null) {
                    $(element).remove();
                    this._arrange();
                }
            },

            _autoUpdate: function () {
                var me = this;
                this.autoUpdateId = setInterval(function () {
                    var newWidth = me.content[0].scrollWidth;
                    var newHeight = me.content[0].scrollHeight;
                    var doarrange = false;
                    if (me.contentWidth != newWidth) {
                        me.contentWidth = newWidth;
                        doarrange = true;
                    }

                    if (me.contentHeight != newHeight) {
                        me.contentHeight = newHeight;
                        doarrange = true;
                    }

                    //    if ($.jqx.browser.mozilla) doarrange = true;
                    if (doarrange) {
                        me._arrange();
                    }
                }, this.autoUpdateInterval);
            },

            _addHandlers: function () {
                var self = this;
                this.addHandler(this.vScrollBar, 'valueChanged', function (event) {
                    self._render(self);
                });

                this.addHandler(this.hScrollBar, 'valueChanged', function (event) {
                    self._render(self);
                });

                this.addHandler(this.host, 'mousewheel', function (event) {
                    self.wheel(event, self);
                });

                this.addHandler(this.wrapper, 'scroll', function (event) {
                    if (self.wrapper[0].scrollTop != 0) {
                        self.wrapper[0].scrollTop = 0;
                    }

                    if (self.wrapper[0].scrollLeft != 0) {
                        self.wrapper[0].scrollLeft = 0;
                    }
                });

                this.addHandler(this.host, 'mouseleave', function (event) {
                    self.focused = false;
                });

                this.addHandler(this.host, 'focus', function (event) {
                    self.focused = true;
                });

                this.addHandler(this.host, 'blur', function (event) {
                    self.focused = false;
                });

                this.addHandler(this.host, 'mouseenter', function (event) {
                    self.focused = true;
                });
                $.jqx.utilities.resize(this.host, function () {
                    if ($.jqx.isHidden(self.host))
                        return;

                    self._arrange(false);
                });
            },

            resize: function (width, height) {
                this.width = width;
                this.height = height;
                this._arrange(false);
            },

            _removeHandlers: function () {
                var self = this;
                this.removeHandler(this.vScrollBar, 'valueChanged');
                this.removeHandler(this.hScrollBar, 'valueChanged');
                this.removeHandler(this.host, 'mousewheel');
                this.removeHandler(this.host, 'mouseleave');
                this.removeHandler(this.host, 'focus');
                this.removeHandler(this.host, 'blur');
                this.removeHandler(this.host, 'mouseenter');
                this.removeHandler(this.wrapper, 'scroll');
                this.removeHandler($(window), 'resize.' + this.element.id);
            },

            // performs mouse wheel.
            wheel: function (event, self) {
                var delta = 0;
                // fix for IE8 and IE7
                if (event.originalEvent && $.jqx.browser.msie && event.originalEvent.wheelDelta) {
                    delta = event.originalEvent.wheelDelta / 120;
                }

                if (!event) /* For IE. */
                    event = window.event;
                if (event.wheelDelta) { /* IE/Opera. */
                    delta = event.wheelDelta / 120;
                } else if (event.detail) { /** Mozilla case. */
                    delta = -event.detail / 3;
                }

                if (delta) {
                    var result = self._handleDelta(delta);

                    if (!result) {
                        if (event.preventDefault)
                            event.preventDefault();
                    }

                    if (!result) {
                        return result;
                    }
                    else return false;
                }

                if (event.preventDefault)
                    event.preventDefault();
                event.returnValue = false;
            },

            // scrolls down.
            scrollDown: function () {
                if (this.vScrollBar.css('visibility') == 'hidden')
                    return false;

                var vScrollInstance = this.vScrollInstance;
                if (vScrollInstance.value + vScrollInstance.largestep <= vScrollInstance.max) {
                    vScrollInstance.setPosition(vScrollInstance.value + vScrollInstance.largestep);
                    return true;
                }
                else {
                    if (vScrollInstance.value + vScrollInstance.largestep != vScrollInstance.max) {
                        vScrollInstance.setPosition(vScrollInstance.max);
                        return true;
                    }
                }

                return false;
            },

            // scrolls up.
            scrollUp: function () {
                if (this.vScrollBar.css('visibility') == 'hidden')
                    return false;

                var vScrollInstance = this.vScrollInstance;
                if (vScrollInstance.value - vScrollInstance.largestep >= vScrollInstance.min) {
                    vScrollInstance.setPosition(vScrollInstance.value - vScrollInstance.largestep);
                    return true;
                }
                else {
                    if (vScrollInstance.value - vScrollInstance.largestep != vScrollInstance.min) {
                        vScrollInstance.setPosition(vScrollInstance.min);
                        return true;
                    }
                }
                return false;
            },

            _handleDelta: function (delta) {
                if (this.focused) {
                    var oldvalue = this.vScrollInstance.value;
                    if (delta < 0) {
                        this.scrollDown();
                    }
                    else this.scrollUp();
                    var newvalue = this.vScrollInstance.value;
                    if (oldvalue != newvalue) {
                        return false;
                    }
                }

                return true;
            },

            _render: function (self) {
                if (self == undefined) self = this;
                var vScroll = self.vScrollInstance.value;
                var hScroll = self.hScrollInstance.value;
                if (this.rtl) {
                    if (this.hScrollBar[0].style.visibility != 'hidden') {
                        if (this._rtl == false) {
                            hScroll = self.hScrollInstance.max - hScroll;
                        }
                        else {
                            hScroll = -self.hScrollInstance.value;
                        }
                    }
                }
                self.content.css({ left: -hScroll + 'px', top: -vScroll + 'px' });
            },

            // Moves the scrollbars to a specific position.
            // @param left. Specifies the horizontal scrollbar position.
            // @param top. Specifies the vertical scrollbar position.
            scrollTo: function (left, top) {
                if (left == undefined || top == undefined)
                    return;

                this.vScrollInstance.setPosition(top);
                this.hScrollInstance.setPosition(left);
            },

            // Gets scrollable height.
            getScrollHeight: function () {
                return this.vScrollInstance.max;
            },

            // Gets vertical scroll position.
            getVScrollPosition: function () {
                return this.vScrollInstance.value;
            },

            // Gets scrollable width.
            getScrollWidth: function () {
                return this.hScrollInstance.max;
            },

            // gets the horizontal scroll position.
            getHScrollPosition: function () {
                return this.hScrollInstance.value;
            },

            _getScrollSize: function () {
                // scrollbar Size.
                var scrollSize = this.scrollBarSize;
                if (isNaN(scrollSize)) {
                    scrollSize = parseInt(scrollSize);
                    if (isNaN(scrollSize)) {
                        scrollSize = '17px';
                    }
                    else scrollSize = scrollSize + 'px';
                }

                if (this.isTouchDevice()) {
                    scrollSize = $.jqx.utilities.touchScrollBarSize;
                }

                scrollSize = parseInt(scrollSize);
                return scrollSize;
            },

            _getScrollArea: function () {
                var contentLeft = 0;
                this.content.css('margin-right', '0px');
                this.content.css('max-width', '9999999px');
                if ($.jqx.browser.msie && $.jqx.browser.version < 10) {
                    contentLeft = parseInt(this.content.css('left'));
                    this.content.css('left', 0);
                }
                this.content.css('overflow', 'auto');
                if (this.rtl) {
                    this.content.css('direction', 'rtl');
                }
                var contentWidth = parseInt(this.content[0].scrollWidth);
                $.each(this.content.children(), function () {
                    contentWidth = Math.max(contentWidth, this.scrollWidth);
                    contentWidth = Math.max(contentWidth, $(this).outerWidth());
                });
                if ($.jqx.browser.msie && $.jqx.browser.version < 10) {
                    this.content.css('left', contentLeft);
                }

                var contentHeight = parseInt(this.content[0].scrollHeight);
                this.content.css('overflow', 'visible');

                if ($.jqx.browser.msie && $.jqx.browser.version < 9) {
                    var contentHeight = parseInt(this.content[0].scrollHeight);

                    switch (this.sizeMode) {
                        case "wrap":
                            var contentHeight = parseInt(this.content[0].scrollHeight);
                            var contentWidth = parseInt(this.content[0].scrollWidth);
                            break;
                        case "horizontalWrap":
                        case "horizontalwrap":
                            break;
                        case "verticalWrap":
                        case "verticalwrap":
                            var contentHeight = parseInt(this.content[0].scrollHeight);
                            break;
                    }
                }
                if (this.rtl) {
                    this.content.css('direction', 'ltr');
                }

                return { width: contentWidth, height: contentHeight };
            },

            _arrange: function (updateDefaultSize) {
                if (updateDefaultSize !== false) {
                    if (this.width != null) {
                        this.host.width(this.width);
                    }
                    if (this.height != null) {
                        this.host.height(this.height);
                    }
                }

                var scrollSize = this._getScrollSize();
                var width = this.host.width();
                var height = this.host.height();
                var contentArea = this._getScrollArea();
                var contentWidth = contentArea.width;
                var contentHeight = contentArea.height;
                var vScrollMaximum = contentHeight - parseInt(Math.round(this.host.height()));
                var hScrollMaximum = contentWidth - parseInt(Math.round(this.host.width()));
                // sync with user defined horizontalScrollBarMax and verticalScrollBarMax
                if (this.horizontalScrollBarMax != undefined) {
                    hScrollMaximum = this.horizontalScrollBarMax;
                }
                if (this.verticalScrollBarMax != undefined) {
                    vScrollMaximum = this.verticalScrollBarMax;
                }

                var updateVScrollVisibility = function (that, vScrollMaximum) {
                    var borderOffset = 5;
                    // update vertical scroll's visibility.
                    if (vScrollMaximum > borderOffset) {
                        that.vScrollBar.jqxScrollBar({ 'max': vScrollMaximum });
                        that.vScrollBar.css('visibility', 'inherit');
                    }
                    else {
                        that.vScrollBar.jqxScrollBar('setPosition', 0);
                        that.vScrollBar.css('visibility', 'hidden');
                    }
                }

                var updateHScrollVisibility = function (that, hScrollMaximum) {
                    // update horizontal scroll's visibility.
                    if (hScrollMaximum > 0) {
                        if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                            if (hScrollMaximum - 10 <= scrollSize) {
                                that.hScrollBar.css('visibility', 'hidden');
                                that.hScrollBar.jqxScrollBar('setPosition', 0);
                            }
                            else {
                                that.hScrollBar.jqxScrollBar({ 'max': hScrollMaximum + 4 });
                                that.hScrollBar.css('visibility', 'inherit');
                            }
                        }
                        else {
                            that.hScrollBar.jqxScrollBar({ 'max': hScrollMaximum + 4 });
                            that.hScrollBar.css('visibility', 'inherit');
                        }
                    }
                    else {
                        that.hScrollBar.css('visibility', 'hidden');
                        that.hScrollBar.jqxScrollBar('setPosition', 0);
                    }
                }

                switch (this.sizeMode) {
                    case "wrap":
                        this.host.width(contentWidth);
                        this.host.height(contentHeight);
                        this.vScrollBar.css('visibility', 'hidden');
                        this.hScrollBar.css('visibility', 'hidden');
                        return;
                    case "horizontalWrap":
                    case "horizontalwrap":
                        this.host.width(contentWidth);
                        this.hScrollBar.css('visibility', 'hidden');
                        updateVScrollVisibility(this, vScrollMaximum);
                        this._arrangeScrollbars(scrollSize, contentWidth, height);
                        return;
                    case "verticalWrap":
                    case "verticalwrap":
                        this.host.height(contentHeight);
                        this.vScrollBar.css('visibility', 'hidden');
                        updateHScrollVisibility(this, hScrollMaximum);
                        this._arrangeScrollbars(scrollSize, width, height);
                        return;
                }

                updateVScrollVisibility(this, vScrollMaximum);

                var borderSize = 2;
                // set maximum values.
                if (this.vScrollBar.css('visibility') != 'hidden') {
                    if (this.horizontalScrollBarMax == undefined) {
                        if ((!this.isTouchDevice() && hScrollMaximum > 0) || (hScrollMaximum > 0)) {
                            hScrollMaximum += scrollSize + borderSize;
                        }
                    }
                }
                updateHScrollVisibility(this, hScrollMaximum);

                if (this.hScrollBar.css('visibility') != 'hidden') {
                    this.vScrollBar.jqxScrollBar({ 'max': vScrollMaximum + scrollSize + borderSize });
                }

                this._arrangeScrollbars(scrollSize, width, height);
            },

            _arrangeScrollbars: function (scrollSize, width, height) {
                var vscrollVisible = this.vScrollBar[0].style.visibility != 'hidden';
                var hscrollVisible = this.hScrollBar[0].style.visibility != 'hidden';

                var borderSize = 2;
                var scrollBorderSize = 2;

                this.hScrollBar.height(scrollSize);
                this.hScrollBar.css({ top: height - scrollSize - borderSize - scrollBorderSize + 'px', left: '0px' });
                this.hScrollBar.width(width - borderSize + 'px');

                this.vScrollBar.width(scrollSize);
                this.vScrollBar.height(parseInt(height) - borderSize + 'px');
                this.vScrollBar.css({ left: parseInt(width) - parseInt(scrollSize) - borderSize - scrollBorderSize + 'px', top: '0px' });
                if (this.rtl) {
                    this.vScrollBar.css({ left: '0px' });
                    var leftMargin = vscrollVisible ? parseInt(scrollSize) + 'px' : 0;
                    if (this.content.children().css('direction') != 'rtl') {
                        var ie7 = false;
                        if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                            ie7 = true;
                        }
                        if (!ie7) {
                            this.content.css('padding-left', leftMargin);
                        }
                    }
                }
                else {
                    if (this.vScrollBar.css('visibility') != 'hidden') {
                        this.content.css('max-width', this.host.width() - this.vScrollBar.outerWidth());
                    }
                }

                if ((this.vScrollBar.css('visibility') != 'hidden') && (this.hScrollBar.css('visibility') != 'hidden')) {
                    this.bottomRight.css('visibility', 'inherit');
                    this.bottomRight.css({ left: 1 + parseInt(this.vScrollBar.css('left')), top: 1 + parseInt(this.hScrollBar.css('top')) });
                    this.bottomRight.width(parseInt(scrollSize) + 3);
                    this.bottomRight.height(parseInt(scrollSize) + 3);
                    if (this.rtl) {
                        this.bottomRight.css({ left: '0px' });
                        this.hScrollBar.css({ left: scrollSize + scrollBorderSize + 'px' });
                    }
                    this.hScrollBar.width(width - (1 * scrollSize) - borderSize - scrollBorderSize + 'px');
                    this.vScrollBar.height(parseInt(height) - borderSize - scrollSize - scrollBorderSize + 'px');
                }
                else this.bottomRight.css('visibility', 'hidden');
                this.hScrollInstance.refresh();
                this.vScrollInstance.refresh();
            },

            destroy: function () {
                clearInterval(this.autoUpdateId);
                this.autoUpdateId = null;
                this.autoUpdate = false;
                $.jqx.utilities.resize(this.host, null, true);
                this._removeHandlers();
                //    this.removeHandler($(window), 'unload');
                this.vScrollBar.jqxScrollBar('destroy');
                this.hScrollBar.jqxScrollBar('destroy');
                this.host.remove();
            },

            _raiseevent: function (id, oldValue, newValue) {
                if (this.isInitialized != undefined && this.isInitialized == true) {
                    var evt = this.events[id];
                    var event = new $.Event(evt);
                    event.previousValue = oldValue;
                    event.currentValue = newValue;
                    event.owner = this;
                    var result = this.host.trigger(event);
                    return result;
                }
            },

            beginUpdateLayout: function () {
                this.updating = true;
            },

            resumeUpdateLayout: function () {
                this.updating = false;
                this.vScrollInstance.value = 0;
                this.hScrollInstance.value = 0;
                this._arrange();
                this._render();
            },

            propertyChangedHandler: function (object, key, oldValue, value) {
                if (!object.isInitialized)
                    return;

                if (key == 'rtl') {
                    this.vScrollBar.jqxScrollBar({ rtl: value });
                    this.hScrollBar.jqxScrollBar({ rtl: value });
                    object._arrange();
                }

                if (!object.updating) {
                    if (key == 'scrollBarSize' || key == 'width' || key == 'height') {
                        if (oldValue != value) {
                            object._arrange();
                        }
                    }
                }
                if (key == 'touchMode') {
                    if (value != 'auto') {
                        object._updateTouchScrolling();
                    }
                }
                if (key == 'theme') {
                    object.host.removeClass();
                    object.host.addClass(this.toThemeProperty("jqx-panel"));
                    object.host.addClass(this.toThemeProperty("jqx-widget"));
                    object.host.addClass(this.toThemeProperty("jqx-widget-content"));
                    object.host.addClass(this.toThemeProperty("jqx-rc-all"));
                    object.vScrollBar.jqxScrollBar({ theme: this.theme });
                    object.hScrollBar.jqxScrollBar({ theme: this.theme });
                    object.bottomRight.removeClass();
                    object.bottomRight.addClass(this.toThemeProperty('jqx-panel-bottomright'));
                    object.bottomRight.addClass(this.toThemeProperty('jqx-scrollbar-state-normal'));
                    object.content.removeClass();
                    object.content.addClass(this.toThemeProperty('jqx-widget-content'));
                }
            },

            invalidate: function () {
                if ($.jqx.isHidden(this.host))
                    return;

                this.refresh();
            },

            refresh: function (initialRefresh) {
                this._arrange();
            }
        });
    })(jqxBaseFramework);
})();

















/***/ }),

/***/ 4240:
/***/ (() => {

/* tslint:disable */
/* eslint-disable */
(function(){
	if (typeof document === 'undefined') { 
		return;
	}

(function ($) {
    $.jqx.jqxWidget("jqxScrollBar", "", {});

    $.extend($.jqx._jqxScrollBar.prototype, {

        defineInstance: function () {
            var settings = {
                // Type: Number
                // Default: null
                // Sets the scrollbar height.
                height: null,
                // Type: Number
                // Default: null
                // Sets the scrollbar width.
                width: null,
                // Type: Number
                // Default: false. This means that the scrollbar is horizontally oriented by default.
                // Sets the scrollbar orientation.
                vertical: false,
                // Type: Number
                // Default: 0
                // Sets the minimum scroll value.
                min: 0,
                // Type: Number
                // Default: 0
                // Sets the maximum scroll value.
                max: 1000,
                // Type: Number
                // Default: 0
                // Sets the scroll value. The value can be between min and max.
                value: 0,
                // Type: Number
                // Default: 0
                // Sets the scroll step when any arrow button is clicked.
                step: 10,
                // Type: Number
                // Default: 0
                // Sets the scroll step when the user clicks on the empty scroll space between arrow button and thumb.
                largestep: 50,
                // Type: Number
                // Default: 10
                // sets the thumb's minimum size.
                thumbMinSize: 10,
                // Type: Number
                // Default: 0
                // sets the thumb's size.
                thumbSize: 0,
                // Type: Number or 'auto'
                // Default: 'auto'
                // sets the thumb's drag step.
                thumbStep: 'auto',
                // Type: String
                // Default: 'all'
                // sets the rounded corners string.
                roundedCorners: 'all',
                // Type: Boolean
                // Default: true
                // Sets whether the scroll buttons are visible.
                showButtons: true,
                // Type: Boolean
                // Default: false
                // Sets whether the scrollbar is disabled or not.
                disabled: false,
                // Sets whether the scrollbar is on touch device.
                touchMode: 'auto',
                touchModeStyle: 'auto',
                thumbTouchSize: 0,
                // disable jquery trigger function. It is very slow if you call it on mouse move. This could improve performance.
                _triggervaluechanged: true,
                rtl: false,
                areaDownCapture: false,
                areaUpCapture: false,
                _initialLayout: false,
                offset: 0, reference: 0, velocity: 0, frame: 0, timestamp: 0, ticker: null, amplitude: 0, target: 0

            };
            if (this === $.jqx._jqxScrollBar.prototype) {
                return settings;
            }
            $.extend(true, this, settings);
            return settings;
        },

        createInstance: function (args) {
            this.render();
        }, // createInstance

        render: function () {
            this._mouseup = new Date();
            var self = this;
            var html = "<div id='jqxScrollOuterWrap' style='box-sizing: content-box; width:100%; height: 100%; align:left; border: 0px; valign:top; position: relative;'>" +
                "<div id='jqxScrollWrap' style='box-sizing: content-box; width:100%; height: 100%; left: 0px; top: 0px; align:left; valign:top; position: absolute;'>" +
                "<div id='jqxScrollBtnUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div>" +
                "<div id='jqxScrollAreaUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>" +
                "<div id='jqxScrollThumb' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>" +
                "<div id='jqxScrollAreaDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>" +
                "<div id='jqxScrollBtnDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div>" +
                "</div>" +
                "</div>";

            if ($.jqx.utilities && $.jqx.utilities.scrollBarButtonsVisibility == "hidden") {
                this.showButtons = false;
            }

            if (self.WinJS) {
                MSApp.execUnsafeLocalFunction(function () {
                    self.host.html(html);
                });
            }
            else {
                this.element.innerHTML = html;
            }

            if (this.width != undefined && parseInt(this.width) > 0) {
                this.host.width(parseInt(this.width));
            }

            if (this.height != undefined && parseInt(this.height) > 0) {
                this.host.height(parseInt(this.height));
            }
            this.isPercentage = false;
            if (this.width != null && this.width.toString().indexOf("%") != -1) {
                this.host.width(this.width);
                this.isPercentage = true;
            }

            if (this.height != null && this.height.toString().indexOf("%") != -1) {
                this.host.height(this.height);
                this.isPercentage = true;
            }
            if (this.isPercentage) {
                var that = this;
                $.jqx.utilities.resize(this.host, function () {
                    that._arrange();
                }, false);
            }
            this.thumbCapture = false;
            this.scrollOuterWrap = $(this.element.firstChild);
            this.scrollWrap = $(this.scrollOuterWrap[0].firstChild);
            this.btnUp = $(this.scrollWrap[0].firstChild);
            this.areaUp = $(this.btnUp[0].nextSibling);
            this.btnThumb = $(this.areaUp[0].nextSibling);
            this.arrowUp = $(this.btnUp[0].firstChild);
            this.areaDown = $(this.btnThumb[0].nextSibling);
            this.btnDown = $(this.areaDown[0].nextSibling);
            this.arrowDown = $(this.btnDown[0].firstChild);

            var elID = this.element.id;
            this.btnUp[0].id = "jqxScrollBtnUp" + elID;
            this.btnDown[0].id = "jqxScrollBtnDown" + elID;
            this.btnThumb[0].id = "jqxScrollThumb" + elID;
            this.areaUp[0].id = "jqxScrollAreaUp" + elID;
            this.areaDown[0].id = "jqxScrollAreaDown" + elID;
            this.scrollWrap[0].id = "jqxScrollWrap" + elID;
            this.scrollOuterWrap[0].id = "jqxScrollOuterWrap" + elID;

            if (!this.host.jqxRepeatButton) {
                throw new Error('jqxScrollBar: Missing reference to jqxbuttons.js.');
                return;
            }

            this.btnUp.jqxRepeatButton({ _ariaDisabled: true, overrideTheme: true, disabled: this.disabled });
            this.btnDown.jqxRepeatButton({ _ariaDisabled: true, overrideTheme: true, disabled: this.disabled });
            this.btnDownInstance = $.data(this.btnDown[0], 'jqxRepeatButton').instance;
            this.btnUpInstance = $.data(this.btnUp[0], 'jqxRepeatButton').instance;

            this.areaUp.jqxRepeatButton({ _scrollAreaButton: true, _ariaDisabled: true, overrideTheme: true });
            this.areaDown.jqxRepeatButton({ _scrollAreaButton: true, _ariaDisabled: true, overrideTheme: true });
            this.btnThumb.jqxButton({ _ariaDisabled: true, overrideTheme: true, disabled: this.disabled });
            this.propertyChangeMap['value'] = function (instance, key, oldVal, value) {
                if (!(isNaN(value))) {
                    if (oldVal != value) {
                        instance.setPosition(parseFloat(value), true);
                    }
                }
            }

            this.propertyChangeMap['width'] = function (instance, key, oldVal, value) {
                if (instance.width != undefined && parseInt(instance.width) > 0) {
                    instance.host.width(parseInt(instance.width));
                    instance._arrange();
                }
            }

            this.propertyChangeMap['height'] = function (instance, key, oldVal, value) {
                if (instance.height != undefined && parseInt(instance.height) > 0) {
                    instance.host.height(parseInt(instance.height));
                    instance._arrange();
                }
            }

            this.propertyChangeMap['theme'] = function (instance, key, oldVal, value) {
                instance.setTheme();
            }

            this.propertyChangeMap['max'] = function (instance, key, oldVal, value) {
                if (!(isNaN(value))) {
                    if (oldVal != value) {
                        instance.max = parseInt(value);
                        if (instance.min > instance.max)
                            instance.max = instance.min + 1;

                        instance._arrange();
                        instance.setPosition(instance.value);
                    }
                }
            }

            this.propertyChangeMap['min'] = function (instance, key, oldVal, value) {
                if (!(isNaN(value))) {
                    if (oldVal != value) {
                        instance.min = parseInt(value);
                        if (instance.min > instance.max)
                            instance.max = instance.min + 1;

                        instance._arrange();
                        instance.setPosition(instance.value);
                    }
                }
            }

            this.propertyChangeMap['disabled'] = function (instance, key, oldVal, value) {
                if (oldVal != value) {
                    if (value) {
                        instance.host.addClass(instance.toThemeProperty('jqx-fill-state-disabled'));
                    }
                    else {
                        instance.host.removeClass(instance.toThemeProperty('jqx-fill-state-disabled'));
                    }
                    instance.btnUp.jqxRepeatButton('disabled', instance.disabled);
                    instance.btnDown.jqxRepeatButton('disabled', instance.disabled);
                    instance.btnThumb.jqxButton('disabled', instance.disabled);
                }
            }

            this.propertyChangeMap['touchMode'] = function (instance, key, oldVal, value) {
                if (oldVal != value) {
                    instance._updateTouchBehavior();
                    if (value === true) {
                        instance.showButtons = false;
                        instance.refresh();
                    }
                    else if (value === false) {
                        instance.showButtons = true;
                        instance.refresh();
                    }
                }
            }

            this.propertyChangeMap['rtl'] = function (instance, key, oldVal, value) {
                if (oldVal != value) {
                    instance.refresh();
                }
            }

            this.buttonUpCapture = false;
            this.buttonDownCapture = false;
            this._updateTouchBehavior();
            this.setPosition(this.value);
            this._addHandlers();
            this.setTheme();
        },

        resize: function (width, height) {
            this.width = width;
            this.height = height;
            this._arrange();
        },

        _updateTouchBehavior: function () {
            this.isTouchDevice = $.jqx.mobile.isTouchDevice();
            if (this.touchMode == true) {
                if ($.jqx.browser.msie && $.jqx.browser.version < 9) {
                    this.setTheme();
                    return;
                }

                this.isTouchDevice = true;
                $.jqx.mobile.setMobileSimulator(this.btnThumb[0]);
                this._removeHandlers();
                this._addHandlers();
                this.setTheme();
            }
            else if (this.touchMode == false) {
                this.isTouchDevice = false;
            }
        },

        _addHandlers: function () {
            var self = this;

            var touchSupport = false;
            try {
                if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                    touchSupport = true;
                    this._touchSupport = true;
                }
            }
            catch (err) {
            }

            if (self.isTouchDevice || touchSupport) {
                this.addHandler(this.btnThumb, $.jqx.mobile.getTouchEventName('touchend'), function (event) {
                    var btnThumbPressedClass = self.vertical ? self.toThemeProperty('jqx-scrollbar-thumb-state-pressed') : self.toThemeProperty('jqx-scrollbar-thumb-state-pressed-horizontal');
                    var btnThumbPressedFillClass = self.toThemeProperty('jqx-fill-state-pressed');
                    self.btnThumb.removeClass(btnThumbPressedClass);
                    self.btnThumb.removeClass(btnThumbPressedFillClass);
                    if (!self.disabled) self.handlemouseup(self, event);
                    return false;
                });

                this.addHandler(this.btnThumb, $.jqx.mobile.getTouchEventName('touchstart'), function (event) {
                    if (!self.disabled) {
                        if (self.touchMode == true) {
                            event.clientX = event.originalEvent.clientX;
                            event.clientY = event.originalEvent.clientY;
                        }
                        else {
                            var e = event;
                            if (e.originalEvent.touches && e.originalEvent.touches.length) {
                                event.clientX = e.originalEvent.touches[0].clientX;
                                event.clientY = e.originalEvent.touches[0].clientY;
                            }
                            else {
                                event.clientX = event.originalEvent.clientX;
                                event.clientY = event.originalEvent.clientY;
                            }
                        }

                        self.handlemousedown(event);
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                    }
                });

                $.jqx.mobile.touchScroll(this.element, self.max, function (left, top, dx, dy, event) {
                    if (self.host.css('visibility') == 'visible') {
                        if (event) {
                            if (self.touchMode == true) {
                                event.clientX = event.originalEvent.clientX;
                                event.clientY = event.originalEvent.clientY;
                            }
                            else {
                                var e = event;
                                if (e.originalEvent.touches && e.originalEvent.touches.length) {
                                    event.clientX = e.originalEvent.touches[0].clientX;
                                    event.clientY = e.originalEvent.touches[0].clientY;
                                }
                                else {
                                    event.clientX = event.originalEvent.clientX;
                                    event.clientY = event.originalEvent.clientY;
                                }
                            }
                        }

                        var btnThumbPressedClass = self.vertical ? self.toThemeProperty('jqx-scrollbar-thumb-state-pressed') : self.toThemeProperty('jqx-scrollbar-thumb-state-pressed-horizontal');
                        self.btnThumb.addClass(btnThumbPressedClass);
                        self.btnThumb.addClass(self.toThemeProperty('jqx-fill-state-pressed'));
                        self.thumbCapture = true;
                        self.element.setAttribute('touched', '');
                        self.handlemousemove(event);
                    }
                }, self.element.id, self.host, self.host);
            }


            if (!this.isTouchDevice) {
                try {
                    if (document.referrer != "" || window.frameElement) {
                        if (window.top != null && window.top != window.self) {
                            var parentLocation = null;
                            if (window.parent && document.referrer) {
                                parentLocation = document.referrer;
                            }

                            if (parentLocation && parentLocation.indexOf(document.location.host) != -1) {
                                var eventHandle = function (event) {
                                    if (!self.disabled) self.handlemouseup(self, event);
                                };

                                if (window.top.document.addEventListener) {
                                    window.top.document.addEventListener('mouseup', eventHandle, false);

                                } else if (window.top.document.attachEvent) {
                                    window.top.document.attachEvent("on" + 'mouseup', eventHandle);
                                }
                            }
                        }
                    }
                }
                catch (error) {
                }
                var eventNames = 'click mouseup mousedown';

                this.addHandler(this.btnDown, eventNames, function (event) {
                    var step = self.step;

                    if (Math.abs(self.max - self.min) <= step)
                        step = 1;

                    if (self.rtl && !self.vertical)
                        step = -self.step;

                    switch (event.type) {
                        case 'click':

                            if (self.buttonDownCapture && !self.isTouchDevice) {
                                if (!self.disabled)
                                    self.setPosition(self.value + step)
                            }
                            else if (!self.disabled && self.isTouchDevice) {
                                self.setPosition(self.value + step);
                            }
                            break;
                        case 'mouseup':
                            if (!self.btnDownInstance.base.disabled && self.buttonDownCapture) {
                                self.buttonDownCapture = false;
                                self.btnDown.removeClass(self.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                                self.btnDown.removeClass(self.toThemeProperty('jqx-fill-state-pressed'));
                                self._removeArrowClasses('pressed', 'down');
                                self.handlemouseup(self, event);

                                self.setPosition(self.value + step)
                                return false;
                            }
                            break;
                        case 'mousedown':
                            if (!self.btnDownInstance.base.disabled) {
                                self.buttonDownCapture = true;
                                self.btnDown.addClass(self.toThemeProperty('jqx-fill-state-pressed'));
                                self.btnDown.addClass(self.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                                self._addArrowClasses('pressed', 'down');
                                return false;
                            }
                            break;
                    }
                });

                this.addHandler(this.btnUp, eventNames, function (event) {
                    var step = self.step;

                    if (Math.abs(self.max - self.min) <= step)
                        step = 1;

                    if (self.rtl && !self.vertical)
                        step = -self.step;

                    switch (event.type) {
                        case 'click':
                            if (self.buttonUpCapture && !self.isTouchDevice) {
                                if (!self.disabled) {
                                    self.setPosition(self.value - step);
                                }
                            }
                            else if (!self.disabled && self.isTouchDevice) {
                                self.setPosition(self.value - step);
                            }
                            break;
                        case 'mouseup':
                            if (!self.btnUpInstance.base.disabled && self.buttonUpCapture) {
                                self.buttonUpCapture = false;
                                self.btnUp.removeClass(self.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                                self.btnUp.removeClass(self.toThemeProperty('jqx-fill-state-pressed'));
                                self._removeArrowClasses('pressed', 'up');
                                self.handlemouseup(self, event);

                                self.setPosition(self.value - step)
                                return false;
                            }
                            break;
                        case 'mousedown':
                            if (!self.btnUpInstance.base.disabled) {
                                self.buttonUpCapture = true;
                                self.btnUp.addClass(self.toThemeProperty('jqx-fill-state-pressed'));
                                self.btnUp.addClass(self.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                                self._addArrowClasses('pressed', 'up');
                                return false;
                            }
                            break;
                    }
                });
            }

            var eventName = 'click';
            if (this.isTouchDevice) {
                eventName = $.jqx.mobile.getTouchEventName('touchend');
            }

            this.addHandler(this.areaUp, eventName, function (event) {
                if (!self.disabled) {
                    var step = self.largestep;
                    if (self.rtl && !self.vertical) {
                        step = -self.largestep;
                    }

                    var canSetPosition = true;
                    var thumbOffset = self.btnThumb.offset();
                    if (!self.vertical) {
                        if (self.areaClickOffset.x >= thumbOffset.left) {
                            canSetPosition = false;
                        }
                    }
                    else {
                        if (self.areaClickOffset.y >= thumbOffset.top) {
                            canSetPosition = false;
                        }
                    }

                    if (canSetPosition) {
                        self.setPosition(self.value - step);
                    }
                    return false;
                }
            });
            this.addHandler(this.areaDown, eventName, function (event) {
                if (!self.disabled) {
                    var step = self.largestep;
                    if (self.rtl && !self.vertical) {
                        step = -self.largestep;
                    }

                    var canSetPosition = true;
                    var thumbOffset = self.btnThumb.offset();
                    if (!self.vertical) {
                        if (self.areaClickOffset.x <= thumbOffset.left) {
                            canSetPosition = false;
                        }
                    }
                    else {
                        if (self.areaClickOffset.y <= thumbOffset.top) {
                            canSetPosition = false;
                        }
                    }

                    if (canSetPosition) {
                        self.setPosition(self.value + step);
                    }
                    return false;
                }
            });
            this.addHandler(this.areaUp, 'mousedown', function (event) {
                if (!self.disabled) {
                    self.areaUpCapture = true;
                    self.areaClickOffset = { x: event.pageX, y: event.pageY };
                    return false;
                }
            });
            this.addHandler(this.areaDown, 'mousedown', function (event) {
                if (!self.disabled) {
                    self.areaDownCapture = true;
                    self.areaClickOffset = { x: event.pageX, y: event.pageY };
                    return false;
                }
            });

            this.addHandler(this.btnThumb, 'mousedown dragstart', function (event) {
                if (event.type === "dragstart")
                    return false;

                if (!self.disabled) {
                    self.handlemousedown(event);
                }
                if (event.preventDefault) {
                    event.preventDefault();
                }
            });

            this.addHandler($(document), 'mouseup.' + this.element.id, function (event) {
                if (!self.disabled) self.handlemouseup(self, event);
            });

            if (!this.isTouchDevice) {
                this.mousemoveFunc = function (event) {
                    if (!self.disabled) {
                        self.handlemousemove(event);
                    }
                }

                this.addHandler($(document), 'mousemove.' + this.element.id, this.mousemoveFunc);
                this.addHandler($(document), 'mouseleave.' + this.element.id, function (event) { if (!self.disabled) self.handlemouseleave(event); });
                this.addHandler($(document), 'mouseenter.' + this.element.id, function (event) { if (!self.disabled) self.handlemouseenter(event); });

                if (!self.disabled) {
                    this.addHandler(this.btnUp, 'mouseenter mouseleave', function (event) {
                        if (event.type === "mouseenter") {
                            if (!self.disabled && !self.btnUpInstance.base.disabled && self.touchMode != true) {
                                self.btnUp.addClass(self.toThemeProperty('jqx-scrollbar-button-state-hover'));
                                self.btnUp.addClass(self.toThemeProperty('jqx-fill-state-hover'));
                                self._addArrowClasses('hover', 'up');
                            }
                        }
                        else {
                            if (!self.disabled && !self.btnUpInstance.base.disabled && self.touchMode != true) {
                                self.btnUp.removeClass(self.toThemeProperty('jqx-scrollbar-button-state-hover'));
                                self.btnUp.removeClass(self.toThemeProperty('jqx-fill-state-hover'));
                                self._removeArrowClasses('hover', 'up');
                            }
                        }
                    });

                    var thumbHoverClass = self.toThemeProperty('jqx-scrollbar-thumb-state-hover');
                    if (!self.vertical) {
                        thumbHoverClass = self.toThemeProperty('jqx-scrollbar-thumb-state-hover-horizontal');
                    }

                    this.addHandler(this.btnThumb, 'mouseenter mouseleave', function (event) {
                        if (event.type === "mouseenter") {
                            if (!self.disabled && self.touchMode != true) {
                                self.btnThumb.addClass(thumbHoverClass);
                                self.btnThumb.addClass(self.toThemeProperty('jqx-fill-state-hover'));
                            }
                        }
                        else {
                            if (!self.disabled && self.touchMode != true) {
                                self.btnThumb.removeClass(thumbHoverClass);
                                self.btnThumb.removeClass(self.toThemeProperty('jqx-fill-state-hover'));
                            }
                        }
                    });

                    this.addHandler(this.btnDown, 'mouseenter mouseleave', function (event) {
                        if (event.type === "mouseenter") {
                            if (!self.disabled && !self.btnDownInstance.base.disabled && self.touchMode != true) {
                                self.btnDown.addClass(self.toThemeProperty('jqx-scrollbar-button-state-hover'));
                                self.btnDown.addClass(self.toThemeProperty('jqx-fill-state-hover'));
                                self._addArrowClasses('hover', 'down');
                            }
                        }
                        else {
                            if (!self.disabled && !self.btnDownInstance.base.disabled && self.touchMode != true) {
                                self.btnDown.removeClass(self.toThemeProperty('jqx-scrollbar-button-state-hover'));
                                self.btnDown.removeClass(self.toThemeProperty('jqx-fill-state-hover'));
                                self._removeArrowClasses('hover', 'down');
                            }
                        }
                    });
                }
            }
        },

        destroy: function () {
            var btnUp = this.btnUp;
            var btnDown = this.btnDown;
            var btnThumb = this.btnThumb;
            var elWrap = this.scrollWrap;
            var areaUp = this.areaUp;
            var areaDown = this.areaDown;

            this.arrowUp.remove();
            delete this.arrowUp;
            this.arrowDown.remove();
            delete this.arrowDown;

            areaDown.removeClass();
            areaUp.removeClass();
            btnDown.removeClass();
            btnUp.removeClass();
            btnThumb.removeClass();

            btnUp.jqxRepeatButton('destroy');
            btnDown.jqxRepeatButton('destroy');
            areaUp.jqxRepeatButton('destroy');
            areaDown.jqxRepeatButton('destroy');
            btnThumb.jqxButton('destroy');
            var vars = $.data(this.element, "jqxScrollBar");

            this._removeHandlers();
            this.btnUp = null;
            this.btnDown = null;
            this.scrollWrap = null;
            this.areaUp = null;
            this.areaDown = null;
            this.scrollOuterWrap = null;
            delete this.mousemoveFunc;
            delete this.btnDownInstance;
            delete this.btnUpInstance;
            delete this.scrollOuterWrap;
            delete this.scrollWrap;
            delete this.btnDown;
            delete this.areaDown;
            delete this.areaUp;
            delete this.btnDown;
            delete this.btnUp;
            delete this.btnThumb;
            delete this.propertyChangeMap['value'];
            delete this.propertyChangeMap['min'];
            delete this.propertyChangeMap['max'];
            delete this.propertyChangeMap['touchMode'];
            delete this.propertyChangeMap['disabled'];
            delete this.propertyChangeMap['theme'];
            delete this.propertyChangeMap;
            if (vars) {
                delete vars.instance;
            }
            this.host.removeData();
            this.host.remove();
            delete this.host;
            delete this.set;
            delete this.get;
            delete this.call;
            delete this.element;
        },

        _removeHandlers: function () {
            this.removeHandler(this.btnUp, 'mouseenter');
            this.removeHandler(this.btnDown, 'mouseenter');
            this.removeHandler(this.btnThumb, 'mouseenter');
            this.removeHandler(this.btnUp, 'mouseleave');
            this.removeHandler(this.btnDown, 'mouseleave');
            this.removeHandler(this.btnThumb, 'mouseleave');
            this.removeHandler(this.btnUp, 'click');
            this.removeHandler(this.btnDown, 'click');
            this.removeHandler(this.btnDown, 'mouseup');
            this.removeHandler(this.btnUp, 'mouseup');
            this.removeHandler(this.btnDown, 'mousedown');
            this.removeHandler(this.btnUp, 'mousedown');
            this.removeHandler(this.areaUp, 'mousedown');
            this.removeHandler(this.areaDown, 'mousedown');
            this.removeHandler(this.areaUp, 'click');
            this.removeHandler(this.areaDown, 'click');
            this.removeHandler(this.btnThumb, 'mousedown');
            this.removeHandler(this.btnThumb, 'dragstart');
            this.removeHandler($(document), 'mouseup.' + this.element.id);
            if (!this.mousemoveFunc) {
                this.removeHandler($(document), 'mousemove.' + this.element.id);
            }
            else {
                this.removeHandler($(document), 'mousemove.' + this.element.id, this.mousemoveFunc);
            }

            this.removeHandler($(document), 'mouseleave.' + this.element.id);
            this.removeHandler($(document), 'mouseenter.' + this.element.id);
            var self = this;
        },

        _addArrowClasses: function (state, button) {
            if (state == 'pressed') state = 'selected';
            if (state != '') {
                state = '-' + state;
            }

            if (this.vertical) {
                if (button == 'up' || button == undefined) {
                    this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-up" + state));
                }

                if (button == 'down' || button == undefined) {
                    this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-down" + state));
                }
            }
            else {
                if (button == 'up' || button == undefined) {
                    this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-left" + state));
                }

                if (button == 'down' || button == undefined) {
                    this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-right" + state));
                }
            }
        },

        _removeArrowClasses: function (state, button) {
            if (state == 'pressed') state = 'selected';
            if (state != '') {
                state = '-' + state;
            }

            if (this.vertical) {
                if (button == 'up' || button == undefined) {
                    this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-up" + state));
                }

                if (button == 'down' || button == undefined) {
                    this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-down" + state));
                }
            }
            else {
                if (button == 'up' || button == undefined) {
                    this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-left" + state));
                }

                if (button == 'down' || button == undefined) {
                    this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-right" + state));
                }
            }
        },

        setTheme: function () {
            var btnUp = this.btnUp;
            var btnDown = this.btnDown;
            var btnThumb = this.btnThumb;
            var elWrap = this.scrollWrap;
            var areaUp = this.areaUp;
            var areaDown = this.areaDown;
            var arrowUp = this.arrowUp;
            var arrowDown = this.arrowDown;

            this.scrollWrap[0].className = this.toThemeProperty('jqx-reset');
            this.scrollOuterWrap[0].className = this.toThemeProperty('jqx-reset');

            var areaClassName = this.toThemeProperty('jqx-reset');
            this.areaDown[0].className = areaClassName;
            this.areaUp[0].className = areaClassName;

            var hostClass = this.toThemeProperty('jqx-scrollbar') + " " + this.toThemeProperty('jqx-widget') + " " + this.toThemeProperty('jqx-widget-content');
            this.host.addClass(hostClass);
            if (this.isTouchDevice) {
                this.host.addClass(this.toThemeProperty('jqx-scrollbar-mobile'));
            }

            btnDown[0].className = this.toThemeProperty('jqx-scrollbar-button-state-normal');
            btnUp[0].className = this.toThemeProperty('jqx-scrollbar-button-state-normal');

            var thumbClass = "";
            if (this.vertical) {
                arrowUp[0].className = areaClassName + " " + this.toThemeProperty("jqx-icon-arrow-up");
                arrowDown[0].className = areaClassName + " " + this.toThemeProperty("jqx-icon-arrow-down");
                thumbClass = this.toThemeProperty('jqx-scrollbar-thumb-state-normal');
            }
            else {
                arrowUp[0].className = areaClassName + " " + this.toThemeProperty("jqx-icon-arrow-left");
                arrowDown[0].className = areaClassName + " " + this.toThemeProperty("jqx-icon-arrow-right");
                thumbClass = this.toThemeProperty('jqx-scrollbar-thumb-state-normal-horizontal');
            }
            thumbClass += " " + this.toThemeProperty('jqx-fill-state-normal');

            btnThumb[0].className = thumbClass;

            if (this.disabled) {
                elWrap.addClass(this.toThemeProperty('jqx-fill-state-disabled'));
                elWrap.removeClass(this.toThemeProperty('jqx-scrollbar-state-normal'));
            }
            else {
                elWrap.addClass(this.toThemeProperty('jqx-scrollbar-state-normal'));
                elWrap.removeClass(this.toThemeProperty('jqx-fill-state-disabled'));
            }

            if (this.roundedCorners == 'all') {
                this.host.addClass(this.toThemeProperty('jqx-rc-all'));
                if (this.vertical) {
                    var rct = $.jqx.cssroundedcorners('top');
                    rct = this.toThemeProperty(rct);
                    btnUp.addClass(rct);

                    var rcb = $.jqx.cssroundedcorners('bottom');
                    rcb = this.toThemeProperty(rcb);
                    btnDown.addClass(rcb);

                }
                else {
                    var rcl = $.jqx.cssroundedcorners('left');
                    rcl = this.toThemeProperty(rcl);
                    btnUp.addClass(rcl);

                    var rcr = $.jqx.cssroundedcorners('right');
                    rcr = this.toThemeProperty(rcr);
                    btnDown.addClass(rcr);
                }
            }
            else {
                var rc = $.jqx.cssroundedcorners(this.roundedCorners);
                rc = this.toThemeProperty(rc);
                btnUp.addClass(rc);
                btnDown.addClass(rc);
            }

            var rc = $.jqx.cssroundedcorners(this.roundedCorners);
            rc = this.toThemeProperty(rc);
            if (!btnThumb.hasClass(rc)) {
                btnThumb.addClass(rc);
            }
            if (btnUp.css('display') === 'none') {
                this.showButtons = false;
                this.touchModeStyle = true;
                btnThumb.addClass(this.toThemeProperty('jqx-scrollbar-thumb-state-normal-touch'));
            }

            if (this.isTouchDevice && this.touchModeStyle != false) {
                this.showButtons = false;
                btnThumb.addClass(this.toThemeProperty('jqx-scrollbar-thumb-state-normal-touch'));
            }
        },

        // returns true, if the user is dragging the thumb or the increase or decrease button is pressed.
        isScrolling: function () {
            if (this.thumbCapture == undefined || this.buttonDownCapture == undefined || this.buttonUpCapture == undefined || this.areaDownCapture == undefined || this.areaUpCapture == undefined)
                return false;

            return this.thumbCapture || this.buttonDownCapture || this.buttonUpCapture || this.areaDownCapture || this.areaUpCapture;
        },

        track: function () {
            var now, elapsed, delta, v;

            now = Date.now();
            elapsed = now - this.timestamp;
            this.timestamp = now;
            delta = this.offset - this.frame;
            this.frame = this.offset;
            v = 1000 * delta / (1 + elapsed);
            this.velocity = 0.2 * v + 0.2 * this.velocity;
        },

        handlemousedown: function (event) {
            if (this.thumbCapture == undefined || this.thumbCapture == false) {
                this.thumbCapture = true;
                var btnThumb = this.btnThumb;
                if (btnThumb != null) {
                    btnThumb.addClass(this.toThemeProperty('jqx-fill-state-pressed'));
                    if (this.vertical) {
                        btnThumb.addClass(this.toThemeProperty('jqx-scrollbar-thumb-state-pressed'));
                    }
                    else {
                        btnThumb.addClass(this.toThemeProperty('jqx-scrollbar-thumb-state-pressed-horizontal'));
                    }
                    this.element.setAttribute('touched', '');
                }
            }

            var that = this;
            function tap(e) {
                that.reference = parseInt(that.btnThumb[0].style.top);
                that.offset = parseInt(that.btnThumb[0].style.top);
                if (!that.vertical) {
                    that.reference = parseInt(that.btnThumb[0].style.left);
                    that.offset = parseInt(that.btnThumb[0].style.left);
                }

                that.velocity = that.amplitude = 0;
                that.frame = that.offset;
                that.timestamp = Date.now();
                clearInterval(that.ticker);
                that.ticker = setInterval(function () {
                    that.track();
                }, 100);
            }
            if (this.thumbCapture && $.jqx.scrollAnimation) {
                tap(event);
            }
            this.dragStartX = event.clientX;
            this.dragStartY = event.clientY;
            this.dragStartValue = this.value;
        },

        toggleHover: function (event, element) {
            //element.toggleClass('jqx-fill-state-hover');
        },

        refresh: function () {
            this._arrange();
        },

        _setElementPosition: function (element, x, y) {
            if (!isNaN(x)) {
                if (parseInt(element[0].style.left) != parseInt(x)) {
                    element[0].style.left = x + 'px';
                }
            }
            if (!isNaN(y)) {
                if (parseInt(element[0].style.top) != parseInt(y)) {
                    element[0].style.top = y + 'px';
                }
            }
        },

        _setElementTopPosition: function (element, y) {
            if (!isNaN(y)) {
                element[0].style.top = y + 'px';
            }
        },

        _setElementLeftPosition: function (element, x) {
            if (!isNaN(x)) {
                element[0].style.left = x + 'px';
            }
        },

        handlemouseleave: function (event) {
            var btnUp = this.btnUp;
            var btnDown = this.btnDown;

            if (this.buttonDownCapture || this.buttonUpCapture) {
                btnUp.removeClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                btnDown.removeClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                this._removeArrowClasses('pressed');
            }

            if (this.thumbCapture != true)
                return;

            var btnThumb = this.btnThumb;
            var btnThumbPressedClass = this.vertical ? this.toThemeProperty('jqx-scrollbar-thumb-state-pressed') : this.toThemeProperty('jqx-scrollbar-thumb-state-pressed-horizontal');
            btnThumb.removeClass(btnThumbPressedClass);
            btnThumb.removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
            this.element.removeAttribute('touched');
        },

        handlemouseenter: function (event) {
            var btnUp = this.btnUp;
            var btnDown = this.btnDown;

            if (this.buttonUpCapture) {
                btnUp.addClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                btnUp.addClass(this.toThemeProperty('jqx-fill-state-pressed'));
                this._addArrowClasses('pressed', 'up');
                this.element.setAttribute('touched', '');
            }

            if (this.buttonDownCapture) {
                btnDown.addClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                btnDown.addClass(this.toThemeProperty('jqx-fill-state-pressed'));
                this._addArrowClasses('pressed', 'down');
                this.element.setAttribute('touched', '');
            }

            if (this.thumbCapture != true)
                return;

            var btnThumb = this.btnThumb;
            if (this.vertical) {
                btnThumb.addClass(this.toThemeProperty('jqx-scrollbar-thumb-state-pressed'));
            }
            else {
                btnThumb.addClass(this.toThemeProperty('jqx-scrollbar-thumb-state-pressed-horizontal'));
            }
            btnThumb.addClass(this.toThemeProperty('jqx-fill-state-pressed'));
            this.element.setAttribute('touched', '');
        },

        handlemousemove: function (event) {
            var btnUp = this.btnUp;
            var btnDown = this.btnDown;
            var which = 0;

            if (btnDown == null || btnUp == null)
                return;

            if (btnUp != null && btnDown != null && this.buttonDownCapture != undefined && this.buttonUpCapture != undefined) {
                if (this.buttonDownCapture && event.which == which) {
                    btnDown.removeClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                    btnDown.removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
                    this._removeArrowClasses('pressed', 'down');

                    this.buttonDownCapture = false;
                }
                else if (this.buttonUpCapture && event.which == which) {
                    btnUp.removeClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                    btnUp.removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
                    this._removeArrowClasses('pressed', 'up');
                    this.buttonUpCapture = false;
                }
            }

            if (this.thumbCapture != true)
                return false;

            var btnThumb = this.btnThumb;

            if (event.which == which && !this.isTouchDevice && !this._touchSupport) {
                this.thumbCapture = false;
                this._arrange();
                var btnThumbPressedClass = this.vertical ? this.toThemeProperty('jqx-scrollbar-thumb-state-pressed') : this.toThemeProperty('jqx-scrollbar-thumb-state-pressed-horizontal');
                btnThumb.removeClass(btnThumbPressedClass);
                btnThumb.removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
                return true;
            }

            if (event.preventDefault != undefined) {
                event.preventDefault();
            }

            if (event.originalEvent != null) {
                event.originalEvent.mouseHandled = true;
            }

            if (event.stopPropagation != undefined) {
                event.stopPropagation();
            }

            var diff = 0;

            try {
                if (!this.vertical) {
                    diff = event.clientX - this.dragStartX;
                }
                else {
                    diff = event.clientY - this.dragStartY;
                }

                var btnAndThumbSize = this._btnAndThumbSize;
                if (!this._btnAndThumbSize) {
                    btnAndThumbSize = (this.vertical) ?
                        btnUp.height() + btnDown.height() + btnThumb.height() :
                        btnUp.width() + btnDown.width() + btnThumb.width();
                }

                var ratio = (this.max - this.min) / (this.scrollBarSize - btnAndThumbSize);
                if (this.thumbStep == 'auto') {
                    diff *= ratio;
                }
                else {
                    diff *= ratio;
                    if (Math.abs(this.dragStartValue + diff - this.value) >= parseInt(this.thumbStep)) {
                        var step = Math.round(parseInt(diff) / this.thumbStep) * this.thumbStep;
                        if (this.rtl && !this.vertical) {
                            this.setPosition(this.dragStartValue - step);
                        }
                        else {
                            this.setPosition(this.dragStartValue + step);
                        }
                        return false;
                    }
                    else {
                        return false;
                    }
                }

                var step = diff;
                if (this.rtl && !this.vertical) {
                    step = -diff;
                }

                this.setPosition(this.dragStartValue + step);
                this.offset = parseInt(btnThumb[0].style.left);
                if (this.vertical) {
                    this.offset = parseInt(btnThumb[0].style.top);
                }
            }
            catch (error) {
                alert(error);
            }

            return false;
        },

        handlemouseup: function (self, event) {
            var prevent = false;

            if (this.thumbCapture) {
                this.thumbCapture = false;

                var btnThumb = this.btnThumb;
                var btnThumbPressedClass = this.vertical ? this.toThemeProperty('jqx-scrollbar-thumb-state-pressed') : this.toThemeProperty('jqx-scrollbar-thumb-state-pressed-horizontal');
                btnThumb.removeClass(btnThumbPressedClass);
                btnThumb.removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
                this.element.removeAttribute('touched');

                prevent = true;
                this._mouseup = new Date();
                if ($.jqx.scrollAnimation) {
                    var that = this;
                    function autoScroll() {
                        var elapsed, delta;
                        if (that.amplitude) {
                            elapsed = Date.now() - that.timestamp;
                            delta = -that.amplitude * Math.exp(-elapsed / 325);
                            if (delta > 0.5 || delta < -0.5) {
                                var ratio = (that.max - that.min) / (that.scrollBarSize - that._btnAndThumbSize);
                                var newValue = ratio * (that.target + delta)
                                var step = newValue;
                                if (that.rtl && !that.vertical) {
                                    step = -newValue;
                                }

                                that.setPosition(that.dragStartValue + step);
                                requestAnimationFrame(autoScroll);
                            } else {
                                var ratio = (that.max - that.min) / (that.scrollBarSize - that._btnAndThumbSize);
                                var newValue = ratio * (that.target + delta)
                                var step = newValue;
                                if (that.rtl && !that.vertical) {
                                    step = -newValue;
                                }

                                that.setPosition(that.dragStartValue + step);
                            }
                        }
                    }
                    clearInterval(this.ticker);
                    if (this.velocity > 25 || this.velocity < -25) {
                        this.amplitude = 0.8 * this.velocity;
                        this.target = Math.round(this.offset + this.amplitude);
                        if (!this.vertical) {
                            this.target -= this.reference;
                        }
                        else {
                            this.target -= this.reference;
                        }

                        this.timestamp = Date.now();
                        requestAnimationFrame(autoScroll);
                    }
                }
            }

            this.areaDownCapture = this.areaUpCapture = false;
            if (this.buttonUpCapture || this.buttonDownCapture) {
                var btnUp = this.btnUp;
                var btnDown = this.btnDown;

                this.buttonUpCapture = false;
                this.buttonDownCapture = false;
                btnUp.removeClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                btnDown.removeClass(this.toThemeProperty('jqx-scrollbar-button-state-pressed'));
                btnUp.removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
                btnDown.removeClass(this.toThemeProperty('jqx-fill-state-pressed'));
                this._removeArrowClasses('pressed');
                this.element.removeAttribute('touched');

                prevent = true;
                this._mouseup = new Date();
            }

            if (prevent) {
                if (event.preventDefault != undefined) {
                    event.preventDefault();
                }

                if (event.originalEvent != null) {
                    event.originalEvent.mouseHandled = true;
                }

                if (event.stopPropagation != undefined) {
                    event.stopPropagation();
                }
            }
        },

        // sets the value.
        // @param Number. Sets the ScrollBar's value.
        setPosition: function (position, update) {
            var element = this.element;

            if (position == undefined || position == NaN)
                position = this.min;

            if (position >= this.max) {
                position = this.max;
            }

            if (position < this.min) {
                position = this.min;
            }

            if (this.value !== position || update == true) {
                if (position == this.max) {
                    var completeEvent = new $.Event('complete');
                    this.host.trigger(completeEvent);
                }
                var oldvalue = this.value;
                if (this._triggervaluechanged) {
                    var event = new $.Event('valueChanged');
                    event.previousValue = this.value;
                    event.currentValue = position;
                }

                this.value = position;
                this._positionelements();
                //this._arrange();

                if (this._triggervaluechanged) {
                    this.host.trigger(event);
                }

                if (this.valueChanged) {
                    this.valueChanged({ currentValue: this.value, previousvalue: oldvalue });
                }
            }

            return position;
        },

        val: function (value) {
            var isEmpty = function (obj) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key))
                        return false;
                }
                if (typeof value == "number")
                    return false;
                if (typeof value == "date")
                    return false;
                if (typeof value == "boolean")
                    return false;
                if (typeof value == "string")
                    return false;

                return true;
            }
            if (isEmpty(value) || arguments.length == 0) {
                return this.value;
            }
            else {
                this.setPosition(value);
                return value;
            }
        },

        _getThumbSize: function (scrollAreaSize) {
            var positions = this.max - this.min;

            var size = 0;
            if (positions > 1) {
                size = (scrollAreaSize / (positions + scrollAreaSize) * scrollAreaSize);
            }
            else if (positions == 1) {
                size = scrollAreaSize - 1;
            }
            else if (positions == 0)
                size = scrollAreaSize;

            if (this.thumbSize > 0) {
                size = this.thumbSize;
            }

            if (size < this.thumbMinSize)
                size = this.thumbMinSize;

            return Math.min(size, scrollAreaSize);
        },

        _positionelements: function () {
            var element = this.element;
            var elAreaUp = this.areaUp;
            var elAreaDown = this.areaDown;
            var elBtnUp = this.btnUp;
            var elBtnDown = this.btnDown;
            var elThumb = this.btnThumb;
            var elWrap = this.scrollWrap;

            var height = this._height ? this._height : this.host.height();
            var width = this._width ? this._width : this.host.width();

            var btnSize = (!this.vertical) ? height : width;
            if (!this.showButtons) {
                btnSize = 0;
            }

            var scrollBarSize = (!this.vertical) ? width : height;
            this.scrollBarSize = scrollBarSize;
            var thumbSize = this._getThumbSize(scrollBarSize - 2 * btnSize);
            thumbSize = Math.floor(thumbSize);

            if (thumbSize < this.thumbMinSize)
                thumbSize = this.thumbMinSize;

            if (height == NaN || height < 10)
                height = 10;

            if (width == NaN || width < 10)
                width = 10;

            btnSize += 2;
            this.btnSize = btnSize;

            var btnAndThumbSize = this._btnAndThumbSize;

            if (!this._btnAndThumbSize) {
                var btnAndThumbSize = (this.vertical) ?
                    2 * this.btnSize + elThumb.outerHeight() :
                    2 * this.btnSize + elThumb.outerWidth();

                btnAndThumbSize = Math.round(btnAndThumbSize);
            }

            var upAreaSize = (scrollBarSize - btnAndThumbSize) / (this.max - this.min) * (this.value - this.min);
            if (this.rtl && !this.vertical) {
                upAreaSize = (scrollBarSize - btnAndThumbSize) / (this.max - this.min) * (this.max - this.value - this.min);
            }

            upAreaSize = Math.round(upAreaSize);
            if (upAreaSize < 0) {
                upAreaSize = 0;
            }
            if (this.vertical) {
                var newDownSize = scrollBarSize - upAreaSize - btnAndThumbSize;
                if (newDownSize < 0) newDownSize = 0;
                elAreaDown[0].style.height = newDownSize + 'px';
                elAreaUp[0].style.height = upAreaSize + 'px';

                this._setElementTopPosition(elAreaUp, btnSize);
                this._setElementTopPosition(elThumb, btnSize + upAreaSize);
                this._setElementTopPosition(elAreaDown, btnSize + upAreaSize + thumbSize);
            }
            else {
                elAreaUp[0].style.width = upAreaSize + 'px';
                if (scrollBarSize - upAreaSize - btnAndThumbSize >= 0) {
                    elAreaDown[0].style.width = scrollBarSize - upAreaSize - btnAndThumbSize + 'px';
                }
                else {
                    elAreaDown[0].style.width = '0px';
                }

                this._setElementLeftPosition(elAreaUp, btnSize);
                this._setElementLeftPosition(elThumb, btnSize + upAreaSize);
                this._setElementLeftPosition(elAreaDown, 2 + btnSize + upAreaSize + thumbSize);
            }
        },

        _arrange: function () {
            var self = this;
            if (self._initialLayout) {
                self._initialLayout = false;
                return;
            }

            if (self.min > self.max) {
                var tmp = self.min;
                self.min = self.max;
                self.max = tmp;
            }

            if (self.min < 0) {
                var diff = self.max - self.min;
                self.min = 0;
                self.max = diff;
            }

            var element = self.element;
            var elAreaUp = self.areaUp;
            var elAreaDown = self.areaDown;
            var elBtnUp = self.btnUp;
            var elBtnDown = self.btnDown;
            var elThumb = self.btnThumb;
            var elWrap = self.scrollWrap;

            var height = parseInt(self.element.style.height);
            var width = parseInt(self.element.style.width);
            if (self.isPercentage) {
                var height = self.host.height();
                var width = self.host.width();
            }

            if (isNaN(height)) height = 0;
            if (isNaN(width)) width = 0;

            self._width = width;
            self._height = height;
            var btnSize = (!self.vertical) ? height : width;
            if (!self.showButtons) {
                btnSize = 0;
            }

            elBtnUp[0].style.width = btnSize + 'px';
            elBtnUp[0].style.height = btnSize + 'px';
            elBtnDown[0].style.width = btnSize + 'px';
            elBtnDown[0].style.height = btnSize + 'px';

            if (self.vertical) {
                elWrap[0].style.width = width + 2 + 'px';
            }
            else {
                elWrap[0].style.height = height + 2 + 'px';
            }

            // position the up button
            self._setElementPosition(elBtnUp, 0, 0);

            var btnSizeAndBorder = btnSize + 2;

            // position the down button
            if (self.vertical) {
                self._setElementPosition(elBtnDown, 0, height - btnSizeAndBorder);
            }
            else {
                self._setElementPosition(elBtnDown, width - btnSizeAndBorder, 0);
            }

            var scrollBarSize = (!self.vertical) ? width : height;
            self.scrollBarSize = scrollBarSize;
            var thumbSize = self._getThumbSize(scrollBarSize - 2 * btnSizeAndBorder);
            thumbSize = Math.floor(thumbSize - 2);

            if (thumbSize < self.thumbMinSize)
                thumbSize = self.thumbMinSize;

            var touchStyle = false;
            if (self.isTouchDevice && self.touchModeStyle != false) {
                touchStyle = true;
            }

            if (!self.vertical) {
                elThumb[0].style.width = thumbSize + 'px';
                elThumb[0].style.height = height + 'px';
                if (touchStyle && self.thumbTouchSize !== 0) {
                    elThumb.css({ height: self.thumbTouchSize + 'px' });
                    elThumb.css('margin-top', (self.host.height() - self.thumbTouchSize) / 2);
                }
            }
            else {
                elThumb[0].style.width = width + 'px';
                elThumb[0].style.height = thumbSize + 'px';

                if (touchStyle && self.thumbTouchSize !== 0) {
                    elThumb.css({ width: self.thumbTouchSize + 'px' });
                    elThumb.css('margin-left', (self.host.width() - self.thumbTouchSize) / 2);
                }
            }

            if (height == NaN || height < 10)
                height = 10;

            if (width == NaN || width < 10)
                width = 10;

            //btnSize += 2;
            self.btnSize = btnSize;

            var btnAndThumbSize = (self.vertical) ?
                2 * btnSizeAndBorder + (2 + parseInt(elThumb[0].style.height)) :
                2 * btnSizeAndBorder + (2 + parseInt(elThumb[0].style.width));

            btnAndThumbSize = Math.round(btnAndThumbSize);
            self._btnAndThumbSize = btnAndThumbSize;

            var upAreaSize = (scrollBarSize - btnAndThumbSize) / (self.max - self.min) * (self.value - self.min);
            if (self.rtl && !self.vertical)
                upAreaSize = (scrollBarSize - btnAndThumbSize) / (self.max - self.min) * (self.max - self.value - self.min);

            upAreaSize = Math.round(upAreaSize);

            if (isNaN(upAreaSize) || upAreaSize < 0 || upAreaSize === -Infinity || upAreaSize === Infinity)
                upAreaSize = 0;

            if (self.vertical) {
                var newAreaHeight = (scrollBarSize - upAreaSize - btnAndThumbSize);
                if (newAreaHeight < 0)
                    newAreaHeight = 0;

                elAreaDown[0].style.height = newAreaHeight + 'px';
                elAreaDown[0].style.width = width + 'px';
                elAreaUp[0].style.height = upAreaSize + 'px';
                elAreaUp[0].style.width = width + 'px';

                var hostHeight = parseInt(self.element.style.height);
                if (self.isPercentage)
                    hostHeight = self.host.height();

                elThumb[0].style.visibility = 'inherit';

                if (hostHeight - 3 * parseInt(btnSize) < 0 || hostHeight < btnAndThumbSize)
                    elThumb[0].style.visibility = 'hidden';

                self._setElementPosition(elAreaUp, 0, btnSizeAndBorder);
                self._setElementPosition(elThumb, 0, btnSizeAndBorder + upAreaSize);
                self._setElementPosition(elAreaDown, 0, btnSizeAndBorder + upAreaSize + thumbSize);
            }
            else {
                if (upAreaSize > 0) {
                    elAreaUp[0].style.width = upAreaSize + 'px';
                }
                if (height > 0) {
                    elAreaUp[0].style.height = height + 'px';
                }

                var newAreaWidth = (scrollBarSize - upAreaSize - btnAndThumbSize);
                if (newAreaWidth < 0)
                    newAreaWidth = 0;

                elAreaDown[0].style.width = newAreaWidth + 'px';
                elAreaDown[0].style.height = height + 'px';

                var hostWidth = parseInt(self.element.style.width);
                if (self.isPercentage)
                    hostWidth = self.host.width();

                elThumb[0].style.visibility = 'inherit';
                if ((hostWidth - 3 * parseInt(btnSize) < 0) || (hostWidth < btnAndThumbSize))
                    elThumb[0].style.visibility = 'hidden';

                self._setElementPosition(elAreaUp, btnSizeAndBorder, 0);
                self._setElementPosition(elThumb, btnSizeAndBorder + upAreaSize, 0);
                self._setElementPosition(elAreaDown, btnSizeAndBorder + upAreaSize + thumbSize, 0);
            }
        }
    }); // jqxScrollBar
})(jqxBaseFramework);
})();


















/***/ }),

/***/ 1746:
/***/ (() => {

/* tslint:disable */
/* eslint-disable */
(function(){
	if (typeof document === 'undefined') { 
		return;
	}

(function ($) {

    $.jqx.jqxWidget("jqxTree", "", {});

    $.extend($.jqx._jqxTree.prototype, {
        defineInstance: function () {
            var settings = {
                //Type: Array
                //Gets the tree's items.
                items: new Array(),
                //Type: Number.
                //Default: null.
                //Sets the width.
                width: null,
                //Type: Number.
                //Default: null.
                //Sets the height.
                height: null,
                //Type: String.
                //Default: easeInOutSine.
                //Gets or sets the animation's easing to one of the JQuery's supported easings.         
                easing: 'easeInOutCirc',
                //Type: Number.
                //Default: 'fast'.
                //Gets or sets the duration of the show animation.         
                animationShowDuration: 'fast',
                //Type: Number.
                //Default: 'fast'.
                //Gets or sets the duration of the hide animation.
                animationHideDuration: 'fast',
                //Type: Array.
                treeElements: new Array(),
                //Type: Boolean.
                //Default: true.
                //Enables or disables the tree.
                disabled: false,
                itemsMember: "",
                displayMember: "",
                valueMember: "",
                // Type: Boolean
                // Default: true
                // enables or disables the hover state.
                enableHover: true,
                // Type: Boolean
                // Default: true
                // enables or disables the key navigation.
                keyboardNavigation: true,
                enableKeyboardNavigation: true,
                // Type: String
                // Default: click
                // Gets or sets user interaction used for expanding or collapsing any item. Possible values ['click', 'dblclick'].
                toggleMode: 'dblclick',
                // Type: Object
                // Default: null
                // data source.
                source: null,
                // Type: Boolean
                // Default: false
                // Gets or sets whether the tree should display a checkbox next to each item.
                checkboxes: false,
                checkSize: 16,
                toggleIndicatorSize: 18,
                // Type: Boolean
                // Default: false
                // Gets or sets whether the tree checkboxes have three states - checked, unchecked and indeterminate.           
                hasThreeStates: false,
                // Type: Object
                // Default: null
                // Private
                // gets the selected item. To select an item, use the selectItem function.
                selectedItem: null,
                touchMode: 'auto',
                // tree events.
                // expand is triggered when the user expands a tree item.
                // collapse is triggered when the user collapses a tree item.
                // select is triggered when the user selects a tree item.
                // add is triggered when the user adds a new tree item.
                // remove is triggered when the user removes a tree item.
                // checkchange is triggered when the user checks, unchecks or the checkbox is in indeterminate state.
                allowDrag: true,
                allowDrop: true,
                searchMode: 'startswithignorecase',
                incrementalSearch: true,
                incrementalSearchDelay: 700,
                animationHideDelay: 0,
                submitCheckedItems: false,
                dragStart: null,
                dragEnd: null,
                rtl: false,
                // Possible values: 'none, 'default', 'copy'
                dropAction: 'default',
                events:
                [
                    'expand', 'collapse', 'select', 'initialized', 'added', 'removed', 'checkChange', 'dragEnd', 'dragStart', 'itemClick'
                ],
                aria:
                {
                    "aria-activedescendant": { name: "getActiveDescendant", type: "string" },
                    "aria-disabled": { name: "disabled", type: "boolean" }
                }
            }
            if (this === $.jqx._jqxTree.prototype) {
                return settings;
            }
            $.extend(true, this, settings);
            return settings;
        },

        createInstance: function (args) {
            var self = this;
            this.host.attr('role', 'tree');
            this.host.attr('data-role', 'treeview');
            this.enableKeyboardNavigation = this.keyboardNavigation;
            this.propertyChangeMap['disabled'] = function (instance, key, oldVal, value) {
                if (self.disabled) {
                    self.host.addClass(self.toThemeProperty('jqx-tree-disabled'));
                }
                else {
                    self.host.removeClass(self.toThemeProperty('jqx-tree-disabled'));
                }
                $.jqx.aria(self, "aria-disabled", value);
            }

            if (this.width != null && this.width.toString().indexOf("px") != -1) {
                this.host.width(this.width);
            }
            else
                if (this.width != undefined && !isNaN(this.width)) {
                    this.host.width(this.width);
                };

            if (this.height != null && this.height.toString().indexOf("px") != -1) {
                this.host.height(this.height);
            }
            else if (this.height != undefined && !isNaN(this.height)) {
                this.host.height(this.height);
            };

            if (this.width != null && this.width.toString().indexOf("%") != -1) {
                this.host.width(this.width);
            }
            if (this.height != null && this.height.toString().indexOf("%") != -1) {
                this.host.height(this.height);
            }
            if (!this.host.attr('tabindex')) {
                this.host.attr('tabIndex', 1);
            }
            if (this.disabled) {
                this.host.addClass(this.toThemeProperty('jqx-tree-disabled'));
                $.jqx.aria(this, "aria-disabled", true);
            }

            if (this.host.jqxDragDrop) {
                window.jqxTreeDragDrop();
            }

            this.originalInnerHTML = this.element.innerHTML;
            this.createdTree = false;
            if (this.element.innerHTML.indexOf('UL')) {
                var innerElement = this.host.find('ul:first');
                if (innerElement.length > 0) {
                    this.createTree(innerElement[0]);
                    this.createdTree = true;
                }
            }

            if (this.source != null) {
                var html = this.loadItems(this.source);
                this.element.innerHTML = html;
                var innerElement = this.host.find('ul:first');
                if (innerElement.length > 0) {
                    this.createTree(innerElement[0]);
                    this.createdTree = true;
                }
            }

            this._itemslength = this.items.length;

            if (!this.createdTree) {
                if (this.host.find('ul').length == 0) {
                    this.host.append($('<ul></ul>'));
                    var innerElement = this.host.find('ul:first');
                    if (innerElement.length > 0) {
                        this.createTree(innerElement[0]);
                        this.createdTree = true;
                    }

                    this.createdTree = true;
                }
            }

            if (this.createdTree == true) {
                this._render();
                this._handleKeys();
            }

            this._updateCheckLayout();
        },

        checkItems: function (item, baseItem) {
            var me = this;
            if (item != null) {
                var count = 0;
                var hasIndeterminate = false;
                var itemsCount = 0;

                var childItems = $(item.element).find('li');
                itemsCount = childItems.length;

                $.each(childItems, function (index) {
                    var child = me.itemMapping["id" + this.id].item;
                    if (child.checked != false) {
                        if (child.checked == null) {
                            hasIndeterminate = true;
                        }
                        count++;
                    }
                });

                if (item != baseItem) {
                    if (count == itemsCount) {
                        this.checkItem(item.element, true, 'tree');
                    }
                    else {
                        if (count > 0) {
                            this.checkItem(item.element, null, 'tree');
                        }
                        else this.checkItem(item.element, false, 'tree');

                    }
                }
                else {
                    var checked = baseItem.checked;
                    var childItems = $(baseItem.element).find('li');
                    $.each(childItems, function () {
                        var child = me.itemMapping["id" + this.id].item;
                        me.checkItem(this, checked, 'tree');
                    });
                }

                this.checkItems(this._parentItem(item), baseItem);
            }
            else {
                var checked = baseItem.checked;
                var childItems = $(baseItem.element).find('li');
                $.each(childItems, function () {
                    var child = me.itemMapping["id" + this.id].item;
                    me.checkItem(this, checked, 'tree');
                });
            }
        },

        _getMatches: function (value, startIndex) {
            if (value == undefined || value.length == 0)
                return -1;

            var items = this.items;
            var visibleItems = new Array();
            for (var i = 0; i < items.length; i++) {
                if (this._isVisible(items[i]) && !items[i].disabled)
                    visibleItems.push(items[i]);
            }
            items = visibleItems;
            if (startIndex != undefined) {
                items = items.slice(startIndex);
            }

            var keyMatches = new Array();
            $.each(items, function (i) {
                var itemValue = this.label;
                if (!itemValue) itemValue = "";
                var match = $.jqx.string.startsWithIgnoreCase(itemValue.toString(), value);

                if (match) {
                    keyMatches.push({ id: this.id, element: this.element });
                }
            });
            return keyMatches;
        },

        _handleKeys: function () {
            var self = this;
            this.addHandler(this.host, 'keydown', function (event) {
                var key = event.keyCode;
                if (self.keyboardNavigation || self.enableKeyboardNavigation) {
                    if (self.selectedItem != null) {
                        var element = self.selectedItem.element;
                        if (self.incrementalSearch && (!(key >= 33 && key <= 40))) {
                            var matchindex = -1;
                            if (!self._searchString) {
                                self._searchString = "";
                            }

                            if ((key == 8 || key == 46) && self._searchString.length >= 1) {
                                self._searchString = self._searchString.substr(0, self._searchString.length - 1);
                            }

                            var letter = String.fromCharCode(key);

                            var isDigit = (!isNaN(parseInt(letter)));
                            var toReturn = false;
                            if ((key >= 65 && key <= 97) || isDigit || key == 8 || key == 32 || key == 46) {
                                if (!event.shiftKey) {
                                    letter = letter.toLocaleLowerCase();
                                }

                                if (key != 8 && key != 32 && key != 46) {
                                    if (!(self._searchString.length > 0 && self._searchString.substr(0, 1) == letter))
                                        self._searchString += letter;
                                }

                                if (key == 32) {
                                    self._searchString += " ";
                                }
                                self._searchTime = new Date();
                                var selection = self.selectedItem;
                                if (selection) {
                                    var rowKey = selection.id;
                                    var index = -1;
                                    for (var i = 0; i < self.items.length; i++) {
                                        if (self.items[i].id == rowKey) {
                                            index = i + 1;
                                            break;
                                        }
                                    }

                                    var foundRows = self._getMatches(self._searchString, index);
                                    if (foundRows.length == 0 || (foundRows.length > 0 && foundRows[0].id == rowKey)) {
                                        var foundRows = self._getMatches(self._searchString);
                                    }
                                }
                                else {
                                    var foundRows = self._getMatches(self._searchString);
                                }

                                if (foundRows.length > 0) {
                                    var selection = self.selectedItem;
                                    if (self.selectedItem && self.selectedItem.id != foundRows[0].id) {
                                        self.clearSelection();
                                        self.selectItem(foundRows[0].element, "keyboard");
                                    }
                                    self._lastSearchString = self._searchString;
                                }
                            }

                            if (self._searchTimer != undefined) {
                                clearTimeout(self._searchTimer);
                            }

                            if (key == 27 || key == 13) {
                                self._searchString = "";
                                self._lastSearchString = "";
                            }

                            self._searchTimer = setTimeout(function () {
                                self._searchString = "";
                                self._lastSearchString = "";
                            }, 500);

                            if (matchindex >= 0) {
                                return;
                            }
                            if (toReturn)
                                return false;
                        }


                        switch (key) {
                            case 32:
                                if (self.checkboxes) {
                                    self.fromKey = true;
                                    var checked = $(self.selectedItem.checkBoxElement).jqxCheckBox('checked');
                                    self.checkItem(self.selectedItem.element, !checked, 'tree');
                                    if (self.hasThreeStates) {
                                        self.checkItems(self.selectedItem, self.selectedItem);
                                    }
                                    return false;
                                }
                                return true;
                            case 33:
                                var itemsOnPage = self._getItemsOnPage();
                                var prevItem = self.selectedItem;
                                for (var i = 0; i < itemsOnPage; i++) {
                                    prevItem = self._prevVisibleItem(prevItem);
                                }
                                if (prevItem != null) {
                                    self.selectItem(prevItem.element, "keyboard");
                                    self.ensureVisible(prevItem.element);
                                }
                                else {
                                    self.selectItem(self._firstItem().element, "keyboard");
                                    self.ensureVisible(self._firstItem().element);
                                }
                                return false;
                            case 34:
                                var itemsOnPage = self._getItemsOnPage();
                                var nextItem = self.selectedItem;
                                for (var i = 0; i < itemsOnPage; i++) {
                                    nextItem = self._nextVisibleItem(nextItem);
                                }
                                if (nextItem != null) {
                                    self.selectItem(nextItem.element, "keyboard");
                                    self.ensureVisible(nextItem.element);
                                }
                                else {
                                    self.selectItem(self._lastItem().element, "keyboard");
                                    self.ensureVisible(self._lastItem().element);
                                }
                                return false;
                            case 37:
                            case 39:
                                if ((key == 37 && !self.rtl) || (key == 39 && self.rtl)) {
                                    if (self.selectedItem.hasItems && self.selectedItem.isExpanded) {
                                        self.collapseItem(element);
                                    }
                                    else {
                                        var parentItem = self._parentItem(self.selectedItem);
                                        if (parentItem != null) {
                                            self.selectItem(parentItem.element, "keyboard");
                                            self.ensureVisible(parentItem.element);
                                        }
                                    }
                                }
                                if ((key == 39 && !self.rtl) || (key == 37 && self.rtl)) {
                                    if (self.selectedItem.hasItems) {
                                        if (!self.selectedItem.isExpanded) {
                                            self.expandItem(element);
                                        }
                                        else {
                                            var nextItem = self._nextVisibleItem(self.selectedItem);
                                            if (nextItem != null) {
                                                self.selectItem(nextItem.element, "keyboard");
                                                self.ensureVisible(nextItem.element);
                                            }
                                        }
                                    }
                                }
                                return false;
                            case 13:
                                if (self.selectedItem.hasItems) {
                                    if (self.selectedItem.isExpanded) {
                                        self.collapseItem(element);
                                    }
                                    else {
                                        self.expandItem(element);
                                    }
                                }
                                return false;
                            case 36:
                                self.selectItem(self._firstItem().element, "keyboard");
                                self.ensureVisible(self._firstItem().element);
                                return false;
                            case 35:
                                self.selectItem(self._lastItem().element, "keyboard");
                                self.ensureVisible(self._lastItem().element);
                                return false;
                            case 38:
                                var prevItem = self._prevVisibleItem(self.selectedItem);
                                if (prevItem != null) {
                                    self.selectItem(prevItem.element, "keyboard");
                                    self.ensureVisible(prevItem.element);
                                }
                                return false;
                            case 40:
                                var nextItem = self._nextVisibleItem(self.selectedItem);
                                if (nextItem != null) {
                                    self.selectItem(nextItem.element, "keyboard");
                                    self.ensureVisible(nextItem.element);
                                }
                                return false;
                        }
                    }
                }
            });
        },

        _firstItem: function () {
            var item = null;
            var me = this;
            var innerElement = this.host.find('ul:first');
            var liTags = $(innerElement).find('li');

            for (var i = 0; i <= liTags.length - 1; i++) {
                var listTag = liTags[i];
                item = this.itemMapping["id" + listTag.id].item;
                if (me._isVisible(item)) {
                    return item;
                }
            }

            return null;
        },

        _lastItem: function () {
            var item = null;
            var me = this;
            var innerElement = this.host.find('ul:first');
            var liTags = $(innerElement).find('li');

            for (var i = liTags.length - 1; i >= 0; i--) {
                var listTag = liTags[i];
                item = this.itemMapping["id" + listTag.id].item;
                if (me._isVisible(item)) {
                    return item;
                }
            }

            return null;
        },

        _parentItem: function (item) {
            if (item == null || item == undefined)
                return null;

            var parent = item.parentElement;
            if (!parent) return null;
            var parentItem = null;

            $.each(this.items, function () {
                if (this.element == parent) {
                    parentItem = this;
                    return false;
                }
            });

            return parentItem;
        },

        _nextVisibleItem: function (item) {
            if (item == null || item == undefined)
                return null;

            var currentItem = item;
            while (currentItem != null) {
                currentItem = currentItem.nextItem;
                if (this._isVisible(currentItem) && !currentItem.disabled)
                    return currentItem;
            }

            return null;
        },

        _prevVisibleItem: function (item) {
            if (item == null || item == undefined)
                return null;

            var currentItem = item;
            while (currentItem != null) {
                currentItem = currentItem.prevItem;
                if (this._isVisible(currentItem) && !currentItem.disabled)
                    return currentItem;
            }

            return null;
        },

        _isVisible: function (item) {
            if (item == null || item == undefined)
                return false;

            if (!this._isElementVisible(item.element))
                return false;

            var currentItem = this._parentItem(item);

            if (currentItem == null)
                return true;

            if (currentItem != null) {
                if (!this._isElementVisible(currentItem.element)) {
                    return false;
                }

                if (currentItem.isExpanded) {
                    while (currentItem != null) {
                        currentItem = this._parentItem(currentItem);
                        if (currentItem != null && !this._isElementVisible(currentItem.element)) {
                            return false;
                        }

                        if (currentItem != null && !currentItem.isExpanded)
                            return false;
                    }
                }
                else {
                    return false;
                }
            }

            return true;
        },

        _getItemsOnPage: function () {
            var itemsCount = 0;
            var position = this.panel.jqxPanel('getVScrollPosition');
            var height = parseInt(this.host.height());
            var itemsHeight = 0;
            var firstItem = this._firstItem();

            if (parseInt($(firstItem.element).height()) > 0) {
                while (itemsHeight <= height) {
                    itemsHeight += parseInt($(firstItem.element).outerHeight());
                    itemsCount++;
                }
            }

            return itemsCount;
        },

        _isElementVisible: function (element) {
            if (element == null)
                return false;

            if ($(element).css('display') != 'none' && $(element).css('visibility') != 'hidden') {
                return true;
            }

            return false;
        },

        refresh: function (initialRefresh) {
            if (this.width != null && this.width.toString().indexOf("px") != -1) {
                this.host.width(this.width);
            }
            else
                if (this.width != undefined && !isNaN(this.width)) {
                    this.host.width(this.width);
                };

            if (this.height != null && this.height.toString().indexOf("px") != -1) {
                this.host.height(this.height);
            }
            else if (this.height != undefined && !isNaN(this.height)) {
                this.host.height(this.height);
            };

            if (this.panel) {
                if (this.width != null && this.width.toString().indexOf("%") != -1) {
                    var me = this;
                    this.panel.jqxPanel('width', '100%');
                    me.removeHandler($(window), 'resize.jqxtree' + me.element.id);
                    me.addHandler($(window), 'resize.jqxtree' + me.element.id,
                    function () {
                        me._calculateWidth();
                    });
                }
                else {
                    this.panel.jqxPanel('width', this.host.width());
                }
                this.panel.jqxPanel('_arrange');
            }
            this._calculateWidth();
            if ($.jqx.isHidden(this.host)) {
                var me = this;
                if (this._hiddenTimer) {
                    clearInterval(this._hiddenTimer);
                }
                this._hiddenTimer = setInterval(function () {
                    if (!$.jqx.isHidden(me.host)) {
                        clearInterval(me._hiddenTimer);
                        me._calculateWidth();
                    }
                }, 100);
            }
            if (initialRefresh != true) {
                if (this.checkboxes) {
                    this._updateCheckLayout(null);
                }
            }
        },

        resize: function (width, height) {
            this.width = width;
            this.height = height;
            this.refresh();
        },

        loadItems: function (items) {
            if (items == null) {
                return;
            }

            var self = this;
            this.items = new Array();
            var html = '<ul>';
            $.map(items, function (item) {
                if (item == undefined)
                    return null;

                html += self._parseItem(item);
            });

            html += '</ul>';
            return html;
        },

        _parseItem: function (item) {
            var html = "";

            if (item == undefined)
                return null;

            var label = item.label;
            var value = item.value;
            if (!item.label && item.html) {
                label = item.html;
            }
            if (this.displayMember != undefined && this.displayMember != "") {
                label = item[this.displayMember];
            }

            if (this.valueMember != undefined && this.valueMember != "") {
                value = item[this.valueMember];
            }

            if (!label) {
                label = "Item";
            }

            if (typeof item === 'string') {
                label = item;
            }

            var expanded = false;
            if (item.expanded != undefined && item.expanded) {
                expanded = true;
            }

            var locked = false;
            if (item.locked != undefined && item.locked) {
                locked = true;
            }

            var selected = false;
            if (item.selected != undefined && item.selected) {
                selected = true;
            }

            var disabled = false;
            if (item.disabled != undefined && item.disabled) {
                disabled = true;
            }

            var checked = false;
            if (item.checked != undefined && item.checked) {
                checked = true;
            }

            var icon = item.icon;
            var iconsize = item.iconsize;

            html += '<li';
            if (expanded) {
                html += ' item-expanded="true" ';
            }

            if (locked) {
                html += ' item-locked="true" ';
            }

            if (disabled) {
                html += ' item-disabled="true" ';
            }

            if (selected) {
                html += ' item-selected="true" ';
            }

            if (iconsize) {
                html += ' item-iconsize="' + item.iconsize + '" ';
            }

            if (icon != null && icon != undefined) {
                html += ' item-icon="' + icon + '" ';
            }

            if (item.label && !item.html) {
                html += ' item-label="' + label + '" ';
            }

            if (value != null) {
                html += ' item-value="' + value + '" ';
            }

            if (item.checked != undefined) {
                html += ' item-checked="' + checked + '" ';
            }

            var id = "";
            if (item.id != undefined) {
                id = item.id;
                html += ' id="' + id + '" ';
            }
            else {
                id = this.createID();
                html += ' id="' + id + '" ';
            }

            html += '>' + label;

            if (item.items) {
                html += this.loadItems(item.items);
            } else if (this.itemsMember != undefined && this.itemsMember != "") {
                if (item[this.itemsMember]) {
                    html += this.loadItems(item[this.itemsMember]);
                }
            }

            if (!this._valueList) this._valueList = new Array();
            this._valueList[id] = item.value;

            html += '</li>';
            return html;
        },

        // ensures the visibility of an element.
        // @ param element.
        ensureVisible: function (element) {
            if (element == null || element == undefined)
                return;

            if (this.panel) {
                var position = this.panel.jqxPanel('getVScrollPosition');
                var hposition = this.panel.jqxPanel('getHScrollPosition');
                var height = parseInt(this.host.height());
                var label = $(element).find('.jqx-tree-item:first');

                var elementPosition = $(label).position().top;

                if (position === 0 && elementPosition === 0) {
                    return;
                }

                var hScrollHeight = this.panel.jqxPanel('hScrollBar').outerHeight();

                if (elementPosition <= position || elementPosition >= height + position) {
                    this.panel.jqxPanel('scrollTo', hposition, elementPosition - height + $(label).outerHeight() + hScrollHeight);
                }
            }
        },

        _syncItems: function (elements) {
            this._visibleItems = new Array();
            var me = this;
            $.each(elements, function () {
                var $element = $(this);
                if ($element.css('display') != 'none') {
                    var height = $element.outerHeight();
                    if ($element.height() > 0) {
                        var top = parseInt($element.offset().top);
                        me._visibleItems[me._visibleItems.length] = { element: this, top: top, height: height, bottom: top + height };
                    }
                }
            });
        },

        hitTest: function (left, top) {
            var me = this;
            var treeInstance = this;
            var treeItem = null;
            var elements = this.host.find('.jqx-item');
            this._syncItems(elements);

            if (treeInstance._visibleItems) {
                var hostLeft = parseInt(treeInstance.host.offset().left);
                var hostWidth = treeInstance.host.outerWidth();

                $.each(treeInstance._visibleItems, function (index) {
                    if (left >= hostLeft && left < hostLeft + hostWidth)
                        if (this.top + 5 < top && top < this.top + this.height) {
                            var parentElement = $(this.element).parents('li:first');
                            if (parentElement.length > 0) {
                                treeItem = treeInstance.getItem(parentElement[0]);
                                if (treeItem != null) {
                                    treeItem.height = this.height;
                                    treeItem.top = this.top;
                                    return false;
                                }
                            }
                        }
                });
            }
            return treeItem;
        },

        addBefore: function (items, sibling, refresh) {
            return this.addBeforeAfter(items, sibling, true, refresh);
        },

        addAfter: function (items, sibling, refresh) {
            return this.addBeforeAfter(items, sibling, false, refresh);
        },

        addBeforeAfter: function (items, sibling, before, refresh) {
            var treeInstance = this;

            var array = new Array();

            if (sibling && sibling.treeInstance != undefined) {
                sibling = sibling.element;
            }

            if (!$.isArray(items)) {
                array[0] = items;
            }
            else array = items;

            var html = "";
            var me = this;
            $.each(array, function () {
                html += me._parseItem(this);
            });
            var el = $(html);
            if (treeInstance.element.innerHTML.indexOf('UL')) {
                var innerElement = treeInstance.host.find('ul:first');
            }

            if (sibling == undefined && sibling == null) {
                innerElement.append(el);
            }
            else {
                if (before) {
                    $(sibling).before(el);
                }
                else {
                    $(sibling).after(el);
                }
            }

            var liTags = el;
            for (var index = 0; index < liTags.length; index++) {
                this._createItem(liTags[index]);
                var subTags = $(liTags[index]).find('li');
                if (subTags.length > 0) {
                    for (var j = 0; j < subTags.length; j++) {
                        this._createItem(subTags[j]);
                    }
                }
            }

            var update = function (drag) {
                me._refreshMapping(false);
                me._updateItemsNavigation();
                if (drag && me.allowDrag && me._enableDragDrop) {
                    me._enableDragDrop();
                }
                if (me.selectedItem != null) {
                    $(me.selectedItem.titleElement).addClass(me.toThemeProperty('jqx-fill-state-pressed'));
                    $(me.selectedItem.titleElement).addClass(me.toThemeProperty('jqx-tree-item-selected'));
                }
            }

            if (refresh == false) {
                update(true);
                this._raiseEvent('4', { items: this.getItems() });
                return;
            }

            update(false);
            me._render();
            this._raiseEvent('4', { items: this.getItems() });
            if (me.checkboxes) {
                me._updateCheckLayout(null);
            }
        },

        addTo: function (items, parentElement, refresh) {
            var treeInstance = this;

            var array = new Array();

            if (parentElement && parentElement.treeInstance != undefined) {
                parentElement = parentElement.element;
            }

            if (!$.isArray(items)) {
                array[0] = items;
            }
            else array = items;

            var html = "";
            var me = this;
            $.each(array, function () {
                html += me._parseItem(this);
            });
            var el = $(html);
            if (treeInstance.element.innerHTML.indexOf('UL')) {
                var innerElement = treeInstance.host.find('ul:first');
            }

            if (parentElement == undefined && parentElement == null) {
                innerElement.append(el);
            }
            else {
                parentElement = $(parentElement);
                var parentUL = parentElement.find('ul:first');
                if (parentUL.length == 0) {
                    var ulElement = $('<ul></ul>');
                    $(parentElement).append(ulElement);
                    parentUL = parentElement.find('ul:first');
                    var item = treeInstance.itemMapping["id" + parentElement[0].id].item;
                    item.subtreeElement = parentUL[0];
                    item.hasItems = true;
                    parentUL.addClass(treeInstance.toThemeProperty('jqx-tree-dropdown'));
                    if (me.rtl) {
                        parentUL.addClass(treeInstance.toThemeProperty('jqx-tree-dropdown-rtl'));
                    }
                    parentUL.append(el);
                    var element = parentUL.find('li:first');
                    item.parentElement = element;
                }
                else {
                    parentUL.append(el);
                }
            }

            var liTags = el;
            for (var index = 0; index < liTags.length; index++) {
                this._createItem(liTags[index]);
                var subTags = $(liTags[index]).find('li');
                if (subTags.length > 0) {
                    for (var j = 0; j < subTags.length; j++) {
                        this._createItem(subTags[j]);
                    }
                }
            }

            var update = function (drag) {
                me._refreshMapping(false);
                me._updateItemsNavigation();
                if (drag && me.allowDrag && me._enableDragDrop) {
                    me._enableDragDrop();
                }
                if (me.selectedItem != null) {
                    $(me.selectedItem.titleElement).addClass(me.toThemeProperty('jqx-fill-state-pressed'));
                    $(me.selectedItem.titleElement).addClass(me.toThemeProperty('jqx-tree-item-selected'));
                }
            }

            if (refresh == false) {
                update(true);
                this._raiseEvent('4', { items: this.getItems() });
                return;
            }

            update(false);
            me._render();
            if (me.checkboxes) {
                me._updateCheckLayout(null);
            }
            this._raiseEvent('4', { items: this.getItems() });
        },

        updateItem: function (element, content) {
            var item = element.treeInstance != undefined ? element : this.getItem(element);
            if (!item) {
                var tmp = element;
                element = content;
                content = tmp;
                var item = element.treeInstance != undefined ? element : this.getItem(element);
            }

            if (item) {
                if (typeof (content) === "string") {
                    content = { label: content };
                }

                if (content.value) {
                    item.value = content.value;
                }
                if (content.label) {
                    item.label = content.label;
                    $.jqx.utilities.html($(item.titleElement), content.label);
                    var ie7 = $.jqx.browser.msie && $.jqx.browser.version < 8;
                    if (ie7) {
                        $(document.body).append(this._measureItem);
                        this._measureItem.html($(item.titleElement).text());
                        var width = this._measureItem.width();
                        if (item.icon) {
                            width += 20;
                        }
                        if ($($(item.titleElement).find('img')).length > 0) {
                            width += 20;
                        }

                        $(item.titleElement).css('max-width', width + 'px');
                        this._measureItem.remove();
                    }
                }

                if (content.icon) {
                    if ($(item.element).children('.itemicon').length > 0) {
                        $(item.element).find('.itemicon')[0].src = content.icon;
                    }
                    else {
                        var iconsize = content.iconsize;
                        if (!iconsize) iconsize = 16;

                        var icon = $('<img width="' + iconsize + '" height="' + iconsize + '" style="float: left;" class="itemicon" src="' + content.icon + '"/>');
                        $(item.titleElement).prepend(icon);
                        icon.css('margin-right', '6px');
                        if (this.rtl) {
                            icon.css('margin-right', '0px');
                            icon.css('margin-left', '6px');
                            icon.css('float', 'right');
                        }
                    }
                }

                if (content.expanded) {
                    this.expandItem(item);
                }
                if (content.disabled) {
                    this.disableItem(item);
                }
                if (content.selected) {
                    this.selectItem(item);
                }
                return true;
            }

            return false;
        },
        // removes an element.
        // @param element
        removeItem: function (element, refresh) {
            if (element == undefined || element == null) {
                return;
            }

            if (element.treeInstance != undefined) element = element.element;

            var me = this;
            var id = element.id;

            var itemIndex = -1;
            var itemToRemove = this.getItem(element);
            if (itemToRemove) {
                itemIndex = this.items.indexOf(itemToRemove);
                if (itemIndex != -1) {
                    (function removeItemFunc(item) {
                        var itemIndex = -1;
                        itemIndex = this.items.indexOf(item);
                        if (itemIndex != -1) {
                            this.items.splice(itemIndex, 1);
                        }
                        var itemElements = $(item.element).find('li');
                        var itemsCount = itemElements.length;
                        var me = this;
                        var items = new Array();
                        if (itemsCount > 0) {
                            $.each(itemElements, function (index) {
                                var child = me.itemMapping["id" + this.id].item;
                                items.push(child);
                            });

                            for (var i = 0; i < items.length; i++) {
                                removeItemFunc.apply(this, [items[i]]);
                            }
                        }
                    }).apply(this, [itemToRemove]);
                }
            }
            if (this.host.find('#' + element.id).length > 0) {
                $(element).remove();
            }

            if (refresh == false) {
                this._raiseEvent('5');
                return;
            }

            me._updateItemsNavigation();

            if (me.allowDrag && me._enableDragDrop) {
                me._render(true, false);
            }
            else {
                me._render();
            }
            if (me.selectedItem != null) {
                if (me.selectedItem.element == element) {
                    $(me.selectedItem.titleElement).removeClass(me.toThemeProperty('jqx-fill-state-pressed'));
                    $(me.selectedItem.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-selected'));
                    me.selectedItem = null;
                }
            }
            this._raiseEvent('5');
            if (me.checkboxes) {
                me._updateCheckLayout(null);
            }
        },

        clear: function () {
            this.items = new Array();
            this.itemMapping = new Array();
            var element = this.host.find('ul:first');
            if (element.length > 0) {
                element[0].innerHTML = "";
            }
            this.selectedItem = null;
        },

        // disables a tree item.
        // @param element
        disableItem: function (element) {
            if (element == null)
                return false;
            if (element.treeInstance != undefined) element = element.element;

            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (item.element == element) {
                    // me.collapseItem(item.element);
                    item.disabled = true;
                    //      $(item.titleElement).removeClass(me.toThemeProperty('jqx-fill-state-pressed'));
                    //      $(item.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-selected'));
                    $(item.titleElement).addClass(me.toThemeProperty('jqx-fill-state-disabled'));
                    $(item.titleElement).addClass(me.toThemeProperty('jqx-tree-item-disabled'));
                    if (me.checkboxes && item.checkBoxElement) {
                        $(item.checkBoxElement).jqxCheckBox({ disabled: true });
                    }
                    return false;
                }
            });
        },

        _updateInputSelection: function () {
            if (this.input) {
                if (this.selectedItem == null) {
                    this.input.val("");
                }
                else {
                    var label = this.selectItem.value;
                    if (label == null) label = this.selectedItem.label;
                    this.input.val(label);
                }
                if (this.checkboxes) {
                    var items = this.getCheckedItems();
                    if (this.submitCheckedItems) {
                        var str = "";
                        for (var i = 0; i < items.length; i++) {
                            var value = items[i].value;
                            if (value == null) value = items[i].label;
                            if (i == items.length - 1) {
                                str += value;
                            }
                            else {
                                str += value + ",";
                            }
                        }
                        this.input.val(str);
                    }
                }
            }
        },

        getCheckedItems: function () {
            var checkedItems = new Array();
            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (item.checked) checkedItems.push(item);
            });
            return checkedItems;
        },

        getUncheckedItems: function () {
            var checkedItems = new Array();
            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (!item.checked) checkedItems.push(item);
            });
            return checkedItems;
        },

        checkAll: function () {
            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (!item.disabled) {
                    item.checked = true;
                    $(item.checkBoxElement).jqxCheckBox('_setState', true);
                }
            });
            this._raiseEvent('6', { element: this, checked: true });
        },

        uncheckAll: function () {
            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (!item.disabled) {
                    item.checked = false;
                    $(item.checkBoxElement).jqxCheckBox('_setState', false);
                }
            });
            this._raiseEvent('6', { element: this, checked: false });
        },

        // checks a tree item.
        // @param element
        // @param checked state - true, false or null
        checkItem: function (element, checked, owner) {
            if (element == null)
                return false;

            if (checked === undefined) {
                checked = true;
            }

            if (element.treeInstance != undefined) element = element.element;

            var me = this;
            var stateChanged = false;
            var treeItem = null;
            $.each(me.items, function () {
                var item = this;
                if (item.element == element && !item.disabled) {
                    stateChanged = true;
                    item.checked = checked;
                    treeItem = item;
                    $(item.checkBoxElement).jqxCheckBox({ checked: checked });
                    return false;
                }
            });

            if (stateChanged) {
                this._raiseEvent('6', { element: element, checked: checked });
                this._updateInputSelection();
            }
            if (owner == undefined) {
                if (treeItem) {
                    if (this.hasThreeStates) {
                        this.checkItems(treeItem, treeItem);
                    }
                }
            }
        },

        uncheckItem: function (element) {
            this.checkItem(element, false);
        },

        // enables a tree item.
        // @param element
        enableItem: function (element) {
            if (element == null)
                return false;

            if (element.treeInstance != undefined) element = element.element;

            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (item.element == element) {
                    item.disabled = false;
                    $(item.titleElement).removeClass(me.toThemeProperty('jqx-fill-state-disabled'));
                    $(item.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-disabled'));
                    if (me.checkboxes && item.checkBoxElement) {
                        $(item.checkBoxElement).jqxCheckBox({ disabled: false });
                    }
                    return false;
                }
            });
        },

        // enables all items.
        enableAll: function () {
            var me = this;
            $.each(me.items, function () {
                var item = this;
                item.disabled = false;
                $(item.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-disabled'));
                $(item.titleElement).removeClass(me.toThemeProperty('jqx-fill-state-disabled'));
                if (me.checkboxes && item.checkBoxElement) {
                    $(item.checkBoxElement).jqxCheckBox({ disabled: false });
                }
            });
        },

        // locks a tree item.
        // @param element
        lockItem: function (element) {
            if (element == null)
                return false;

            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (item.element == element) {
                    item.locked = true;
                    return false;
                }
            });
        },

        // unlocks a tree item.
        // @param element
        unlockItem: function (element) {
            if (element == null)
                return false;

            var me = this;
            $.each(me.items, function () {
                var item = this;
                if (item.element == element) {
                    item.locked = false;
                    return false;
                }
            });
        },

        // gets all tree items.
        getItems: function () {
            return this.items;
        },

        // gets item's instance.
        getItem: function (element) {
            if (element == null || element == undefined)
                return null;

            if (this.itemMapping["id" + element.id]) {
                var item = this.itemMapping["id" + element.id].item;
                return item;
            }

            return null;
        },

        // gets whether the element is expanded.
        isExpanded: function (element) {
            if (element == null || element == undefined)
                return false;

            var item = this.itemMapping["id" + element.id].item;
            if (item != null) {
                return item.isExpanded;
            }

            return false;
        },

        // gets whether the element is selected.
        isSelected: function (element) {
            if (element == null || element == undefined)
                return false;

            var item = this.itemMapping["id" + element.id].item;
            if (item != null) {
                return item == this.selectedItem;
            }

            return false;
        },

        getPrevItem: function (element) {
            var item = this.getItem(element);
            if (element.treeInstance != undefined) item = element;
            var prevItem = this._prevVisibleItem(item);
            return prevItem;
        },

        getNextItem: function (element) {
            var item = this.getItem(element);
            if (element.treeInstance != undefined) item = element;

            var nextItem = this._nextVisibleItem(item);
            return nextItem;
        },

        getSelectedItem: function (element) {
            return this.selectedItem;
        },

        val: function (value) {
            if (arguments.length == 0 || typeof (value) == "object") {
                return this.selectedItem;
            }
            if (typeof value == "string") {
                var element = this.host.find("#" + value);
                if (element.length > 0) {
                    var item = this.getItem(element[0]);
                    this.selectItem(item);
                }
            }
            else {
                var item = this.getItem(value);
                this.selectItem(item);
            }
        },

        getActiveDescendant: function () {
            if (this.selectedItem) {
                return this.selectedItem.element.id;
            }
            return "";
        },

        clearSelection: function () {
            this.selectItem(null);
        },

        // selects an item.
        // @param element
        selectItem: function (element, type) {
            if (this.disabled)
                return;

            var me = this;

            if (element && element.treeInstance != undefined) element = element.element;

            if (element == null || element == undefined) {
                if (me.selectedItem != null) {
                    $(me.selectedItem.titleElement).removeClass(me.toThemeProperty('jqx-fill-state-pressed'));
                    $(me.selectedItem.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-selected'));
                    me.selectedItem = null;
                }
                return;
            }

            if (this.selectedItem != null && this.selectedItem.element == element)
                return;

            var oldSelectedElement = this.selectedItem != null ? this.selectedItem.element : null;
            if (oldSelectedElement) {
                $(oldSelectedElement).removeAttr('aria-selected');
            }

            $.each(me.items, function () {
                var item = this;
                this.selected = false;
                if (!item.disabled) {
                    if (item.element == element) {
                        if (me.selectedItem == null || (me.selectedItem != null && me.selectedItem.titleElement != item.titleElement)) {
                            if (me.selectedItem != null) {
                                $(me.selectedItem.titleElement).removeClass(me.toThemeProperty('jqx-fill-state-pressed'));
                                $(me.selectedItem.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-selected'));
                            }

                            $(item.titleElement).addClass(me.toThemeProperty('jqx-fill-state-pressed'));
                            $(item.titleElement).addClass(me.toThemeProperty('jqx-tree-item-selected'));
                            me.selectedItem = item;
                            this.selected = true;
                            $(item.element).attr('aria-selected', 'true');
                            $.jqx.aria(me, "aria-activedescendant", item.element.id);
                        }
                    }
                }
            });
            this._updateInputSelection();
            if (!type) type = null;
            this._raiseEvent('2', { element: element, prevElement: oldSelectedElement, type: type });
        },

        // collapses all items.
        collapseAll: function () {
            this.isUpdating = true;
            var me = this;
            var items = me.items;
            var tmp = this.animationHideDuration;
            this.animationHideDuration = 0;
            $.each(items, function () {
                var item = this;
                if (item.isExpanded == true) {
                    me._collapseItem(me, item);
                }
            });
            setTimeout(function () {
                me.isUpdating = false;
                me._calculateWidth();
            }, this.animationHideDuration);
            this.animationHideDuration = tmp;
        },

        // expands all items.
        expandAll: function () {
            var me = this;
            this.isUpdating = true;
            var tmp = this.animationShowDuration;
            this.animationShowDuration = 0;
            $.each(this.items, function () {
                var item = this;
                if (item.hasItems) {
                    me._expandItem(me, item);
                }
            });

            setTimeout(function () {
                me.isUpdating = false;
                me._calculateWidth();
            }, this.animationShowDuration);
            this.animationShowDuration = tmp;
        },

        //  @param element
        //  expands a tree item by its html element.
        collapseItem: function (element) {
            if (element == null)
                return false;

            if (element.treeInstance != undefined) element = element.element;

            var me = this;
            $.each(this.items, function () {
                var item = this;
                if (item.isExpanded == true && item.element == element) {
                    me._collapseItem(me, item);
                    return false;
                }
            });

            return true;
        },

        // @param element
        // expands a tree item by its html element.
        expandItem: function (element) {
            if (element == null)
                return false;

            if (element.treeInstance != undefined) element = element.element;

            var me = this;
            $.each(me.items, function () {
                var item = this;

                if (item.isExpanded == false && item.element == element && !item.disabled && !item.locked) {
                    me._expandItem(me, item);
                    if (item.parentElement) {
                        me.expandItem(item.parentElement);
                    }
                }
            });

            return true;
        },

        _getClosedSubtreeOffset: function (item) {
            var $subtree = $(item.subtreeElement);
            var top = -$subtree.outerHeight();
            var left = -$subtree.outerWidth();
            left = 0;
            return { left: left, top: top };
        },

        _collapseItem: function (me, item, subs, force) {
            if (me == null || item == null)
                return false;

            if (item.disabled)
                return false;

            if (me.disabled)
                return false;

            if (me.locked)
                return false;

            var $subtree = $(item.subtreeElement);

            var subtreeOffset = this._getClosedSubtreeOffset(item);
            var top = subtreeOffset.top;
            var left = subtreeOffset.left;

            var $treeElement = $(item.element);
            var delay = me.animationHideDelay;
            delay = 0;

            if ($subtree.data('timer').show != null) {
                clearTimeout($subtree.data('timer').show);
                $subtree.data('timer').show = null;
            }

            var hideFunc = function () {
                item.isExpanded = false;

                if (me.checkboxes) {
                    var checkboxes = $subtree.find('.chkbox');
                    checkboxes.stop();
                    checkboxes.css('opacity', 1);
                    $subtree.find('.chkbox').animate({ opacity: 0 }, 50);
                }
                var $arrowSpan = $(item.arrow);
                me._arrowStyle($arrowSpan, "", item.isExpanded);

                $subtree.slideUp(me.animationHideDuration, function () {
                    item.isCollapsing = false;
                    me._calculateWidth();
                    var $arrowSpan = $(item.arrow);
                    me._arrowStyle($arrowSpan, "", item.isExpanded);
                    $subtree.hide();
                    me._raiseEvent('1', { element: item.element });
                })
            }

            if (delay > 0) {
                $subtree.data('timer').hide = setTimeout(function () {
                    hideFunc();
                }, delay);
            }
            else {
                hideFunc();
            }
        },

        _expandItem: function (me, item) {
            if (me == null || item == null)
                return false;

            if (item.isExpanded)
                return false;

            if (item.locked)
                return false;

            if (item.disabled)
                return false;

            if (me.disabled)
                return false;

            var $subtree = $(item.subtreeElement);
            // stop hiding process.
            if (($subtree.data('timer')) != null && $subtree.data('timer').hide != null) {
                clearTimeout($subtree.data('timer').hide);
            }

            var $treeElement = $(item.element);

            var top = 0;
            var left = 0;

            if (parseInt($subtree.css('top')) == top) {
                item.isExpanded = true;
                return;
            }

            var $arrowSpan = $(item.arrow);
            me._arrowStyle($arrowSpan, "", item.isExpanded);


            if (me.checkboxes) {
                var checkboxes = $subtree.find('.chkbox');
                checkboxes.stop();
                checkboxes.css('opacity', 0);
                checkboxes.animate({ opacity: 1 }, me.animationShowDuration);
            }

            var $arrowSpan = $(item.arrow);
            me._arrowStyle($arrowSpan, "", true);
            $subtree.slideDown(me.animationShowDuration, me.easing,
                        function () {
                            var $arrowSpan = $(item.arrow);
                            item.isExpanded = true;
                            me._arrowStyle($arrowSpan, "", item.isExpanded);
                            item.isExpanding = false;
                            me._raiseEvent('0', { element: item.element });
                            me._calculateWidth();
                        }) //animate subtree into view         
            //     }, 0);

            if (me.checkboxes) {
                me._updateCheckItemLayout(item);
                if (item.subtreeElement) {
                    var listTags = $(item.subtreeElement).find('li');
                    $.each(listTags, function () {
                        var subItem = me.getItem(this);
                        if (subItem != null) {
                            me._updateCheckItemLayout(subItem);
                        }
                    });
                }
            }
        },

        _calculateWidth: function () {
            var me = this;
            var checkboxOffset = this.checkboxes ? 20 : 0;
            var maxWidth = 0;

            if (this.isUpdating)
                return;

            $.each(this.items, function () {
                var height = $(this.element).height();
                if (height != 0) {
                    var titleWidth = $(this.titleElement).outerWidth() + 10 + checkboxOffset + (1 + this.level) * 20;
                    maxWidth = Math.max(maxWidth, titleWidth);
                    if (this.hasItems) {
                        var paddingOffset = parseInt($(this.titleElement).css('padding-top'));
                        if (isNaN(paddingOffset)) {
                            paddingOffset = 0;
                        }

                        paddingOffset = paddingOffset * 2;
                        paddingOffset += 2;

                        var offset = (paddingOffset + $(this.titleElement).height()) / 2 - 17 / 2;
                        if ($.jqx.browser.msie && $.jqx.browser.version < 9) {
                            $(this.arrow).css('margin-top', '3px');
                        }
                        else {
                            if (parseInt(offset) >= 0) {
                                $(this.arrow).css('margin-top', parseInt(offset) + 'px');
                            }
                        }
                    }
                }
            });

            if (this.toggleIndicatorSize > 16) {
                maxWidth = maxWidth + this.toggleIndicatorSize - 16;
            }

            if (me.panel) {
                if (maxWidth > this.host.width()) {
                    var scrollWidth = maxWidth - this.host.width();
                    var vScrollOffset = me.panel.jqxPanel('vScrollBar').css('visibility') !== "hidden" ? 10 : 0;
                    scrollWidth += vScrollOffset;
                    me.panel.jqxPanel({ horizontalScrollBarMax: scrollWidth });
                }
                else {
                    me.panel.jqxPanel({ horizontalScrollBarMax: 0 });
                }
            }

            this.host.find('ul:first').width(maxWidth);
            var minWidth = this.host.width() - 30;
            if (minWidth > 0) {
                this.host.find('ul:first').css('min-width', minWidth);
            }
            if (me.panel) {
                me.panel.jqxPanel('_arrange');
            }
        },

        _arrowStyle: function ($arrowSpan, uiState, expanded) {
            var me = this;
            if ($arrowSpan.length > 0) {
                $arrowSpan.removeClass();
                var state = "";
                if (uiState == 'hover') state = "-" + uiState;
                var expandState = expanded ? "-expand" : "-collapse";
                var className = 'jqx-tree-item-arrow' + expandState + state;
                $arrowSpan.addClass(me.toThemeProperty(className));
                if (!this.rtl) {
                    var expandState = !expanded ? "-right" : "-down";

                    $arrowSpan.addClass(me.toThemeProperty('jqx-icon-arrow' + expandState + ''));
                }

                if (this.rtl) {
                    $arrowSpan.addClass(me.toThemeProperty(className + '-rtl'));
                    var expandState = !expanded ? "-left" : "-down";

                    $arrowSpan.addClass(me.toThemeProperty('jqx-icon-arrow' + expandState + ''));
                }
            }
        },

        _initialize: function (mode, oldmode) {
            var me = this;
            var maxHeight = 0;
            this.host.addClass(me.toThemeProperty('jqx-widget'));
            this.host.addClass(me.toThemeProperty('jqx-widget-content'));
            this.host.addClass(me.toThemeProperty('jqx-tree'));
            this._updateDisabledState();

            var ie7 = $.jqx.browser.msie && $.jqx.browser.version < 8;
            $.each(this.items, function () {
                var item = this;
                var $element = $(item.element);
                var $arrowSpan = null;

                if (me.checkboxes && !item.hasItems && item.checkBoxElement) {
                    $(item.checkBoxElement).css('margin-left', '0px');
                }

                if (!ie7) {
                    if (!item.hasItems) {
                        if (!me.rtl) {
                            item.element.style.marginLeft = parseInt(me.toggleIndicatorSize) + 'px';
                        }
                        else {
                            item.element.style.marginRight = parseInt(me.toggleIndicatorSize) + 'px';
                        }
                        var oldArrow = $(item.arrow);
                        if (oldArrow.length > 0) {
                            oldArrow.remove();
                            item.arrow = null;
                        }
                        return true;
                    }
                    else {
                        if (!me.rtl) {
                            item.element.style.marginLeft = '0px';
                        }
                        else {
                            item.element.style.marginRight = '0px';
                        }
                    }
                }
                else {
                    if (!item.hasItems && $(item.element).find('ul').length > 0) {
                        $(item.element).find('ul').remove();
                    }
                }

                var oldArrow = $(item.arrow);
                if (oldArrow.length > 0) {
                    oldArrow.remove();
                }

                var $arrowSpan = $('<span style="height: 17px; border: none; background-color: transparent;" id="arrow' + $element[0].id + '"></span>');
                $arrowSpan.prependTo($element);
                if (!me.rtl) {
                    $arrowSpan.css('float', 'left');
                }
                else {
                    $arrowSpan.css('float', 'right');
                }
                $arrowSpan.css('clear', 'both');

                $arrowSpan.width(me.toggleIndicatorSize);
                me._arrowStyle($arrowSpan, "", item.isExpanded);

                var paddingOffset = parseInt($(this.titleElement).css('padding-top'));
                if (isNaN(paddingOffset)) {
                    paddingOffset = 0;
                }

                paddingOffset = paddingOffset * 2;
                paddingOffset += 2;

                var offset = (paddingOffset + $(this.titleElement).height()) / 2 - 17 / 2;
                if ($.jqx.browser.msie && $.jqx.browser.version < 9) {
                    $arrowSpan.css('margin-top', '3px');
                }
                else {
                    if (parseInt(offset) >= 0) {
                        $arrowSpan.css('margin-top', parseInt(offset) + 'px');
                    }
                }
                $element.addClass(me.toThemeProperty('jqx-disableselect'));
                $arrowSpan.addClass(me.toThemeProperty('jqx-disableselect'));

                var eventName = 'click';
                var isTouchDevice = me.isTouchDevice();
                if (isTouchDevice) {
                    eventName = $.jqx.mobile.getTouchEventName('touchend');
                }
                me.addHandler($arrowSpan, eventName, function () {
                    if (!item.isExpanded) {
                        me._expandItem(me, item);
                    }
                    else {
                        me._collapseItem(me, item);
                    }

                    return false;
                });

                me.addHandler($arrowSpan, 'selectstart', function () {
                    return false;
                });

                me.addHandler($arrowSpan, 'mouseup', function () {
                    if (!isTouchDevice) {
                        return false;
                    }
                });

                item.hasItems = $(item.element).find('li').length > 0;

                item.arrow = $arrowSpan[0];
                if (!item.hasItems) {
                    $arrowSpan.css('visibility', 'hidden');
                }

                $element.css('float', 'none');
            });
        },

        _getOffset: function (object) {
            var scrollTop = $(window).scrollTop();
            var scrollLeft = $(window).scrollLeft();
            var isSafari = $.jqx.mobile.isSafariMobileBrowser();
            var offset = $(object).offset();
            var top = offset.top;
            var left = offset.left;
            if (isSafari != null && isSafari) {
                return { left: left - scrollLeft, top: top - scrollTop };
            }
            else return $(object).offset();
        },

        _renderHover: function ($treeElement, item, isTouchDevice) {
            var me = this;
            if (!isTouchDevice) {
                var $titleElement = $(item.titleElement);
                me.addHandler($titleElement, 'mouseenter', function () {
                    if (!item.disabled && me.enableHover && !me.disabled) {
                        $titleElement.addClass(me.toThemeProperty('jqx-fill-state-hover'));
                        $titleElement.addClass(me.toThemeProperty('jqx-tree-item-hover'));
                    }
                });
                me.addHandler($titleElement, 'mouseleave', function () {
                    if (!item.disabled && me.enableHover && !me.disabled) {
                        $titleElement.removeClass(me.toThemeProperty('jqx-fill-state-hover'));
                        $titleElement.removeClass(me.toThemeProperty('jqx-tree-item-hover'));
                    }
                });
            }
        },

        _updateDisabledState: function () {
            if (this.disabled) {
                this.host.addClass(this.toThemeProperty('jqx-fill-state-disabled'));
            }
            else {
                this.host.removeClass(this.toThemeProperty('jqx-fill-state-disabled'));
            }
        },

        _addInput: function () {
            if (this.input == null) {
                var name = this.host.attr('name');
                if (name) {
                    this.host.attr('name', "");
                }
                this.input = $("<input type='hidden'/>");
                this.host.append(this.input);
                this.input.attr('name', name);
                this._updateInputSelection();
            }
        },

        render: function () {
            this._updateItemsNavigation();
            this._render();
        },

        _render: function (updateEvents, updateDrag) {
            if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                var me = this;
                $.each(this.items, function () {
                    var $element = $(this.element);
                    var $parent = $element.parent();
                    var totalWidth = parseInt(this.titleElement.css('margin-left')) + this.titleElement[0].scrollWidth + 13;

                    $element.css('min-width', totalWidth);

                    var parentWidth = parseInt($parent.css('min-width'));
                    if (isNaN(parentWidth)) parentWidth = 0;
                    var elementMinWidth = $element.css('min-width');

                    if (parentWidth < parseInt($element.css('min-width'))) {
                        $parent.css('min-width', elementMinWidth);
                    }
                    this.titleElement[0].style.width = null;
                });
            }

            var zIndex = 1000;
            var popupElementoffset = [5, 5];
            var me = this;
            $.data(me.element, 'animationHideDelay', me.animationHideDelay);
            $.data(document.body, 'treeel', this);
            this._initialize();

            var isTouchDevice = this.isTouchDevice();
            if (isTouchDevice && this.toggleMode == 'dblclick') {
                this.toggleMode = 'click';
            }

            if (updateEvents == undefined || updateEvents == true) {
                $.each(this.items, function () {
                    me._updateItemEvents(me, this);
                });
            }
            if (this.allowDrag && this._enableDragDrop && (updateDrag == undefined || updateDrag == true)) {
                this._enableDragDrop();
            }
            this._addInput();
            // add panel.
            if (this.host.jqxPanel) {
                if (this.host.find('#panel' + this.element.id).length > 0) {
                    this.panel.jqxPanel({ touchMode: this.touchMode });
                    this.panel.jqxPanel('refresh');
                    return;
                }

                this.host.find('ul:first').wrap('<div style="background-color: transparent; overflow: hidden; width: 100%; height: 100%;" id="panel' + this.element.id + '"></div>');
                var panel = this.host.find('div:first');
                var sizeMode = 'fixed';

                if (this.height == null || this.height == 'auto') {
                    sizeMode = 'verticalwrap';
                }
                if (this.width == null || this.width == 'auto') {
                    if (sizeMode == 'fixed') {
                        sizeMode = 'horizontalwrap';
                    }
                    else sizeMode = 'wrap';
                }

                panel.jqxPanel({ rtl: this.rtl, theme: this.theme, width: '100%', height: '100%', touchMode: this.touchMode, sizeMode: sizeMode });
                if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                    panel.jqxPanel('content').css('left', '0px');
                }
                panel.data({ nestedWidget: true });
                if (this.height == null || (this.height != null && this.height.toString().indexOf('%') != -1)) {
                    if (this.isTouchDevice()) {
                        this.removeHandler(panel, $.jqx.mobile.getTouchEventName('touchend') + '.touchScroll touchcancel.touchScroll');
                        this.removeHandler(panel, $.jqx.mobile.getTouchEventName('touchmove') + '.touchScroll');
                        this.removeHandler(panel, $.jqx.mobile.getTouchEventName('touchstart') + '.touchScroll');
                    }
                }

                var panelInstance = $.data(panel[0], 'jqxPanel').instance;
                if (panelInstance != null) {
                    this.vScrollInstance = panelInstance.vScrollInstance;
                    this.hScrollInstance = panelInstance.hScrollInstance;
                }
                this.panelInstance = panelInstance;
                if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                    this.host.attr('hideFocus', true);
                    this.host.find('div').attr('hideFocus', true);
                    this.host.find('ul').attr('hideFocus', true);
                }

                panel[0].className = '';
                this.panel = panel;
            }
            this._raiseEvent('3', this);
        },

        focus: function () {
            try {
                this.host.focus();

            }
            catch (error) {
            }
        },

        _updateItemEvents: function (me, item) {
            var isTouchDevice = this.isTouchDevice();
            if (isTouchDevice) {
                this.toggleMode = $.jqx.mobile.getTouchEventName('touchend');
            }

            var $treeElement = $(item.element);

            if (me.enableRoundedCorners) {
                $treeElement.addClass(me.toThemeProperty('jqx-rc-all'));
            }

            var checkEventName = !isTouchDevice ? 'mousedown' : $.jqx.mobile.getTouchEventName('touchend');
            if (me.touchMode === true) {
                me.removeHandler($(item.checkBoxElement), 'mousedown');
            }
            me.removeHandler($(item.checkBoxElement), checkEventName);
            me.addHandler($(item.checkBoxElement), checkEventName, function (event) {
                if (!me.disabled) {
                    if (!this.treeItem.disabled) {
                        this.treeItem.checked = !this.treeItem.checked;
                        me.checkItem(this.treeItem.element, this.treeItem.checked, 'tree');
                        if (me.hasThreeStates) {
                            me.checkItems(this.treeItem, this.treeItem);
                        }
                    }
                }
                return false;
            });

            var $titleElement = $(item.titleElement);

            me.removeHandler($treeElement);

            var drag = this.allowDrag && this._enableDragDrop;
            if (!drag) {
                me.removeHandler($titleElement);
            }
            else {
                me.removeHandler($titleElement, 'mousedown.item');
                me.removeHandler($titleElement, 'click');
                me.removeHandler($titleElement, 'dblclick');
                me.removeHandler($titleElement, 'mouseenter');
                me.removeHandler($titleElement, 'mouseleave');
            }

            me._renderHover($treeElement, item, isTouchDevice);
            var $subtree = $(item.subtreeElement);
            if ($subtree.length > 0) {
                var display = item.isExpanded ? 'block' : 'none';
                $subtree.css({ overflow: 'hidden', display: display })
                $subtree.data('timer', {});
            }

            me.addHandler($titleElement, 'selectstart', function (event) {
                return false;
            });

            if ($.jqx.browser.opera) {
                me.addHandler($titleElement, 'mousedown.item', function (event) {
                    return false;
                });
            }

            if (me.toggleMode != 'click') {
                me.addHandler($titleElement, 'click', function (event) {
                    me.selectItem(item.element, "mouse");

                    if (me.panel != null) {
                        me.panel.jqxPanel({ focused: true });
                    }
                    $titleElement.focus();
                    me._raiseEvent('9', { element: item.element });
                });
            }

            me.addHandler($titleElement, me.toggleMode, function (event) {
                if ($subtree.length > 0) {
                    clearTimeout($subtree.data('timer').hide)
                }

                if (me.panel != null) {
                    me.panel.jqxPanel({ focused: true });
                }

                me.selectItem(item.element, "mouse");
                if (item.isExpanding == undefined)
                    item.isExpanding = false;
                if (item.isCollapsing == undefined)
                    item.isCollapsing = false;

                if ($subtree.length > 0) {
                    if (!item.isExpanded) {
                        if (false == item.isExpanding) {
                            item.isExpanding = true;
                            me._expandItem(me, item);
                        }
                    }
                    else {
                        if (false == item.isCollapsing) {
                            item.isCollapsing = true;
                            me._collapseItem(me, item, true);
                        }
                    }
                    return false;
                }
            });
        },

        isTouchDevice: function () {
            if (this._isTouchDevice != undefined) return this._isTouchDevice;
            var isTouchDevice = $.jqx.mobile.isTouchDevice();
            if (this.touchMode == true) {
                isTouchDevice = true;
            }
            else if (this.touchMode == false) {
                isTouchDevice = false;
            }
            this._isTouchDevice = isTouchDevice;
            return isTouchDevice;
        },

        createID: function () {
            return $.jqx.utilities.createId();
        },

        // creates the tree.
        createTree: function (uiObject) {
            if (uiObject == null)
                return;

            var self = this;
            var liTags = $(uiObject).find('li');
            var k = 0;

            this.items = new Array();

            this.itemMapping = new Array();
            $(uiObject).addClass(self.toThemeProperty('jqx-tree-dropdown-root'));
            if (this.rtl) {
                $(uiObject).addClass(self.toThemeProperty('jqx-tree-dropdown-root-rtl'));
            }

            if (this.rtl || $.jqx.browser.msie && $.jqx.browser.version < 8) {
                this._measureItem = $("<span style='position: relative; visibility: hidden;'></span>");
                this._measureItem.addClass(this.toThemeProperty('jqx-widget'));
                this._measureItem.addClass(this.toThemeProperty('jqx-fill-state-normal'));
                this._measureItem.addClass(this.toThemeProperty('jqx-tree-item'));
                this._measureItem.addClass(this.toThemeProperty('jqx-item'));
                $(document.body).append(this._measureItem);
            }
            if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                //             $(uiObject).css('position', 'relative');
                //            $(uiObject).css('left', '-40px');
            }

            for (var index = 0; index < liTags.length; index++) {
                this._createItem(liTags[index]);
            }

            if (this.rtl || $.jqx.browser.msie && $.jqx.browser.version < 8) {
                this._measureItem.remove();
            }

            this._updateItemsNavigation();
            this._updateCheckStates();
        },

        _updateCheckLayout: function (level) {
            var me = this;
            if (!this.checkboxes) return;

            $.each(this.items, function () {
                if (this.level == level || level == undefined) {
                    me._updateCheckItemLayout(this);
                }
            });
        },

        _updateCheckItemLayout: function (item) {
            if (this.checkboxes) {
                if ($(item.titleElement).css('display') != 'none') {
                    var checkbox = $(item.checkBoxElement);
                    var offset = $(item.titleElement).outerHeight() / 2 - 1 - parseInt(this.checkSize) / 2;
                    checkbox.css('margin-top', offset);
                    if (!this.rtl) {
                        if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                            item.titleElement.css('margin-left', parseInt(this.checkSize) + 25);
                        }
                        else {
                            if (item.hasItems) {
                                checkbox.css('margin-left', this.toggleIndicatorSize);
                            }
                        }
                    }
                }
            }
        },

        _updateCheckStates: function () {
            var me = this;
            if (me.hasThreeStates) {
                $.each(this.items, function () {
                    me._updateCheckState(this);
                });
            }
            else {
                $.each(this.items, function () {
                    if (this.checked == null) {
                        me.checkItem(this.element, false, 'tree');
                    }
                });
            }
        },

        _updateCheckState: function (item) {
            if (item == null || item == undefined)
                return;
            var me = this;
            var count = 0;
            var hasIndeterminate = false;
            var itemsCount = 0;

            var childItems = $(item.element).find('li');
            itemsCount = childItems.length;

            if (item.checked && itemsCount > 0) {
                $.each(childItems, function (index) {
                    var child = me.itemMapping["id" + this.id].item;
                    var checked = child.element.getAttribute('item-checked');
                    if (checked == undefined || checked == null || checked == 'true' || checked == true) {
                        me.checkItem(child.element, true, 'tree');
                    }
                });
            }

            $.each(childItems, function (index) {
                var child = me.itemMapping["id" + this.id].item;
                if (child.checked != false) {
                    if (child.checked == null) {
                        hasIndeterminate = true;
                    }
                    count++;
                }
            });

            if (itemsCount > 0) {
                if (count == itemsCount) {
                    this.checkItem(item.element, true, 'tree');
                }
                else {
                    if (count > 0) {
                        this.checkItem(item.element, null, 'tree');
                    }
                    else this.checkItem(item.element, false, 'tree');
                }
            }
        },

        _updateItemsNavigation: function () {
            var innerElement = this.host.find('ul:first');
            var liTags = $(innerElement).find('li');
            var k = 0;
            for (var i = 0; i < liTags.length; i++) {
                var listTag = liTags[i];
                if (this.itemMapping["id" + listTag.id]) {
                    var treeItem = this.itemMapping["id" + listTag.id].item;
                    if (!treeItem)
                        continue;

                    treeItem.prevItem = null;
                    treeItem.nextItem = null;
                    if (i > 0) {
                        if (this.itemMapping["id" + liTags[i - 1].id]) {
                            treeItem.prevItem = this.itemMapping["id" + liTags[i - 1].id].item;
                        }
                    }

                    if (i < liTags.length - 1) {
                        if (this.itemMapping["id" + liTags[i + 1].id]) {
                            treeItem.nextItem = this.itemMapping["id" + liTags[i + 1].id].item;
                        }
                    }
                }
            }
        },

        _applyTheme: function (oldTheme, newTheme) {
            var me = this;
            this.host.removeClass('jqx-tree-' + oldTheme);
            this.host.removeClass('jqx-widget-' + oldTheme);
            this.host.removeClass('jqx-widget-content-' + oldTheme);
            this.host.addClass(me.toThemeProperty('jqx-tree'));
            this.host.addClass(me.toThemeProperty('jqx-widget'));
            var uiObject = this.host.find('ul:first');
            $(uiObject).removeClass(me.toThemeProperty('jqx-tree-dropdown-root-' + oldTheme));
            $(uiObject).addClass(me.toThemeProperty('jqx-tree-dropdown-root'));
            if (this.rtl) {
                $(uiObject).removeClass(me.toThemeProperty('jqx-tree-dropdown-root-rtl-' + oldTheme));
                $(uiObject).addClass(me.toThemeProperty('jqx-tree-dropdown-root-rtl'));
            }
            var liTags = $(uiObject).find('li');
            for (var index = 0; index < liTags.length; index++) {
                var listTag = liTags[index];
                $(listTag).children().each(function () {
                    if (this.tagName == 'ul' || this.tagName == 'UL') {
                        $(this).removeClass(me.toThemeProperty('jqx-tree-dropdown-' + oldTheme));
                        $(this).addClass(me.toThemeProperty('jqx-tree-dropdown'));
                        if (me.rtl) {
                            $(this).removeClass(me.toThemeProperty('jqx-tree-dropdown-rtl-' + oldTheme));
                            $(this).addClass(me.toThemeProperty('jqx-tree-dropdown-rtl'));
                        }
                        return false;
                    }
                });
            }

            $.each(this.items, function () {
                var item = this;
                var $treeElement = $(item.element);

                $treeElement.removeClass(me.toThemeProperty('jqx-tree-item-li-' + oldTheme));
                $treeElement.addClass(me.toThemeProperty('jqx-tree-item-li'));
                if (this.rtl) {
                    $treeElement.removeClass(me.toThemeProperty('jqx-tree-item-li-' + oldTheme));
                    $treeElement.addClass(me.toThemeProperty('jqx-tree-item-li'));
                }
                $(item.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-' + oldTheme));
                $(item.titleElement).addClass(me.toThemeProperty('jqx-tree-item'));

                $(item.titleElement).removeClass('jqx-item-' + oldTheme);
                $(item.titleElement).addClass(me.toThemeProperty('jqx-item'));

                var $arrowSpan = $(item.arrow);
                if ($arrowSpan.length > 0) {
                    me._arrowStyle($arrowSpan, "", item.isExpanded);
                }

                if (item.checkBoxElement) {
                    $(item.checkBoxElement).jqxCheckBox({ theme: newTheme });
                }
                if (me.enableRoundedCorners) {
                    $treeElement.removeClass('jqx-rc-all-' + oldTheme);
                    $treeElement.addClass(me.toThemeProperty('jqx-rc-all'));
                }
            });

            if (this.host.jqxPanel) {
                this.panel.jqxPanel({ theme: newTheme });
            }
        },

        _refreshMapping: function (updateEvents, tags) {
            var liTags = this.host.find('li');
            var itemMapping = new Array();

            var newItems = new Array();
            var storage = $.data(document.body, 'treeItemsStorage');
            var me = this;
            for (var index = 0; index < liTags.length; index++) {
                var listTag = liTags[index];
                var $listTag = $(listTag);
                var item = storage[listTag.id];
                if (item == null) {
                    continue;
                }
                newItems[newItems.length] = item;
                if (updateEvents == undefined || updateEvents == true) {
                    this._updateItemEvents(this, item);
                }
                item.level = $listTag.parents('li').length;
                item.treeInstance = this;
                var parentElement = null;
                var parentId = null;
                if (item.titleElement[0].className.indexOf('jqx-fill-state-pressed') != -1) {
                    $(item.titleElement).removeClass(me.toThemeProperty('jqx-fill-state-pressed'));
                    $(item.titleElement).removeClass(me.toThemeProperty('jqx-tree-item-selected'));
                }

                var children = $listTag.children();
                children.each(function () {
                    if (this.tagName == 'ul' || this.tagName == 'UL') {
                        item.subtreeElement = this;
                        $(this).addClass(me.toThemeProperty('jqx-tree-dropdown'));
                        if (me.rtl) {
                            $(this).addClass(me.toThemeProperty('jqx-tree-dropdown-rtl'));
                        }
                        return false;
                    }
                });

                var parents = $listTag.parents();
                parents.each(function () {
                    if ((this.tagName == 'li' || this.tagName == 'LI')) {
                        parentId = this.id;
                        parentElement = this;
                        return false;
                    }
                });

                item.parentElement = parentElement;
                item.parentId = parentId;
                item.hasItems = $(item.element).find('li').length > 0;

                if (item != null) {
                    itemMapping[index] = { element: listTag, item: item };
                    itemMapping["id" + listTag.id] = itemMapping[index];
                }
            }

            this.itemMapping = itemMapping;
            this.items = newItems;
        },

        _createItem: function (element) {
            if (element == null || element == undefined)
                return;

            var id = element.id;
            if (!id) {
                id = this.createID();
            }

            var listTag = element;
            var $listTag = $(element);

            listTag.id = id;

            var treeItemsStorage = $.data(document.body, 'treeItemsStorage');
            if (treeItemsStorage == undefined) {
                treeItemsStorage = new Array();
            }

            var k = this.items.length;
            this.items[k] = new $.jqx._jqxTree.jqxTreeItem();
            this.treeElements[id] = this.items[k];
            treeItemsStorage[listTag.id] = this.items[k];
            $.data(document.body, 'treeItemsStorage', treeItemsStorage)
            k = this.items.length;
            var parentId = 0;
            var me = this;
            var parentElement = null;

            $listTag.attr('role', 'treeitem');
            $listTag.children().each(function () {
                if (this.tagName == 'ul' || this.tagName == 'UL') {
                    me.items[k - 1].subtreeElement = this;
                    $(this).addClass(me.toThemeProperty('jqx-tree-dropdown'));
                    if (me.rtl) {
                        $(this).addClass(me.toThemeProperty('jqx-tree-dropdown-rtl'));
                        $(this).css('clear', 'both');
                    }
                    return false;
                }
            });

            $listTag.parents().each(function () {
                if ((this.tagName == 'li' || this.tagName == 'LI')) {
                    parentId = this.id;
                    parentElement = this;
                    return false;
                }
            });

            var expanded = element.getAttribute('item-expanded');
            if (expanded == null || expanded == undefined || (expanded != 'true' && expanded != true)) {
                expanded = false;
            }
            else expanded = true;
            listTag.removeAttribute('item-expanded');
            var locked = element.getAttribute('item-locked');
            if (locked == null || locked == undefined || (locked != 'true' && locked != true)) {
                locked = false;
            }
            else locked = true;
            listTag.removeAttribute('item-locked');

            var selected = element.getAttribute('item-selected');
            if (selected == null || selected == undefined || (selected != 'true' && selected != true)) {
                selected = false;
            }
            else selected = true;
            listTag.removeAttribute('item-selected');

            var disabled = element.getAttribute('item-disabled');
            if (disabled == null || disabled == undefined || (disabled != 'true' && disabled != true)) {
                disabled = false;
            }
            else disabled = true;
            listTag.removeAttribute('item-disabled');

            var checked = element.getAttribute('item-checked');
            if (checked == null || checked == undefined || (checked != 'true' && checked != true)) {
                checked = false;
            }
            else checked = true;

            var title = element.getAttribute('item-title');
            if (title == null || title == undefined || (title != 'true' && title != true)) {
                title = false;
            }
            listTag.removeAttribute('item-title');

            var icon = element.getAttribute('item-icon');
            var iconsize = element.getAttribute('item-iconsize');
            var label = element.getAttribute('item-label');
            var value = element.getAttribute('item-value');

            listTag.removeAttribute('item-icon');
            listTag.removeAttribute('item-iconsize');
            listTag.removeAttribute('item-label');
            listTag.removeAttribute('item-value');

            var treeItem = this.items[k - 1];
            treeItem.id = id;
            if (treeItem.value == undefined) {
                if (this._valueList && this._valueList[id]) {
                    treeItem.value = this._valueList[id];
                }
                else {
                    treeItem.value = value;
                }
            }
            treeItem.icon = icon;
            treeItem.iconsize = iconsize;
            treeItem.parentId = parentId;
            treeItem.disabled = disabled;
            treeItem.parentElement = parentElement;
            treeItem.element = element;
            treeItem.locked = locked;
            treeItem.selected = selected;
            treeItem.checked = checked;
            treeItem.isExpanded = expanded;
            treeItem.treeInstance = this;

            this.itemMapping[k - 1] = { element: listTag, item: treeItem };
            this.itemMapping["id" + listTag.id] = this.itemMapping[k - 1];
            var hasTitleAttribute = false;
            var isSameLI = false;
            hasTitleAttribute = false;
            if (this.rtl) {
                $(treeItem.element).css('float', 'right');
                $(treeItem.element).css('clear', 'both');
            }

            if (!hasTitleAttribute || !isSameLI) {
                if ($(listTag.firstChild).length > 0) {
                    var iconsize = 16;

                    if (treeItem.icon) {
                        iconsize = treeItem.iconsize;
                        if (!iconsize) iconsize = 16;

                        var icon = $('<img width="' + iconsize + '" height="' + iconsize + '" style="float: left;" class="itemicon" src="' + treeItem.icon + '"/>');
                        $(listTag).prepend(icon);

                        icon.css('margin-right', '6px');
                        if (this.rtl) {
                            icon.css('margin-right', '0px');
                            icon.css('margin-left', '6px');
                            icon.css('float', 'right');
                        }
                    }

                    var ulindex = listTag.innerHTML.indexOf('<ul');
                    if (ulindex == -1) {
                        ulindex = listTag.innerHTML.indexOf('<UL');
                    }

                    if (ulindex == -1) {
                        treeItem.originalTitle = listTag.innerHTML;
                        listTag.innerHTML = '<div style="display: inline-block;">' + listTag.innerHTML + '</div>';
                        treeItem.titleElement = $($(listTag)[0].firstChild);
                    }
                    else {
                        var listhtml = listTag.innerHTML.substring(0, ulindex);
                        listhtml = $.trim(listhtml);
                        treeItem.originalTitle = listhtml;
                        listhtml = $('<div style="display: inline-block;">' + listhtml + '</div>');

                        var ul = $(listTag).find('ul:first');
                        ul.remove();
                        listTag.innerHTML = "";
                        $(listTag).prepend(listhtml);
                        $(listTag).append(ul);

                        treeItem.titleElement = listhtml;
                        if (this.rtl) {
                            listhtml.css('float', 'right');
                            ul.css('padding-right', '10px');
                        }
                    }

                    if (iconsize !== 16) {
                        $(treeItem.titleElement).css('line-height', iconsize + 'px');
                    }

                    if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                        $($(listTag)[0].firstChild).css('display', 'inline-block');
                        var removeMeasureItem = false;
                        if (this._measureItem.parents().length == 0) {
                            $(document.body).append(this._measureItem);
                            removeMeasureItem = true;
                        }
                        this._measureItem.css('min-width', '20px');
                        this._measureItem[0].innerHTML = ($(treeItem.titleElement).text());
                        var width = this._measureItem.width();
                        if (treeItem.icon) {
                            width += 20;
                        }
                        if ($($(treeItem.titleElement).find('img')).length > 0) {
                            width += 20;
                        }
                        $($(listTag)[0].firstChild).css('max-width', width + 'px');
                        if (removeMeasureItem) {
                            this._measureItem.remove();
                        }
                    }
                }
                else {
                    treeItem.originalTitle = "Item";
                    $(listTag).append($('<span>Item</span>'));
                    $(listTag.firstChild).wrap('<span/>');
                    treeItem.titleElement = $(listTag)[0].firstChild;
                    if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                        $(listTag.firstChild).css('display', 'inline-block');
                    }
                }
            }

            var $itemTitle = $(treeItem.titleElement);
            var itemTitleClassName = this.toThemeProperty('jqx-rc-all');

            if (this.allowDrag) {
                $itemTitle.addClass('draggable');
            }
            if (label == null || label == undefined) {
                label = treeItem.titleElement;
                treeItem.label = $.trim($itemTitle.text());
            }
            else treeItem.label = label;

            $(listTag).addClass(this.toThemeProperty('jqx-tree-item-li'));
            if (this.rtl) {
                $(listTag).addClass(this.toThemeProperty('jqx-tree-item-li-rtl'));
            }
            itemTitleClassName += " " + this.toThemeProperty('jqx-tree-item') + " " + this.toThemeProperty('jqx-item');
            if (this.rtl) {
                itemTitleClassName += " " + this.toThemeProperty('jqx-tree-item-rtl')
            }

            $itemTitle[0].className = $itemTitle[0].className + " " + itemTitleClassName;

            treeItem.level = $(element).parents('li').length;

            treeItem.hasItems = $(element).find('li').length > 0;
            if (this.rtl && treeItem.parentElement) {
                if (!this.checkboxes) {
                //    $itemTitle.css('margin-right', '5px');
                }
            }

            if (this.checkboxes) {
                if (this.host.jqxCheckBox) {
                    var checkbox = $('<div style="overflow: visible; position: absolute; width: 18px; height: 18px;" tabIndex=0 class="chkbox"/>');
                    checkbox.width(parseInt(this.checkSize));
                    checkbox.height(parseInt(this.checkSize));
                    $(listTag).prepend(checkbox);

                    if (this.rtl) {
                        checkbox.css('float', 'right');
                        checkbox.css('position', 'static');
                    }

                    checkbox.jqxCheckBox({ hasInput: false, checked: treeItem.checked, boxSize: this.checkSize, animationShowDelay: 0, animationHideDelay: 0, disabled: disabled, theme: this.theme });
                    if (!this.rtl) {
                        $itemTitle.css('margin-left', parseInt(this.checkSize) + 8);
                    }
                    else {
                        var minMargin = 5;
                        // if (treeItem.hasItems)
                        //   minMargin = this.toggleIndicatorSize;
                        if (treeItem.parentElement) {
                            checkbox.css('margin-right', minMargin + 5 + 'px');
                        }
                        else {
                            checkbox.css('margin-right', minMargin + 'px');
                        }
                    }

                    treeItem.checkBoxElement = checkbox[0];
                    checkbox[0].treeItem = treeItem;
                    var offset = $itemTitle.outerHeight() / 2 - 1 - parseInt(this.checkSize) / 2;
                    checkbox.css('margin-top', offset);
                    if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                        $itemTitle.css('width', '1%');
                        $itemTitle.css('margin-left', parseInt(this.checkSize) + 25);
                    }
                    else {
                        if (treeItem.hasItems) {
                            if (!this.rtl) {
                                checkbox.css('margin-left', this.toggleIndicatorSize);
                            }
                        }
                    }
                }
                else {
                    throw new Error('jqxTree: Missing reference to jqxcheckbox.js.');
                    return;
                }
            }
            else {
                if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                    $itemTitle.css('width', '1%');
                }
            }

            if (disabled) {
                this.disableItem(treeItem.element);
            }

            if (selected) {
                this.selectItem(treeItem.element);
            }

            if ($.jqx.browser.msie && $.jqx.browser.version < 8) {
                $(listTag).css('margin', '0px');
                $(listTag).css('padding', '0px');
            }
        },

        destroy: function () {
            this.removeHandler($(window), 'resize.jqxtree' + this.element.id);
            this.host.removeClass();
            if (this.isTouchDevice()) {
                this.removeHandler(this.panel, $.jqx.mobile.getTouchEventName('touchend') + '.touchScroll touchcancel.touchScroll');
                this.removeHandler(this.panel, $.jqx.mobile.getTouchEventName('touchmove') + '.touchScroll');
                this.removeHandler(this.panel, $.jqx.mobile.getTouchEventName('touchstart') + '.touchScroll');
            }
            var me = this;
            var isTouchDevice = this.isTouchDevice();
            $.each(this.items, function () {
                var item = this;
                var $treeElement = $(this.element);
                var checkEventName = !isTouchDevice ? 'click' : $.jqx.mobile.getTouchEventName('touchend');
                me.removeHandler($(item.checkBoxElement), checkEventName);
                var $titleElement = $(item.titleElement);
                me.removeHandler($treeElement);
                var drag = me.allowDrag && me._enableDragDrop;
                if (!drag) {
                    me.removeHandler($titleElement);
                }
                else {
                    me.removeHandler($titleElement, 'mousedown.item');
                    me.removeHandler($titleElement, 'click');
                    me.removeHandler($titleElement, 'dblclick');
                    me.removeHandler($titleElement, 'mouseenter');
                    me.removeHandler($titleElement, 'mouseleave');
                }
                var $arrowSpan = $(item.arrow);
                if ($arrowSpan.length > 0) {
                    me.removeHandler($arrowSpan, checkEventName);
                    me.removeHandler($arrowSpan, 'selectstart');
                    me.removeHandler($arrowSpan, 'mouseup');

                    if (!isTouchDevice) {
                        me.removeHandler($arrowSpan, 'mouseenter');
                        me.removeHandler($arrowSpan, 'mouseleave');
                    }

                    me.removeHandler($titleElement, 'selectstart');
                }
                if ($.jqx.browser.opera) {
                    me.removeHandler($titleElement, 'mousedown.item');
                }

                if (me.toggleMode != 'click') {
                    me.removeHandler($titleElement, 'click');
                }

                me.removeHandler($titleElement, me.toggleMode);
            });
            if (this.panel) {
                this.panel.jqxPanel('destroy');
                this.panel = null;
            }
            this.host.remove();
        },

        _raiseEvent: function (id, arg) {
            if (arg == undefined)
                arg = { owner: null };

            var evt = this.events[id];
            var args = arg;
            args.owner = this;

            var event = new $.Event(evt);
            event.owner = this;
            event.args = args;

            var result = this.host.trigger(event);
            return result;
        },

        propertyChangedHandler: function (object, key, oldvalue, value) {
            if (this.isInitialized == undefined || this.isInitialized == false)
                return;

            if (key == 'submitCheckedItems') {
                object._updateInputSelection();
            }

            if (key == 'disabled') {
                object._updateDisabledState();
            }

            if (key == 'theme') {
                object._applyTheme(oldvalue, value);
            }

            if (key == "keyboardNavigation") {
                object.enableKeyboardNavigation = value;
            }

            if (key == 'width' || key == 'height') {
                object.refresh();
                object._initialize();
                object._calculateWidth();

                if (object.host.jqxPanel) {
                    var sizeMode = 'fixed';
                    if (this.height == null || this.height == 'auto') {
                        sizeMode = 'verticalwrap';
                    }
                    if (this.width == null || this.width == 'auto') {
                        if (sizeMode == 'fixed') {
                            sizeMode = 'horizontalwrap';
                        }
                        else sizeMode = 'wrap';
                    }

                    object.panel.jqxPanel({ sizeMode: sizeMode });
                }
            }

            if (key == 'touchMode') {
                object._isTouchDevice = null;
                if (value) {
                    object.enableHover = false;
                }
                object._render();
            }

            if (key == 'source' || key == 'checkboxes') {
                if (this.source != null) {
                    var expandedItems = [];
                    $.each(object.items, function () {
                        if (this.isExpanded) {
                            expandedItems[expandedItems.length] = { label: this.label, level: this.level };
                        }
                    });

                    var html = object.loadItems(object.source);
                    if (!object.host.jqxPanel) {
                        object.element.innerHTML = html;
                    }
                    else {
                        object.panel.jqxPanel('setcontent', html);
                    }

                    var disabled = object.disabled;
                    var innerElement = object.host.find('ul:first');
                    if (innerElement.length > 0) {
                        object.createTree(innerElement[0]);
                        object._render();
                    }

                    var me = object;
                    var duration = me.animationShowDuration;
                    me.animationShowDuration = 0;
                    object.disabled = false;
                    if (expandedItems.length > 0) {
                        $.each(object.items, function () {
                            for (var m = 0; m < expandedItems.length; m++) {
                                if (expandedItems[m].label == this.label && expandedItems[m].level == this.level) {
                                    var item = me.getItem(this.element);
                                    me._expandItem(me, item);
                                }
                            }
                        });
                    }
                    object.disabled = disabled;
                    me.animationShowDuration = duration;
                }
            }

            if (key == 'hasThreeStates') {
                object._render();
                object._updateCheckStates();
            }

            if (key == 'toggleIndicatorSize') {
                object._updateCheckLayout();
                object._render();
            }
        }
    });
})(jqxBaseFramework);

(function ($) {
    $.jqx._jqxTree.jqxTreeItem = function (id, parentId, type) {
        var treeItem =
        {
            // gets the item's label.
            label: null,
            // gets the id.
            id: id,
            // gets the parent id.
            parentId: parentId,
            // gets the parent element.
            parentElement: null,
            // gets the parent item instance.
            parentItem: null,
            // gets whether the item is disabled.
            disabled: false,
            // gets whether the item is selected.
            selected: false,
            // gets whether the item is locked.
            locked: false,
            // gets the checked state.
            checked: false,
            // gets the item's level.
            level: 0,
            // gets a value whether the item is opened.
            isExpanded: false,
            // has sub elements.
            hasItems: false,
            // li element
            element: null,
            // subtree element.
            subtreeElement: null,
            // checkbox element.
            checkBoxElement: null,
            // titleElement element.
            titleElement: null,
            // arrow element.
            arrow: null,
            // prev item.
            prevItem: null,
            // next item.
            nextItem: null
        }
        return treeItem;
    }; // 
})(jqxBaseFramework);
})();


















/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _jqxcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5459);
/* harmony import */ var _jqxcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jqxcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jqxdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4198);
/* harmony import */ var _jqxdata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jqxdata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jqxbuttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7351);
/* harmony import */ var _jqxbuttons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jqxbuttons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jqxscrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4240);
/* harmony import */ var _jqxscrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jqxscrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jqxcheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4545);
/* harmony import */ var _jqxcheckbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jqxcheckbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jqxpanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(678);
/* harmony import */ var _jqxpanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jqxpanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jqxdragdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3601);
/* harmony import */ var _jqxdragdrop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jqxdragdrop__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jqxtree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1746);
/* harmony import */ var _jqxtree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_jqxtree__WEBPACK_IMPORTED_MODULE_7__);








})();

/******/ })()
;