import React from 'react';
import ReactDOM from 'react-dom';

import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    render() {

        return (
            <div>
                <table>
                    <tr>
                        <td>Top</td>
                        <td>Top Left</td>
                        <td>Top Right</td>
                    </tr>
                    <tr>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'top'} />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'topLeft'} />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'topRight'} />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Center</td>
                        <td>Left</td>
                        <td>Right</td>
                    </tr>
                    <tr>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'center'} />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'left'} />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'right'} />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Bottom</td>
                        <td>Bottom Left</td>
                        <td>Bottom Right</td>
                    </tr>
                    <tr>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'bottom'} />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'bottomLeft'} />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} imgSrc={'../images/twitter.png'} imgPosition={'bottomRight'} />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
