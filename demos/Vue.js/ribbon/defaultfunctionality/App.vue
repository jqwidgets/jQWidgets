<template>
    <div>
        <JqxRibbon ref="myRibbon" class="ribbon"
                   :width="getWidth" :height="131" :animationType="'none'"
                   :selectionMode="'click'" :position="'top'" :mode="'default'"
                   :theme="'demoTheme'" :selectedIndex="1">
            <ul>
                <li id="fileItem">
                    <JqxDropDownButton class='fileItemButton' ref="fileItemButton"
                                       :width="50" :height="26" :arrowSize="0"
                                       :dropDownWidth="120" :theme="'demoTheme'">
                        <div style="height:110px;">
                            <ul style="list-style-type: none; margin:0px; padding: 3px;">
                                <li>
                                    <JqxButton class='button' :theme="'demoTheme'">
                                        <div class="icon SaveImage"></div> Save
                                    </JqxButton>
                                </li>
                                <li>
                                    <JqxButton class='button' :theme="'demoTheme'">
                                        <div class="icon SaveSelectionImage"></div> Save As
                                    </JqxButton>
                                </li>
                                <li>
                                    <JqxButton class='button' :theme="'demoTheme'">
                                        <div class="icon folder"></div> Open
                                    </JqxButton>
                                </li>
                                <li>
                                    <JqxButton class='button' :theme="'demoTheme'">
                                        <div class="icon close"></div> Close
                                    </JqxButton>
                                </li>
                            </ul>
                        </div>
                    </JqxDropDownButton>
                </li>
                <li>Home</li>
                <li>Help</li>
            </ul>
            <div>
                <div style="overflow: hidden;">
                </div>
                <div style="overflow: hidden;">
                    <table class="buttonHolderTable" id="clipBoardTable">
                        <tr>
                            <td rowspan="3" style="text-align: center; height: 70px; font-size: 10px">
                                <div id="paste" style="width: 50px;">
                                    <JqxButton ref="pasteButton" class="pasteButton" @click='onPasteButtonClick($event)' @mousedown='onMouseDownPasteButton($event)'
                                               :width="35" :height="56" :theme="'demoTheme'">
                                        <span class="icon page_paste" style="zoom: 1.5"></span><span class="pasteText">Paste</span>
                                    </JqxButton>
                                    <JqxDropDownList @select='onPasteDropDownSelect($event)' class="pasteDropDown"
                                                     :width="22" :height="10" :autoDropDownHeight="true" :animationType="'none'"
                                                     :theme="'demoTheme'" :selectedIndex="0" :source="pasteData" :dropDownWidth="110"
                                                     :renderer="pasteRenderer" :selectionRenderer="pasteRelectionRenderer">
                                    </JqxDropDownList>
                                </div>
                            </td>
                            <td class="firstrow" rowspan="1">
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Cut (Ctrl + X)'">
                                    <JqxButton class='cutButton' ref="cutButton" :theme="'demoTheme'">
                                        <div class="icon cut_red"></div>
                                        <span class="cutText">Cut</span>
                                    </JqxButton>
                                </JqxTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td class="secondrow">
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Copy (Ctrl + C)'">
                                    <JqxButton class='copyButton' ref="copyButton" :theme="'demoTheme'">
                                        <div class="icon page_copy"></div>
                                        <span class="copyText">Copy</span>
                                    </JqxButton>
                                </JqxTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td class="thirdrow">
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Format Painter'">
                                    <JqxButton class='formatPainter' ref="formatPainter" :theme="'demoTheme'">
                                        <div class="icon FormatPainterImage"></div>
                                        <span class="formatPainter">Format Painter</span>
                                    </JqxButton>
                                </JqxTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="font-size: 9px; text-align: center; top: -3px; position: relative;">
                                Clipboard
                            </td>
                        </tr>
                    </table>
                    <div class="sectionSeparator">
                    </div>
                    <table class="buttonHolderTable" style="float: left;">
                        <tr>
                            <td colspan="4">
                                <JqxDropDownList :width="120" :height="21" :autoDropDownHeight="true"
                                                 :theme="'demoTheme'" :selectedIndex="1" :source="fontListSource">
                                </JqxDropDownList>
                            </td>
                            <td>
                                <JqxDropDownList style="margin-left: 7px;"
                                                 :width="70" :height="21" :autoDropDownHeight="true" :renderer="fontSizeListRenderer"
                                                 :theme="'demoTheme'" :selectedIndex="2" :source="fontSizeListSource">
                                </JqxDropDownList>
                            </td>
                            <td>
                                <JqxButton :theme="'demoTheme'"><div class="icon fontsizeincrease16"></div></JqxButton>
                            </td>
                            <td>
                                <JqxButton :theme="'demoTheme'"><div class="icon fontsizedecrease16"></div></JqxButton>
                            </td>
                            <td>
                                <JqxButton :theme="'demoTheme'"><div class="icon ClearFormattingImage"></div></JqxButton>
                            </td>
                            <td>
                                <JqxDropDownList :width="50" :selectionRenderer="changeCaseListSelectionRenderer" :autoDropDownHeight="true"
                                                 :theme="'demoTheme'" :selectedIndex="0" :source="changeCaseListSource" :dropDownWidth="150">
                                </JqxDropDownList>
                            </td>
                        </tr>
                        <tr class="secondrow">
                            <td colspan="8">
                                <JqxDropDownButton ref="fontColorButton"
                                                   :width="123" :height="21"
                                                   :dropDownWidth="180" :theme="'demoTheme'">
                                    <div style="padding: 3px;">
                                        <JqxColorPicker @colorchange='onFontColorPicker($event)'
                                                        :width="180" :height="180"
                                                        :color="'FF0000'" :colorMode="'hue'">
                                        </JqxColorPicker>
                                    </div>
                                </JqxDropDownButton>
                                <div class="separator"></div>
                                <JqxDropDownButton ref="highlightColorButton"
                                                   :width="130" :height="21"
                                                   :dropDownWidth="180" :theme="'demoTheme'">
                                    <div style="padding: 3px;">
                                        <JqxColorPicker @colorchange='onHighlightColorPicker($event)'
                                                        :width="180" :height="180"
                                                        :color="'FF0000'" :colorMode="'hue'">
                                        </JqxColorPicker>
                                    </div>
                                </JqxDropDownButton>
                            </td>
                        </tr>
                        <tr class="thirdrow">
                            <td colspan="8" style="padding: 0;">
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Superscript'" :height="20">
                                    <JqxToggleButton ref="superScript" @click='onSuperScriptClick()' :theme="'demoTheme'">
                                        <div class="icon text_superscript"></div>
                                    </JqxToggleButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Subscript'" :height="20">
                                    <JqxToggleButton ref="subScript" @click='onSubScriptClick()' :theme="'demoTheme'">
                                        <div class="icon text_subscript"></div>
                                    </JqxToggleButton>
                                </JqxTooltip>
                                <div class="separator" style="top: 3px;"></div>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Bold (Ctrl + B)'" :height="20">
                                    <JqxToggleButton :theme="'demoTheme'">
                                        <div class="icon text_bold"></div>
                                    </JqxToggleButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Italic (Ctrl + I)'" :height="20">
                                    <JqxToggleButton :theme="'demoTheme'">
                                        <div class="icon text_italic"></div>
                                    </JqxToggleButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Underline (Ctrl + U)'" :height="20">
                                    <JqxToggleButton :theme="'demoTheme'">
                                        <div class="icon text_underline"></div>
                                    </JqxToggleButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Strikethrough'" :height="20">
                                    <JqxToggleButton :theme="'demoTheme'">
                                        <div class="icon text_strikethrough"></div>
                                    </JqxToggleButton>
                                </JqxTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="9" style="height: 10px; font-size: 9px; text-align: center;">
                                Font
                            </td>
                        </tr>
                    </table>
                    <div class="sectionSeparator">
                    </div>
                    <table class="buttonHolderTable" style="float: left;">
                        <tr class="firstrow">
                            <td colspan="8">
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Bulleted List'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_list_bullets"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Numbered List'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_list_numbers"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Decrease Indent'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_indent"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Increase Indent'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_indent_remove"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Sort Direction'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon SortHS"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Fill Style'" style="vertical-align: middle;">
                                    <JqxDropDownButton ref="bucketColorButton"
                                                       :width="42" :height="20"
                                                       :dropDownWidth="180" :theme="'demoTheme'">
                                        <div style="padding: 3px;">
                                            <JqxColorPicker @colorchange='onBucketColorPicker($event)'
                                                            :width="180" :height="180"
                                                            :color="'000000'" :colorMode="'hue'">
                                            </JqxColorPicker>
                                        </div>
                                    </JqxDropDownButton>
                                </JqxTooltip>
                            </td>
                        </tr>
                        <tr class="secondrow">
                            <td colspan="8">
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Align Text Left (Ctrl + L)'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_align_left"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Center (Ctrl + E)'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_align_center"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Align Text Right (Ctrl + R)'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_align_right"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Justify (Ctrl + J)'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_align_justify"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <div class="separator" style="top:5px; height: 15px;"></div>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Line and Paragraph Spacing'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon text_linespacing"></div>
                                    </JqxButton>
                                </JqxTooltip>
                                <JqxTooltip :position="'mouse'" :theme="'demoTheme'" :content="'Show/Hide special characters'">
                                    <JqxButton :theme="'demoTheme'">
                                        <div class="icon ShowParagraphMarksImage"></div>
                                    </JqxButton>
                                </JqxTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style="height: 35px; text-align: center; vertical-align: bottom; font-size: 9px;">
                                Alignment
                            </td>
                        </tr>
                    </table>
                    <div class="sectionSeparator">
                    </div>
                </div>
                <div style="overflow: hidden;">
                    <table class="buttonHolderTable" style="height: 100%;">
                        <tr>
                            <td class="bigTd">
                                <JqxButton class='button left' :theme="'demoTheme'" :width="36" :height="36">
                                    <img class="img" src="../../../images/help-26.png" />
                                </JqxButton>
                                Help
                            </td>
                            <td class="bigTd">
                                <JqxButton class='button left' :theme="'demoTheme'" :width="36" :height="36">
                                    <img class="img" src="../../../images/about-26.png" />
                                </JqxButton>
                                About
                            </td>
                            <td class="bigTd">
                                <JqxButton class="button left" :theme="'demoTheme'" :width="36" :height="36">
                                    <img class="img" src="../../../images/downloading_updates-26.png" />
                                </JqxButton>
                                Update
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </JqxRibbon>
        <JqxGrid class="grid" :width="850" :source="gridData.source" :theme="'demoTheme'" :editable="true"
                 :columnsresize="true" :selectionmode='"multiplecellsadvanced"' :columns="gridData.columns">
        </JqxGrid>
    </div>
