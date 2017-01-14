 
import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent }    from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxRibbonComponent }  from '../../../../../jqwidgets-ts/angular_jqxribbon';
import { jqxButtonComponent }  from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxTooltipComponent } from '../../../../../jqwidgets-ts/angular_jqxtooltip';
import { jqxDropDownButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxColorPickerComponent }    from '../../../../../jqwidgets-ts/angular_jqxcolorpicker';
import { jqxDropDownListComponent }   from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';
import { jqxToggleButtonComponent }   from '../../../../../jqwidgets-ts/angular_jqxtogglebutton';

@Component({
    selector: 'my-app',
    templateUrl: '../app/ribbon/defaultfunctionality/app.component.htm',
    styleUrls: ['../app/ribbon/defaultfunctionality/app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('ribbonReference') ribbon: jqxRibbonComponent;

    @ViewChild('fileItemButton') fileItemButton: jqxDropDownButtonComponent;
    @ViewChild('bucketColor') bucketColorButton: jqxDropDownButtonComponent;
    @ViewChild('fontColor') fontColorButton: jqxDropDownButtonComponent;
    @ViewChild('highlightColor') highlightColorButton: jqxDropDownButtonComponent;

    @ViewChild('pasteButton') pasteButton: jqxButtonComponent;

    @ViewChild('superscript') superScriptToggleButton: jqxToggleButtonComponent;
    @ViewChild('subscript') subscriptToggleButton: jqxToggleButtonComponent;

    ngAfterViewInit(): void 
    {
        setTimeout(() =>
        {
            this.buttonsStyling();
            this.ribbon.disableAt(0);
            this.fileItemButton.setContent('<span style="position: relative; line-height: 26px; margin-left:10px;">File</span>');
            this.fontColorButton.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px">Font Color</span>');
            this.bucketColorButton.setContent('<span style="position:relative; display:inline"><div class="icon paintcan"></div><span id="bucketColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px"></span>');
            this.highlightColorButton.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#F00"></span></span><span style="position:relative; display: inline; top:3px">Highlight Color</span>');
        })     
    }

    buttonsStyling(): void
    {
        for (let i = 0; i < document.getElementsByTagName('angulartooltip').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('angulartooltip')[i].firstElementChild).style.display = 'inline-block';
        }
        for (let i = 0; i < document.getElementsByTagName('angularbutton').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('angularbutton')[i].firstElementChild).style.display = 'inline-block';
            (<HTMLElement>document.getElementsByTagName('angularbutton')[i].firstElementChild).setAttribute('checked', 'false');
        }
        for (let i = 0; i < document.getElementsByTagName('angulardropdownlist').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('angulardropdownlist')[i].firstElementChild).style.display = 'inline-block';
        }

        (<HTMLElement>document.getElementById('fileItemButton').firstElementChild).style.color = 'white';
        (<HTMLElement>document.getElementById('fileItemButton').firstElementChild).style.background = 'transparent';
    }

    onBucketColorPicker(event: any): void 
    {
        (<HTMLElement>document.getElementById('bucketColorPreview')).style.background = '#' + event.args.color.hex;
    }

    onSubScriptClick(): void
    {
        this.superScriptToggleButton.toggled(false);
    }

    onSuperScriptClick(): void
    {
        this.subscriptToggleButton.toggled(false);
    }

    onFontColorPicker(event: any): void 
    {
        (<HTMLElement>document.getElementById('fontColorPreview')).style.background = '#' + event.args.color.hex;
    }

    onHighlightColorPicker(event: any): void 
    {
        (<HTMLElement>document.getElementById('highlightColorPreview')).style.background = '#' + event.args.color.hex;
    }

    onPasteButtonClick(event: any): void
    {
        let text = (<HTMLElement>document.getElementsByClassName('pasteText')[0]).innerHTML;
        console.log(text + ' clicked');
    }

    onMouseDownPasteButton(event: any): void 
    {
        event.preventDefault();
    }

    onPasteDropDownSelect(event: any): void
    {
        let pasteData =
            [
                { label: 'Paste', imageClass: 'icon page_paste' },
                { label: 'Paste Special', imageClass: 'icon paste_plain' },
                { label: 'Paste text', imageClass: 'icon paste_word' },
                { label: 'Paste link', imageClass: 'icon PasteImage' }
            ];
        let index = event.args.index;
        let icon = '<span class="' + pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
        (<HTMLElement>document.getElementById('pasteButton').firstElementChild).innerHTML = (icon + '<span class="pasteText">' + pasteData[index].label + '</span>');
        this.pasteButton.render();
    }

    fontListSource: string[] =
    [
        "<span style='font-family: Courier New;'>Courier New</span>",
        "<span style='font-family: Times New Roman;'>Times New Roman</span>",
        "<span style='font-family: Arial;'>Arial</span>"
    ];

    fontSizeListSource: number[] = [8, 9, 10, 11, 12, 14, 18, 20, 22, 24];

    fontSizeListRenderer: any = (index, label, value) =>
    {
        return '<span style="font-size:' + value + 'px;">' + value + '</span>';
    };

    changeCaseListSource: string[] = ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'];

    changeCaseListSelectionRenderer: any = (object, index, label) =>
    {
        return '<div class="icon change-case-16" style="top:3px;  position:relative"></div>';
    };

    pasteData: any[] =
    [
        { label: 'Paste', imageClass: 'icon page_paste' },
        { label: 'Paste Special', imageClass: 'icon paste_plain' },
        { label: 'Paste text', imageClass: 'icon paste_word' },
        { label: 'Paste link', imageClass: 'icon PasteImage' }
    ];

    pasteRenderer: any = (index: number, label, value) =>
    {
        let labelEl = '<span style="font-size: 10px">' + label + '</span>';
        let icon = '<span class="' + this.pasteData[index].imageClass + '" style=""></span>';
        return '<span>' + icon + labelEl + '</span>';
    };

    pasteRelectionRenderer: any = (object, index, label) =>
    {
        return "";
    };

    gridData: any = this.manageGridData();

    manageGridData(): any
    {
        let numberrenderer = (row, column, value): string =>
        {
            return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
        };

        let datafields = [];
        let columns = [];

        for (let i = 0; i < 26; i++)
        {
            let text = String.fromCharCode(65 + i);
            if (i == 0)
            {
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
        }

        let source =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: datafields,
        };
        let dataAdapter = new $.jqx.dataAdapter(source);

        let jqxGridSettings: jqwidgets.GridOptions =
        {
            source: dataAdapter,
            columns: columns
        }

        return jqxGridSettings;
    }
}
