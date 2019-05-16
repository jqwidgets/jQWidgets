import * as React from 'react';
 


import './App.css';

import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxRibbon from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxribbon';

class App extends React.PureComponent<{}> {

    private myRibbon = React.createRef<JqxRibbon>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div>
                <div style={{ width: '450px' }}>
                    <JqxRibbon theme={'material-purple'} ref={this.myRibbon} style={{ float: 'right' }}
                        width={375} height={335} position={'right'}
                        selectionMode={'hover'} animationType={'fade'}>
                        <ul id="header" style={{ width: '115px' }}>
                            <li>TV and Players</li>
                            <li>Cell phones</li>
                            <li>Cameras</li>
                            <li>Computers</li>
                        </ul>
                        <div>
                            <div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">TV</a></b>
                                            </td>
                                        </tr>
                                        <tr />
                                        <tr>
                                            <td className="list">
                                                <a href="#">LED</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">LCD</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">Plasma</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">PLAYERS</a></b>
                                            </td>
                                        </tr>
                                        <tr/>
                                        <tr>
                                            <td className="list">
                                                <a href="#">DVD</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">Blu-Ray</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">CD</a>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="promo">
                                                PROMO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image">
                                                <img src={'https://www.jqwidgets.com/react/images/tv.png'} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">
                                                <a href="#">LG 22MN43D-PZ</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="price">
                                                Price: $1583
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">PHONES</a></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Brand</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Display size</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">SMARTPHONES</a></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Brand</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By OS</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Display size</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By CPU</a>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="promo">
                                                PROMO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image">
                                                <img src={'https://www.jqwidgets.com/react/images/Samsung-Galaxy-S4.png'} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">
                                                <a href="#">Samsung I9505 Galaxy S4</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="price">
                                                Price: $569
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="list">
                                                <b>
                                                    <a href="#">
                                                        DIGITAL<br />
                                                        CAMERAS
                                                    </a>
                                                </b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">Hybrid</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">Compact</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">Digital SLR</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">CAMCORDERS</a></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">FLASH</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">HDD</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">HD Flash</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">HD HDD</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">HD Extreme</a>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="promo">
                                                PROMO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image">
                                                <img src={'https://www.jqwidgets.com/react/images/camera.png'} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">
                                                <a href="#">Nikon COOLPIX L330</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="price">
                                                Price: $358
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">LAPTOPS</a></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Processor Type</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By RAM Capacity</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By HDD Capacity</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Display Size</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Brand</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">DESKTOPS</a></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Processor Type</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By RAM Capacity</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By HDD Capacity</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Brand</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <b><a href="#">ALL-IN-ONE</a></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="list">
                                                <a href="#">By Brand</a>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                                <div className="container">
                                    <table><tbody>
                                        <tr>
                                            <td className="promo">
                                                PROMO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image">
                                                <img src={'https://www.jqwidgets.com/react/images/l-25.jpg'} style={{ width: '140px', height: '105px' }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">
                                                <a href="#">Toshiba Qosmio X70-A-114</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="price">
                                                Price: $2199
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </div>
                        </div>
                    </JqxRibbon>
                </div>
                <div style={{ clear: 'both' }} />
                <JqxCheckBox theme={'material-purple'} style={{ marginTop: '50px' }} onChange={this.onChange}>Menu Mode</JqxCheckBox>
            </div>
        );
    }

    private onChange(event: any): void {
        const checked = event.args.checked;
        const mode = checked ? "popup" : "default";
        const width = checked ? 115 : 425;

        this.myRibbon.current!.setOptions({ width, mode });

        if (mode === "popup") {
            this.myRibbon.current!.setPopupLayout(0, "default", 310, '100%');
            this.myRibbon.current!.setPopupLayout(1, "default", 310, '100%');
            this.myRibbon.current!.setPopupLayout(2, "default", 310, '100%');
            this.myRibbon.current!.setPopupLayout(3, "default", 310, '100%');
        }
    }
}

export default App;
