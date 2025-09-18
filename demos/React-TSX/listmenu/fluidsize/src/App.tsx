import * as React from 'react';
import './App.css';
import JqxListMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistmenu';

function App() {
    return (
        <JqxListMenu
            theme="material-purple"
            width="60%"
            autoSeparators={true}
            enableScrolling={false}
            showHeader={true}
            placeHolder="Find contact..."
        >
            <ul data-role="listmenu">
                <li>
                    <img src="https://www.jqwidgets.com/react/images/andrew.png" alt="" />
                    <div>Andrew Fuller</div>
                    <ul data-role="listmenu">
                        <li>
                            <div style={{ padding: '5px' }} data-role="content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img width="50" height="50" src="https://www.jqwidgets.com/react/images/andrew.png" alt="" />
                                            </td>
                                            <td>
                                                <b>Andrew Fuller</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Title</td>
                                            <td>Sales Representative</td>
                                        </tr>
                                        <tr>
                                            <td>Notes</td>
                                            <td>
                                                "Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing
                                                from the University of Dallas in 1981. He is fluent in French and Italian and reads
                                                German. He joined the company as a sales representative, was promoted to sales manager
                                                in January 1992 and to vice president of sales in March 1993. Andrew is a member
                                                of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific
                                                Rim Importers Association.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Birth Date</td>
                                            <td>19-Feb-52</td>
                                        </tr>
                                        <tr>
                                            <td>Hire Date</td>
                                            <td>14-Aug-92</td>
                                        </tr>
                                        <tr>
                                            <td>Home Phone</td>
                                            <td>(206) 555-9482</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>908 W. Capital Way.</td>
                                        </tr>
                                        <tr>
                                            <td>Postal Code</td>
                                            <td>98401</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>Tacoma</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>USA</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="https://www.jqwidgets.com/react/images/anne.png" alt="" />
                    <div>Anne Dodsworth</div>
                    <ul data-role="listmenu">
                        <li>
                            <div style={{ padding: '5px' }} data-role="content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img width="50" height="50" src="https://www.jqwidgets.com/react/images/anne.png" alt="" />
                                            </td>
                                            <td>
                                                <b>Anne Dodsworth</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Title</td>
                                            <td>Inside Sales Coordinator</td>
                                        </tr>
                                        <tr>
                                            <td>Notes</td>
                                            <td>Anne has a BA degree in English from St. Lawrence College. She is fluent in French and German.</td>
                                        </tr>
                                        <tr>
                                            <td>Birth Date</td>
                                            <td>27-Jan-66</td>
                                        </tr>
                                        <tr>
                                            <td>Hire Date</td>
                                            <td>15-Nov-94</td>
                                        </tr>
                                        <tr>
                                            <td>Home Phone</td>
                                            <td>(71) 555-5598</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>7 Houndstooth Rd.</td>
                                        </tr>
                                        <tr>
                                            <td>Postal Code</td>
                                            <td>WG2 7LT</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>London</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>UK</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="https://www.jqwidgets.com/react/images/janet.png" alt="" />
                    <div>Janet Leverling</div>
                    <ul data-role="listmenu">
                        <li>
                            <div style={{ padding: '5px' }} data-role="content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img width="50" height="50" src="https://www.jqwidgets.com/react/images/janet.png" alt="" />
                                            </td>
                                            <td>
                                                <b>Janet Leverling</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Title</td>
                                            <td>Sales Representative</td>
                                        </tr>
                                        <tr>
                                            <td>Notes</td>
                                            <td>
                                                Janet has a BS degree in chemistry from Boston College (1984). She has also completed
                                                a certificate program in food retailing management. Janet was hired as a sales associate
                                                in 1991 and promoted to sales representative in February 1992.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Birth Date</td>
                                            <td>27-Jan-69</td>
                                        </tr>
                                        <tr>
                                            <td>Hire Date</td>
                                            <td>15-Nov-94</td>
                                        </tr>
                                        <tr>
                                            <td>Home Phone</td>
                                            <td>(71) 555-4444</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>Miner Rd.</td>
                                        </tr>
                                        <tr>
                                            <td>Postal Code</td>
                                            <td>WG2 7LT</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>London</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>UK</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="https://www.jqwidgets.com/react/images/laura.png" alt="" />
                    <div>Laura Callahan</div>
                    <ul data-role="listmenu">
                        <li>
                            <div style={{ padding: '5px' }} data-role="content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img width="50" height="50" src="https://www.jqwidgets.com/react/images/laura.png" alt="" />
                                            </td>
                                            <td><b>Laura Callahan</b></td>
                                        </tr>
                                        <tr>
                                            <td>Title</td>
                                            <td>Sales Representative</td>
                                        </tr>
                                        <tr>
                                            <td>Notes</td>
                                            <td>
                                                Laura received a BA in psychology from the University of Washington. She has also
                                                completed a course in business French. She reads and writes French.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Birth Date</td>
                                            <td>27-Jan-66</td>
                                        </tr>
                                        <tr>
                                            <td>Hire Date</td>
                                            <td>15-Nov-94</td>
                                        </tr>
                                        <tr>
                                            <td>Home Phone</td>
                                            <td>(71) 555-4444</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>7 Houndstooth Rd.</td>
                                        </tr>
                                        <tr>
                                            <td>Postal Code</td>
                                            <td>WG2 7LT</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>London</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>UK</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="https://www.jqwidgets.com/react/images/margaret.png" alt="" />
                    <div>Margaret Peacock</div>
                    <ul data-role="listmenu">
                        <li>
                            <div style={{ padding: '5px' }} data-role="content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img width="50" height="50"