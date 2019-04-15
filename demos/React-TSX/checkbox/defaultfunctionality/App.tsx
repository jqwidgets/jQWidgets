import * as React from 'react';
 


import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

class App extends React.PureComponent<{}> {

    private span10 = React.createRef<HTMLSpanElement>();
    private span11 = React.createRef<HTMLSpanElement>();
    private span12 = React.createRef<HTMLSpanElement>();

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={{ fontFamily: 'Verdana Arial', fontSize: '12px', width: '400px' }}>
                <div style={{ float: 'left', width: '400px' }}>
                    <h3 style={{ marginLeft: '15px' }}>Categories</h3>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        Entertainment
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25} checked={true}>
                        <span>Computers</span>
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        <span>Sports</span>
                    </JqxCheckBox>
                </div>
                <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        Health
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        <span>Finance</span>
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        <span>Travel</span>
                    </JqxCheckBox>
                </div>
                <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        Music
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        <span>Technology</span>
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25}>
                        <span>Publishing</span>
                    </JqxCheckBox>
                </div>
                <br />
                <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                    <h3 style={{ marginLeft: '15px' }}>States</h3>
                    <JqxCheckBox theme={'material-purple'} onChange={this.checkBox10OnChange} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25} checked={true}>
                        <span ref={this.span10}>Checked</span>
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} onChange={this.checkBox11OnChange} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25} checked={false}>
                        <span ref={this.span11}>Unchecked</span>
                    </JqxCheckBox>
                </div>
                <div style={{ float: 'left', width: '400px', marginTop: '10px' }}>
                    <JqxCheckBox theme={'material-purple'} onChange={this.checkBox12OnChange} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25} hasThreeStates={true} checked={null}>
                        <span ref={this.span12}>Indeterminate</span>
                    </JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginLeft: '10px', float: 'left' }}
                        width={120} height={25} disabled={true}>
                        <span>Disabled</span>
                    </JqxCheckBox>
                </div>
            </div>

        );
    }

    private checkBox10OnChange(event: any): void {
        const checked = event.args.checked;
        if (checked) {
            this.span10.current!.innerHTML = 'Checked';
        }
        else {
            this.span10.current!.innerHTML = 'Unchecked';
        }
    }
    private checkBox11OnChange(event: any): void {
        const checked = event.args.checked;
        if (checked) {
            this.span11.current!.innerHTML = 'Checked';
        }
        else {
            this.span11.current!.innerHTML = 'Unchecked';
        }
    }
    private checkBox12OnChange(event: any): void {
        const checked = event.args.checked;
        if (checked) {
            this.span12.current!.innerHTML = 'Checked';
        }
        else if (false === checked) {
            this.span12.current!.innerHTML = 'Unchecked';
        }
        else {
            this.span12.current!.innerHTML = 'Indeterminate';
        }
    }
}

export default App;