import * as React from 'react';
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

const App = () => {
    const mySplitter = React.useRef<JqxSplitter>(null);
    const width = 90;

    const orientationButtonClick = () => {
        const currentOrientation = mySplitter.current!.getOptions("orientation");
        if (currentOrientation === 'vertical') {
            mySplitter.current!.setOptions({ orientation: "horizontal" });
        } else {
            mySplitter.current!.setOptions({ orientation: "vertical" });
        }
    };

    const expandFirstButtonClick = () => {
        const panels = mySplitter.current!.getOptions("panels");
        panels[0].collapsible = true;
        panels[1].collapsible = false;
        mySplitter.current!.setOptions({ panels });
        mySplitter.current!.expand();
    };

    const expandLastButtonClick = () => {
        const panels = mySplitter.current!.getOptions("panels");
        panels[0].collapsible = false;
        panels[1].collapsible = true;
        mySplitter.current!.setOptions({ panels });
        mySplitter.current!.expand();
    };

    const collapseFirstButtonClick = () => {
        const panels = mySplitter.current!.getOptions("panels");
        panels[0].collapsible = true;
        panels[1].collapsible = false;
        mySplitter.current!.setOptions({ panels });
        mySplitter.current!.collapse();
    };

    const collapseLastButtonClick = () => {
        const panels = mySplitter.current!.getOptions("panels");
        panels[0].collapsible = false;
        panels[1].collapsible = true;
        mySplitter.current!.setOptions({ panels });
        mySplitter.current!.collapse();
    };

    const enableButtonClick = () => {
        mySplitter.current!.enable();
    };

    const disableButtonClick = () => {
        mySplitter.current!.disable();
    };

    return (
        <div>
            <JqxButton theme={'material-purple'} onClick={orientationButtonClick} width={width}>
                Orientation
            </JqxButton>
            <JqxButton theme={'material-purple'} onClick={expandFirstButtonClick} width={width}>
                Expand first
            </JqxButton>
            <JqxButton theme={'material-purple'} onClick={expandLastButtonClick} width={width}>
                Expand last
            </JqxButton>
            <JqxButton theme={'material-purple'} onClick={collapseFirstButtonClick} width={width}>
                Collapse first
            </JqxButton>
            <JqxButton theme={'material-purple'} onClick={collapseLastButtonClick} width={width}>
                Collapse last
            </JqxButton>
            <JqxButton theme={'material-purple'} onClick={enableButtonClick} width={width}>
                Enable
            </JqxButton>
            <JqxButton theme={'material-purple'} onClick={disableButtonClick} width={width}>
                Disable
            </JqxButton>
            <br /><br />
            <JqxSplitter
                theme={'material-purple'}
                ref={mySplitter}
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
};

export default App;