import * as React from 'react';
 


import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';
import JqxDocking from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdocking';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

class App extends React.PureComponent<{}, IListBoxProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            source: [
                'JavaScript Certification - Welcome to our network',
                'Business Challenges via Web take a part',
                'jQWidgets better web, less time. Take a tour',
                'Facebook - you have 7 new notifications',
                'Twitter - John Doe is following you. Look at his profile',
                'New videos, take a look at YouTube.com'
            ]
        }
    }

    public render() {
        return (
            <JqxDocking theme={'material-purple'}
                // @ts-ignore
                width={'100%'} orientation={'horizontal'} mode={'docked'} rtl={true}>
                <div>
                    <div id="window1" style={{ height: '220px' }}>
                        <div>Date and Time</div>
                        <div style={{ overflow: 'hidden' }}>
                            <JqxCalendar theme={'material-purple'} width={180} height={180} rtl={true} style={{ float: 'left', marginRight: '10px' }} />
                            <h3 style={{ textAlign: 'center', color: '#787878' }}>Sunny</h3>
                            <div style={{ float: 'left', marginLeft: '30px', textAlign: 'center' }}>
                                <img src={'https://www.jqwidgets.com/react/images/sun-icon.png'} alt={'Sunny'} />
                            </div>
                            <div style={{ textAlign: 'left', marginLeft: '5px', marginTop: '10px', fontSize: '10px', float: 'right', marginRight: '20px' }}>
                                Mo: 23 °C<br />
                                To 25 °C<br />
                                We: 27 °C
                            </div>
                        </div>
                    </div>
                    <div id="window2" style={{ height: '220px' }}>
                        <div>News</div>
                        <div style={{ overflow: 'hidden' }}>
                            <JqxTabs theme={'material-purple'} width={350} height={181} selectedItem={1} rtl={true}>
                                <ul style={{ marginLeft: '30px' }}>
                                    <li>World</li>
                                    <li>Local</li>
                                    <li>Sports</li>
                                </ul>
                                <div>
                                    <div style={{ padding: '3px', margin: '10px', width: '150px', height: '84px', float: 'left' }}>
                                        <img src={'https://www.jqwidgets.com/react/images/news_ie6.jpg'} alt={'IE6'} title={'IE6'} />
                                    </div>
                                    <span style={{ fontSize: '11px' }}>
                                        Microsoft is set to get a little more pushy ensuring
                                        you have an up-to-date browser and will automatically update Internet Explorer...
                                        <span style={{ fontSize: '8px' }}>(BBC)</span>
                                    </span>
                                </div>
                                <div>
                                    <div style={{ padding: '3px', margin: '10px', width: '144px', height: '81px', float: 'left' }}>
                                        <img src={'https://www.jqwidgets.com/react/images/local.jpg'} alt={'Local'} title={'Local'} />
                                    </div>
                                    <span style={{ fontSize: '11px' }}>
                                        The High Court has dismissed a challenge to laws that
                                        require immigrant spouses to be able to speak English in order to live in the UK...
                                        <span style={{ fontSize: '8px' }}>(BBC)</span>
                                    </span>
                                </div>
                                <div>
                                    <div style={{ padding: '3px', margin: '10px', width: '130px', height: '73px', float: 'left' }}>
                                        <img src={'https://www.jqwidgets.com/react/images/tennis.jpg'} alt={'Tennis'} title={'Tennis'} />
                                    </div>
                                    <span style={{ fontSize: '11px' }}>
                                        British number one Elena Baltacha says Judy Murray is
                                        a "fantastic" appointment as Great Britain's new Fed Cup captain...
                                        <span style={{ fontSize: '8px' }}>(BBC)</span>
                                    </span>
                                </div>
                            </JqxTabs>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="window3" style={{ height: '220px' }}>
                        <div>Zodiac</div>
                        <div style={{ overflow: 'hidden' }}>
                            <JqxPanel theme={'material-purple'} width={'100%'} height={180} rtl={true}>
                                <div style={{ paddingLeft: '20px' }}>
                                    <div style={{ padding: '3px', width: '150px', height: '110px', float: 'left', margin: '10px' }}>
                                        <img src={'https://www.jqwidgets.com/react/images/leo.jpg'} alt={'Leo'} title={'Leo'} />
                                    </div>
                                    <h4 style={{ textAlign: 'right', color: '#787878' }}>Leo</h4>
                                    <span style={{ textAlign: 'right', direction: 'rtl', fontSize: '12px' }}>
                                        Individuals born under the zodiac sign of Leo are very
                                        good looking and have a healthy physique, with a broad forehead.Leo are very intelligent,
                                        extremely courageous, love their freedom and live by their own rules.Indulgence
                                        and extravagance is like second nature to them and they love to...
                                    </span>
                                </div>
                            </JqxPanel>
                        </div>
                    </div>
                    <div id="window4" style={{ height: '220px' }}>
                        <div>E-mail</div>
                        <div style={{ overflow: 'hidden' }}>
                            <JqxListBox theme={'material-purple'} width={'100%'} height={181} source={this.state.source} rtl={true} />
                        </div>
                    </div>
                </div>
            </JqxDocking >
        );
    }
}

export default App;