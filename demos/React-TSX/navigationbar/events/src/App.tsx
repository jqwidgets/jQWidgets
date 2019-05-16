import * as React from 'react';
 


import JqxNavigationBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnavigationbar';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private events = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.collapsedItem = this.collapsedItem.bind(this);
        this.expandedItem = this.expandedItem.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxNavigationBar theme={'material-purple'} onCollapsedItem={this.collapsedItem} onExpandedItem={this.expandedItem}
                    width={400} height={370} expandMode={'singleFitHeight'}>
                    <div>
                        Early History of the Internet
                    </div>
                    <div>
                        <ul>
                            <li>1961 First packet-switching papers</li>
                            <li>1966 Merit Network founded</li>
                            <li>1966 ARPANET planning starts</li>
                            <li>1969 ARPANET carries its first packets</li>
                            <li>1970 Mark I network at NPL (UK)</li>
                            <li>1970 Network Information Center (NIC)</li>
                            <li>1971 Merit Network"s packet-switched network operational</li>
                            <li>1971 Tymnet packet-switched network</li>
                            <li>1972 Internet Assigned Numbers Authority (IANA) established</li>
                            <li>1973 CYCLADES network demonstrated</li>
                            <li>1974 Telenet packet-switched network</li>
                            <li>1976 X.25 protocol approved</li>
                            <li>1979 Internet Activities Board (IAB)</li>
                            <li>1980 USENET news using UUCP</li>
                            <li>1980 Ethernet standard introduced</li>
                            <li>1981 BITNET established</li>
                        </ul>
                    </div>
                    <div>
                        Merging the networks and creating the Internet
                    </div>
                    <div>
                        <ul>
                            <li>1981 Computer Science Network (CSNET)</li>
                            <li>1982 TCP/IP protocol suite formalized</li>
                            <li>1982 Simple Mail Transfer Protocol (SMTP)</li>
                            <li>1983 Domain Name System (DNS)</li>
                            <li>1983 MILNET split off from ARPANET</li>
                            <li>1986 NSFNET with 56 kbit/s links</li>
                            <li>1986 Internet Engineering Task Force (IETF)</li>
                            <li>1987 UUNET founded</li>
                            <li>1988 NSFNET upgraded to 1.5 Mbit/s (T1)</li>
                            <li>1988 OSI Reference Model released</li>
                            <li>1988 Morris worm</li>
                            <li>1989 Border Gateway Protocol (BGP)</li>
                            <li>1989 PSINet founded, allows commercial traffic</li>
                            <li>1989 Federal Internet Exchanges (FIXes)</li>
                            <li>1990 GOSIP (without TCP/IP)</li>
                            <li>1990 ARPANET decommissioned</li>
                        </ul>
                    </div>
                    <div>
                        Popular Internet services
                    </div>
                    <div>
                        <ul>
                            <li>1990 IMDb Internet movie database</li>
                            <li>1995 Amazon.com online retailer</li>
                            <li>1995 eBay online auction and shopping</li>
                            <li>1995 Craigslist classified advertisements</li>
                            <li>1996 Hotmail free web-based e-mail</li>
                            <li>1997 Babel Fish automatic translation</li>
                            <li>1998 Google Search</li>
                            <li>1999 Napster peer-to-peer file sharing</li>
                            <li>2001 Wikipedia, the free encyclopedia</li>
                            <li>2003 LinkedIn business networking</li>
                            <li>2003 Myspace social networking site</li>
                            <li>2003 Skype Internet voice calls</li>
                            <li>2003 iTunes Store</li>
                            <li>2004 Facebook social networking site</li>
                            <li>2004 Podcast media file series</li>
                            <li>2004 Flickr image hosting</li>
                            <li>2005 YouTube video sharing</li>
                            <li>2005 Google Earth virtual globe</li>
                        </ul>
                    </div>
                </JqxNavigationBar>
                <div style={{ marginLeft: '20px', fontStyle: '12px', fontFamily: 'Verdana, Geneva, DejaVu Sans, sans-serif', marginTop: '50px', float: 'left' }}>
                    <span>Events:</span>
                    <JqxPanel theme={'material-purple'} ref={this.events} style={{ border: 'none' }} width={420} height={250} />
                </div>
            </div>
        );
    }

    private collapsedItem(event: any): void {
        const text = this.getName(event.item);
        this.events.current!.prepend('<div style="margin-top: 5px;">Collapsed: ' + text + '</div>');
    };

    private expandedItem(event: any): void {
        const text = this.getName(event.item);
        this.events.current!.prepend('<div style="margin-top: 5px;">Expanded: ' + text + '</div>');
    };

    private getName(index: number) {
        switch (index) {
            case 0:
                return 'Early History of the Internet';
            case 1:
                return 'Merging the networks and creating the Internet';
            case 2:
                return 'Popular Internet services';
            default:
                return '';
        }
    };
}

export default App;