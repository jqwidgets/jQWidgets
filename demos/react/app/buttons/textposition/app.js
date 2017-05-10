import React from 'react';
import ReactDOM from 'react-dom';

import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    render() {

        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'topLeft'} value="Top Left" />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'top'} value="Top" />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'topRight'} value="Top Right" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'left'} value="Left" />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'center'} value="Center" />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'right'} value="Right" />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'bottomLeft'} value="Bottom Left" />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'bottom'} value="Bottom" />
                        </td>
                        <td>
                            <JqxButton width={120} height={50} textPosition={'bottomRight'} value="Bottom Left" />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
