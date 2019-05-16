import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRibbon, { IRibbonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxribbon';

class App extends React.PureComponent<{}, IRibbonProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            initContent: (index: number) => {
                switch (index) {
                    case 0:
                        this.initiMainGrid();
                        break;
                    case 1:
                        this.initiSocialGrid();
                        break;
                    case 2:
                        ReactDOM.render(
                            <JqxButton theme={'material-purple'} width={20}>
                                <img src={'https://www.jqwidgets.com/react/images/refresh.png'} />
                            </JqxButton>,
                            document.getElementById('refreshButton'));
                        break;
                }
            }
        }
    }

    public render() {
        return (
            <div>
                <div style={{
                    backgroundColor: '#1C3672', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', boxSizing: 'border-box',
                    color: 'White', fontSize: 'large', paddingLeft: '10px', width: '800px'
                }}>
                    <img src={'https://www.jqwidgets.com/react/images/mail.png'} style={{ marginRight: '10px', display: 'inline-block', verticalAlign: 'bottom' }} />
                    <div style={{ display: 'inline-block', fontWeight: 'bold' }}>
                        Inbox
                    </div>
                </div>
                <JqxRibbon theme={'material-purple'}
                    // @ts-ignore
                    width={'100%'} position={'top'} selectionMode={'click'}
                    initContent={this.state.initContent} animationType={'none'}>
                    <ul style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                        <li style={{ marginLeft: '30px' }}>Main</li>
                        <li>Social</li>
                        <li>Promotions</li>
                    </ul>
                    <div>
                        <div>
                            <div id="mainGrid" style={{ marginTop: '5px', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} />
                        </div>
                        <div>
                            <div id="socialGrid" style={{ marginTop: '5px', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} />
                        </div>
                        <div>
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>
                                            No new mail under <em>Promotions</em>.<br />
                                            <div id="refreshButton"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </JqxRibbon>
            </div>
        );
    }

    private initiMainGrid: any = () => {
        const mainMessages = [{ from: 'Anthony', subject: 'Visit to the zoo', time: '09/10/2014 12:35' }, { from: 'Peter', subject: 'Job application', time: '08/23/2014 18:13' }, { from: 'Sarah', subject: 'The roses...', time: '08/05/2014 15:01' }];
        const mainSource = {
            datafields: [
                { name: 'from', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'time', type: 'date' }
            ],
            datatype: 'json',
            localdata: mainMessages
        };
        const mainDataAdapter = new jqx.dataAdapter(mainSource);

        const columns: IGridProps['columns'] = [
            { text: 'From', datafield: 'from', width: 100 },
            { text: 'Subject', datafield: 'subject', width: 200 },
            { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
        ];

        ReactDOM.render(
            <JqxGrid theme={'material-purple'}
                width={'100%'} autoheight={true} source={mainDataAdapter}
                selectionmode={'checkbox'} columns={columns} />,
            document.getElementById('mainGrid')
        );
    };

    // 'Social' grid
    private initiSocialGrid = () => {
        const socialMessages = [{ from: 'PhotoPics.com', subject: 'Join us today!', time: '09/08/2014 11:00' }, { from: 'CookMaster', subject: 'Welcome to the CookMaster forum.', time: '08/29/2014 22:33' }];
        const socialSource = {
            datafields: [
                { name: 'from', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'time', type: 'date' }
            ],
            datatype: 'json',
            localdata: socialMessages
        };
        const socialDataAdapter = new jqx.dataAdapter(socialSource);

        const columns: IGridProps['columns'] = [
            { text: 'From', datafield: 'from', width: 100 },
            { text: 'Subject', datafield: 'subject', width: 240 },
            { text: 'Time', datafield: 'time', cellsformat: 'MMM d h:mm tt' }
        ];

        ReactDOM.render(
            <JqxGrid theme={'material-purple'}
                width={'100%'} autoheight={true} source={socialDataAdapter}
                selectionmode={'checkbox'} columns={columns} />,
            document.getElementById('socialGrid')
        );
    }
}

export default App;
