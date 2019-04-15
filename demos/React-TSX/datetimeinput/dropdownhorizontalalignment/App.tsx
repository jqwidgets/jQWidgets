import * as React from 'react';
 


import JqxDateTimeInput, { IDateTimeInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IDateTimeInputProps {
    leftChecked: IRadioButtonProps['checked'];
    rightChecked: IRadioButtonProps['checked'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.leftBtn = this.leftBtn.bind(this);
        this.rightBtn = this.rightBtn.bind(this);

        this.state = {
            dropDownHorizontalAlignment: 'right',
            leftChecked: false,
            rightChecked: true
        }
    }

    public render() {
        return (
            <div>
                <div style={{ float: 'left', fontSize: '12px', fontFamily: 'Verdana' }}>
                <h3>Alignment</h3>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.leftBtn} checked={this.state.leftChecked}>
                        Left
                    </JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChecked={this.rightBtn} checked={this.state.rightChecked}>
                        Right
                    </JqxRadioButton>
                </div>

                <JqxDateTimeInput theme={'material-purple'} style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                    width={150} height={30} animationType={'fade'}
                    dropDownHorizontalAlignment={this.state.dropDownHorizontalAlignment} />
            </div>
        );
    }

    private leftBtn(): void {
        this.setState({
            dropDownHorizontalAlignment: 'left',
            leftChecked: true,
            rightChecked: false
        });
    }

    private rightBtn(): void {
        this.setState({
            dropDownHorizontalAlignment: 'right',
            leftChecked: false,
            rightChecked: true
        });
    }
}

export default App;