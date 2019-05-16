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
                            <td>Top</td>
                            <td>Top Left</td>
                            <td>Top Right</td>
                        </tr>
                        <tr>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'top'} />
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'topLeft'} />
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'topRight'} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>Center</td>
                            <td>Left</td>
                            <td>Right</td>
                        </tr>
                        <tr>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'center'} />
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'left'} />
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'right'} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>Bottom</td>
                            <td>Bottom Left</td>
                            <td>Bottom Right</td>
                        </tr>
                        <tr>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'bottom'} />
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'bottomLeft'} />
                            </td>
                            <td>
                                <JqxButton theme={'material-purple'} width={120} height={50} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'} imgPosition={'bottomRight'} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;