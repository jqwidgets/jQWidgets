import * as React from 'react';
 


import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IComboBoxProps {
    bottomBtnChecked: IRadioButtonProps['checked'];
    topBtnChecked: IRadioButtonProps['checked']
}

class App extends React.PureComponent<{}, IState> {

    private myComboBox = React.createRef<JqxComboBox>();

    constructor(props: {}) {
        super(props);
        this.topBtnOnChecked = this.topBtnOnChecked.bind(this);
        this.bottomBtnOnChecked = this.bottomBtnOnChecked.bind(this);

        const source: any = {
            async: false,
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };

        this.state = {
            bottomBtnChecked: false,
            dropDownVerticalAlignment: 'top',
            source: new jqx.dataAdapter(source),
            topBtnChecked: true
        }
    }

    public componentDidMount() {
        this.myComboBox.current!.setOptions({ selectedIndex: 0 });
    }

    public render() {
        return (
            <div>
                <JqxComboBox theme={'material-purple'} ref={this.myComboBox} style={{ float: 'left', marginTop: '270px' }}
                    width={150} height={25} source={this.state.source} 
                    dropDownVerticalAlignment={this.state.dropDownVerticalAlignment} dropDownWidth={200}
                    displayMember={'ContactName'} valueMember={'CompanyName'} />

                <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana', marginLeft: '100px', marginTop: '270px' }}>
                    <h3>Alignment</h3>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.topBtnOnChecked} checked={this.state.topBtnChecked}>
                        Top
                    </JqxRadioButton>

                    <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChecked={this.bottomBtnOnChecked} checked={this.state.bottomBtnChecked}>
                        Bottom
                    </JqxRadioButton>
                </div>
            </div>
        );
    }

    private topBtnOnChecked(): void {
        this.setState({
            bottomBtnChecked: false,
            dropDownVerticalAlignment: 'top',
            topBtnChecked: true
        });
    }

    private bottomBtnOnChecked(): void {
        this.setState({
            bottomBtnChecked: true,
            dropDownVerticalAlignment: 'bottom',
            topBtnChecked: false
        });
    }
}

export default App;