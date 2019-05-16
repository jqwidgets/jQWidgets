import * as React from 'react';
 


import JqxForm, { IFormProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxform';

class App extends React.PureComponent<{}, IFormProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            template: [
                {
                    align: 'left',
                    bind: 'item1',                    
                    label: 'Input left alignment',                    
                    labelWidth: '160px',
                    type: 'text',
                    width: '160px'
                },
                {
                    align: 'center',
                    bind: 'item2',                    
                    label: 'Input center alignment',                    
                    labelWidth: '160px',
                    type: 'text',
                    width: '160px'
                },
                {
                    align: 'right',
                    bind: 'item3',                   
                    label: 'Input right alignment',                    
                    labelWidth: '160px',
                    type: 'text',
                    width: '160px'
                },
                {
                    bind: 'item4',                    
                    label: 'Label left alignment',
                    labelAlign: 'left',
                    labelWidth: '160px',
                    type: 'text',
                    width: '160px'
                },
                {
                    bind: 'item5',                    
                    label: 'Label center alignment',
                    labelAlign: 'center',
                    labelWidth: '160px',
                    type: 'text',
                    width: '160px'
                },
                {
                    bind: 'item6',                    
                    label: 'Label right alignment',
                    labelAlign: 'right',
                    labelWidth: '160px',
                    type: 'text',
                    width: '160px'
                }
            ],
            value: {
                item1: 'left aligned',
                item2: 'center aligned',
                item3: 'right aligned',
                item4: 'left aligned',
                item5: 'left aligned',
                item6: 'left aligned'
            }
        };
    }

    public render() {
        return (
            <JqxForm style={{ width: '420px', height: 'auto' }}
                template={this.state.template} value={this.state.value} />
        );
    }
}

export default App;
