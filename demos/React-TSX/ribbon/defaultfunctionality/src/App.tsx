import * as React from 'react';
import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRibbon from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxribbon';
import JqxToggleButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtogglebutton';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

function App() {
    const myRibbon = useRef<JqxRibbon>(null);
    const fileItemButton = useRef<JqxDropDownButton>(null);
    const fontColorButton = useRef<JqxDropDownButton>(null);
    const highlightColorButton = useRef<JqxDropDownButton>(null);
    const bucketColorButton = useRef<JqxDropDownButton>(null);
    const pasteButton = useRef<JqxButton>(null);
    const superScriptToggleButton = useRef<JqxToggleButton>(null);
    const subscriptToggleButton = useRef<JqxToggleButton>(null);

    const pasteData = useMemo(() => [
        { label: 'Paste', imageClass: 'icon page_paste' },
        { label: 'Paste Special', imageClass: 'icon paste_plain' },
        { label: 'Paste text', imageClass: 'icon paste_word' },
        { label: 'Paste link', imageClass: 'icon PasteImage' }
    ], []);

    const fontListSource = useMemo(() => [
        "<span style='font-family: Courier New;'>Courier New</span>",
        "<span style='font-family: Times New Roman;'>Times New Roman</span>",
        "<span style='font-family: Arial;'>Arial</span>"
    ], []);

    const fontSizeListSource = useMemo(() => [8, 9, 10, 11, 12, 14, 18, 20, 22, 24], []);
    const changeCaseListSource = useMemo(() => ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'], []);

    const manageGridData = useCallback(() => {
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
        }
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
    }, []);

    const changeCaseListSelectionRenderer = useCallback((object: any, index: any, label: any) => {
        return '<div class="icon change-case-16" style="top: 3px; position: relative"></div>';
    }, []);

    const fontSizeListRenderer = useCallback((index: number, label: any, value: any) => {
        return '<span style="font-size:' + value + 'px;">' + value + '</span>';
    }, []);

    const pasteRenderer = useCallback((index: number, label: any, value: any) => {
        const labelEl = '<span style="font-size: 10px">' + label + '</span>';
        const icon = '<span class="' + pasteData[index].imageClass + '" style=""></span>';
        return '<span>' + icon + labelEl + '</span>';
    }, [pasteData]);

    const pasteSelectionRenderer = useCallback(() => "", []);
    const [dropdownHeight] = useState<number>(21);

    const gridData = useMemo(() => manageGridData(), [manageGridData]);
    const [source] = useState(gridData.source);
    const [columns] = useState(gridData.columns);

    const onPasteButtonClick = useCallback((event: any) => {
        const text = document.getElementsByClassName('pasteText')[0]?.innerHTML;
        if (text) {
            // eslint-disable-next-line no-console
            console.log(text + ' clicked');
        }
    }, []);

    const onPasteDropDownSelect = useCallback((event: any) => {
        const index = event.args.index;
        const icon = '<span class="' + pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
        pasteButton.current?.val(icon + '<span class="pasteText">' + pasteData[index].label + '</span>');
        pasteButton.current?.render();
    }, [pasteData]);

    const onFontColorPicker = useCallback((event: any) => {
        const fontColorPreview = document.getElementById("fontColorPreview");
        if (fontColorPreview) {
            fontColorPreview.style.backgroundColor = "#" + event.args.color.hex;
        }
    }, []);

    const onHighlightColorPicker = useCallback((event: any) => {
        const highlightColorPreview = document.getElementById("highlightColorPreview");
        if (highlightColorPreview) {
            highlightColorPreview.style.backgroundColor = "#" + event.args.color.hex;
        }
    }, []);

    const onSuperScriptClick = useCallback((event: any) => {
        if (superScriptToggleButton.current && !superScriptToggleButton.current.getOptions("toggled")) {
            superScriptToggleButton.current.setOptions({ toggled: false });
        }
    }, []);

    const onSubScriptClick = useCallback((event: any) => {
        if (subscriptToggleButton.current && !subscriptToggleButton.current.getOptions("toggled")) {
            subscriptToggleButton.current.setOptions({ toggled: false });
        }
    }, []);

    const onBucketColorPicker = useCallback((event: any) => {
        const bucketColorPreview = document.getElementById("bucketColorPreview");
        if (bucketColorPreview) {
            bucketColorPreview.style.backgroundColor = "#" + event.args.color.hex;
        }
    }, []);

    useEffect(() => {
        myRibbon.current?.disableAt(0);
        bucketColorButton.current?.setContent(`
            <span style="position: relative; display: inline-block; top: 2px">
                <div class="icon paintcan"></div>
                <span id="bucketColorPreview" style="display: block; position: absolute; height: 3px; width: 16px; background: #000">
                </span>
            </span>`);
        fileItemButton.current?.setContent('<span style="position: relative; line-height: 26px; margin-left: 10px;">File</span>');
        fontColorButton.current?.setContent('<span style="position: relative; display: inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position: absolute;  height: 3px; width: 16px; background: #000"></span></span><span style="position: relative; display: inline; top: 3px">Font Color</span>');
        highlightColorButton.current?.setContent('<span style="position: relative; display: inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position: absolute;  height: 3px; width: 16px; background: #F00"></span></span><span style="position: relative; display: inline; top: 3px">Highlight Color</span>');
        const icons = document.getElementsByClassName('icon');
        Array.prototype.forEach.call(icons, (icon: HTMLElement) => {
            icon.style.backgroundImage = "url('https://www.jqwidgets.com/react/images/ribbon-icons.png')";
        });
    }, []);

    return (
        <div>
            <JqxRibbon theme={'material-purple'} ref={myRibbon}
                // @ts-ignore
                width={"100%"}
                height={131}
                animationType={"none"}
                selectionMode={"click"}
                position={"top"}
                mode={"default"}
                selectedIndex={1}
                theme={"demoTheme"}
