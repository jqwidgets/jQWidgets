import * as React from 'react';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

function App() {
    return (
        <div>
            <JqxDateTimeInput theme={'material-purple'} width={250} height={25} />
            <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '700px', marginLeft: '20px', float: 'left' }}>
                <ul>
                    <li><b>Tab</b> - Like other widgets, the jqxDateTimeInput widget receives focus by tabbing into it. Once focus is received, users will be able to use the keyboard to change the active tab page. A second tab will take the user out of the widget.</li>
                    <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.</li>
                    <li><b>Up Arrow</b> key - increases the selected value.</li>
                    <li><b>Up Arrow</b> when the popup Calendar is opened - goes to the same day of the week in the previous week. If the user advances past the end of the month they continue into the previous month.</li>
                    <li><b>Alt + Up Arrow</b> - closes the popup Calendar.</li>
                    <li><b>Down Arrow</b> key - decreases the selected value.</li>
                    <li><b>Down Arrow</b> key when the popup Calendar is opened - goes to the same day of the week in the next week. If the user advances past the end of the month they continue into the next month.</li>
                    <li><b>Alt + Down Arrow</b> - opens the popup Calendar.</li>
                    <li><b>Left Arrow</b> key - moves the selection to the previous value.</li>
                    <li><b>Left Arrow</b> key when the popup Calendar is opened - advances one day to the next.</li>
                    <li><b>Right Arrow</b> key - moves the selection to the next value.</li>
                    <li><b>Right Arrow</b> key when the popup Calendar is opened - advances one day to the next..</li>
                    <li><b>Control+Page Up</b> when the popup Calendar is opened - Moves to the same date in the previous year.</li>
                    <li><b>Control+Page Down</b> when the popup Calendar is opened - Moves to the same date in the next year.</li>
                    <li><b>Home</b> when the popup Calendar is opened - Moves to the first day of the current month.</li>
                    <li><b>End</b> when the popup Calendar is opened - Moves to the last day of the current month.</li>
                    <li><b>Page Up</b> when the popup Calendar is opened - Moves to the same date in the previous month.</li>
                    <li><b>Page Down</b> when the popup Calendar is opened - Moves to the same date in the next month.</li>
                    <li><b>Esc</b> key - closes the popup Calendar and cancels the selection.</li>
                    <li><b>Enter</b> key - closes the popup Calendar and confirms the selection.</li>
                    <li><b>Number</b> keys - manually type date and time when the calendar is closed.</li>
                    <li><b>Del</b> key - deletes the date.</li>
                    <li><b>Ctrl + Del</b> - sets the selected value to the minimum value.</li>
                </ul>
            </div>
        </div>
    );
}

export default App;