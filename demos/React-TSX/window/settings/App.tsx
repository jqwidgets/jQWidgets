import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

class App extends React.PureComponent<{}, any> {
    private myWindow = React.createRef<JqxWindow>();
    private findButton = React.createRef<JqxButton>();
    private searchTextInput = React.createRef<HTMLInputElement>();

    constructor(props: {}) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.showWindowButtonClick = this.showWindowButtonClick.bind(this);
        this.hideWindowButtonClick = this.hideWindowButtonClick.bind(this);
        this.pinWindowButtonClick = this.pinWindowButtonClick.bind(this);
        this.unpinWindowButtonClick = this.unpinWindowButtonClick.bind(this);
        this.collapseWindowButtonClick = this.collapseWindowButtonClick.bind(this);
        this.expandWindowButtonClick = this.expandWindowButtonClick.bind(this);

        this.state = {
            disabled: true,
            draggable: true
        };
    }

    public render() {
        const buttonsStyle: React.CSSProperties = { float: "left", marginLeft: 5 };
        return (
            <div>
                <JqxButton theme={'material-purple'} style={{ float: "left" }} onClick={this.showWindowButtonClick} width={80}>
                    Open
                </JqxButton>
                <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={this.hideWindowButtonClick} width={80} >
                    Close
                </JqxButton>
                <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={this.pinWindowButtonClick} width={80} >
                    Pin
                </JqxButton>
                <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={this.unpinWindowButtonClick} width={80} >
                    Unpin
                </JqxButton>
                <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={this.collapseWindowButtonClick} width={80} >
                    Collapse
                </JqxButton>
                <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={this.expandWindowButtonClick} width={80} >
                    Expand
                </JqxButton>

                <JqxWindow theme={'material-purple'} ref={this.myWindow}
                    width={400}
                    height={120}
                    cancelButton={'.cancelButton'}
                    resizable={false}
                    position={{ x: 90, y: 140 }}
                    draggable={this.state.draggable}
                >
                    <div>
                        Find
                    </div>

                    <div>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ margin: 10 }}>
                                Fi<u>n</u>d what:
                                <input
                                    ref={this.searchTextInput}
                                    style={{ marginLeft: 5, height: 20, width: 175, border: '1px solid #aaa' }}
                                    onKeyUp={this.onKeyUp}
                                    onKeyDown={this.onKeyDown}
                                    onChange={this.onChange}
                                />
                                <div style={{ float: "right" }}>
                                    <JqxButton theme={'material-purple'} ref={this.findButton} style={{ marginBottom: 5 }} width={80} disabled={true} >
                                        Find Next
                                    </JqxButton>
                                    <JqxButton theme={'material-purple'} className={'cancelButton'} width={80} >
                                        Cancel
                                    </JqxButton>
                                </div>
                                <br />
                                <br />
                                <JqxCheckBox theme={'material-purple'} width={150}>Match case</JqxCheckBox>
                            </div>
                        </div>
                    </div>
                </JqxWindow>
            </div>
        );
    }

    private SearchButtonHandle = () => {
        if (this.searchTextInput.current!.value !== '') {
            this.findButton.current!.setOptions({ disabled: false });
        }
        else {
            this.findButton.current!.setOptions({ disabled: true });
        }
    }

    // Event handling
    private onKeyUp(): void {
        this.SearchButtonHandle();
    }

    private onKeyDown(): void {
        this.SearchButtonHandle();
    }

    private onChange(): void {
        this.SearchButtonHandle();
    }

    private showWindowButtonClick(): void {
        this.myWindow.current!.open();
    }

    private hideWindowButtonClick(): void {
        this.myWindow.current!.close();
    }

    private pinWindowButtonClick(): void {
        this.myWindow.current!.setOptions({ draggable: false });
    }
    
    private unpinWindowButtonClick(): void {
        this.myWindow.current!.setOptions({ draggable: true });
    }

    private collapseWindowButtonClick(): void {
        this.myWindow.current!.collapse();
    }

    private expandWindowButtonClick(): void {
        this.myWindow.current!.expand();
    }
}

export default App;
