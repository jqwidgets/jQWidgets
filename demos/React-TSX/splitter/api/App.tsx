import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

class App extends React.PureComponent<{}, {}> {
    private mySplitter = React.createRef<JqxSplitter>();
    
    private width: number = 90;
    constructor(props: {}) {
        super(props);

        this.orientationButtonClick = this.orientationButtonClick.bind(this);
        this.expandFirstButtonClick = this.expandFirstButtonClick.bind(this);
        this.expandLastButtonClick = this.expandLastButtonClick.bind(this);
        this.collapseFirstButtonClick = this.collapseFirstButtonClick.bind(this);
        this.collapseLastButtonClick = this.collapseLastButtonClick.bind(this);
        this.enableButtonClick = this.enableButtonClick.bind(this);
        this.disableButtonClick = this.disableButtonClick.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxButton theme={'material-purple'}
                    onClick={this.orientationButtonClick}
                    width={this.width}
                >
                    Orientation
                </JqxButton>

                <JqxButton theme={'material-purple'}
                    onClick={this.expandFirstButtonClick}
                    width={this.width}
                >
                    Expand first
                </JqxButton>

                <JqxButton theme={'material-purple'}
                    onClick={this.expandLastButtonClick}
                    width={this.width}
                >
                    Expand last
                </JqxButton>

                <JqxButton theme={'material-purple'}
                    onClick={this.collapseFirstButtonClick}
                    width={this.width}
                >
                    Collapse first
                </JqxButton>

                <JqxButton theme={'material-purple'}
                    onClick={this.collapseLastButtonClick}
                    width={this.width}
                >
                    Collapse last
                </JqxButton>

                <JqxButton theme={'material-purple'}
                    onClick={this.enableButtonClick}
                    width={this.width}
                >
                    Enable
                </JqxButton>

                <JqxButton theme={'material-purple'}
                    onClick={this.disableButtonClick}
                    width={this.width}
                >
                    Disable
                </JqxButton>
                <br /><br />
                <JqxSplitter theme={'material-purple'} ref={this.mySplitter}
                    // @ts-ignore
                    width={850}
                    height={600}
                    panels={[{ size: 250 }]}
                >
                    <div style={{ backgroundColor: "#F5FFF2" }} />
                    <div style={{ backgroundColor: "#EBF1FF" }} />
                </JqxSplitter>
            </div>
        );
    }

    // Event handling
    private orientationButtonClick(): void {
        const currentOrientation = this.mySplitter.current!.getOptions("orientation");
        if (currentOrientation === 'vertical') {
            this.mySplitter.current!.setOptions({ orientation: "horizontal" });
        } else {
            this.mySplitter.current!.setOptions({ orientation: "vertical" });
        }
    }

    private expandFirstButtonClick(): void {
        const panels = this.mySplitter.current!.getOptions("panels");
        panels[0].collapsible = true;
        panels[1].collapsible = false;
        this.mySplitter.current!.setOptions({ panels });
        this.mySplitter.current!.expand();
    };

    private expandLastButtonClick(): void {
        const panels = this.mySplitter.current!.getOptions("panels");
        panels[0].collapsible = false;
        panels[1].collapsible = true;
        this.mySplitter.current!.setOptions({ panels });
        this.mySplitter.current!.expand();
    };

    private collapseFirstButtonClick(): void {
        const panels = this.mySplitter.current!.getOptions("panels");
        panels[0].collapsible = true;
        panels[1].collapsible = false;
        this.mySplitter.current!.setOptions({ panels });
        this.mySplitter.current!.collapse();
    };

    private collapseLastButtonClick(): void {
        const panels = this.mySplitter.current!.getOptions("panels");
        panels[0].collapsible = false;
        panels[1].collapsible = true;
        this.mySplitter.current!.setOptions({ panels });
        this.mySplitter.current!.collapse();
    };

    private enableButtonClick(): void {
        this.mySplitter.current!.enable();
    };

    private disableButtonClick(): void {
        this.mySplitter.current!.disable();
    };
}

export default App;
