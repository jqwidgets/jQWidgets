import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.expandFirstButton.on('click', () => {
            let panels = this.refs.mainSplitter.panels();
            panels[0].collapsible = true;
            panels[1].collapsible = false;
            this.refs.mainSplitter.panels(panels);
            this.refs.mainSplitter.expand();
        });

        this.refs.expandLastButton.on('click', () => {
            let panels = this.refs.mainSplitter.panels();
            panels[0].collapsible = false;
            panels[1].collapsible = true;
            this.refs.mainSplitter.panels(panels);
            this.refs.mainSplitter.expand();
        });

        this.refs.collapseFirstButton.on('click', () => {
            let panels = this.refs.mainSplitter.panels();
            panels[0].collapsible = true;
            panels[1].collapsible = false;
            this.refs.mainSplitter.panels(panels);
            this.refs.mainSplitter.collapse();
        });

        this.refs.collapseLastButton.on('click', () => {
            let panels = this.refs.mainSplitter.panels();
            panels[0].collapsible = false;
            panels[1].collapsible = true;
            this.refs.mainSplitter.panels(panels);
            this.refs.mainSplitter.collapse();
        });
        
        this.refs.enableButton.on('click', () => {            
            this.refs.mainSplitter.enable();
        });

        this.refs.disableButton.on('click', () => {
            this.refs.mainSplitter.disable();
        });

        this.refs.orientationButton.on('click', () => {
            let currentOrientation = this.refs.mainSplitter.orientation();
            if (currentOrientation === 'vertical') {
                this.refs.mainSplitter.orientation('horizontal');
            } else {
                this.refs.mainSplitter.orientation('vertical');
            }
        });
    }
    render() {
        let buttonStyle = { float: 'left', marginLeft: 5 };
        return (
            <div>
                <JqxButton ref='orientationButton' style={buttonStyle} value='Orientation' width={90} />
                <JqxButton ref='expandFirstButton' style={buttonStyle} value='Expand first' width={90} />
                <JqxButton ref='expandLastButton' style={buttonStyle} value='Expand last' width={90} />
                <JqxButton ref='collapseFirstButton' style={buttonStyle} value='Collapse first' width={95} />
                <JqxButton ref='collapseLastButton' style={buttonStyle} value='Collapse last' width={95} />
                <JqxButton ref='enableButton' style={buttonStyle} value='Enable' width={80} />
                <JqxButton ref='disableButton' style={{ float: 'left', margin: '0 0 20px 5px' }} value='Disable' width={80} />

                <JqxSplitter ref='mainSplitter' style={{ marginTop: 20 }}
                    width={850} height={600}
                    panels={[{ size: 250 }]}
                >
                    <div style={{ backgroundColor: '#F5FFF2' }}></div>
                    <div style={{ backgroundColor: '#EBF1FF' }}></div>
                </JqxSplitter >
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
