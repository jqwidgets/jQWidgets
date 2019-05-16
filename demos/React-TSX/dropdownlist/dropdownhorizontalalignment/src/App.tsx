import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IDropDownListProps {
    leftBtnChecked: IRadioButtonProps['checked'];
    rightBtnChecked: IRadioButtonProps['checked']
}

class App extends React.PureComponent<{}, IState> {

    private myDropDownList = React.createRef<JqxDropDownList>();

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
        this.myDropDownList.current!.setOptions({ selectedIndex: 0 });
    }

    public render() {
        return (
            <div>
                <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana' }}>
                    <h3>Alignment</h3>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.leftBtnOnChecked} checked={this.state.leftBtnChecked}>
                        Left
                    </JqxRadioButton>

                    <JqxRadioButton theme={'material-purple'} onChecked={this.rightBtnOnChecked} checked={this.state.rightBtnChecked}>
                        Right
                    </JqxRadioButton>
                </div>

                <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList} style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                    width={150} height={30} source={this.state.source} displayMember={'ContactName'} valueMember={'notes'}
                    dropDownHorizontalAlignment={this.state.dropDownHorizontalAlignment} dropDownWidth={200} />
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