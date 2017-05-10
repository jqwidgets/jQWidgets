import React from 'react';
import ReactDOM from 'react-dom';

import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';
import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.customWindow.focus();
        this.refs.showWindowButton.on('click', (event) => {
            this.refs.customWindow.open();
        });

        this.refs.hideWindowButton.on('click', (event) => {
            this.refs.customWindow.close();
        });

        this.refs.pinWindowButton.on('click', (event) => {
            this.refs.customWindow.draggable(false);
        });

        this.refs.unpinWindowButton.on('click', (event) => {
            this.refs.customWindow.draggable(true);
        });
        
        this.refs.collapseWindowButton.on('click', (event) => {
            this.refs.customWindow.collapse();
        });
        
        this.refs.expandWindowButton.on('click', (event) => {
            this.refs.customWindow.expand();
        });

        let input = document.getElementById('searchTextInput')

        let _searchButtonHandle = () => {
            if (this.refs.searchTextButton !== null) {
                if (input.value !== '') {
                    this.refs.searchTextButton.disabled(false);
                }
                else 
                {
                    this.refs.searchTextButton.disabled(true);
                }    
            }
        }
        
        input.addEventListener('keydown', () => {
            _searchButtonHandle();
        });

        input.addEventListener('change', () => {
            _searchButtonHandle();
        });

        input.addEventListener('keyup', () => {
            _searchButtonHandle();
        });
    }
    render () {
        let offset = { left: 40, top: 95 };
        return (
            <div>

                <div>
                    <JqxButton ref='showWindowButton' width={80} value='Open' style={{ float: 'left' }} />
                    <JqxButton ref='hideWindowButton' width={80} value='Close' style={{ float: 'left', marginLeft: 3 }} />
                    <JqxButton ref='pinWindowButton' width={80} value='Pin' style={{ float: 'left', marginLeft: 3 }} />
                    <JqxButton ref='unpinWindowButton' width={80} value='Unpin' style={{ float: 'left', marginLeft: 3 }} />
                    <JqxButton ref='collapseWindowButton' width={80} value='Collapse' style={{ float: 'left', marginLeft: 3 }} />
                    <JqxButton ref='expandWindowButton' width={80} value='Expand' style={{ float: 'left', marginLeft: 3 }} />
                </div>

                <JqxWindow ref='customWindow'
                    width={400} height={110} position={{ x: offset.left + 50, y: offset.top + 50 }}
                    cancelButton={'.cancelButton'} resizable={ false }
                    >
                    <div>
                        Find
                    </div>
                    <div>

                        <div style={{ marginTop: 10 }}>
                            Fi<u>n</u>d what:
                            <input ref='searchInput' type='text' style={{ marginLeft: 5, width: 175, border: '1px solid #aaa' }} id='searchTextInput' />

                            <div style={{ float: 'right' }}>
                                <JqxButton ref='searchTextButton' width={80} disabled={true} value='Find Next' style={{ marginBottom: 5 }} />
                                <JqxButton ref='cancelButton' width={80} value='Cancel'  className='cancelButton' />
                            </div>
                            <br />
                            <br />
                            <JqxCheckBox ref='checkBox' width={150} value='Match case' />
                        </div>

                    </div>
                </JqxWindow>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