</template>

<script>
    import JqxRibbon from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxribbon.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxToggleButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtogglebutton.vue';
    import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownbutton.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcolorpicker.vue';
    import JqxTooltip from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtooltip.vue';


    export default {
        components: {
            JqxRibbon,
            JqxGrid,
            JqxButton,
            JqxToggleButton,
            JqxDropDownButton,
            JqxDropDownList,
            JqxColorPicker,
            JqxTooltip

        },
        data: function () {
            return {
                getWidth: '90%',
                gridData: this.manageGridData(),
                fontSizeListSource: [8, 9, 10, 11, 12, 14, 18, 20, 22, 24],
                changeCaseListSource: ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'],
                fontListSource:
                    [
                        "<span style='font-family: Courier New;'>Courier New</span>",
                        "<span style='font-family: Times New Roman;'>Times New Roman</span>",
                        "<span style='font-family: Arial;'>Arial</span>"
                    ],
                pasteData:
                    [
                        { label: 'Paste', imageClass: 'icon page_paste' },
                        { label: 'Paste Special', imageClass: 'icon paste_plain' },
                        { label: 'Paste text', imageClass: 'icon paste_word' },
                        { label: 'Paste link', imageClass: 'icon PasteImage' }
                    ]
            }
        },
        mounted: function () {
            this.buttonsStyling();
            this.$refs.myRibbon.disableAt(0);
            this.$refs.myRibbon.$el.firstElementChild.children[0].style.padding = '0';
            this.$refs.myRibbon.$el.firstElementChild.children[1].style.padding = '7px 5px';
            this.$refs.myRibbon.$el.firstElementChild.children[2].style.padding = '7px 5px';
            this.$refs.myRibbon.$el.firstElementChild.children[1].style.marginLeft = '5px';
            this.$refs.myRibbon.$el.firstElementChild.children[2].style.marginRight = '5px';
            this.$refs.fileItemButton.setContent('<span style="position: relative; line-height: 26px; margin-left:10px;">File</span>');
            this.$refs.fontColorButton.setContent('<span style="position: relative; display:inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px">Font Color</span>');
            this.$refs.bucketColorButton.setContent('<span style="position: relative; display:inline"><div class="icon paintcan"></div><span id="bucketColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px"></span>');
            this.$refs.highlightColorButton.setContent('<span style="position: relative; display:inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#F00"></span></span><span style="position:relative; display: inline; top:3px">Highlight Color</span>');
        },
        methods: {
            buttonsStyling: function () {
                for (let i = 0; i < document.getElementsByTagName('jqxtooltip').length; i++) {
                    document.querySelectorAll('jqxtooltip')[i].firstElementChild.style.display = 'inline-block';
                }

                for (let i = 0; i < document.getElementsByTagName('jqxbutton').length; i++) {
                    document.querySelectorAll('jqxbutton')[i].firstElementChild.style.display = 'inline-block';
                    document.querySelectorAll('jqxbutton')[i].firstElementChild.setAttribute('checked', 'false');
                }

                for (let i = 0; i < document.getElementsByTagName('jqxdropdownlist').length; i++) {
                    document.querySelectorAll('jqxdropdownlist')[i].firstElementChild.style.display = 'inline-block';
                }

                this.$refs.fileItemButton.$el.firstElementChild.style.color = 'white';
                this.$refs.fileItemButton.$el.firstElementChild.style.background = 'transparent';
            },
            onBucketColorPicker: function (event) {
                document.querySelector('#bucketColorPreview').style.background = '#' + event.args.color.hex;
            },
            onFontColorPicker: function (event) {
                document.querySelector('#fontColorPreview').style.background = '#' + event.args.color.hex;
            },

            onHighlightColorPicker: function (event) {
                document.querySelector('#highlightColorPreview').style.background = '#' + event.args.color.hex;
            },
            onSubScriptClick: function () {
                this.$refs.superScript.toggled = false;
            },
            onSuperScriptClick: function () {
                this.$refs.subScript.toggled = false;
            },
            onPasteButtonClick: function () {
                const text = this.$refs.pasteButton.$el.querySelectorAll('.pasteText')[0].innerHTML;
                console.log(text + ' clicked');
            },
            onMouseDownPasteButton: function (event) {
                event.preventDefault();
            },
            onPasteDropDownSelect: function (event) {
                const pasteData =
                    [
                        { label: 'Paste', imageClass: 'icon page_paste' },
                        { label: 'Paste Special', imageClass: 'icon paste_plain' },
                        { label: 'Paste text', imageClass: 'icon paste_word' },
                        { label: 'Paste link', imageClass: 'icon PasteImage' }
                    ];
                const index = event.args.index;
                const icon = '<span class="' + pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
                this.$refs.pasteButton.$el.innerHTML = icon + '<span class="pasteText">' + pasteData[index].label + '</span>';
                this.$refs.pasteButton.render();
            },
            fontSizeListRenderer: function (index, label, value) {
                return '<span style="font-size:' + value + 'px;">' + value + '</span>';
            },
            changeCaseListSelectionRenderer: function (object, index, label) {
                return '<div class="icon change-case-16" style="top:3px;  position:relative"></div>';
            },
            pasteRenderer: function (index, label, value) {
                const labelEl = '<span style="font-size: 10px">' + label + '</span>';
                const icon = '<span class="' + this.pasteData[index].imageClass + '" style=""></span>';
                return '<span>' + icon + labelEl + '</span>';
            },
            pasteRelectionRenderer: function (object, index, label) {
                return '';
            },
            manageGridData: function () {
                const numberrenderer = function (row, column, value) {
                    return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
                };

                const datafields = [];
                const columns = [];

                for (let i = 0; i < 26; i++) {
                    const text = String.fromCharCode(65 + i);

                    if (i == 0) {
                        const cssclass = 'jqx-widget-header';
                        columns[columns.length] =
                            {
                                pinned: true,
                                exportable: false,
                                text: '',
                                columntype: 'number',
                                cellclassname: cssclass,
                                cellsrenderer: numberrenderer
                            };
                    }

                    datafields[datafields.length] = { name: text };
                    columns[columns.length] = { text: text, datafield: text, width: 60, align: 'center' };
                }

                const source =
                    {
                        unboundmode: true,
                        totalrecords: 100,
                        datafields: datafields,
                    };

                const dataAdapter = new jqx.dataAdapter(source);

                const jqxGridSettings =
                    {
                        source: dataAdapter,
                        columns: columns
                    };

                return jqxGridSettings;
            }
        }
    }
