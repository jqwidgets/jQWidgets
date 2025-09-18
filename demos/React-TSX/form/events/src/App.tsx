import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxForm, { IFormProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxform';

const App = () => {
    const formEvents = useRef<HTMLDivElement>(null);

    const columns: IFormProps['template'] = [
        {
            align: 'left',
            bind: 'checkboxValue1',
            columnWidth: '140px',
            label: 'Checkbox 1',
            labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
            labelPosition: 'right',
            type: 'boolean'
        },
        {
            align: 'left',
            bind: 'checkboxValue2',
            columnWidth: '140px',
            label: 'Checkbox 2',
            labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
            labelPosition: 'right',
            type: 'boolean',
        },
        {
            align: 'left',
            bind: 'checkboxValue3',
            columnWidth: '140px',
            label: 'Checkbox 3',
            labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
            labelPosition: 'right',
            type: 'boolean'
        }
    ];

    const [template] = useState<IFormProps['template']>([
        {
            align: 'left',
            bind: 'textBoxValue',
            label: 'Text input',
            labelPosition: 'left',
            labelWidth: '30%',
            required: true,
            type: 'text',
            width: '250px'
        },
        {
            align: 'left',
            bind: 'passwordBoxValue',
            label: 'Password input',
            labelPosition: 'left',
            labelWidth: '30%',
            required: true,
            type: 'password',
            width: '250px'
        },
        {
            align: 'left',
            bind: 'nubmberBoxValue',
            label: 'Number input',
            labelPosition: 'left',
            labelWidth: '30%',
            required: true,
            type: 'number',
            width: '250px'
        },
        {
            align: 'left',
            bind: 'dropdownValue',
            component: 'jqxDropDownList',
            label: 'Drop down list',
            labelPosition: 'left',
            labelWidth: '30%',
            options: [
                { label: 'Option 1', value: 'value1' },
                { label: 'Option 2', value: 'value2' },
                { label: 'Option 3', value: 'value3' }
            ],
            required: true,
            type: 'option',
            width: '250px'
        },
        {
            label: 'Radio buttons:',
            rowHeight: '40px',
            type: 'label'
        },
        {
            align: 'left',
            bind: 'radiobuttonValue',
            columnWidth: '150px',
            label: 'Radio buttons',
            labelPosition: 'right',
            options: [
                { label: 'Option 1', value: 'value1' },
                { label: 'Option 2', value: 'value2' },
                { label: 'Option 3', value: 'value3' }
            ],
            optionsLayout: 'horizontal',
            type: 'option'
        },
        {
            label: 'Boolean options / checkboxes:',
            rowHeight: '40px',
            type: 'label'
        },
        {
            columns
        }
    ]);

    const [value] = useState<IFormProps['value']>({
        checkboxValue1: false,
        checkboxValue2: false,
        checkboxValue3: true,
        dropdownValue: 'value3',
        nubmberBoxValue: 67.44,
        passwordBoxValue: 'password box',
        radiobuttonValue: 'value2',
        textBoxValue: 'text box value'
    });

    const formEventHandler = useCallback((event: any) => {
        const args = event.args;
        const newValue = args.value;
        const previousValue = args.previousValue;
        let html = '<h3>Event: formdatachange</h3>';
        for (const i of Object.keys(newValue)) {
            let newInputValue = newValue[i];
            let previousInputValue = '';
            if (previousValue && previousValue[i] !== undefined && previousValue[i] !== newValue[i]) {
                previousInputValue = ', <i>previous value</i>: <span style="color:red;">' + previousValue[i] + '</span>';
                newInputValue = '<span style="color:green;">' + newInputValue + '</span>';
            }
            html += "<b>" + i + "</b>: " + newInputValue + previousInputValue + "<br>";
        }
        if (formEvents.current) {
            formEvents.current.innerHTML = html;
        }
    }, []);

    return (
        <div>
            <JqxForm
                style={{ width: '420px', height: 'auto', float: 'left' }}
                onFormDataChange={formEventHandler}
                template={template}
                value={value}
            />
            <div
                ref={formEvents}
                style={{ paddingLeft: '10px', width: '350px', height: '350px', float: 'left', overflow: 'auto' }}
            />
        </div>
    );
};

export default App;