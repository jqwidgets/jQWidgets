import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRibbon from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxribbon';
import JqxToggleButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtogglebutton';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

class App extends React.PureComponent<{}, any> {
    private myRibbon = React.createRef<JqxRibbon>();
    private fileItemButton = React.createRef<JqxDropDownButton>();
    private fontColorButton = React.createRef<JqxDropDownButton>();
    private highlightColorButton = React.createRef<JqxDropDownButton>();
    private bucketColorButton = React.createRef<JqxDropDownButton>();
    private pasteButton = React.createRef<JqxButton>();
    private superScriptToggleButton = React.createRef<JqxToggleButton>();
    private subscriptToggleButton = React.createRef<JqxToggleButton>();

    private pasteData: any = [
        { label: 'Paste', imageClass: 'icon page_paste' },
        { label: 'Paste Special', imageClass: 'icon paste_plain' },
        { label: 'Paste text', imageClass: 'icon paste_word' },
        { label: 'Paste link', imageClass: 'icon PasteImage' }
    ];
    private fontListSource: string[] = [
        "<span style='font-family: Courier New;'>Courier New</span>",
        "<span style='font-family: Times New Roman;'>Times New Roman</span>",
        "<span style='font-family: Arial;'>Arial</span>"
    ];
    private fontSizeListSource: number[] = [8, 9, 10, 11, 12, 14, 18, 20, 22, 24];
    private changeCaseListSource: string[] = ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'];

    constructor(props: {}) {
        super(props);
        
        this.onPasteDropDownSelect = this.onPasteDropDownSelect.bind(this);
        this.onBucketColorPicker = this.onBucketColorPicker.bind(this);
        this.onSubScriptClick = this.onSubScriptClick.bind(this);
        this.onSuperScriptClick = this.onSuperScriptClick.bind(this);
        this.onFontColorPicker = this.onFontColorPicker.bind(this);
        this.onHighlightColorPicker = this.onHighlightColorPicker.bind(this);
        this.onPasteButtonClick = this.onPasteButtonClick.bind(this);

        this.state = {
            changeCaseListSelectionRenderer: (object: any, index: any, label: any) => {
                return '<div class="icon change-case-16" style="top: 3px; position: relative"></div>';
            },
            columns: this.manageGridData().columns,
            dropdownHeight: 21,
            fontSizeListRenderer: (index: number, label: any, value: any) => {
                return '<span style="font-size:' + value + 'px;">' + value + '</span>';
            },
            pasteRenderer: (index: number, label: any, value: any) => {
                const labelEl = '<span style="font-size: 10px">' + label + '</span>';
                const icon = '<span class="' + this.pasteData[index].imageClass + '" style=""></span>';
                return '<span>' + icon + labelEl + '</span>';
            },
            pasteSelectionRenderer: () => {
                return "";
            },
            source: this.manageGridData().source
        }
    }

    public componentDidMount() {
        this.myRibbon.current!.disableAt(0);        
        this.bucketColorButton.current!.setContent(`
            <span style="position: relative; display: inline-block; top: 2px">
                <div class="icon paintcan"></div>
                <span id="bucketColorPreview" style="display: block; position: absolute; height: 3px; width: 16px; background: #000">
                </span>
            </span>`);
        this.fileItemButton.current!.setContent('<span style="position: relative; line-height: 26px; margin-left: 10px;">File</span>');
        this.fontColorButton.current!.setContent('<span style="position: relative; display: inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position: absolute;  height: 3px; width: 16px; background: #000"></span></span><span style="position: relative; display: inline; top: 3px">Font Color</span>');
        this.highlightColorButton.current!.setContent('<span style="position: relative; display: inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position: absolute;  height: 3px; width: 16px; background: #F00"></span></span><span style="position: relative; display: inline; top: 3px">Highlight Color</span>');

        const icons = document.getElementsByClassName('icon');
        Array.prototype.forEach.call(icons, (icon: HTMLElement) => {
            icon.style.backgroundImage = "url('https://www.jqwidgets.com/react/images/ribbon-icons.png')";
        });
    }

