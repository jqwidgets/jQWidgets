import React from 'react';
import ReactDOM from 'react-dom';

import JqxRibbon from '../../../jqwidgets-react/react_jqxribbon.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myRibbon.setPopupLayout(0, 'near', 130, 205);
        this.refs.myRibbon.setPopupLayout(1, 'center', 130, 200);
        this.refs.myRibbon.setPopupLayout(2, 'center', 130, 260);
        this.refs.myRibbon.setPopupLayout(3, 'far', 130, 350);
    }
    render() {
        let firstDivStyle = {
            boxSizing: 'border-box',
            width: 800,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            paddingLeft: 10,
            backgroundColor: '#1C3672',
            color: 'white',
            fontSize: 'large'
        };
        
        let imgStyle = {
            marginRight: 10,
            display: 'inline-block',
            verticalAlign: 'bottom'
        };
        
        let secondDivStyle = {
            display: 'inline-block',
            fontWeight: 'bold'
        };

        let gridStyle = {
            marginTop: 5,
            borderBottom: 'none',
            borderLeft: 'none',
            borderRight: 'none'
        };

        // 'Main' grid
        let initiMainGrid = () => {
            let mainMessages = [{ from: 'Anthony', subject: 'Visit to the zoo', time: '09/10/2014 12:35' }, { from: 'Peter', subject: 'Job application', time: '08/23/2014 18:13' }, { from: 'Sarah', subject: 'The roses...', time: '08/05/2014 15:01' }];
            let mainSource =
                {
                    datatype: 'json',
                    datafields: [
                        { name: 'from', type: 'string' },
                        { name: 'subject', type: 'string' },
                        { name: 'time', type: 'date' }
                    ],
                    localdata: mainMessages
                };
            let mainDataAdapter = new $.jqx.dataAdapter(mainSource);
            let mainGrid = new jqxGrid('#mainGrid', {
                width: '100%',
                autoheight: true,
                source: mainDataAdapter,
                selectionmode: 'checkbox',
                columns: [
                    { text: 'From', datafield: 'from', width: 100 },
                    { text: 'Subject', datafield: 'subject', width: 200 },
                    { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
                ]
            });
        };
        // 'Social' grid
        let initiSocialGrid = function () {
            let socialMessages = [{ from: 'PhotoPics.com', subject: 'Join us today!', time: '09/08/2014 11:00' }, { from: 'CookMaster', subject: 'Welcome to the CookMaster forum.', time: '08/29/2014 22:33' }];
            let socialSource =
                {
                    datatype: 'json',
                    datafields: [
                        { name: 'from', type: 'string' },
                        { name: 'subject', type: 'string' },
                        { name: 'time', type: 'date' }
                    ],
                    localdata: socialMessages
                };
            let socialDataAdapter = new $.jqx.dataAdapter(socialSource);
            let socialGrid = new jqxGrid('#socialGrid', {
                width: '100%',
                autoheight: true,
                source: socialDataAdapter,
                selectionmode: 'checkbox',
                columns: [
                    { text: 'From', datafield: 'from', width: 100 },
                    { text: 'Subject', datafield: 'subject', width: 240 },
                    { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
                ]
            });
        };

        let initContent = (index) => {
            switch (index) {
                case 0:
                    initiMainGrid();
                    break;
                case 1:
                    initiSocialGrid();
                    break;
                case 2:
                    let refreshButton = new jqxButton('#refreshButton', { width: 25, height: 25 });
                    break;
            };
        };
        return (
            <div>
                <div style={firstDivStyle}>
                    <img src='../../jqwidgets/styles/images/mail.png' style={imgStyle} />
                    <div style={secondDivStyle}>Inbox</div>
                </div>

                <JqxRibbon ref='myRibbon'
                    width={800}
                    selectionMode={'click'}
                    animationType={'none'}
                    initContent={initContent}
                >
                    <ul style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                        <li style={{ marginLeft: 30 }}>Main</li>
                        <li>Social</li>
                        <li>Promotions</li>
                    </ul>
                    <div>
                        <div>
                            <div id='mainGrid' style={gridStyle}>
                            </div>
                        </div>
                        <div>
                            <div id='socialGrid' style={gridStyle}>
                            </div>
                        </div>
                        <div>
                            <table style={{ width: '100%' }}>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        No new mail under <em>Promotions</em>.<br />
                                        <button id="refreshButton" title="Refresh">
                                            <img src="../../images/refresh.png" /></button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div >
                </JqxRibbon>

            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
