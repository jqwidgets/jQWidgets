import * as React from 'react';
 

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    };

    public render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'topLeft'}>Top Left</JqxButton>
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'top'}>Top</JqxButton>
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'topRight'}>Top Right</JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'left'}>Left</JqxButton>
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'center'}>Center</JqxButton>
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'right'}>Right</JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'bottomLeft'}>Bottom Left</JqxButton>
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'bottom'}>Bottom</JqxButton>
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} textPosition={'bottomRight'}>BottomRight</JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;