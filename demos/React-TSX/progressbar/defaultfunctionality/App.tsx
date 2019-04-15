import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

class App extends React.PureComponent<{}> {

    private myHorizontalProgressBar = React.createRef<JqxProgressBar>();
    private myVerticalProgressBar = React.createRef<JqxProgressBar>();
    private myInput = React.createRef<JqxInput>();
    private valueInput: number;
    private isUpdated: boolean;    

    constructor(props: {}) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onCheckBox = this.onCheckBox.bind(this);
        this.onCustomTextCheckBox = this.onCustomTextCheckBox.bind(this);
        this.getValueInput = this.getValueInput.bind(this);
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <div style={{ marginTop: '10px' }}>Horizontal</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myHorizontalProgressBar}
                    width={250} height={30} value={50} />

                <div style={{ marginTop: '10px' }}>Vertical</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myVerticalProgressBar}
                    width={30} height={250} value={50} orientation={'vertical'} />
                <br />
                <div>Enter a value between 0 and 100</div>
                <JqxInput theme={'material-purple'} ref={this.myInput} />

                <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={this.onClick} width={50}>Update</JqxButton>
                <JqxCheckBox theme={'material-purple'} onChange={this.onCheckBox}>
                    Show Progress Text
                </JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} onChange={this.onCustomTextCheckBox}>
                    Custom Progress Text
                </JqxCheckBox>
            </div>

        );
    }

    private renderText = (text: string): string => {
        return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
    };

    private getValueInput(): number {
        return parseInt(this.myInput.current!.getOptions('value'), 10);
    }

    private onClick(): void {
        const value = this.getValueInput();
        if (!isNaN(value)) {
            this.valueInput = value;
            this.myHorizontalProgressBar.current!.val(value);
            this.myVerticalProgressBar.current!.val(value);
            this.isUpdated = true;
        }
    }

    private onCheckBox(event: any): void {
        const value = this.getValueInput();
        if (value != null && this.isUpdated) {
            this.myHorizontalProgressBar.current!.val(this.valueInput);
            this.myVerticalProgressBar.current!.val(this.valueInput);
        }

        const isChecked = event.args.checked;
        this.myHorizontalProgressBar.current!.setOptions({ showText: isChecked });
        this.myVerticalProgressBar.current!.setOptions({ showText: isChecked });
    }

    private onCustomTextCheckBox(event: any): void {
        const value = this.getValueInput();
        if (value != null && this.isUpdated) {
            this.myHorizontalProgressBar.current!.val(this.valueInput);
            this.myVerticalProgressBar.current!.val(this.valueInput);
        }

        if (event.args.checked) {
            this.myHorizontalProgressBar.current!.setOptions({ renderText: this.renderText });
            this.myVerticalProgressBar.current!.setOptions({ renderText: this.renderText });
        }
        else {
            this.myHorizontalProgressBar.current!.setOptions({ renderText: (text: string) => text });
            this.myVerticalProgressBar.current!.setOptions({ renderText: (text: string) => text  });
        }
    }
}

export default App;