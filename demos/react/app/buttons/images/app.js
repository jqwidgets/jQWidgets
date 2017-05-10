import React from 'react';
import ReactDOM from 'react-dom';

import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {

    render() {
        return (
            <div>
                <h3>Image Before Text</h3>
                <table>
                    <tr>
                        <td>Image Left/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'left'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Left/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'center'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Left/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'right'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Image Center/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'left'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Center/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'center'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Center/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'right'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Image Right/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'left'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Right/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'center'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Right/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'right'} value='Button'
                                textImageRelation={'imageBeforeText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                </table>
                <h3>Text Before Image</h3>
                <table>
                    <tr>
                        <td>Text Left/Image Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'left'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Left/Image Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'left'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Left/Image Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'left'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Text Center/Image Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'center'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Center/Image Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'center'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Center/Image Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'center'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Text Right/Image Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'right'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Right/Image Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'right'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Right/Image Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'right'} value='Button'
                                textImageRelation={'textBeforeImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                    </tr>
                </table>
                <h3>Image Above Text</h3>
                <table>
                    <tr>
                        <td>Image Left/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'left'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Left/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'left'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Left/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'right'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Image Center/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'left'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Center/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'center'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Center/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'right'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Image Right/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'left'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Right/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'center'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Right/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'right'} value='Button'
                                textImageRelation={'imageAboveText'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                </table>
                <h3>Text Above Image</h3>
                <table>
                    <tr>
                        <td>Text Left/Image Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'top'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Left/Image Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'left'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Left/Image Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'left'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Text Center/Image Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'center'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Center/Image Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'center'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Center/Image Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'center'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Text Right/Image Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'right'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Right/Image Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'right'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                        <td>Text Right/Image Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'right'} value='Button'
                                textImageRelation={'textAboveImage'} imgSrc={'../images/twitter.png'}
                            />
                        </td>
                    </tr>
                </table>
                <h3>Overlay(Text and Image can be one over another)</h3>
                <table>
                    <tr>
                        <td>Image Left/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'left'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Left/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'center'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Left/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'left'} textPosition={'right'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Image Center/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'left'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                            </td>
                        <td>Image Center/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'center'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Center/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'center'} textPosition={'right'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Image Right/Text Left</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'left'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                            </td>
                        <td>Image Right/Text Center</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'center'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                        <td>Image Right/Text Right</td>
                        <td>
                            <JqxButton width={120} imgPosition={'right'} textPosition={'right'} value='Button'
                                textImageRelation={'overlay'} imgSrc={'../images/facebook.png'}
                            />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
