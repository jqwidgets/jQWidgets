import * as React from 'react'
import JqxForm, { IFormProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxform'

const App = () => {
    const template: IFormProps['template'] = [
        {
            align: 'left',
            bind: 'item1',
            label: 'Label position left',
            labelPosition: 'left',
            required: true,
            type: 'text',
            width: '200px'
        },
        {
            align: 'left',
            bind: 'item2',
            label: 'Label position right',
            labelPosition: 'right',
            required: true,
            requiredPosition: 'left',
            type: 'text',
            width: '200px'
        },
        {
            align: 'left',
            bind: 'item3',
            label: 'Label position top',
            labelPosition: 'top',
            required: true,
            type: 'text',
            width: '200px'
        },
        {
            bind: 'item4',
            label: 'Label position bottom',
            labelAlign: 'left',
            labelPosition: 'bottom',
            required: true,
            type: 'text',
            width: '200px'
        }
    ]

    const value: IFormProps['value'] = {
        address: '1st Ave SW',
        city: 'San Antonio',
        firstName: 'John',
        lastName: 'Scott',
        state: 'Texas',
        zip: '78209'
    }

    return (
        <JqxForm style={{ width: '400px', height: 'auto' }} template={template} value={value} />
    )
}

export default App