</script>

<style>
    .button {
        margin: 2px;
        margin-right: 0;
        font-size: 11px;
    }

    .sectionSeparator {
        width: 1px;
        height: 105px;
        background-color: #eee;
        float: left;
        margin: 10px 5px 0 5px;
    }

    .bigTd {
        text-align: center;
        vertical-align: top;
        width: 50px;
    }

    .left {
        margin-left: 7px;
    }

    #clipBoardTable {
        height: 100%;
        border-collapse: separate;
        border-spacing: 0 0;
        float: left;
    }

    .grid {
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .ribbon li {
        line-height: 16px;
    }

    span, li {
        font-size: 11px !important;
    }

    .ribbon, .jqx-ribbon-content-section-demoTheme {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .pasteText {
        font-size: 10px;
    }

    div.pasteButton {
        text-align: center;
    }

        div.pasteButton .icon {
            margin-right: 0;
        }

    .pasteDropDown {
        margin-left: 10px;
    }

        .pasteDropDown .jqx-listitem-element-demoTheme {
            border: none;
            font-size: 10px;
        }

    .jqx-dropdownlist-state-normal {
        background: transparent;
        border: none;
    }

    .jqx-button {
        background: transparent;
    }

    .separator {
        padding: 0 0 0 1px;
        height: 20px;
        border: solid 1px #fff;
        border-top: 0;
        border-bottom: 0;
        margin: 0 2px;
        width: 1px;
        display: inline-block;
        position: relative;
        background: #bfc3c7;
        background: linear-gradient(#f8f9fa, #bfc3c7, #f8f9fa);
    }

    .firstrow, .secondrow, .thirdrow {
        font-size: 0;
        padding: 0;
    }

        .firstrow div,
        .secondrow div,
        .thirdrow div {
            position: relative;
            display: inline-block;
            font-size: 10px;
        }

        .thirdrow .separator {
            margin: 0 2px;
            height: 14px;
        }

    .jqx-button-demoTheme span {
        margin-left: 2px;
    }

    .jqx-button {
        position: relative;
        height: 16px;
        padding: 2px;
        border: 1px solid transparent;
        line-height: 16px;
        text-align: left;
    }

    #fileItem {
        padding: 0px;
    }

    #fileItem {
        background: #006400;
        color: White !important;
        background-image: none;
        text-shadow: none;
    }

    #fileItem {
        background: #338333 !important;
        color: White !important;
        text-shadow: none;
    }

    #fileItem {
        background: #005000 !important;
        color: White !important;
        text-shadow: none;
    }

    .jqx-ribbon-content-section-demoTheme {
        background: #eaedf1;
        background: linear-gradient(#fff 40%, #eaedf1);
    }

    .jqx-button-demoTheme:hover {
        border-color: #f1ca58;
        box-shadow: 0 0 1px 1px #fff inset;
        background: #fde38a;
        background: linear-gradient(#fdeeb3, #fde38a, #fdefbb);
    }

    .jqx-button-demoTheme:active {
        border-color: #c2963d;
        background: #fff37f;
        background: linear-gradient(#ffe575, #fff37f);
    }

    .jqx-fill-state-hover-demoTheme,
    .jqx-fill-state-pressed-demoTheme {
        border-color: #c2963d;
        background: #fff37f;
        background: linear-gradient(#ffe575, #fff37f);
    }

    .fileItemButton {
        background: transparent;
        border: none;
        color: #fff;
    }

    .icon {
        background: url('../../../images/ribbon-icons.png') no-repeat top left;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 2px;
        margin-left: 2px;
        vertical-align: middle;
    }

        .icon.closed_door {
            background-position: 0 0;
        }

        .icon.change-case-16 {
            background-position: -26px 0;
        }

        .icon.ClearFormattingImage {
            background-position: -52px 0;
            width: 17px;
        }

        .icon.close {
            background-position: -78px 0;
        }

        .icon.cut {
            background-position: -104px 0;
        }

        .icon.cut_red {
            background-position: -130px 0;
        }

        .icon.cut-icon-16 {
            background-position: -156px 0;
        }

        .icon.CutImage {
            background-position: -182px 0;
        }

        .icon.folder {
            background-position: -208px 0;
        }

        .icon.FontDialogImage {
            background-position: -234px 0;
        }

        .icon.fontsizedecrease16 {
            background-position: -260px 0;
        }

        .icon.fontsizeincrease16 {
            background-position: -286px 0;
        }

        .icon.FormatPainterImage {
            background-position: -312px 0;
        }

        .icon.page_copy {
            background-position: -338px 0;
        }

        .icon.page_paste {
            background-position: -364px 0;
        }

        .icon.page_white_paste {
            background-position: -390px 0;
        }

        .icon.paintcan {
            background-position: -416px 0;
        }

        .icon.paste_plain {
            background-position: -442px 0;
        }

        .icon.paste_word {
            background-position: -468px 0;
        }

        .icon.paste-24 {
            background-position: -494px 0;
            width: 24px;
            height: 24px;
        }

        .icon.paste-48 {
            background-position: -528px 0;
            width: 48px;
            height: 48px;
        }

        .icon.PasteImage {
            background-position: -586px 0;
        }

        .icon.PasteImageLarge {
            background-position: -612px 0;
            width: 32px;
            height: 32px;
        }

        .icon.PasteSpecialImage {
            background-position: -654px 0;
        }

        .icon.pencil {
            background-position: -680px 0;
        }

        .icon.SaveImage {
            background-position: -706px 0;
        }

        .icon.SaveSelectionImage {
            background-position: -732px 0;
        }

        .icon.ShowParagraphMarksImage {
            background-position: -758px 0;
        }

        .icon.SortHS {
            background-position: -784px 0;
        }

        .icon.spellcheck {
            background-position: -810px 0;
        }

        .icon.text_align_center {
            background-position: -836px 0;
        }

        .icon.text_align_justify {
            background-position: -862px 0;
        }

        .icon.text_align_left {
            background-position: -888px 0;
        }

        .icon.text_align_right {
            background-position: -914px 0;
        }

        .icon.text_bold {
            background-position: -940px 0;
        }

        .icon.text_indent {
            background-position: -966px 0;
        }

        .icon.text_indent_remove {
            background-position: -992px 0;
        }

        .icon.text_italic {
            background-position: -1018px 0;
        }

        .icon.text_linespacing {
            background-position: -1044px 0;
        }

        .icon.text_list_bullets {
            background-position: -1070px 0;
        }

        .icon.text_list_numbers {
            background-position: -1096px 0;
        }

        .icon.text_strikethrough {
            background-position: -1122px 0;
        }

        .icon.text_subscript {
            background-position: -1148px 0;
        }

        .icon.text_superscript {
            background-position: -1174px 0;
        }

        .icon.text_underline {
            background-position: -1200px 0;
        }
</style>