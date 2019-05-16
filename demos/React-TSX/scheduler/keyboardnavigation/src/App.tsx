import * as React from 'react';
 

import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

class App extends React.PureComponent<{}, ISchedulerProps> {
    private myScheduler = React.createRef<JqxScheduler>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: "id", type: "string" },
                { name: "status", type: "string" },
                { name: "about", type: "string" },
                { name: "address", type: "string" },
                { name: "company", type: "string" },
                { name: "name", type: "string" },
                { name: "style", type: "string" },
                { name: "calendar", type: "string" },
                { name: "start", type: "date", format: "yyyy-MM-dd HH:mm" },
                { name: "end", type: "date", format: "yyyy-MM-dd HH:mm" }
            ],
            dataType: "json",
            id: "id",
            url: 'appointments.txt'
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            appointmentDataFields: {
                description: "about",
                from: "start",
                id: "id",
                location: "address",
                resourceId: "calendar",
                status: "status",
                style: "style",
                subject: "name",
                to: "end"
            },
            date: new jqx.date(2018, 11, 23, 11, 30),
            height: 450,
            ready: () => {
                this.myScheduler.current!.focus();
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
                    width={"100%"}
                    height={this.state.height}
                    date={this.state.date}
                    source={this.state.source}
                    showLegend={true}
                    rowsHeight={40}
                    view={"weekView"}
                    views={this.state.views}
                    appointmentDataFields={this.state.appointmentDataFields}
                    ready={this.state.ready}
                />
            
                <div style={{ fontFamily: "Verdana", fontSize: 12, width: 670 }}>
                    <ul>
                        <li>
                            <b>Left Arrow</b> key is pressed - Selects the left cell, when the Scheduler is focused. 
                            <ul>
                                <li>
                                    Navigates to previous view when <b>Ctrl</b> key is pressed and appointment is not selected.
                                </li>
                                <li>Selected appointment is moved left when <b>Ctrl</b> key is pressed.</li>
                                <li>Selected appointment is resized when <b>Shift</b> key is pressed and it is all day, timelineView or monthView appointment.</li>
                                <li>Selects left cell and updates the cells selection when <b>Shift</b> key is pressed.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Right Arrow</b> key is pressed - Selects the right cell, when the Scheduler is focused. 
                            <ul>
                                <li>
                                    Navigates to next view when <b>Ctrl</b> key is pressed and appointment is not selected.
                                </li>
                                <li>Selected appointment is moved right when <b>Ctrl</b> key is pressed.</li>
                                <li>Selected appointment is resized when <b>Shift</b> key is pressed and it is all day, timelineView or monthView appointment.</li>
                                <li>Selects right cell and updates the cells selection when <b>Shift</b> key is pressed.</li>
                            </ul>     
                        </li>
                        <li>
                            <b>Up Arrow</b> key is pressed - Selects the cell above, when the Scheduler is focused. 
                            <ul>
                                <li>Moves to cell selection to the first row when <b>Ctrl</b> key is pressed and cell is selected.</li>
                                <li>Selected appointment is moved above when <b>Ctrl</b> key is pressed.</li>
                                <li>Selected appointment is resized when <b>Shift</b> key is pressed and it is dayView or weekView appointment.</li>
                                <li>Selects the above cell and updates the cells selection when <b>Shift</b> key is pressed.</li>
                            </ul>     
                        </li>
                        <li>
                            <b>Down Arrow</b> key is pressed - Selects the cell below, when the Scheduler is focused. 
                            <ul>
                                <li>Moves to cell selection to the last row when <b>Ctrl</b> key is pressed and cell is selected.</li>
                                <li>Selected appointment is moved below when <b>Ctrl</b> key is pressed.</li>
                                <li>Selected appointment is resized when <b>Shift</b> key is pressed and it is dayView or weekView appointment.</li>
                                <li>Selects the below cell and updates the cells selection when <b>Shift</b> key is pressed.</li>
                            </ul>
                        </li>
                        <li><b>Enter</b> key is pressed - Opens the Edit Dialog.</li>
                        <li><b>Esc</b> key is pressed - Cancels dragging or resizing.</li>
                        <li>
                            <b>Tab</b> key is pressed - Tabs the selection to next appointment or out of Scheduler.
                        </li>
                        <li><b>Shift+Tab</b> keys are pressed - Tabs the selection to previous appointment or to focused cell.</li>
                        <li><b>Alt</b> key are pressed - When Alt and Number is pressed, the Scheduler toggles Appointments visibility by Resource.</li>
                        <li><b>Ctrl</b> key is pressed
                            <ul>
                                <li>Sets the View when <b>Number</b> key is pressed. For example Ctrl + 1, sets the view to the first view.</li>
                                <li>Opens the Context Menu when <b>m</b> key is pressed.</li>
                                <li>Opens the DateTimeInput in the Navigation Toolbar<b>d</b> key is pressed.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