    public render() {
        return (
            <div>
                <JqxRibbon theme={'material-purple'} ref={this.myRibbon}
                    // @ts-ignore
                    width={"100%"}
                    height={131}
                    animationType={"none"}
                    selectionMode={"click"}
                    position={"top"}
                    mode={"default"}
                    selectedIndex={1}
                    theme={"demoTheme"}
                >
                    <ul>
                        <li id="fileItem">
                            <JqxDropDownButton theme={'material-purple'} ref={this.fileItemButton}
                                width={50}
                                height={26}
                                arrowSize={0}
                                dropDownWidth={120}
                                theme={"demoTheme"}
                            >
                                <div style={{ height: 110 }}>
                                    <ul style={{ listStyleType: "none", margin: 0, padding: 3 }}>
                                        <li>
                                            <JqxButton theme={'material-purple'} height={16} className="button" theme={"demoTheme"}>
                                                <div className="icon SaveImage" /> Save
                                            </JqxButton>
                                        </li>
                                        <li>
                                            <JqxButton theme={'material-purple'} height={16} className="button" theme={"demoTheme"}>
                                                <div className="icon SaveSelectionImage" /> Save As
                                            </JqxButton>
                                        </li>
                                        <li>
                                            <JqxButton theme={'material-purple'} height={16} className="button" theme={"demoTheme"}>
                                                <div className="icon folder" /> Open
                                            </JqxButton>
                                        </li>
                                        <li>
                                            <JqxButton theme={'material-purple'} height={16} className="button" theme={"demoTheme"}>
                                                <div className="icon close" /> Close
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
                        <div style={{ overflow: "hidden" }} />
                        <div style={{ overflow: "hidden" }}>
                            <table className="buttonHolderTable" id="clipBoardTable">
                                <tbody>
                                    <tr>
                                        <td rowSpan={3} style={{ textAlign: "center", height: 70, fontSize: 10 }}
                                        >
                                            <div id="paste" style={{ width: 50 }}>
                                                <JqxButton theme={'material-purple'}
                                                    ref={this.pasteButton}
                                                    // mousedown={this.onMouseDownPasteButton}
                                                    onClick={this.onPasteButtonClick}
                                                    width={35}
                                                    height={56}
                                                    theme={"demoTheme"}
                                                >
                                                    <span className="icon page_paste" style={{ zoom: 1.5 }} />
                                                    <span className="pasteText">Paste</span>
                                                </JqxButton>
                                                <JqxDropDownList theme={'material-purple'}
                                                    onSelect={this.onPasteDropDownSelect}
                                                    width={22}
                                                    height={10}
                                                    autoDropDownHeight={true}
                                                    animationType={"none"}
                                                    selectedIndex={0}
                                                    source={this.pasteData}
                                                    dropDownWidth={110}
                                                    renderer={this.state.pasteRenderer}
                                                    selectionRenderer={this.state.pasteSelectionRenderer}
                                                    theme={"demoTheme"}
                                                />
                                            </div>
                                        </td>
                                        <td className="firstrow" rowSpan={1}>
                                            <JqxTooltip theme={'material-purple'}
                                                position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Cut (Ctrl + X)"}
                                            >
                                                <JqxButton theme={'material-purple'} theme={"demoTheme"} height={16}>
                                                    <div className="icon cut_red" />
                                                    <span className="cutText">Cut</span>
                                                </JqxButton>
                                            </JqxTooltip>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="secondrow">
                                            <JqxTooltip theme={'material-purple'}
                                                position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Copy (Ctrl + C)"}
                                            >
                                                <JqxButton theme={'material-purple'} theme={"demoTheme"} height={16}>
                                                    <div className="icon page_copy" />
                                                    <span className="copyText">Copy</span>
                                                </JqxButton>
                                            </JqxTooltip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="thirdrow">
                                            <JqxTooltip theme={'material-purple'}
                                                position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Format Painter"}
                                            >
                                                <JqxButton theme={'material-purple'} theme={"demoTheme"} height={16}>
                                                    <div className="icon FormatPainterImage" />
                                                    <span className="formatPainter">Format Painter</span>
                                                </JqxButton>
                                            </JqxTooltip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} style={{ fontSize: 9, textAlign: "center", top: -3, position: "relative" }}>
                                            Clipboard
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="sectionSeparator" />
                            <table className="buttonHolderTable" style={{ float: "left" }}>
                                <tbody>
                                    <tr>
                                        <td colSpan={4}>
                                            <JqxDropDownList theme={'material-purple'}
                                                width={120}
                                                height={this.state.dropdownHeight}
                                                autoDropDownHeight={true}
                                                theme={"demoTheme"}
                                                selectedIndex={1}
                                                source={this.fontListSource}
                                            />
                                        </td>
                                        <td>
                                            <JqxDropDownList theme={'material-purple'}
                                                width={70}
                                                height={this.state.dropdownHeight}
                                                autoDropDownHeight={true}
                                                theme={"demoTheme"}
                                                selectedIndex={2}
                                                renderer={this.state.fontSizeListRenderer}
                                                source={this.fontSizeListSource}
                                            />
                                        </td>
                                        <td>
                                            <JqxButton theme={'material-purple'} theme={"demoTheme"}><div className="icon fontsizeincrease16" /></JqxButton>
                                        </td>
                                        <td>
                                            <JqxButton theme={'material-purple'} theme={"demoTheme"}><div className="icon fontsizedecrease16" /></JqxButton>
                                        </td>
                                        <td>
                                            <JqxButton theme={'material-purple'} theme={"demoTheme"}><div className="icon ClearFormattingImage" /></JqxButton>
                                        </td>
                                        <td>
                                            <JqxDropDownList theme={'material-purple'}
                                                width={40}
                                                autoDropDownHeight={true}
                                                theme={"demoTheme"}
                                                selectedIndex={0}
                                                source={this.changeCaseListSource}
                                                dropDownWidth={150}
                                                selectionRenderer={this.state.changeCaseListSelectionRenderer}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="secondrow">
                                        <td colSpan={8}>
                                            <JqxDropDownButton theme={'material-purple'} ref={this.fontColorButton}
                                                width={100}
                                                height={this.state.dropdownHeight}
                                                arrowSize={0}
                                                dropDownWidth={180}
                                                theme={"demoTheme"}
                                            >
                                                <div style={{ padding: 3 }}>
                                                    <JqxColorPicker
                                                        onColorchange={this.onFontColorPicker}
                                                        width={180}
                                                        height={180}
                                                        color={"FF0000"}
                                                        colorMode={"hue"}
                                                    />
                                                </div>
                                            </JqxDropDownButton>
                                            <div className="separator" />
                                            <JqxDropDownButton theme={'material-purple'} ref={this.highlightColorButton}
                                                width={130}
                                                height={this.state.dropdownHeight}
                                                arrowSize={0}
                                                dropDownWidth={180}
                                                theme={"demoTheme"}
                                            >
                                                <div style={{ padding: 3 }}>
                                                    <JqxColorPicker
                                                        onColorchange={this.onHighlightColorPicker}
                                                        width={180}
                                                        height={180}
                                                        color={"FF0000"}
                                                        colorMode={"hue"}
                                                    />
                                                </div>
                                            </JqxDropDownButton>
                                        </td>
                                    </tr>
                                    <tr className="thirdrow">
                                        <td colSpan={8} style={{ padding: 0 }}>


                                            TODO: Change this JqxTooltip "autoHide"


                                            <JqxTooltip theme={'material-purple'} position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Superscript"}
                                                autoHide={false}
                                                >
                                                <JqxToggleButton theme={'material-purple'} height={15} ref={this.superScriptToggleButton}
                                                    onClick={this.onSuperScriptClick}
                                                    theme={"demoTheme"}
                                                >
                                                    <div className="icon text_superscript" />
                                                </JqxToggleButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Subscript"}
                                            >
                                                <JqxToggleButton theme={'material-purple'} height={15} ref={this.subscriptToggleButton}
                                                    onClick={this.onSubScriptClick}
                                                    theme={"demoTheme"}
                                                >
                                                    <div className="icon text_subscript" />
                                                </JqxToggleButton>
                                            </JqxTooltip>
                                            <div className="separator" style={{ top: 3 }} />
                                            <JqxTooltip theme={'material-purple'} position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Bold (Ctrl + B)"}
                                            >
                                                <JqxToggleButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_bold" />
                                                </JqxToggleButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Italic (Ctrl + I)"}
                                            >
                                                <JqxToggleButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_italic" />
                                                </JqxToggleButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"}
                                                theme={"demoTheme"}
                                                autoHideDelay={4000}
                                                autoHide={false}
                                                content={"Underline (Ctrl + U)"}
                                            >
                                                <JqxToggleButton theme={'material-purple'} height={15}
                                                    theme={"demoTheme"}
                                                >
                                                    <div className="icon text_underline" />
                                                </JqxToggleButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"}
                                                theme={"demoTheme"}
                                                autoHideDelay={4000}
                                                autoHide={false}
                                                content={"Strikethrough"}
                                            >
                                                <JqxToggleButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_strikethrough" />
                                                </JqxToggleButton>
                                            </JqxTooltip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={9} style={{ height: 10, fontSize: 9, textAlign: "center" }}>
                                            Font
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="sectionSeparator" />
                            <table className="buttonHolderTable" style={{ float: "left", marginTop: -4 }}>
                                <tbody>
                                    <tr className="firstrow">
                                        <td colSpan={8}>
                                            <JqxTooltip theme={'material-purple'}
                                                position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Bulleted List"}
                                            >
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_list_bullets" />
                                                </JqxButton>
                                            </JqxTooltip>

                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content={"Numbered List"}>
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_list_numbers" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content={"Decrease Indent"}>
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_indent" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content={"Increase Indent"}>
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_indent_remove" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content={"Sort Direction"}>
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon SortHS" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content={"Fill Style"}>
                                                <JqxDropDownButton theme={'material-purple'} ref={this.bucketColorButton} className="bucketColor"
                                                    width={42} height={19}
                                                    dropDownWidth={180} theme={"demoTheme"}>
                                                    <div style={{ padding: 3 }}>
                                                        <JqxColorPicker onColorchange={this.onBucketColorPicker}
                                                            width={180} height={180}
                                                            color={"000000"} colorMode={"hue"} />
                                                    </div>
                                                </JqxDropDownButton>
                                            </JqxTooltip>
                                        </td>
                                    </tr>
                                    <tr className="secondrow">
                                        <td colSpan={8}>
                                            <JqxTooltip theme={'material-purple'}
                                                position={"mouse"}
                                                theme={"demoTheme"}
                                                content={"Align Text Left (Ctrl + L)"}
                                            >
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_align_left" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content="'Center (Ctrl + E)'">
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_align_center" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content="'Align Text Right (Ctrl + R)'">
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_align_right" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content="'Justify (Ctrl + J)'">
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_align_justify" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <div className="separator" style={{ top: 5, height: 15 }} />
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content="'Line and Paragraph Spacing'">
                                                <JqxButton theme={'material-purple'} height={15} theme={"demoTheme"}>
                                                    <div className="icon text_linespacing" />
                                                </JqxButton>
                                            </JqxTooltip>
                                            <JqxTooltip theme={'material-purple'} position={"mouse"} theme={"demoTheme"} content="'Show/Hide special characters'">
                                                <JqxButton theme={'material-purple'} height={15} theme={'demoTheme'}>
                                                    <div className="icon ShowParagraphMarksImage" />
                                                </JqxButton>
                                            </JqxTooltip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: 43, textAlign: "center", verticalAlign: "bottom", fontSize: 9 }}>
                                            Alignment
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="sectionSeparator" />
                        </div>
                        <div style={{ overflow: "hidden" }}>
                            <table className="buttonHolderTable" style={{ height: "100%" }}>
                                <tbody>
                                    <tr>
                                        <td className="bigTd">
                                            <JqxButton theme={'material-purple'} className='button left'
                                                theme={'demoTheme'}
                                                width={36}
                                                height={36}
                                            >
                                                <img className="img" src="https://www.jqwidgets.com/react/images/help-26.png" />
                                            </JqxButton>
                                            Help
                                        </td>
                                        <td className="bigTd">
                                            <JqxButton theme={'material-purple'} className='button left' theme={'demoTheme'} width={36} height={36}>
                                                <img className="img" src="https://www.jqwidgets.com/react/images/about-26.png" />
                                            </JqxButton>
                                            About
                                        </td>
                                        <td className="bigTd">
                                            <JqxButton theme={'material-purple'} className="button left" theme={'demoTheme'} width={36} height={36}>
                                                <img className="img" src="https://www.jqwidgets.com/react/images/downloading_updates-26.png" />
                                            </JqxButton>
                                            Update
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </JqxRibbon>
                <JqxGrid theme={'material-purple'}
                    // @ts-ignore
                    width={"100%"}
                    source={this.state.source}
                    theme={'demoTheme'}
                    editable={true}
                    columnsresize={true}
                    selectionmode={"multiplecellsadvanced"}
                    columns={this.state.columns}
                />
            </div>
        );
    }

    public manageGridData(): any {
        const numberrenderer = (row: any, column: any, value: any): string => {
            return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
        };
        const datafields = [];
        const columns = [];
        for (let i = 0; i < 26; i++) {
            const text = String.fromCharCode(65 + i);
            if (i === 0) {
                const cssclass = 'jqx-widget-header';
                columns[columns.length] =
                    {
                        cellclassname: cssclass,
                        cellsrenderer: numberrenderer,
                        columntype: 'number',
                        exportable: false,
                        pinned: true,
                        text: ""
                    };
            }
            datafields[datafields.length] = { name: text };
            columns[columns.length] = { text, datafield: text, width: 60, align: 'center' };
        };
        const source =
        {
            datafields,
            totalrecords: 100,
            unboundmode: true
        };
        const dataAdapter = new jqx.dataAdapter(source);
        const jqxGridSettings =
        {
            columns,
            source: dataAdapter
        };

        return jqxGridSettings;
    };

    // Event handling
    private onPasteButtonClick(event: any): void {
        /* tslint:disable:no-console */
        const text = document.getElementsByClassName('pasteText')[0].innerHTML;
        console.log(text + ' clicked');
    }

    private onPasteDropDownSelect(event: any): void {
        const index = event.args.index;
        const icon = '<span class="' + this.pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
        this.pasteButton.current!.val(icon + '<span class="pasteText">' + this.pasteData[index].label + '</span>')
        this.pasteButton.current!.render();
    }

    private onFontColorPicker(event: any): void {
        const fontColorPreview = document.getElementById("fontColorPreview");
        fontColorPreview!.style.backgroundColor = "#" + event.args.color.hex;
    }

    private onHighlightColorPicker(event: any): void {
        const highlightColorPreview = document.getElementById("highlightColorPreview");
        highlightColorPreview!.style.backgroundColor = "#" + event.args.color.hex;
    }

    private onSuperScriptClick(event: any): void {
        if (!this.superScriptToggleButton.current!.getOptions("toggled")) {
            this.superScriptToggleButton.current!.setOptions({ toggled: false });            
        }
    }

    private onSubScriptClick(event: any): void {
        if (!this.subscriptToggleButton.current!.getOptions("toggled")) {
            this.subscriptToggleButton.current!.setOptions({ toggled: false });
        }
    }

    private onBucketColorPicker(event: any): void {
        const bucketColorPreview = document.getElementById("bucketColorPreview");
        bucketColorPreview!.style.backgroundColor = "#" + event.args.color.hex;
    }
}

export default App;
