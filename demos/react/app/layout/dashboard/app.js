import React from 'react';
import ReactDOM from 'react-dom';

import JqxLayout from '../../../jqwidgets-react/react_jqxlayout.js';

class App extends React.Component {
    render() {
        let layout = [{
            type: 'layoutGroup',
            orientation: 'horizontal',
            items: [{
                type: 'layoutGroup',
                orientation: 'vertical',
                allowPin: false,
                width: 300,
                items: [{
                    type: 'tabbedGroup',
                    height: 300,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Teams',
                        contentContainer: 'TeamsPanel',
                        initContent: () => {
                            initTeamDataTable();
                        }
                    }]
                }, {
                    type: 'tabbedGroup',
                    height: 300,
                    allowClose: true,
                    allowPin: false,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Team Projects',
                        contentContainer: 'ProjectsPanel',
                        initContent: () => {
                            initProjectsListBox();
                        }
                    }, {
                        type: 'layoutPanel',
                        title: 'Projects Timeline',
                        contentContainer: 'ProjectsTimelinePanel',
                        initContent: () => {
                            let projectsTimelineDiv = document.getElementById('projectsTimelineDiv');
                            if (team === 'Sales') {
                                projectsTimelineDiv.innerHTML = teamSalesProjectsTimeline;
                            } else {
                                projectsTimelineDiv.innerHTML = teamSupportProjectsTimeline;
                            }
                        }
                    }]
                }]
            }, {
                type: 'layoutGroup',
                orientation: 'vertical',
                allowPin: false,
                width: 500,
                pinnedWidth: 80,
                items: [{
                    type: 'tabbedGroup',
                    height: 200,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Contacts',
                        contentContainer: 'ContactsPanel',
                        initContent: () => {
                            document.getElementById('contactsTable').innerHTML = teamSalesContacts;
                        }
                    }, {
                        type: 'layoutPanel',
                        title: 'Staff',
                        contentContainer: 'StaffPanel',
                        initContent: () => {
                            let staffDiv = document.getElementById('staffDiv');
                            if (team === 'Sales') {
                                staffDiv.innerHTML = teamSalesStaff;
                            } else {
                                staffDiv.innerHTML = teamSupportStaff;
                            }
                        }
                    }]
                }, {
                    type: 'tabbedGroup',
                    allowPin: false,
                    height: 400,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Project History',
                        contentContainer: 'ProjectHistoryPanel',
                        initContent: () => {
                            initProjectHistoryChart();
                        }
                    }]
                }]
            }]
        }];
        return (
            <JqxLayout width={800} height={600} layout={layout} contextMenu={true}>

                <div data-container='TeamsPanel'>
                    <div id='teamsDataTable' classN='no-border' />
                </div>
                <div data-container='ProjectsPanel'>
                    <div id='projectsListBox' className='no-border' />
                </div>
                <div data-container='ProjectsTimelinePanel'>
                    <div id='projectsTimelineDiv' style={{ margin: 5 }} />
                </div>
                <div data-container='ContactsPanel'>
                    <table id='contactsTable' style={{ margin: 20 }} />
                </div>
                <div data-container='StaffPanel'>
                    <div id='staffDiv' className='no-border' style={{ marginLeft: 5, margin: 20 }} />
                </div>
                <div data-container='ProjectHistoryPanel'>
                    <div id='projectHistoryChart' style={{ border: 'none', width: '99.9%', height: '100%' }} />
                </div>

            </JqxLayout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
