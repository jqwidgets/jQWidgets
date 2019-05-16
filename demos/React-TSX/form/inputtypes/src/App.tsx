import * as React from 'react';
 


import JqxForm, { IFormProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxform';

class App extends React.PureComponent<{}, IFormProps> {

    constructor(props: {}) {
        super(props);

        const columns: IFormProps['template'] = [
            {
                align: 'left',
                bind: 'checkboxValue1',
                columnWidth: '150px',                                
                label: 'Checkbox 1',
                labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
                labelPosition: 'right',
                type: 'boolean'
            },
            {
                align: 'left',                
                bind: 'checkboxValue2',
                columnWidth: '150px',                
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
        ];

        this.state = {
            template: [
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
                    bind: 'numberBoxValue',                    
                    label: 'Number input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    required: true,
                    type: 'number',
                    width: '250px'                    
                },
                {
                    align: 'left',
                    bind: 'datetimeBoxValue',                    
                    label: 'Date & time input',
                    labelPosition: 'left',
                    labelWidth: '30%',                                        
                    required: true,
                    type: 'datetime',
                    width: '250px'
                },
                {
                    align: 'left',
                    bind: 'timeBoxValue',                    
                    label: 'Time input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    required: true,
                    type: 'time',
                    width: '250px'                    
                },
                {
                    align: 'left',
                    bind: 'dateBoxValue',                    
                    label: 'Date input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    required: true,
                    type: 'date',
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
                }
            ],
            value: {
                checkboxValue1: false,
                checkboxValue2: false,
                checkboxValue3: true,
                dateBoxValue: '2018-07-04 15:05:23',
                datetimeBoxValue: '2018-06-01 14:05:23',
                dropdownValue: 'value3',
                numberBoxValue: 67.44,                                            
                passwordBoxValue: 'password box',
                radiobuttonValue: 'value2',
                textBoxValue: 'text box value',
                timeBoxValue: '2018-07-01 11:05:23'   
            }
        };
    }

    public render() {
        return (
            <JqxForm style={{ width: '500px', height: 'auto' }}
                template={this.state.template} value={this.state.value} />
        );
    }
}

export default App;
