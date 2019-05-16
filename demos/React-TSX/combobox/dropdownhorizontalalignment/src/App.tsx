import * as React from 'react';
 


import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IComboBoxProps {
    leftBtnChecked: IRadioButtonProps['checked'];
    rightBtnChecked: IRadioButtonProps['checked']
}

class App extends React.PureComponent<{}, IState> {

    private myComboBox = React.createRef<JqxComboBox>();

    constructor(props: {}) {
        super(props);
        this.leftBtnOnChecked = this.leftBtnOnChecked.bind(this);
        this.rightBtnOnChecked = this.rightBtnOnChecked.bind(this);

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
            dropDownHorizontalAlignment: 'right',
            leftBtnChecked: false,
            rightBtnChecked: true,
            source: new jqx.dataAdapter(source)
        }
    }

    public componentDidMount() {
        this.myComboBox.current!.setOptions({ selectedIndex: 0 });
    }

    public render() {
        return (
            <div>
                <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana' }}>
                    <h3>Alignment</h3>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.leftBtnOnChecked} checked={this.state.leftBtnChecked}> 
                        Left
                    </JqxRadioButton>

                    <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChecked={this.rightBtnOnChecked} checked={this.state.rightBtnChecked}>
                        Right
                    </JqxRadioButton>
                </div>

                <JqxComboBox theme={'material-purple'} ref={this.myComboBox} style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                        width={150} height={25} source={this.state.source} 
                        dropDownHorizontalAlignment={this.state.dropDownHorizontalAlignment} dropDownWidth={200}
                        displayMember={'ContactName'} valueMember={'CompanyName'} />
            </div>
        );
    }

    private leftBtnOnChecked(): void {
        this.setState({
            dropDownHorizontalAlignment: 'left',
            leftBtnChecked: true,
            rightBtnChecked: false
        });
    }

    private rightBtnOnChecked(): void {
        this.setState({
            dropDownHorizontalAlignment: 'right',
            leftBtnChecked: false,
            rightBtnChecked: true
        });
    }
}

export default App;