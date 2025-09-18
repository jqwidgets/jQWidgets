import React, { useRef, useMemo } from 'react';
import * as ReactDOM from 'react-dom';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
    const myScheduler = useRef<JqxScheduler>(null);
    const printButton = useRef<JqxButton>(null);

    const appointments = useMemo(() => {
        return [
            {
                calendar: "East Coast Events",
                description: "George brings projector for presentations.",
                end: new Date(2017, 10, 18, 16, 0, 0),
                id: "id1",
                location: "",
                start: new Date(2017, 10, 15, 9, 0, 0),
                subject: "Fashion Expo"
            },
            {
                calendar: "Middle West Events",
                description: "",
                end: new Date(2017, 10, 22, 15, 0, 0),
                id: "id2",
                location: "",
                start: new Date(2017, 10, 20, 10, 0, 0),
                subject: "Cloud Data Expo"
            },
            {
                calendar: "West Coast Events",
                description: "",
                end: new Date(2017, 10, 28, 13, 0, 0),
                id: "id3",
                location: "",
                start: new Date(2017, 10, 23, 11, 0, 0),
                subject: "Digital Media Conference"
            },
            {
                calendar: "West Coast Events",
                description: "",
                end: new Date(2017, 10, 12, 18, 0, 0),
                id: "id4",
                location: "",
                start: new Date(2017, 10, 10, 16, 0, 0),
                subject: "Modern Software Development Conference"
            },
            {
                calendar: "Middle West Events",
                description: "",
                end: new Date(2017, 10, 6, 17, 0, 0),
                id: "id5",
                location: "",
                start: new Date(2017, 10, 5, 15, 0, 0),
                subject: "Marketing Future Expo"
            },
            {
                calendar: "East Coast Events",
                description: "",
                end: new Date(2017, 10, 20, 16, 0, 0),
                id: "id6",
                location: "",
                start: new Date(2017, 10, 13, 14, 0, 0),
                subject: "Future Computing"
            }
        ];
    }, []);

    const source: any = useMemo(() => ({
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
    }), [appointments]);

    const dataAdapter: any = useMemo(() => new jqx.dataAdapter(source), [source]);

    const appointmentDataFields = useMemo(() => ({
        description: "description",
        from: "start",
        id: "id",
        location: "location",
        resourceId: "calendar",
        subject: "subject",
        to: "end"
    }), []);

    const resources = useMemo(() => ({
        colorScheme: "scheme01",
        dataField: "calendar",
        source: new jqx.dataAdapter(source)
    }), [source]);

    const views = useMemo(() => [
        'dayView',
        'weekView',
        'monthView'
    ], []);

    const editDialogCreate = (dialog: any, fields: any, editAppointment: any) => {
        fields.repeatContainer.hide();
        fields.statusContainer.hide();
        fields.timeZoneContainer.hide();
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
            const documentObj = newWindow!.document.open();
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
                documentObj.write(pageContent);
                documentObj.close();
            }
            catch (error) {
            }
            newWindow!.print();
        };

        const printBtn =
            <JqxButton theme={'material-purple'} ref={printButton}
                onClick={printingFunction}
                width={40}
                height={16}
            >
                Print
            </JqxButton>;

        ReactDOM.render(printBtn, buttonContainer);
    };

    const editDialogOpen = (dialog: any, fields: any, editAppointment: any) => {
        if (!editAppointment && printButton.current) {
            printButton.current.setOptions({ disabled: true });
        } else if (editAppointment && printButton.current) {
            printButton.current.setOptions({ disabled: false });
        }
    };

    const editDialogClose = (dialog: any, fields: any, editAppointment: any) => {};

    const editDialogKeyDown = (dialog: any, fields: any, editAppointment: any, event: any) => {
        return false;
    };

    return (
        <JqxScheduler theme={'material-purple'} ref={myScheduler}
            width={'100%'}
            height={600}
            date={new jqx.date(2017, 11, 23)}
            source={dataAdapter}
            showLegend={true}
            editDialogCreate={editDialogCreate}
            editDialogOpen={editDialogOpen}
            editDialogClose={editDialogClose}
            editDialogKeyDown={editDialogKeyDown}
            resources={resources}
            view={'monthView'}
            views={views}
            appointmentDataFields={appointmentDataFields}
        />
    );
};

export default App;