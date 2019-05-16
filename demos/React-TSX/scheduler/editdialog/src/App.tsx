import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();
    private printButton = React.createRef<JqxButton>();
    
    constructor(props: {}) {
        super(props);

        const appointments = new Array();
        const appointment1 = {
            calendar: "East Coast Events",
            description: "George brings projector for presentations.",
            end: new Date(2017, 10, 18, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2017, 10, 15, 9, 0, 0),
            subject: "Fashion Expo"
        };
        const appointment2 = {
            calendar: "Middle West Events",
            description: "",
            end: new Date(2017, 10, 22, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2017, 10, 20, 10, 0, 0),
            subject: "Cloud Data Expo"
        };
        const appointment3 = {
            calendar: "West Coast Events",
            description: "",
            end: new Date(2017, 10, 28, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2017, 10, 23, 11, 0, 0),
            subject: "Digital Media Conference"
        };
        const appointment4 = {
            calendar: "West Coast Events",
            description: "",
            end: new Date(2017, 10, 12, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2017, 10, 10, 16, 0, 0),
            subject: "Modern Software Development Conference"
        };
        const appointment5 = {
            calendar: "Middle West Events",
            description: "",
            end: new Date(2017, 10, 6, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2017, 10, 5, 15, 0, 0),
            subject: "Marketing Future Expo"
        };
        const appointment6 = {
            calendar: "East Coast Events",
            description: "",
            end: new Date(2017, 10, 20, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2017, 10, 13, 14, 0, 0),
            subject: "Future Computing"
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
            date: new jqx.date(2017, 11, 23),

            /**
             * called when the dialog is closed.
             * @param {Object} dialog - jqxWindow's jQuery object.
             * @param {Object} fields - Object with all widgets inside the dialog.
             * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
             */
            editDialogClose: (dialog: any, fields: any, editAppointment: any) => {
                // editDialogClose callback
            },

            // called when the dialog is craeted.
            editDialogCreate: (dialog: any, fields: any, editAppointment: any) => {
                // hide repeat option
                fields.repeatContainer.hide();
                // hide status option
                fields.statusContainer.hide();
                // hide timeZone option
                fields.timeZoneContainer.hide();
                // hide color option
                fields.colorContainer.hide();
                fields.subjectLabel.html("Title");
                fields.locationLabel.html("Where");
                fields.fromLabel.html("Start");
                fields.toLabel.html("End");
                fields.resourceLabel.html("Calendar");

                const buttonContainer = document.createElement("div");
                buttonContainer.style.cssFloat = 'right';
                buttonContainer.style.marginLeft = '5px';
                fields.buttons[0].appendChild(buttonContainer);

                const printingFunction = (event: any) => {
                    const appointmentContent =
                        "<table class='printTable'>" +
                        "<tr>" +
                        "<td class='label'>Title</td>" +
                        "<td>" + fields.subject.val() + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='label'>Start</td>" +
                        "<td>" + fields.from.val() + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='label'>End</td>" +
                        "<td>" + fields.to.val() + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='label'>Where</td>" +
                        "<td>" + fields.location.val() + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='label'>Calendar</td>" +
                        "<td>" + fields.resource.val() + "</td>" +
                        "</tr>"
                        + "</table>";
                    const newWindow = window.open("", "", "width=800, height=500");
                    const document = newWindow!.document.open();
                    const pageContent =
                        '<!DOCTYPE html>\n' +
                        '<html>\n' +
                        '<head>\n' +
                        '<meta charset="utf-8" />\n' +
                        '<title>jQWidgets Scheduler</title>\n' +
                        '<style>\n' +
                        '.printTable {\n' +
                        'border-color: #aaa;\n' +
                        '}\n' +
                        '.printTable .label {\n' +
                        'font-weight: bold;\n' +
                        '}\n' +
                        '.printTable td{\n' +
                        'padding: 4px 3px;\n' +
                        'border: 1px solid #DDD;\n' +
                        'vertical-align: top;\n' +
                        '}\n' +
                        '</style>' +
                        '</head>\n' +
                        '<body>\n' + appointmentContent + '\n</body>\n</html>';
                    
                    try {
                        document.write(pageContent);
                        document.close();
                    }
                    catch (error) {
                        // error handler
                    }
                    newWindow!.print();
                }

                const printButton = <JqxButton theme={'material-purple'} ref={this.printButton}
                    onClick={printingFunction}
                    width={40}
                    height={16}
                >
                    Print
                </JqxButton>;

                ReactDOM.render(
                    printButton,
                    buttonContainer
                );

            },

            /**
             * called when a key is pressed while the dialog is on focus. Returning true or false as a result disables the built-in keyDown handler.
             * @param {Object} dialog - jqxWindow's jQuery object.
             * @param {Object} fields - Object with all widgets inside the dialog.
             * @param {Object} editAppointment the selected appointment instance or NULL when the dialog is opened from cells selection.
             * @param {jQuery.Event Object} the keyDown event.
             */
            editDialogKeyDown: (dialog: any, fields: any, editAppointment: any, event: any) => {
                // editDialogKeyDown callback
                return false;
            },

            /**
             * called when the dialog is opened. Returning true as a result disables the built-in handler.
             * @param {Object} dialog - jqxWindow's jQuery object.
             * @param {Object} fields - Object with all widgets inside the dialog.
             * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
             */
            editDialogOpen: (dialog: any, fields: any, editAppointment: any) => {
                if (!editAppointment && this.printButton.current!) {
                    this.printButton.current!.setOptions({ disabled: true });
                }
                else if (editAppointment && this.printButton) {
                    this.printButton.current!.setOptions({ disabled: false });
                }
            },
            height: 600,
            resources: {
                colorScheme: "scheme01",
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
            <JqxScheduler theme={'material-purple'} ref={this.myScheduler}
                // @ts-ignore
                width={'100%'}
                height={this.state.height}
                date={this.state.date}
                source={this.state.source}
                showLegend={true}

                editDialogCreate={this.state.editDialogCreate}
                editDialogOpen={this.state.editDialogOpen}
                editDialogClose={this.state.editDialogClose}
                editDialogKeyDown={this.state.editDialogKeyDown}

                resources={this.state.resources}
                view={'monthView'}
                views={this.state.views}
                appointmentDataFields={this.state.appointmentDataFields}
            />
        );
    }
}

export default App;
