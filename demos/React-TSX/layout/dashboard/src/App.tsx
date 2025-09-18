import React, { useRef, useMemo } from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDataTable, { IDataTableProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxLayout, { ILayoutProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

const teamSalesContacts = '<tr><td style="width: 100px;"><img src="https://www.jqwidgets.com/react/images/janet.png" /></td><td style=""><strong>Team lead:</strong> Petra Wilson<br /><strong>Phone: </strong>555-313-899<br /><strong>Email: </strong>petraw@company.com</td></tr>';
const teamSalesStaff = '<strong>Petra Wilson</strong> Team lead, Phone: 555-313-899<br /><strong>Jenny Oswald</strong> Marketing consultant, Phone: 555-313-333<br /><strong>Peter Tennant</strong> Accountant, Phone: 555-313-161';
const teamSalesProjects = ['2015 marketing research', 'Advertisement revenue increase'];
const teamSalesProjectsTimeline = '<strong>January - December</strong><br />&nbsp;2015 marketing research<br /><br /><strong>February - June</strong><br />&nbsp;Advertisement revenue increase';
const teamSupportContacts = '<tr><td style="width: 100px;"><img src="https://www.jqwidgets.com/react/images/steven.png" /></td><td style=""><strong>Team lead:</strong> Michael Nagase<br /><strong>Phone: </strong>555-313-643<br /><strong>Email: </strong>nagase@company.com</td></tr>';
const teamSupportStaff = '<strong>Michael Nagase</strong> Team lead, Phone: 555-313-643<br /><strong>Sam Forrester</strong> Chief support officer, Phone: 555-313-644<br /><strong>Dean Milhouse</strong> Support officer, Phone: 555-313-188';
const teamSupportProjects = ['Governmental support task', 'Conference preparation', 'HelloCompany support task'];
const teamSupportProjectsTimeline = '<strong>September - December</strong><br />&nbsp;Governmental support task<br /><br /><strong>July - August</strong><br />&nbsp;Conference preparation<br /><br /><strong>January - December</strong><br />&nbsp;HelloCompany support task';
const project1Data = [{ Month: 'January', Resources: 50, Issues: 2 }, { Month: 'February', Resources: 90, Issues: 7 }, { Month: 'March', Resources: 93, Issues: 15 }, { Month: 'April', Resources: 70, Issues: 36 }, { Month: 'May', Resources: 70, Issues: 20 }, { Month: 'June', Resources: 70, Issues: 20 }, { Month: 'July', Resources: 68, Issues: 16 }, { Month: 'August', Resources: 69, Issues: 9 }, { Month: 'September', Resources: 33, Issues: 2 }, { Month: 'October', Resources: 50, Issues: 0 }, { Month: 'November', Resources: 13, Issues: 0 }, { Month: 'December', Resources: 20, Issues: 0 }];
const project2Data = [{ Month: 'January', Resources: null, Issues: null }, { Month: 'February', Resources: 90, Issues: 38 }, { Month: 'March', Resources: 100, Issues: 45 }, { Month: 'April', Resources: 80, Issues: 13 }, { Month: 'May', Resources: 27, Issues: 11 }, { Month: 'June', Resources: 20, Issues: 7 }, { Month: 'July', Resources: null, Issues: null }, { Month: 'August', Resources: null, Issues: null }, { Month: 'September', Resources: null, Issues: null }, { Month: 'October', Resources: null, Issues: null }, { Month: 'November', Resources: null, Issues: null }, { Month: 'December', Resources: null, Issues: null }];
const project3Data = [{ Month: 'January', Resources: null, Issues: null }, { Month: 'February', Resources: null, Issues: null }, { Month: 'March', Resources: null, Issues: null }, { Month: 'April', Resources: null, Issues: null }, { Month: 'May', Resources: null, Issues: null }, { Month: 'June', Resources: null, Issues: null }, { Month: 'July', Resources: null, Issues: null }, { Month: 'August', Resources: null, Issues: null }, { Month: 'September', Resources: 10, Issues: 1 }, { Month: 'October', Resources: 80, Issues: 15 }, { Month: 'November', Resources: 99, Issues: 30 }, { Month: 'December', Resources: 20, Issues: 0 }];
const project4Data = [{ Month: 'January', Resources: null, Issues: null }, { Month: 'February', Resources: null, Issues: null }, { Month: 'March', Resources: null, Issues: null }, { Month: 'April', Resources: null, Issues: null }, { Month: 'May', Resources: null, Issues: null }, { Month: 'June', Resources: null, Issues: null }, { Month: 'July', Resources: 70, Issues: 3 }, { Month: 'August', Resources: 11, Issues: 5 }, { Month: 'September', Resources: null, Issues: null }, { Month: 'October', Resources: null, Issues: null }, { Month: 'November', Resources: null, Issues: null }, { Month: 'December', Resources: null, Issues: null }];
const project5Data = [{ Month: 'January', Resources: 20, Issues: 0 }, { Month: 'February', Resources: 20, Issues: 2 }, { Month: 'March', Resources: 33, Issues: 12 }, { Month: 'April', Resources: 42, Issues: 16 }, { Month: 'May', Resources: 80, Issues: 24 }, { Month: 'June', Resources: 78, Issues: 28 }, { Month: 'July', Resources: 68, Issues: 16 }, { Month: 'August', Resources: 10, Issues: 2 }, { Month: 'September', Resources: 47, Issues: 12 }, { Month: 'October', Resources: 50, Issues: 10 }, { Month: 'November', Resources: 8, Issues: 1 }, { Month: 'December', Resources: 15, Issues: 3 }];

function App() {
  const teamsDataTable = useRef<JqxDataTable>(null);
  const teamRef = useRef<string>('Sales');

  const layout: ILayoutProps['layout'] = useMemo(() => [
    {
      items: [
        {
          allowPin: false,
          items: [
            {
              height: 300,
              items: [
                {
                  contentContainer: 'TeamsPanel',
                  initContent: () => {
                    initTeamDataTable();
                  },
                  title: 'Teams',
                  type: 'layoutPanel',
                }
              ],
              pinnedHeight: 30,
              type: 'tabbedGroup'
            },
            {
              allowClose: true,
              allowPin: false,
              height: 300,
              items: [
                {
                  contentContainer: 'ProjectsPanel',
                  initContent: () => {
                    initProjectsListBox();
                  },
                  title: 'Team Projects',
                  type: 'layoutPanel',
                },
                {
                  contentContainer: 'ProjectsTimelinePanel',
                  initContent: () => {
                    const projectsTimelineDiv = document.getElementById('projectsTimelineDiv');
                    if (teamRef.current === 'Sales') {
                      projectsTimelineDiv!.innerHTML = teamSalesProjectsTimeline;
                    } else {
                      projectsTimelineDiv!.innerHTML = teamSupportProjectsTimeline;
                    }
                  },
                  title: 'Projects Timeline',
                  type: 'layoutPanel',
                }
              ],
              pinnedHeight: 30,
              type: 'tabbedGroup'
            }
          ],
          orientation: 'vertical',
          type: 'layoutGroup',
          width: 300
        },
        {
          allowPin: false,
          items: [
            {
              height: 200,
              items: [
                {
                  contentContainer: 'ContactsPanel',
                  initContent: () => {
                    document.getElementById('contactsTable')!.innerHTML = teamSalesContacts;
                  },
                  title: 'Contacts',
                  type: 'layoutPanel',
                },
                {
                  contentContainer: 'StaffPanel',
                  initContent: () => {
                    const staffDiv = document.getElementById('staffDiv');
                    if (teamRef.current === 'Sales') {
                      staffDiv!.innerHTML = teamSalesStaff;
                    } else {
                      staffDiv!.innerHTML = teamSupportStaff;
                    }
                  },
