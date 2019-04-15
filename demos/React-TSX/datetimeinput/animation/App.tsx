import * as React from 'react';
 


import JqxDateTimeInput, { IDateTimeInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IDateTimeInputProps {
    noneChecked: IRadioButtonProps['checked'];
    slideChecked: IRadioButtonProps['checked'];
    fadeChecked: IRadioButtonProps['checked'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.noneAnimationBtn = this.noneAnimationBtn.bind(this);
        this.slideAnimationBtn = this.slideAnimationBtn.bind(this);
        this.fadeAnimationBtn = this.fadeAnimationBtn.bind(this);

        this.state = {
            animationType: 'fade',
            fadeChecked: true,
            noneChecked: false,
            slideChecked: false
        };
    }

    public render() {
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <h3>Animation Type</h3>

                    <JqxRadioButton theme={'material-purple'} onChecked={this.noneAnimationBtn} checked={this.state.noneChecked}>
                        None
                    </JqxRadioButton>

                    <div style={{ marginTop: '10px' }} />
                    <JqxRadioButton theme={'material-purple'} onChecked={this.slideAnimationBtn} checked={this.state.slideChecked}>
                        Slide
                    </JqxRadioButton>

                    <div style={{ marginTop: '10px' }} />
                    <JqxRadioButton theme={'material-purple'} onChecked={this.fadeAnimationBtn} checked={this.state.fadeChecked}>
                        Fade
                    </JqxRadioButton>
                </div>

                <JqxDateTimeInput theme={'material-purple'} style={{ float: 'left', marginTop: '40px', marginLeft: '100px' }}
                    width={150} height={30} animationType={this.state.animationType} dropDownHorizontalAlignment={'right'} />
            </div>
        );
    }

    private noneAnimationBtn() {
        this.setState({
            animationType: 'none',
            fadeChecked: false,
            noneChecked: true,
            slideChecked: false
        });
    }

    private slideAnimationBtn() {
        this.setState({
            animationType: 'slide',
            fadeChecked: false,
            noneChecked: false,
            slideChecked: true
        });
    }

    private fadeAnimationBtn() {
        this.setState({
            animationType: 'fade',
            fadeChecked: true,
            noneChecked: false,
            slideChecked: false
        });
    }
}

export default App;