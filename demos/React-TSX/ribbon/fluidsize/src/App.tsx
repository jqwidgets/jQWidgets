import * as React from 'react';
 


import './App.css';

import JqxRibbon from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxribbon';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxRibbon theme={'material-purple'}
                width={'100%'} height={350} position={'top'}
                selectionMode={'click'} animationType={'fade'}>
                <ul>
                    <li style={{ marginLeft: '30px' }}>Browse Books</li>
                    <li>Shipping</li>
                    <li>About Us</li>
                </ul>
                <div>
                    <div>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Fiction</b>
                                    </td>
                                    <td>
                                        <b>Biography</b>
                                    </td>
                                    <td>
                                        <b>Science</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Adventure</a>
                                    </td>
                                    <td>
                                        <a href="#">Biography: General</a>
                                    </td>
                                    <td>
                                        <a href="#">Astronomy</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Classics</a>
                                    </td>
                                    <td>
                                        <a href="#">Diaries, Letters & Journals</a>
                                    </td>
                                    <td>
                                        <a href="#">Biology</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Historical Fiction</a>
                                    </td>
                                    <td>
                                        <a href="#">Memoirs</a>
                                    </td>
                                    <td>
                                        <a href="#">Geography</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Romance</a>
                                    </td>
                                    <td>
                                        <b>Food & Drink</b>
                                    </td>
                                    <td>
                                        <a href="#">Mathematics</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Science Fiction</a>
                                    </td>
                                    <td>
                                        <a href="#">General Cookery</a>
                                    </td>
                                    <td>
                                        <a href="#">Physics</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Thrillers</a>
                                    </td>
                                    <td>
                                        <a href="#">National Cuisine</a>
                                    </td>
                                    <td />
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <a href="#">Quick & Easy Cooking</a>
                                    </td>
                                    <td />
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <a href="#">Vegetarian Cookery</a>
                                    </td>
                                    <td>
                                        <a href="#">More books</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#">Countries we ship to</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Delivery options</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Order cancellation and returns</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#">Contact us</a>
                                    </td>
                                    <td rowSpan={3} style={{ width: '125px' }} />
                                    <td rowSpan={3}>
                                        <img src={'https://www.jqwidgets.com/react/images/bookshop.png'} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Jobs</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">Affiliates</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </JqxRibbon>
        );
    }
}

export default App;
