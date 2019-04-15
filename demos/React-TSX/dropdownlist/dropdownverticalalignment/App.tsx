import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IDropDownListProps {
    bottomBtnChecked: IRadioButtonProps['checked'];
    topBtnChecked: IRadioButtonProps['checked']
}

class App extends React.PureComponent<{}, IState> {

    private myDropDownList = React.createRef<JqxDropDownList>();

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
        this.myDropDownList.current!.setOptions({ selectedIndex: 0 });
    }

    public render() {
        return (
            <div>
                <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList} style={{ float: 'left', marginTop: '270px' }}
                    width={150} height={30} source={this.state.source} displayMember={'ContactName'} valueMember={'notes'}
                    dropDownVerticalAlignment={this.state.dropDownVerticalAlignment} dropDownWidth={200} />

                <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana', marginLeft: '100px', marginTop: '270px' }}>
                    <h3>Alignment</h3>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.topBtnOnChecked} checked={this.state.topBtnChecked}>
                        Top
                    </JqxRadioButton>

                    <JqxRadioButton theme={'material-purple'} onChecked={this.bottomBtnOnChecked} checked={this.state.bottomBtnChecked}>
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