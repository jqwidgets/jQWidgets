import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        ReactDOM.render(<JqxButton width={60} height={23} value={'Search'} />, document.getElementsByClassName('jqx-menu-search')[0]);
        ReactDOM.render(<JqxButton width={150} height={25} value={'Buy Online'} />, document.getElementsByClassName('buyonline')[0]);
    }

    public render() {
        return (
            <JqxMenu theme={'material-purple'}
                width={650} height={30} autoOpen={false}
                autoCloseOnMouseLeave={false} showTopLevelArrows={true}>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li>
                        Products
                        <ul style={{ width: '450px' }}>
                            <li style={{ listStyle: 'none' }} data-ignoretheme="true">
                                <div>
                                    <div style={{ float: 'left', width: '50%' }}>
                                        <div className="jqx-menuitem-header" style={{ color: 'inherit', marginLeft: '5px', paddingBottom: '5px' }}>
                                            <b>Processors</b>
                                        </div>
                                        <ul className="megamenu-ul">
                                            <li><a href="#processors_02">2nd Gen Intel Core i7</a></li>
                                            <li><a href="#processors_03">2nd Gen Intel Core i5</a></li>
                                            <li><a href="#processors_04">2nd Gen Intel Core i3</a></li>
                                            <li><a href="#processors_05">Intel Xeon E7 Family</a></li>
                                            <li><a href="#processors_06">Intel Xeon 5000 Sequence</a></li>
                                            <li><a href="#processors_07">Intel Xeon E3 Family</a></li>
                                            <li><a href="#processors_08">Itanium</a></li>
                                            <li><a href="#processors_09">Intel Atom</a></li>
                                        </ul>
                                        <div className="jqx-menuitem-header" style={{ marginLeft: '5px', paddingBottom: '5px' }}>
                                            <b>Personal Computers</b>
                                        </div>
                                        <ul className="megamenu-ul">
                                            <li><a href="#PC_01">Desktops</a></li>
                                            <li><a href="#PC_02">Laptops</a></li>
                                        </ul>
                                        <div className="jqx-menuitem-header" style={{ marginLeft: '5px', paddingBottom: '5px' }}>
                                            <b>Enterprise Systems</b>
                                        </div>
                                        <ul className="megamenu-ul">
                                            <li><a href="#Servers_01">Servers</a></li>
                                            <li><a href="#Servers_02">Workstations</a></li>
                                        </ul>
                                    </div>
                                    <div style={{ float: 'left', width: '50%' }}>
                                        <div className="jqx-menuitem-header" style={{ marginLeft: '5px', paddingBottom: '5px' }}>
                                            <b>Motherboards</b>
                                        </div>
                                        <ul className="megamenu-ul">
                                            <li><a href="#IntelSeries_01">Intel Desktop Extreme Series</a></li>
                                            <li><a href="#IntelSeries_02">Intel Desktop Media Series</a></li>
                                            <li><a href="#IntelSeries_03">Intel Desktop Executive Series</a></li>
                                            <li><a href="#IntelSeries_04">Intel Desktop Essential Series</a></li>
                                            <li><a href="#IntelSeries_05">Intel Desktop Mature Series</a></li>
                                            <li><a href="#IntelSeries_06">Intel Desktop Classic Series</a></li>
                                            <li><a href="#IntelSeries_07">Server Motherboards</a></li>
                                            <li><a href="#IntelSeries_08">Intel Innovation Series</a></li>
                                        </ul>
                                        <div className="jqx-menuitem-header" style={{ marginLeft: '5px', paddingBottom: '5px' }}>
                                            <b>Consumer Electronics</b>
                                        </div>
                                        <ul className="megamenu-ul">
                                            <li><a href="#Netbooks">Netbooks</a></li>
                                            <li><a href="#SmartTVs">Smart TVs</a></li>
                                            <li><a href="#Tablets">Tablets</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Purchase
                        <ul style={{ width: '170px' }} className="megamenu-ul">
                            <li data-ignoretheme="true"><a href='#RequestQuote'>Request a Quote</a></li>
                            <li data-ignoretheme="true"><a href='#ContactSales'>Contact Sales</a></li>
                            <li data-ignoretheme="true"><a href='#PurchaseOrders'>Purchase Orders</a></li>
                            <li data-ignoretheme="true"><a href='#Discounts'>Volume Discounts</a></li>
                            <li data-ignoretheme="true"><a href='#Support'>Support</a></li>
                            <li data-ignoretheme="true"><a href='#FAQ'>FAQ</a></li>
                            <li data-ignoretheme="true"><a className="buyonline" href='#Buy' /></li>
                        </ul>
                    </li>
                    <li><a href="#Services">Services</a></li>
                    <li>
                        About Us
                        <ul style={{ width: '170px' }} className="megamenu-ul">
                            <li data-ignoretheme="true"><a href='#News'>Company News</a></li>
                            <li data-ignoretheme="true"><a href='#Events'>Events</a></li>
                            <li data-ignoretheme="true"><a href='#Contact'>Contact Us</a></li>
                            <li data-ignoretheme="true"><a href='#Mission'>Our Mission</a></li>
                        </ul>
                    </li>
                    <li style={{ listStyle: 'none' }} data-ignoretheme="true">
                        <div style={{ float: 'left', height: '30px', marginTop: '1px', marginLeft: '20px' }}>
                            <input className="jqx-input jqx-widget-content" style={{ float: 'left', height: '22px', width: '130px' }} />
                        </div>
                        <span className="jqx-menu-search" style={{ marginTop: '1px', marginLeft: '3px', padding: '2px', float: 'left' }} />
                    </li>
                </ul>
            </JqxMenu>
        );
    }
}

export default App;