import * as React from 'react';
import JqxForm, { IFormProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxform';

function App() {
    const columns: IFormProps['template'] = [
        {
            align: 'right',
            columnWidth: '50%',
            text: 'Sign up',
            type: 'button',
            width: '90px'
        },
        {
            columnWidth: '50%',
            text: 'Cancel',
            type: 'button',
            width: '90px'
        }
    ];

    const template: IFormProps['template'] = [
        {
            bind: 'firstName',
            info: 'Enter first name',
            infoPosition: 'right',
            label: 'First name',
            labelWidth: '85px',
            required: true,
            type: 'text',
            width: '250px'
        },
        {
            bind: 'lastName',
            info: 'Enter last name',
            infoPosition: 'right',
            label: 'Last name',
            labelWidth: '85px',
            required: true,
            type: 'text',
            width: '250px'
        },
        {
            bind: 'company',
            label: 'Company',
            labelWidth: '85px',
            required: false,
            type: 'text',
            width: '250px'
        },
        {
            bind: 'address',
            label: 'Address',
            labelWidth: '85px',
            required: true,
            type: 'text',
            width: '250px'
        },
        {
            bind: 'city',
            label: 'City',
            labelWidth: '85px',
            required: true,
            type: 'text',
            width: '250px'
        },
        {
            bind: 'state',
            component: 'jqxDropDownList',
            label: 'State',
            labelWidth: '85px',
            options: [
                { value: 'California' },
                { value: 'New York' },
                { value: 'Oregon' },
                { value: 'Illinois' },
                { value: 'Texas' }
            ],
            required: true,
            type: 'option',
            width: '250px'
        },
        {
            bind: 'zip',
            label: 'Zip code',
            labelWidth: '85px',
            required: true,
            type: 'text',
            width: '250px'
        },
        {
            rowHeight: '10px',
            type: 'blank'
        },
        {
            columns
        }
    ];

    const value: IFormProps['value'] = {
        address: '1st Ave SW',
        city: 'San Antonio',
        firstName: 'John',
        lastName: 'Scott',
        state: 'Texas',
        zip: '78209'
    };

    return (
        <JqxForm style={{ width: '400px', height: 'auto' }} template={template} value={value} />
    );
}

export default App;