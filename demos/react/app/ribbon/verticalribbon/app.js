import React from 'react';
import ReactDOM from 'react-dom';

import JqxRibbon from '../../../jqwidgets-react/react_jqxribbon.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.megaMenuMode.on('change', (event) => {
            let checked = event.args.checked;
            let mode = checked ? 'popup' : 'default';
            let width = checked ? 115 : 425;
            this.refs.myRibbon.setOptions({ width: width, mode: mode });
            if (mode == 'popup') {
                this.refs.myRibbon.setPopupLayout(0, 'default', 310, '100%');
                this.refs.myRibbon.setPopupLayout(1, 'default', 310, '100%');
                this.refs.myRibbon.setPopupLayout(2, 'default', 310, '100%');
                this.refs.myRibbon.setPopupLayout(3, 'default', 310, '100%');
            }
        });
    }
    render() {
        let ribbonHTML = `
        <ul id="header" style="width:115px;">
            <li>TV and Players</li>
            <li>Cell phones</li>
            <li>Cameras</li>
            <li>Computers</li>
        </ul>
        <div>
            <div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="list">
                                <b><a href="#">TV</a></b>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">LED</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">LCD</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">Plasma</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <b><a href="#">PLAYERS</a></b>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">DVD</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">Blu-Ray</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">CD</a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="promo">
                                PROMO
                            </td>
                        </tr>
                        <tr>
                            <td class="image">
                                <img src="../../images/tv.png" />
                            </td>
                        </tr>
                        <tr>
                            <td class="name">
                                <a href="#">LG 22MN43D-PZ</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="price">
                                Price: $1583
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="list">
                                <b><a href="#">PHONES</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Brand</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Display size</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <b><a href="#">SMARTPHONES</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Brand</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By OS</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Display size</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By CPU</a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="promo">
                                PROMO
                            </td>
                        </tr>
                        <tr>
                            <td class="image">
                                <img src="../../images/Samsung-Galaxy-S4.png" />
                            </td>
                        </tr>
                        <tr>
                            <td class="name">
                                <a href="#">Samsung I9505 Galaxy S4</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="price">
                                Price: $569
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="list">
                                <b><a href="#">DIGITAL<br />
                                    CAMERAS</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">Hybrid</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">Compact</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">Digital SLR</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <b><a href="#">CAMCORDERS</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">FLASH</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">HDD</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">HD Flash</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">HD HDD</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">HD Extreme</a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="promo">
                                PROMO
                            </td>
                        </tr>
                        <tr>
                            <td class="image">
                                <img src="../../images/camera.png" />
                            </td>
                        </tr>
                        <tr>
                            <td class="name">
                                <a href="#">Nikon COOLPIX L330</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="price">
                                Price: $358
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="list">
                                <b><a href="#">LAPTOPS</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Processor Type</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By RAM Capacity</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By HDD Capacity</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Display Size</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Brand</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <b><a href="#">DESKTOPS</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Processor Type</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By RAM Capacity</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By HDD Capacity</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Brand</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <b><a href="#">ALL-IN-ONE</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td class="list">
                                <a href="#">By Brand</a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="container">
                    <table>
                        <tr>
                            <td class="promo">
                                PROMO
                            </td>
                        </tr>
                        <tr>
                            <td class="image">
                                <img src="../../images/l-25.jpg" style="width: 140px; height: 105px;" />
                            </td>
                        </tr>
                        <tr>
                            <td class="name">
                                <a href="#">Toshiba Qosmio X70-A-114</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="price">
                                Price: $2199
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>`;
        return (
            <div>
                <JqxRibbon ref='myRibbon'
                    template={ribbonHTML}
                    width={425}
                    height={335}
                    position={'left'}
                    selectionMode={'hover'}
                    animationType={'fade'}
                />

                <JqxCheckBox style={{ marginTop: 50 }}
                    ref='megaMenuMode'
                    value='Menu Mode'
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
