/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createRibbon(selector, fileItemButton, saveButton, saveAsButton, openButton, closeButton, exitButton, subscriptButton, superscriptButton, boldButton, italicButton, underlineButton, strikethroughButton, shrinkFontButton, copyButton, cutButton, growFontButton, formatPainterButton, clearFormattingButton, alignLeftButton, alignCenterButton, alignRightButton, alignJustifyButton, bulletListButton, numberedListButton, decreaseIndentButton, increaseIndentButton, sortButton, lineSpacingButton, showHideButton, bucketColorButton, bucketColorPickerButton, fontButton, fontSizeButton, changeCaseButton, fontColorButton, fontColorPickerButton, highlightColorButton, highlightColorPickerButton, pasteButton, pasteDropDownButton, helpButton, aboutButton, updateButton, gridSelector) {
    var theme = 'demoTheme';
    var fileItemButtonOptions = {
        arrowSize: 0,
        height: 26,
        dropDownWidth: 120,
        width: 50,
        theme: theme
    };
    var fileItem = jqwidgets.createInstance(fileItemButton, 'jqxDropDownButton', fileItemButtonOptions);
    fileItem.setContent('<span style="position: relative; line-height: 26px; margin-left:10px;">File</span>');
    var buttonsOptions = { theme: theme };
    function createButtonInstances(selectorName, jqxButtonType, options) {
        jqxButtonType = jqxButtonType || 'jqxButton';
        var button = jqwidgets.createInstance(selectorName, jqxButtonType, buttonsOptions);
        return button;
    }
    // Create instances for buttons
    var normalType = 'jqxButton';
    var save = createButtonInstances(saveButton, normalType, buttonsOptions), saveAs = createButtonInstances(saveAsButton, normalType, buttonsOptions), open = createButtonInstances(openButton, normalType, buttonsOptions), close = createButtonInstances(closeButton, normalType, buttonsOptions);
    //exit = createButtonInstances(exitButton, buttonsOptions);
    // initialization options - validated in typescript
    // jqwidgets.RibbonOptions has generated TS definition
    var options = {
        width: 802,
        height: 131,
        animationType: "none",
        selectionMode: "click",
        position: "top",
        theme: "demoTheme",
        mode: "default",
        selectedIndex: 1,
        initContent: function (item) {
            switch (item) {
                case 0:
                    break;
                case 1:
                    var toggleButtonsOptions = { theme: theme };
                    // Create ToggleButtons
                    var toggleType = 'jqxToggleButton';
                    var subscript = createButtonInstances(subscriptButton, toggleType, toggleButtonsOptions), superscript = createButtonInstances(superscriptButton, toggleType, toggleButtonsOptions), bold = createButtonInstances(boldButton, toggleType, toggleButtonsOptions), italic = createButtonInstances(italicButton, toggleType, toggleButtonsOptions), underline = createButtonInstances(underlineButton, toggleType, toggleButtonsOptions), strikethrough = createButtonInstances(strikethroughButton, toggleType, toggleButtonsOptions);
                    var innerButtonsOptions = { theme: theme };
                    var shrinkFont = createButtonInstances(shrinkFontButton, normalType, innerButtonsOptions), copy = createButtonInstances(copyButton, normalType, innerButtonsOptions), cut = createButtonInstances(cutButton, normalType, innerButtonsOptions), growFont = createButtonInstances(growFontButton, normalType, innerButtonsOptions), formatPainter = createButtonInstances(formatPainterButton, normalType, innerButtonsOptions), clearFormatting = createButtonInstances(clearFormattingButton, normalType, innerButtonsOptions), alignLeft = createButtonInstances(alignLeftButton, normalType, innerButtonsOptions), alignCenter = createButtonInstances(alignCenterButton, normalType, innerButtonsOptions), alignRight = createButtonInstances(alignRightButton, normalType, innerButtonsOptions), alignJustify = createButtonInstances(alignJustifyButton, normalType, innerButtonsOptions), bulletList = createButtonInstances(bulletListButton, normalType, innerButtonsOptions), numberedList = createButtonInstances(numberedListButton, normalType, innerButtonsOptions), decreaseIndent = createButtonInstances(decreaseIndentButton, normalType, innerButtonsOptions), increaseIndent = createButtonInstances(increaseIndentButton, normalType, innerButtonsOptions), sort = createButtonInstances(sortButton, normalType, innerButtonsOptions), lineSpacing = createButtonInstances(lineSpacingButton, normalType, innerButtonsOptions), showHide = createButtonInstances(showHideButton, normalType, innerButtonsOptions);
                    var tooltipsOptions = {
                        position: "mouse",
                        content: "Cut (Ctrl + X)"
                    };
                    var cutTooltip = jqwidgets.createInstance(cutButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Copy (Ctrl + C)";
                    var copyTooltip = jqwidgets.createInstance(copyButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Subscript";
                    var subscriptTooltip = jqwidgets.createInstance(subscriptButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Superscript";
                    var subscriptTooltip = jqwidgets.createInstance(superscriptButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Bold (Ctrl + B)";
                    var boldTooltip = jqwidgets.createInstance(boldButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Italic (Ctrl + I)";
                    var italicTooltip = jqwidgets.createInstance(italicButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Underline (Ctrl + U)";
                    var underlineTooltip = jqwidgets.createInstance(underlineButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Strikethrough";
                    var underlineTooltip = jqwidgets.createInstance(underlineButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Align Text Left (Ctrl + L)";
                    var alignLeftTooltip = jqwidgets.createInstance(underlineButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Center (Ctrl + E)";
                    var alignCenterTooltip = jqwidgets.createInstance(alignCenterButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Align Text Right (Ctrl + R)";
                    var alignRightTooltip = jqwidgets.createInstance(alignRightButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Align Text Right (Ctrl + R)";
                    var alignRightTooltip = jqwidgets.createInstance(alignRightButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Bulleted List";
                    var bulletListTooltip = jqwidgets.createInstance(bulletListButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Numbered List";
                    var numberedListTooltip = jqwidgets.createInstance(numberedListButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Decrease Indent";
                    var decreaseIndentTooltip = jqwidgets.createInstance(decreaseIndentButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Increase Indent";
                    var increaseIndentTooltip = jqwidgets.createInstance(increaseIndentButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Sort Direction";
                    var sortTooltip = jqwidgets.createInstance(sortButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Line and Paragraph Spacing";
                    var lineSpacingTooltip = jqwidgets.createInstance(lineSpacingButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Show/Hide special characters";
                    var showHideTooltip = jqwidgets.createInstance(showHideButton, 'jqxTooltip', tooltipsOptions);
                    tooltipsOptions.content = "Fill style";
                    tooltipsOptions.theme = theme;
                    var bucketColorTooltip = jqwidgets.createInstance(bucketColorButton, 'jqxTooltip', tooltipsOptions);
                    var bucketColorOptions = {
                        width: 42,
                        theme: theme,
                        dropDownWidth: 180,
                        height: 19,
                        initContent: function () {
                            var bucketColorPickerOptions = {
                                color: "000000",
                                colorMode: 'hue',
                                width: 180,
                                height: 180
                            };
                            var bucketColorPicker = jqwidgets.createInstance(bucketColorPickerButton, 'jqxColorPicker', bucketColorPickerOptions);
                            bucketColorPicker.addEventHandler('colorchange', function (event) {
                                var bucketColorPickerPreview = document.getElementById('bucketColorPreview');
                                bucketColorPickerPreview.style.background = '#' + event.args.color.hex;
                            });
                        }
                    };
                    var bucketColor = jqwidgets.createInstance(bucketColorButton, 'jqxDropDownButton', bucketColorOptions);
                    bucketColor.setContent('<div id="pickColor"><span style="position:relative; display:inline-block; top: 2px"><div class="icon paintcan"></div><span id="bucketColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span></div>');
                    var fontOptions = {
                        source: [
                            "<span style='font-family: Courier New;'>Courier New</span>",
                            "<span style='font-family: Times New Roman;'>Times New Roman</span>",
                            "<span style='font-family: Arial;'>Arial</span>"
                        ],
                        width: 120,
                        height: 21,
                        theme: 'demoTheme',
                        autoDropDownHeight: true,
                        selectedIndex: 1
                    };
                    var font = jqwidgets.createInstance(fontButton, 'jqxDropDownList', fontOptions);
                    var fontSizeOptions = {
                        source: [8, 9, 10, 11, 12, 14, 18, 20, 22, 24],
                        theme: 'demoTheme',
                        renderer: function (index, label, value) {
                            return '<span style="font-size:' + value + 'px;">' + value + '</span>';
                        },
                        width: 70, height: 21, autoDropDownHeight: true, selectedIndex: 2
                    };
                    var fontSize = jqwidgets.createInstance(fontSizeButton, 'jqxDropDownList', fontSizeOptions);
                    var subscriptDom = document.getElementById(subscriptButton.substr(1));
                    subscriptDom.addEventListener('click', function () {
                        if (superscript.toggled) {
                            superscript.toggle();
                        }
                    });
                    var superscriptDom = document.getElementById(superscriptButton.substr(1));
                    superscriptDom.addEventListener('click', function () {
                        if (subscript.toggled) {
                            subscript.toggle();
                        }
                    });
                    var changeCaseOptions = {
                        source: ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'],
                        theme: 'demoTheme',
                        selectionRenderer: function (object, index, label) {
                            return '<div class="icon change-case-16" style="top:3px;  position:relative"></div>';
                        },
                        dropDownWidth: 150,
                        autoDropDownHeight: true, selectedIndex: 0, width: 40
                    };
                    var changeCase = jqwidgets.createInstance(changeCaseButton, 'jqxDropDownList', changeCaseOptions);
                    var fontColorOptions = {
                        width: 100,
                        theme: 'demoTheme',
                        dropDownWidth: 180,
                        height: 21,
                        initContent: function () {
                            var fontColorPickerOptions = {
                                color: "000000",
                                colorMode: 'hue',
                                width: 180,
                                height: 180
                            };
                            var fontColorPicker = jqwidgets.createInstance(fontColorPickerButton, 'jqxColorPicker', fontColorPickerOptions);
                            fontColorPicker.addEventHandler('colorchange', function (event) {
                                var fontColorPreview = document.getElementById('fontColorPreview');
                                fontColorPreview.style.background = '#' + event.args.color.hex;
                            });
                        }
                    };
                    var fontColor = jqwidgets.createInstance(fontColorButton, 'jqxDropDownButton', fontColorOptions);
                    fontColor.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px">Font Color</span>');
                    var highlightColorOptions = {
                        width: 130,
                        dropDownWidth: 180,
                        theme: 'demoTheme',
                        height: 21,
                        initContent: function () {
                            var highlightColorPickerOptions = {
                                color: "FF0000",
                                colorMode: 'hue',
                                width: 180,
                                height: 180
                            };
                            var highlightColorPicker = jqwidgets.createInstance(highlightColorPickerButton, 'jqxColorPicker', highlightColorPickerOptions);
                            highlightColorPicker.addEventHandler('colorchange', function (event) {
                                var highlightColorPreview = document.getElementById('highlightColorPreview');
                                highlightColorPreview.style.background = '#' + event.args.color.hex;
                            });
                        }
                    };
                    var highlightColor = jqwidgets.createInstance(highlightColorButton, 'jqxDropDownButton', highlightColorOptions);
                    highlightColor.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#F00"></span></span><span style="position:relative; display: inline; top:3px">Highlight Color</span>');
                    var pasteData = [
                        { label: 'Paste', imageClass: 'icon page_paste' },
                        { label: 'Paste Special', imageClass: 'icon paste_plain' },
                        { label: 'Paste text', imageClass: 'icon paste_word' },
                        { label: 'Paste link', imageClass: 'icon PasteImage' }
                    ];
                    var pasteButtonOptions = {
                        width: 35,
                        theme: 'demoTheme',
                        height: 56
                    };
                    var paste = jqwidgets.createInstance(pasteButton, 'jqxButton', pasteButtonOptions);
                    paste.addEventHandler('click', function (event) {
                        var text = this.getElementsByClassName('pasteText')[0].innerHTML;
                        console.log(text + ' clicked');
                    });
                    paste.addEventHandler('mousedown', function (event) {
                        event.preventDefault();
                    });
                    var pasteDropDownOptions = {
                        source: pasteData,
                        width: 22,
                        height: 10,
                        animationType: 'none',
                        dropDownWidth: '110px',
                        autoDropDownHeight: true,
                        renderer: function (index, label, value) {
                            var labelEl = '<span style="font-size: 10px">' + label + '</span>';
                            var icon = '<span class="' + pasteData[index].imageClass + '" style=""></span>';
                            return '<span>' + icon + labelEl + '</span>';
                        },
                        selectionRenderer: function (object, index, label) {
                            return "";
                        },
                        selectedIndex: 0
                    };
                    var pasteDropDown = jqwidgets.createInstance(pasteDropDownButton, 'jqxDropDownList', pasteDropDownOptions);
                    pasteDropDown.addEventHandler('select', function (event) {
                        var index = event.args.index;
                        var icon = '<span class="' + pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
                        var pasteButtonDom = document.getElementById(pasteButton.substr(1));
                        pasteButtonDom.innerHTML = icon + '<span class="pasteText">' + pasteData[index].label + '</span>';
                        paste.render();
                    });
                    break;
                case 2:
                    var helpAboutUpdateOptions = { width: 26, height: 26, theme: 'demoTheme' };
                    var help = jqwidgets.createInstance(helpButton, 'jqxButton', helpAboutUpdateOptions);
                    var about = jqwidgets.createInstance(aboutButton, 'jqxButton', helpAboutUpdateOptions);
                    var update = jqwidgets.createInstance(updateButton, 'jqxButton', helpAboutUpdateOptions);
                    break;
            }
        }
    };
    // creates an instance
    var myRibbon = jqwidgets.createInstance(selector, 'jqxRibbon', options);
    myRibbon.disableAt(0);
    // jqxGrid code
    // renderer for grid cells.
    var numberrenderer = function (row, column, value) {
        return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
    };
    // create Grid datafields and columns arrays.
    var datafields = [];
    var columns = [];
    for (var i = 0; i < 26; i++) {
        var text = String.fromCharCode(65 + i);
        if (i == 0) {
            var cssclass = 'jqx-widget-header';
            if (theme != '')
                cssclass += ' jqx-widget-header-' + theme;
            columns[columns.length] = {
                pinned: true,
                exportable: false,
                text: "",
                columntype: 'number',
                cellclassname: cssclass,
                cellsrenderer: numberrenderer
            };
        }
        datafields[datafields.length] = { name: text };
        columns[columns.length] = { text: text, datafield: text, width: 60, align: 'center' };
    }
    var source = {
        unboundmode: true,
        totalrecords: 100,
        datafields: datafields,
        updaterow: function (rowid, rowdata) {
            // synchronize with the server - send update command   
        }
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    // initialize jqxGrid
    var gridOptions = {
        width: 800,
        source: dataAdapter,
        editable: true,
        columnsresize: true,
        selectionmode: 'multiplecellsadvanced',
        columns: columns
    };
    var grid = jqwidgets.createInstance(gridSelector, 'jqxGrid', gridOptions);
}
//# sourceMappingURL=typescript-ribbon.js.map