import React from 'react';
import ReactDOM from 'react-dom';

import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myMenu.minimize();

        this.refs.myCheckBox.on('change', () => {
            if (this.refs.myCheckBox.val()) {
                this.refs.myMenu.minimize();
            }
            else {
                this.refs.myMenu.restore();
            }
        });
    }
    render() {
        let menuInnerHtml =
            `
            <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Solutions'>Solutions</a>
                    <ul style='width: 250px;'>
                        <li><a href='#Education'>Education</a></li>
                        <li><a href='#Financial'>Financial services</a></li>
                        <li><a href='#Government'>Government</a></li>
                        <li><a href='#Manufacturing'>Manufacturing</a></li>
                        <li type='separator'></li>
                        <li>Software Solutions
                                    <ul style='width: 220px;'>
                                        <li><a href='#ConsumerPhoto'>Consumer photo and video</a></li>
                                        <li><a href='#Mobile'>Mobile</a></li>
                                        <li><a href='#RIA'>Rich Internet applications</a></li>
                                        <li><a href='#TechnicalCommunication'>Technical communication</a></li>
                                        <li><a href='#Training'>Training and eLearning</a></li>
                                        <li><a href='#WebConferencing'>Web conferencing</a></li>
                                    </ul>
                        </li>
                        <li><a href='#'>All industries and solutions</a></li>
                    </ul>
                </li>
                <li><a href='#Products'>Products</a>
                    <ul>
                        <li><a href='#PCProducts'>PC products</a></li>
                        <li><a href='#MobileProducts'>Mobile products</a></li>
                        <li><a href='#AllProducts'>All products</a></li>
                    </ul>
                </li>     
            </ul>
            `;
        return (
            <div>
                <JqxMenu ref='myMenu'
                    width={'100%'} height={32} template={menuInnerHtml}
                    autoSizeMainItems={true}
                />
                <br />
                <br />
                <JqxCheckBox ref='myCheckBox'
                    value='Minimized' checked={true}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
