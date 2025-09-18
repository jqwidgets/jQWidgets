import React from 'react'
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput'

function App() {
    return (
        <div>
            <div>Default</div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} showTimeButton={true} template={'default'} />
            <br />
            <div>Primary</div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} showTimeButton={true} template={'primary'} />
            <br />
            <div>Success</div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} showTimeButton={true} template={'success'} />
            <br />
            <div>Info</div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} showTimeButton={true} template={'info'} />
            <br />
            <div>Warning</div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} showTimeButton={true} template={'warning'} />
            <br />
            <div>Danger</div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} showTimeButton={true} template={'danger'} />
        </div>
    )
}

export default App