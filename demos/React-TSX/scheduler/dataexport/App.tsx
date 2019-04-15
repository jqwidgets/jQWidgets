import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();

    constructor(props: {}) {
        super(props);

        this.excelExportClick = this.excelExportClick.bind(this);
        this.xmlExportClick = this.xmlExportClick.bind(this);
        this.csvExportClick = this.csvExportClick.bind(this);
        this.tsvExportClick = this.tsvExportClick.bind(this);
        this.htmlExportClick = this.htmlExportClick.bind(this);
        this.jsonExportClick = this.jsonExportClick.bind(this);
        this.pdfExportClick = this.pdfExportClick.bind(this);

        const appointments = new Array();
        const appointment1 = {
            calendar: "Room 1",
            description: "George brings projector for presentations.",
            end: new Date(2018, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2018, 10, 23, 9, 0, 0),
            subject: "Quarterly Project Review Meeting"
        };
        const appointment2 = {
            calendar: "Room 2",
            description: "",
            end: new Date(2018, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2018, 10, 24, 10, 0, 0),
            subject: "IT Group Mtg."
        };
        const appointment3 = {
            calendar: "Room 3",
            description: "",
            end: new Date(2018, 10, 27, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2018, 10, 27, 11, 0, 0),
            subject: "Course Social Media"
        };
        const appointment4 = {
            calendar: "Room 2",
            description: "",
            end: new Date(2018, 10, 23, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2018, 10, 23, 16, 0, 0),
            subject: "New Projects Planning"
        };
        const appointment5 = {
            calendar: "Room 1",
            description: "",
            end: new Date(2018, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2018, 10, 25, 15, 0, 0),
            subject: "Interview with James"
        };
        const appointment6 = {
            calendar: "Room 4",
            description: "",
            end: new Date(2018, 10, 26, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2018, 10, 26, 14, 0, 0),
            subject: "Interview with Nancy"
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        const source: any = {
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            dataType: "array",
            id: 'id',
            localData: appointments
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            appointmentDataFields: {
                description: "description",
                from: "start",
                id: "id",
                location: "location",
                resourceId: "calendar",
                subject: "subject",
                to: "end"
            },
            date: new jqx.date(2018, 11, 23),
            height: 600,
            ready: () => {
                setTimeout(() => {
                    this.myScheduler.current!.ensureAppointmentVisible("id1");
                });
            },
            resources: {
                colorScheme: "scheme05",
                dataField: "calendar",
                source: new jqx.dataAdapter(source)
            },
            source: dataAdapter,
            views: [
                'dayView',
                'weekView',
                'monthView'
            ]
        };
    }

    public render() {
        return (
            <div>
                <JqxScheduler theme={'material-purple'} ref={this.myScheduler}
                    // @ts-ignore
                    width={'100%'}
                    height={this.state.height}
                    date={this.state.date}
                    source={this.state.source}
                    showLegend={true}
                    view={"weekView"}
                    appointmentDataFields={this.state.appointmentDataFields}
                    resources={this.state.resources}
                    views={this.state.views}
                    ready={this.state.ready}
                />

                <div style={{ marginTop: 20 }}>
                    <div style={{ float: "left" }}>
                        <JqxButton theme={'material-purple'} onClick={this.excelExportClick} width={120}>
                            Export to Excel
                        </JqxButton>
                        <br />
                        <br />
                        <JqxButton theme={'material-purple'} onClick={this.xmlExportClick} width={120}>
                            Export to XML
                        </JqxButton>
                    </div>
                    <div style={{ marginLeft: 10, float: "left" }}>
                        <JqxButton theme={'material-purple'} onClick={this.csvExportClick} width={120}>
                            Export to CSV
                        </JqxButton>
                        <br />
                        <br />
                        <JqxButton theme={'material-purple'} onClick={this.tsvExportClick} width={120}>
                            Export to TSV
                        </JqxButton>
                    </div >
                    <div style={{ marginLeft: 10, float: "left" }}>
                        <JqxButton theme={'material-purple'} onClick={this.htmlExportClick} width={120}>
                            Export to HTML
                        </JqxButton>
                        <br />
                        <br />
                        <JqxButton theme={'material-purple'} onClick={this.jsonExportClick} width={120}>
                            Export to JSON
                        </JqxButton>
                    </div >
                    <div style={{ marginLeft: 10, float: "left" }}>
                        <JqxButton theme={'material-purple'} onClick={this.pdfExportClick} width={120}>
                            Export to PDF
                        </JqxButton>
                    </div >
                </div >
            </div >
        );
    }

    // Event handling
    private excelExportClick(event: any): void {
        this.myScheduler.current!.exportData("xls");
    }

    private xmlExportClick(event: any): void {
        this.myScheduler.current!.exportData("xml");
    }

    private csvExportClick(event: any): void {
        this.myScheduler.current!.exportData("csv");
    }

    private tsvExportClick(event: any): void {
        this.myScheduler.current!.exportData("tsv");
    }

    private htmlExportClick(event: any): void {
        this.myScheduler.current!.exportData("html");
    }

    private jsonExportClick(event: any): void {
        this.myScheduler.current!.exportData("json");
    }

    private pdfExportClick(event: any): void {
        this.myScheduler.current!.exportData("pdf");
    }
}

export default App;
