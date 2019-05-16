import * as React from 'react';
 


import JqxTextArea, { ITextAreaProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

class App extends React.PureComponent<{}, ITextAreaProps> {
    private myTextArea = React.createRef<JqxTextArea>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            dataType: 'json',
            url: 'customers.txt'
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                <JqxTextArea theme={'material-purple'} ref={this.myTextArea}
                    width={'30%'}
                    height={80}
                    source={this.state.source}
                    displayMember={'ContactName'}
                    valueMember={'CompanyName'}
                    placeHolder={'Contact Name:'}
                />

                <label style={{ fontFamily: 'Verdana', fontSize: 10 }}>
                    ex: Ana
                </label>
            </div>
        );
    }
}

export default App;
