import * as React from 'react';
import { useEffect, useRef, useMemo } from 'react';
import JqxForm, { IFormProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxform';

const App = () => {
    const myForm = useRef<JqxForm>(null);

    const columns = useMemo<IFormProps['template']>(() => [
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
            type: 'boolean'
        },
        {
            align: 'left',
            bind: 'checkboxValue3',
            columnWidth: '150px',
            label: 'Checkbox 3',
            labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
            labelPosition: 'right',
            type: 'boolean'
        }
    ], []);

    const template = useMemo<IFormProps['template']>(() => [
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
            bind: 'radiobuttonValue_out',
            label: 'Boolean options / checkboxes:',
            rowHeight: '40px',
            type: 'label'
        },
        {
            columns
        },
        {
            rowHeight: '20px',
            type: 'blank'
        },
        {
            align: 'right',
            name: 'submitButton',
            padding: { left: 0, top: 5, bottom: 5, right: 40 },
            text: 'Submit Form Data',
            type: 'button'
        }
    ], [columns]);

    const value = useMemo<IFormProps['value']>(() => ({
        checkboxValue1: false,
        checkboxValue2: false,
        checkboxValue3: true,
        dropdownValue: 'value3',
        nubmberBoxValue: 67.44,
        passwordBoxValue: 'password box',
        radiobuttonValue: 'value2',
        textBoxValue: 'text box value'
    }), []);

    useEffect(() => {
        const formInstance = myForm.current;
        if (formInstance) {
            const btn = formInstance.getComponentByName('submitButton');
            if (btn && typeof btn.on === 'function') {
                btn.on('click', () => {
                    formInstance.submit("https://www.jqwidgets.com/form_demo/", "_blank", 'POST');
                });
            }
        }
    }, []);

    return (
        <JqxForm
            ref={myForm}
            style={{ width: '500px', height: 'auto' }}
            template={template}
            value={value}
        />
    );
};

export default App;