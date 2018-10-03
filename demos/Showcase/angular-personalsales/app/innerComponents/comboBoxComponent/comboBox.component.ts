/// <reference path='components/jqwidgets.d.ts' />
import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { jqxComboBoxComponent } from 'components/angular_jqxcombobox';

@Component({
    selector: 'jqx-combobox',
    template: `<angularComboBox #reference (onSelect)='selectEvent($event)'></angularComboBox>`
})

export class ComboBoxComponent implements AfterViewInit
{
    @ViewChild('reference') myComboBox: jqxComboBoxComponent;

    currentQuarter: number = 1;
    @Output() currentQuarterChange = new EventEmitter();

    ngAfterViewInit(): void
    {
        this.myComboBox.createWidget(this.settings);
    }

    //Called when the eployeID has been changed
    refreshComboBox(): void
    {
        this.myComboBox.setOptions({ selectedIndex: 0 })
    }

    
    selectEvent(event: any): void
    {
        let args = event.args;
        if (args)
        {
            let index = args.index;
            
            this.currentQuarter = index + 1;

            this.currentQuarterChange.emit({
                value: this.currentQuarter
            })

        }
    }

    //ComboBox Setup
    settings: jqwidgets.ComboBoxOptions =
    {
        source: ['Q1', 'Q2', 'Q3', 'Q4'],
        width: 150,
        height: 30,
        theme: 'light',
        dropDownHeight: '115px',
        selectedIndex: 0
    }
}
