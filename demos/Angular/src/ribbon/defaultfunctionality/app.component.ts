import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';
import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxColorPickerComponent } from 'jqwidgets-ng/jqxcolorpicker';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxToggleButtonComponent } from 'jqwidgets-ng/jqxtogglebutton';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('ribbonReference', { static: false }) ribbon: jqxRibbonComponent;
    @ViewChild('fileItemButton', { static: false }) fileItemButton: jqxDropDownButtonComponent;
    @ViewChild('bucketColor', { static: false }) bucketColorButton: jqxDropDownButtonComponent;
    @ViewChild('fontColor', { static: false }) fontColorButton: jqxDropDownButtonComponent;
    @ViewChild('highlightColor', { static: false }) highlightColorButton: jqxDropDownButtonComponent;
    @ViewChild('pasteButton', { static: false }) pasteButton: jqxButtonComponent;
    @ViewChild('superscript', { static: false }) superScriptToggleButton: jqxToggleButtonComponent;
    @ViewChild('subscript', { static: false }) subscriptToggleButton: jqxToggleButtonComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}
	
    ngAfterViewInit(): void {
		this.buttonsStyling();
		this.ribbon.elementRef.nativeElement.firstElementChild.children[1].style.padding = '35px 0px 0px';
		this.ribbon.disableAt(0);
		this.fileItemButton.setContent('<span style="position: relative; line-height: 26px; margin-left:10px;">File</span>');
		this.fontColorButton.setContent('<span style="position: relative; display:inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px">Font Color</span>');
		this.bucketColorButton.setContent('<span style="position: relative; display:inline"><div class="icon paintcan"></div><span id="bucketColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px"></span>');
		this.highlightColorButton.setContent('<span style="position: relative; display:inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#F00"></span></span><span style="position:relative; display: inline; top:3px">Highlight Color</span>');
    }

    buttonsStyling(): void {
        for (let i = 0; i < document.getElementsByTagName('jqxtooltip').length; i++) {
            (<HTMLElement>document.getElementsByTagName('jqxtooltip')[i].firstElementChild).style.display = 'inline-block';
        }

        for (let i = 0; i < document.getElementsByTagName('jqxbutton').length; i++) {
            (<HTMLElement>document.getElementsByTagName('jqxbutton')[i].firstElementChild).style.display = 'inline-block';
            (<HTMLElement>document.getElementsByTagName('jqxbutton')[i].firstElementChild).setAttribute('checked', 'false');
        }

        for (let i = 0; i < document.getElementsByTagName('jqxdropdownlist').length; i++) {
            (<HTMLElement>document.getElementsByTagName('jqxdropdownlist')[i].firstElementChild).style.display = 'inline-block';
        }

        this.fileItemButton.elementRef.nativeElement.firstElementChild.style.color = 'white';
        this.fileItemButton.elementRef.nativeElement.firstElementChild.style.background = 'transparent';
    };

    onBucketColorPicker(event: any): void {
        (<HTMLElement>document.getElementById('bucketColorPreview')).style.background = '#' + event.args.color.hex;
    };

    onSubScriptClick(): void {
        this.superScriptToggleButton.toggled(false);
    };

    onSuperScriptClick(): void {
        this.subscriptToggleButton.toggled(false);
    };

    onFontColorPicker(event: any): void {
        (<HTMLElement>document.getElementById('fontColorPreview')).style.background = '#' + event.args.color.hex;
    };

    onHighlightColorPicker(event: any): void {
        (<HTMLElement>document.getElementById('highlightColorPreview')).style.background = '#' + event.args.color.hex;
    };

    onPasteButtonClick(event: any): void {
        let text = this.pasteButton.elementRef.nativeElement.getElementsByClassName('pasteText')[0].innerHTML;
        console.log(text + ' clicked');
    };

    onMouseDownPasteButton(event: any): void {
        event.preventDefault();
    };

    onPasteDropDownSelect(event: any): void {
        let pasteData =
            [
                { label: 'Paste', imageClass: 'icon page_paste' },
                { label: 'Paste Special', imageClass: 'icon paste_plain' },
                { label: 'Paste text', imageClass: 'icon paste_word' },
                { label: 'Paste link', imageClass: 'icon PasteImage' }
            ];
        let index = event.args.index;
        let icon = '<span class="' + pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
        this.pasteButton.elementRef.nativeElement.firstElementChild.innerHTML = (icon + '<span class="pasteText">' + pasteData[index].label + '</span>');
        this.pasteButton.render();
    };

    fontListSource: string[] =
    [
        "<span style='font-family: Courier New;'>Courier New</span>",
        "<span style='font-family: Times New Roman;'>Times New Roman</span>",
        "<span style='font-family: Arial;'>Arial</span>"
    ];

    fontSizeListSource: number[] = [8, 9, 10, 11, 12, 14, 18, 20, 22, 24];
    fontSizeListRenderer: any = (index, label, value) => {
        return '<span style="font-size:' + value + 'px;">' + value + '</span>';
    };

    changeCaseListSource: string[] = ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'];
    changeCaseListSelectionRenderer: any = (object, index, label) => {
        return '<div class="icon change-case-16" style="top:3px;  position:relative"></div>';
    };

    pasteData: any[] =
    [
        { label: 'Paste', imageClass: 'icon page_paste' },
        { label: 'Paste Special', imageClass: 'icon paste_plain' },
        { label: 'Paste text', imageClass: 'icon paste_word' },
        { label: 'Paste link', imageClass: 'icon PasteImage' }
    ];

    pasteRenderer: any = (index: number, label, value) => {
        let labelEl = '<span style="font-size: 10px">' + label + '</span>';
        let icon = '<span class="' + this.pasteData[index].imageClass + '" style=""></span>';
        return '<span>' + icon + labelEl + '</span>';
    };

    pasteRelectionRenderer: any = (object, index, label) => {
        return "";
    };

    gridData: any = this.manageGridData();

    manageGridData(): any {
        let numberrenderer = (row, column, value): string => {
            return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
        };
        let datafields = [];
        let columns = [];
        for (let i = 0; i < 26; i++) {
            let text = String.fromCharCode(65 + i);
            if (i == 0) {
                let cssclass = 'jqx-widget-header';
                columns[columns.length] =
                    {
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
        };
        let source =
            {
                unboundmode: true,
                totalrecords: 100,
                datafields: datafields,
            };
        let dataAdapter = new jqx.dataAdapter(source);
        let jqxGridSettings: jqwidgets.GridOptions =
            {
                source: dataAdapter,
                columns: columns
            };

        return jqxGridSettings;
    };
}