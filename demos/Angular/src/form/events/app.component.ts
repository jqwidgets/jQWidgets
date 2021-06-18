import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChild('formEvents', { static: false }) formEvents: ElementRef;

    columns: Array<jqwidgets.FormTemplateItem> = [
        {
            columnWidth: '140px',
            bind: 'checkboxValue1',
            type: 'boolean',
            label: 'Checkbox 1',
            labelPosition: 'right',
            align: 'left',
            labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
        },
        {
            columnWidth: '140px',
            bind: 'checkboxValue2',
            type: 'boolean',
            label: 'Checkbox 2',
            labelPosition: 'right',
            align: 'left',
            labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
        },
        {
            columnWidth: '140px',
            bind: 'checkboxValue3',
            type: 'boolean',
            label: 'Checkbox 3',
            labelPosition: 'right',
            align: 'left',
            labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
        }
    ];

    template: Array<jqwidgets.FormTemplateItem> = [
        {
            bind: 'textBoxValue',
            type: 'text',
            label: 'Text input',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'passwordBoxValue',
            type: 'password',
            label: 'Password input',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'nubmberBoxValue',
            type: 'number',
            label: 'Number input',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'dropdownValue',
            type: 'option',
            label: 'Drop down list',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true,
            component: 'jqxDropDownList',
            options: [
                { label: 'Option 1', value: 'value1' },
                { label: 'Option 2', value: 'value2' },
                { label: 'Option 3', value: 'value3' }
            ]
        },
        {
            type: 'label',
            label: 'Radio buttons:',
            rowHeight: '40px',
        },
        {
            bind: 'radiobuttonValue',
            type: 'option',
            label: 'Radio buttons',
            labelPosition: 'right',
            columnWidth: '150px',
            align: 'left',
            optionsLayout: 'horizontal',
            options: [
                { label: 'Option 1', value: 'value1' },
                { label: 'Option 2', value: 'value2' },
                { label: 'Option 3', value: 'value3' }
            ]
        },
        {
            type: 'label',
            label: 'Boolean options / checkboxes:',
            rowHeight: '40px',
        },
        {
            columns: this.columns

        }
    ];
    sampleValue: any = {
        textBoxValue: 'text box value',
        passwordBoxValue: 'password box',
        nubmberBoxValue: 67.44,
        dropdownValue: 'value3',
        radiobuttonValue: 'value2',
        checkboxValue1: false,
        checkboxValue2: false,
        checkboxValue3: true,
    };

    formEventHandler(event: any): any {
        const args = event.args;
        const newValue = args.value;
        const previousValue = args.previousValue;
        let html = '<h3>Event: formdatachange</h3>';

        for (const i in newValue) {
            if (i) {
                let newInputValue = newValue[i];
                let previousInputValue = '';

                if (previousValue && previousValue[i] !== undefined && previousValue[i] !== newValue[i]) {
                    previousInputValue = ', <i>previous value</i>: <span style="color:red;">' + previousValue[i] + '</span>';
                    newInputValue = '<span style="color:green;">' + newInputValue + '</span>';
                }

                html += '<b>' + i + '</b>: ' + newInputValue + previousInputValue + '<br>';
            }
        }

        this.formEvents.nativeElement.innerHTML = html;
    }

}
