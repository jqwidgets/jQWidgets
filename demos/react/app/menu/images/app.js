import React from 'react';
import ReactDOM from 'react-dom';

import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        ReactDOM.render(<JqxCheckBox checked={true} />, document.getElementById('checkbox'));
        ReactDOM.render(<JqxCheckBox />, document.getElementById('checkbox2'));
        ReactDOM.render(<JqxCheckBox />, document.getElementById('checkbox3'));
    }
    render() {
        let menuInnerHtml =
            `
                <ul>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/mailIcon.png' /><span>Mail</span>
                    </li>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/calendarIcon.png' /><span>Calendar</span>
                    </li>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/contactsIcon.png' /><span>Contacts</span>
                    </li>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>
                            <span>Inbox</span></span>
                        <ul>
                            <li>
                                <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>jQWidgets</span>
                                <ul>
                                    <li>
                                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Admin</span>
                                    </li>
                                    <li>
                                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Corporate</span>
                                    </li>
                                    <li>
                                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Finance</span>
                                    </li>
                                    <li>
                                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Other</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Personal</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/recycle.png' />
                        <span>Deleted Items</span>
                        <ul>
                            <li>
                                <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Today</span>
                            </li>
                            <li>
                                <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Last
                                    Week</span> </li>
                            <li>
                                <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span>Last
                                    Month</span> </li>
                        </ul>
                    </li>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/settings.png' /><span>Settings</span>
                        <ul style='width: 230px;'>
                            <li>
                                <div style='float: left; margin-right: 5px;' id='checkbox'>
                                </div>
                                Enable Auto-Save</li>
                            <li>
                                <div style='float: left; margin-right: 5px;' id='checkbox2'>
                                </div>
                                Send email as anonymous</li>
                            <li>
                                <div style='float: left; margin-right: 5px;' id='checkbox3'>
                                </div>
                                Save sent emails</li>
                        </ul>
                    </li>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/notesIcon.png' /><span>Notes</span>
                    </li>
                    <li>
                        <img style='float: left; margin-right: 5px;' src='../../images/favorites.png' /><span>Favorites</span>
                    </li>
                </ul>
            `;
        return (
            <div style={{ height: 300 }}>
                <JqxMenu
                    width={150} height={225}
                    template={menuInnerHtml} mode={'vertical'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
