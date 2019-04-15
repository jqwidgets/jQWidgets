import * as React from 'react';
 


import './App.css';

import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IComboBoxProps {
    noneChecked: IRadioButtonProps['checked'];
    slideChecked: IRadioButtonProps['checked'];
    fadeChecked: IRadioButtonProps['checked'];
}

class App extends React.PureComponent<{}, IState> {

    private myComboBox = React.createRef<JqxComboBox>();

    constructor(props: {}) {
        super(props);
        this.noneAnimationOnChecked = this.noneAnimationOnChecked.bind(this);
        this.slideAnimationOnChecked = this.slideAnimationOnChecked.bind(this);
        this.fadeAnimationOnChecked = this.fadeAnimationOnChecked.bind(this);

        const source: any = {
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

    public componentDidMount() {
        setTimeout(() => {
            this.myComboBox.current!.setOptions({ selectedIndex: 0 });
        });
    }

    public render() {
        return (
            <div>
                <div id='selectionlog'>
                    <h3>Animation Type</h3>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.noneAnimationOnChecked} checked={this.state.noneChecked}>
                        None
                    </JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.slideAnimationOnChecked} checked={this.state.slideChecked}>
                        Slide
                    </JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.fadeAnimationOnChecked} checked={this.state.fadeChecked}>
                        Fade
                    </JqxRadioButton>
                </div>

                <JqxComboBox theme={'material-purple'} ref={this.myComboBox}
                    width={150} height={30} source={this.state.source}
                    animationType={this.state.animationType} dropDownHorizontalAlignment={'right'}
                    displayMember={'ContactName'} valueMember={'CompanyName'} />
            </div>
        );
    }

    private noneAnimationOnChecked(): void {
        this.setState({
            animationType: 'none',
            fadeChecked: false,
            noneChecked: true,
            slideChecked: false
        });
    };

    private slideAnimationOnChecked(): void {
        this.setState({
            animationType: 'slide',
            fadeChecked: false,
            noneChecked: false,
            slideChecked: true,
        });
    };

    private fadeAnimationOnChecked(): void {
        this.setState({
            animationType: 'fade',
            fadeChecked: true,
            noneChecked: false,
            slideChecked: false
        });
    };
}

export default App;