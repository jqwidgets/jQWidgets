import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IDropDownListProps {
    fadeChecked: IRadioButtonProps['checked'];
    noneChecked: IRadioButtonProps['checked'];
    slideChecked: IRadioButtonProps['checked'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.noneAnimationBtnOnChecked = this.noneAnimationBtnOnChecked.bind(this);
        this.slideAnimationBtnOnChecked = this.slideAnimationBtnOnChecked.bind(this);
        this.fadeAnimationBtnOnChecked = this.fadeAnimationBtnOnChecked.bind(this);

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
            animationType: 'fade',
            fadeChecked: true,
            noneChecked: false,
            slideChecked: false,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {

        return (
            <div>
                <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana' }}>
                    <h3>Animation Type</h3>

                    <JqxRadioButton theme={'material-purple'} onChecked={this.noneAnimationBtnOnChecked} checked={this.state.noneChecked}>
                        None
                    </JqxRadioButton>

                    <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChecked={this.slideAnimationBtnOnChecked} checked={this.state.slideChecked}>
                        Slide
                    </JqxRadioButton>

                    <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChecked={this.fadeAnimationBtnOnChecked} checked={this.state.fadeChecked}>
                        Fade
                    </JqxRadioButton>

                </div>

                <JqxDropDownList theme={'material-purple'} style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                    width={150} height={30} source={this.state.source} selectedIndex={0}
                    animationType={this.state.animationType} dropDownHorizontalAlignment={'right'}
                    dropDownWidth={200} displayMember={'ContactName'} valueMember={'CompanyName'} />
            </div>
        );
    }

    private noneAnimationBtnOnChecked() {
        this.setState({
            animationType: 'none',
            fadeChecked: false,
            noneChecked: true,
            slideChecked: false
        });
    };

    private slideAnimationBtnOnChecked() {
        this.setState({
            animationType: 'slide',
            fadeChecked: false,
            noneChecked: false,
            slideChecked: true
        });
    };

    private fadeAnimationBtnOnChecked() {
        this.setState({
            animationType: 'fade',
            fadeChecked: true,
            noneChecked: false,
            slideChecked: false
        });
    };
}

export default App;