import React from 'react';
import ReactDOM from 'react-dom';

import JqxScheduler from '../../../jqwidgets-react/react_jqxscheduler.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myScheduler.ensureAppointmentVisible('id1');

        this.refs.excelExport.on('click', () => {
            this.refs.myScheduler.exportData('xls');
        });
        this.refs.xmlExport.on('click', () => {
            this.refs.myScheduler.exportData('xml');
        });
        this.refs.csvExport.on('click', () => {
            this.refs.myScheduler.exportData('csv');
        });
        this.refs.tsvExport.on('click', () => {
            this.refs.myScheduler.exportData('tsv');
        });
        this.refs.htmlExport.on('click', () => {
            this.refs.myScheduler.exportData('html');
        });
        this.refs.jsonExport.on('click', () => {
            this.refs.myScheduler.exportData('json');
        });
        this.refs.pdfExport.on('click', () => {
            this.refs.myScheduler.exportData('pdf');
        });
        this.refs.icalExport.on('click', () => {
            this.refs.myScheduler.exportData('ics');
        });
    }
    render() {
        let appointments = new Array();
        let appointment1 = {
            id: 'id1',
            description: 'George brings projector for presentations.',
            location: '',
            subject: 'Quarterly Project Review Meeting',
            calendar: 'Room 1',
            start: new Date(2016, 10, 23, 9, 0, 0),
            end: new Date(2016, 10, 23, 16, 0, 0)
        }
        let appointment2 = {
            id: 'id2',
            description: '',
            location: '',
            subject: 'IT Group Mtg.',
            calendar: 'Room 2',
            start: new Date(2016, 10, 24, 10, 0, 0),
            end: new Date(2016, 10, 24, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id3',
            description: '',
            location: '',
            subject: 'Course Social Media',
            calendar: 'Room 3',
            start: new Date(2016, 10, 27, 11, 0, 0),
            end: new Date(2016, 10, 27, 13, 0, 0)
        }
        let appointment4 = {
            id: 'id4',
            description: '',
            location: '',
            subject: 'New Projects Planning',
            calendar: 'Room 2',
            start: new Date(2016, 10, 23, 16, 0, 0),
            end: new Date(2016, 10, 23, 18, 0, 0)
        }
        let appointment5 = {
            id: 'id5',
            description: '',
            location: '',
            subject: 'Interview with James',
            calendar: 'Room 1',
            start: new Date(2016, 10, 25, 15, 0, 0),
            end: new Date(2016, 10, 25, 17, 0, 0)
        }
        let appointment6 = {
            id: 'id6',
            description: '',
            location: '',
            subject: 'Interview with Nancy',
            calendar: 'Room 4',
            start: new Date(2016, 10, 26, 14, 0, 0),
            end: new Date(2016, 10, 26, 16, 0, 0)
        }
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
        // prepare the data
        let source =
            {
                dataType: 'array',
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'description', type: 'string' },
                    { name: 'location', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'calendar', type: 'string' },
                    { name: 'start', type: 'date' },
                    { name: 'end', type: 'date' }
                ],
                id: 'id',
                localData: appointments
            };
        let adapter = new $.jqx.dataAdapter(source);

        let resources =
            {
                colorScheme: 'scheme05',
                dataField: 'calendar',
                source: new $.jqx.dataAdapter(source)
            };

        let appointmentDataFields =
            {
                from: 'start',
                to: 'end',
                id: 'id',
                description: 'description',
                location: 'place',
                subject: 'subject',
                resourceId: 'calendar'
            };

        let views =
            [
                'dayView',
                'weekView',
                'monthView'
            ];
        return (
            <div>
                <JqxScheduler ref='myScheduler'
                    width={850} height={600} source={adapter}
                    date={new $.jqx.date(2016, 11, 23)} showLegend={true}
                    view={'weekView'} resources={resources} views={views}
                    appointmentDataFields={appointmentDataFields}
                />

                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton ref='excelExport' value='Export to Excel' />
                        <br />
                        <JqxButton ref='xmlExport' value='Export to XML' />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton ref='csvExport' value='Export to CSV' />
                        <br />
                        <JqxButton ref='tsvExport' value='Export to TSV' />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton ref='htmlExport' value='Export to HTML' />
                        <br />
                        <JqxButton ref='jsonExport' value='Export to JSON' />
                    </div>
                    <div style={{ float: 'left', marginLeft: 10 }}>
                        <JqxButton ref='pdfExport' value='Export to PDF' />
                        <br />
                        <JqxButton ref='icalExport' value='Export to ICAL' />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
