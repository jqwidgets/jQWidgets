<template>
    <JqxLayout :width="getWidth" :height="600" :layout="layout" :contextMenu="true">
        <div data-container="TeamsPanel">
            <div id="teamsDataTable" class="no-border"></div>
        </div>
        <div data-container="ProjectsPanel">
            <div id="projectsListBox" class="no-border"></div>
        </div>
        <div data-container="ProjectsTimelinePanel">
            <div id="projectsTimelineDiv" style="margin: 5px 0 0 5px;"></div>
        </div>
        <div data-container="ContactsPanel">
            <table id="contactsTable" style="margin: 20px;"></table>
        </div>
        <div data-container="StaffPanel">
            <div id="staffDiv" class="no-border" style="margin-left: 5px; margin: 20px;"></div>
        </div>
        <div data-container="ProjectHistoryPanel">
            <div id="projectHistoryChart" style="border: none; width: 99.9%; height: 100%;"></div>
        </div>
    </JqxLayout>

</template>
<script>
    import JqxLayout from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlayout.vue";
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxLayout
        },
        data: function () {
            return {
                getWidth: '90%',
                layout: [{
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
                                    this.initTeamDataTable();
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
                                    this.initProjectsListBox();
                                }
                            }, {
                                type: 'layoutPanel',
                                title: 'Projects Timeline',
                                contentContainer: 'ProjectsTimelinePanel',
                                initContent: () => {
                                    let projectsTimelineDiv = document.getElementById('projectsTimelineDiv');
                                    if (this.team === 'Sales') {
                                        projectsTimelineDiv.innerHTML = this.teamSalesProjectsTimeline;
                                    } else {
                                        projectsTimelineDiv.innerHTML = this.teamSupportProjectsTimeline;
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
                                    document.getElementById('contactsTable').innerHTML = this.teamSalesContacts;
                                }
                            }, {
                                type: 'layoutPanel',
                                title: 'Staff',
                                contentContainer: 'StaffPanel',
                                initContent: () => {
                                    let staffDiv = document.getElementById('staffDiv');
                                    if (this.team === 'Sales') {
                                        staffDiv.innerHTML = this.teamSalesStaff;
                                    } else {
                                        staffDiv.innerHTML = this.teamSupportStaff;
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
                                    this.initProjectHistoryChart();
                                }
                            }]
                        }]
                    }]
                }]
            }
        },
        beforeCreate: function () {
            this.teamSalesContacts = '<tr><td style="width: 100px;"><img src="../../../images/janet.png" /></td><td style=""><strong>Team lead:</strong> Petra Wilson<br /><strong>Phone: </strong>555-313-899<br /><strong>Email: </strong>petraw@company.com</td></tr>';
            this.teamSalesStaff = '<strong>Petra Wilson</strong> Team lead, Phone: 555-313-899<br /><strong>Jenny Oswald</strong> Marketing consultant, Phone: 555-313-333<br /><strong>Peter Tennant</strong> Accountant, Phone: 555-313-161';
            this.teamSalesProjects = ['2015 marketing research', 'Advertisement revenue increase'];
            this.teamSalesProjectsTimeline = '<strong>January - December</strong><br />&nbsp;2015 marketing research<br /><br /><strong>February - June</strong><br />&nbsp;Advertisement revenue increase';

            this.teamSupportContacts = '<tr><td style="width: 100px;"><img src="../../../images/steven.png" /></td><td style=""><strong>Team lead:</strong> Michael Nagase<br /><strong>Phone: </strong>555-313-643<br /><strong>Email: </strong>nagase@company.com</td></tr>';
            this.teamSupportStaff = '<strong>Michael Nagase</strong> Team lead, Phone: 555-313-643<br /><strong>Sam Forrester</strong> Chief support officer, Phone: 555-313-644<br /><strong>Dean Milhouse</strong> Support officer, Phone: 555-313-188';
            this.teamSupportProjects = ['Governmental support task', 'Conference preparation', 'HelloCompany support task'];
            this.teamSupportProjectsTimeline = '<strong>September - December</strong><br />&nbsp;Governmental support task<br /><br /><strong>July - August</strong><br />&nbsp;Conference preparation<br /><br /><strong>January - December</strong><br />&nbsp;HelloCompany support task';

            this.project1Data = [{ Month: 'January', Resources: 50, Issues: 2 }, { Month: 'February', Resources: 90, Issues: 7 }, { Month: 'March', Resources: 93, Issues: 15 }, { Month: 'April', Resources: 70, Issues: 36 }, { Month: 'May', Resources: 70, Issues: 20 }, { Month: 'June', Resources: 70, Issues: 20 }, { Month: 'July', Resources: 68, Issues: 16 }, { Month: 'August', Resources: 69, Issues: 9 }, { Month: 'September', Resources: 33, Issues: 2 }, { Month: 'October', Resources: 50, Issues: 0 }, { Month: 'November', Resources: 13, Issues: 0 }, { Month: 'December', Resources: 20, Issues: 0 }];
            this.project2Data = [{ Month: 'January', Resources: null, Issues: null }, { Month: 'February', Resources: 90, Issues: 38 }, { Month: 'March', Resources: 100, Issues: 45 }, { Month: 'April', Resources: 80, Issues: 13 }, { Month: 'May', Resources: 27, Issues: 11 }, { Month: 'June', Resources: 20, Issues: 7 }, { Month: 'July', Resources: null, Issues: null }, { Month: 'August', Resources: null, Issues: null }, { Month: 'September', Resources: null, Issues: null }, { Month: 'October', Resources: null, Issues: null }, { Month: 'November', Resources: null, Issues: null }, { Month: 'December', Resources: null, Issues: null }];
            this.project3Data = [{ Month: 'January', Resources: null, Issues: null }, { Month: 'February', Resources: null, Issues: null }, { Month: 'March', Resources: null, Issues: null }, { Month: 'April', Resources: null, Issues: null }, { Month: 'May', Resources: null, Issues: null }, { Month: 'June', Resources: null, Issues: null }, { Month: 'July', Resources: null, Issues: null }, { Month: 'August', Resources: null, Issues: null }, { Month: 'September', Resources: 10, Issues: 1 }, { Month: 'October', Resources: 80, Issues: 15 }, { Month: 'November', Resources: 99, Issues: 30 }, { Month: 'December', Resources: 20, Issues: 0 }];
            this.project4Data = [{ Month: 'January', Resources: null, Issues: null }, { Month: 'February', Resources: null, Issues: null }, { Month: 'March', Resources: null, Issues: null }, { Month: 'April', Resources: null, Issues: null }, { Month: 'May', Resources: null, Issues: null }, { Month: 'June', Resources: null, Issues: null }, { Month: 'July', Resources: 70, Issues: 3 }, { Month: 'August', Resources: 11, Issues: 5 }, { Month: 'September', Resources: null, Issues: null }, { Month: 'October', Resources: null, Issues: null }, { Month: 'November', Resources: null, Issues: null }, { Month: 'December', Resources: null, Issues: null }];
            this.project5Data = [{ Month: 'January', Resources: 20, Issues: 0 }, { Month: 'February', Resources: 20, Issues: 2 }, { Month: 'March', Resources: 33, Issues: 12 }, { Month: 'April', Resources: 42, Issues: 16 }, { Month: 'May', Resources: 80, Issues: 24 }, { Month: 'June', Resources: 78, Issues: 28 }, { Month: 'July', Resources: 68, Issues: 16 }, { Month: 'August', Resources: 10, Issues: 2 }, { Month: 'September', Resources: 47, Issues: 12 }, { Month: 'October', Resources: 50, Issues: 10 }, { Month: 'November', Resources: 8, Issues: 1 }, { Month: 'December', Resources: 15, Issues: 3 }];
        },
        methods: {
            initTeamDataTable: function () {
                const teamData =
                    [{
                        team: 'Sales Team',
                        lead: 'Petra Wilson'
                    }, {
                        team: 'Support Team',
                        lead: 'Michael Nagase'
                    }];

                const source =
                    {
                        dataType: "json",
                        dataFields: [{
                            name: 'team',
                            type: 'string'
                        }, {
                            name: 'lead',
                            type: 'string'
                        }],
                        localdata: teamData
                    };

                const dataAdapter = new jqx.dataAdapter(source);

                const teamTableOptions =
                    {
                        width: '100%',
                        height: '100%',
                        source: dataAdapter,
                        ready: function () {
                            setTimeout(_ => teamsDataTable.selectRow(0));
                        },
                        columns: [{
                            text: 'Team',
                            dataField: 'team',
                            width: 120
                        }, {
                            text: 'Lead',
                            dataField: 'lead'
                        }]
                    };
                const teamsDataTable = jqwidgets.createInstance('#teamsDataTable', 'jqxDataTable', teamTableOptions);

                teamsDataTable.addEventHandler('rowSelect', (event) => {
                    let boundIndex = event.args.boundIndex,
                        contacts, staff, projects, projectsTimeline, projectsHistory;
                    if (boundIndex === 0) {
                        this.team = 'Sales';
                        contacts = this.teamSalesContacts;
                        staff = this.teamSalesStaff;
                        projects = this.teamSalesProjects;
                        projectsTimeline = this.teamSalesProjectsTimeline;
                        projectsHistory = this.project1Data;
                    } else {
                        this.team = 'Support';
                        contacts = this.teamSupportContacts;
                        staff = this.teamSupportStaff;
                        projects = this.teamSupportProjects;
                        projectsTimeline = this.teamSupportProjectsTimeline;
                        projectsHistory = this.project3Data;
                    }

                    const contactsTable = document.getElementById('contactsTable');
                    const staffDiv = document.getElementById('staffDiv');
                    const projectsListBox = document.getElementById('projectsListBox');
                    const projectsTimelineDiv = document.getElementById('projectsTimelineDiv');
                    const projectHistoryChart = document.getElementById('projectHistoryChart');

                    if (contactsTable) {
                        contactsTable.innerHTML = contacts;
                    }
                    if (staffDiv) {
                        staffDiv.innerHTML = staff;
                    }
                    if (projectsListBox) {
                        const projectsListBox = jqwidgets.createInstance('#projectsListBox', 'jqxListBox', { source: projects });
                        projectsListBox.selectIndex(0);
                    }
                    if (projectsTimelineDiv) {
                        projectsTimelineDiv.innerHTML = projectsTimeline;
                    }
                    if (projectHistoryChart) {
                        jqwidgets.createInstance('#projectHistoryChart', 'jqxChart', { source: projectsHistory });
                    }
                });
            },
            initProjectsListBox: function () {
                const projectsListBoxOptions = {
                    selectedIndex: 0,
                    source: this.teamSalesProjects,
                    width: '100%',
                    height: '100%'
                };
                const projectsListBox = jqwidgets.createInstance('#projectsListBox', 'jqxListBox', projectsListBoxOptions);

                const projectHistoryChart = document.getElementById('projectHistoryChart');

                projectsListBox.addEventHandler('select', (event) => {
                    if (projectHistoryChart) {
                        let args = event.args;
                        if (args) {
                            let label = args.item.label;
                            switch (label) {
                                case '2015 marketing research':
                                    jqwidgets.createInstance('#projectHistoryChart', 'jqxChart', { source: this.project1Data });
                                    break;
                                case 'Advertisement revenue increase':
                                    jqwidgets.createInstance('#projectHistoryChart', 'jqxChart', { source: this.project2Data });
                                    break;
                                case 'Governmental support task':
                                    jqwidgets.createInstance('#projectHistoryChart', 'jqxChart', { source: this.project3Data });
                                    break;
                                case 'Conference preparation':
                                    jqwidgets.createInstance('#projectHistoryChart', 'jqxChart', { source: this.project4Data });
                                    break;
                                case 'HelloCompany support task':
                                    jqwidgets.createInstance('#projectHistoryChart', 'jqxChart', { source: this.project5Data });
                                    break;
                            }
                        }
                    }
                });
            },
            initProjectHistoryChart: function() {
                const settings =
                    {
                        title: 'Project History',
                        description: 'Overview of project resources and solved issues',
                        showBorderLine: false,
                        titlePadding: {
                            left: 90,
                            top: 0,
                            right: 0,
                            bottom: 10
                        },
                        source: this.project1Data,
                        xAxis: {
                            dataField: 'Month',
                            gridLines: {
                                visible: false
                            }
                        },
                        valueAxis: {
                            minValue: 0,
                            maxValue: 100,
                            unitInterval: 10,
                            description: 'Resources (in relative units)'
                        },
                        colorScheme: 'scheme05',
                        seriesGroups: [{
                            type: 'column',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,

                            series: [{
                                dataField: 'Resources',
                                displayText: 'Resources spent'
                            }]
                        }, {
                            type: 'line',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,

                            series: [{
                                dataField: 'Issues',
                                displayText: 'Issues'
                            }]
                        }]
                    };

                jqwidgets.createInstance('#projectHistoryChart', 'jqxChart', settings);
            }
        }
    }
</script>

<style>
    .jqx-layout-group-auto-hide-content-vertical {
        width: 200px;
    }

    .no-border {
        border-left-width: 0;
        border-right-width: 0;
    }

    .jqx-ribbon-content-section {
        overflow: hidden;
    }

</style>
