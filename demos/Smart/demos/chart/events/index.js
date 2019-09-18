const sampleData = [
    { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
    { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
    { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
];

Smart('#chart', class {
    get properties() {
        return {
            caption: 'Fitness & exercise weekly scorecard',
            description: 'Time spent in vigorous exercise',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            xAxis:
            {
                dataField: 'Day',
                type: 'basic'
            },
            colorScheme: 'scheme32',
            showToolTips: false,
            seriesGroups:
                [
                    {
                        type: 'column',
                        valueAxis:
                        {
                            minValue: 0,
                            maxValue: 100,
                            unitInterval: 10,
                            title: { text: 'Time in minutes' }
                        },
                        series: [
                                { dataField: 'Keith', displayText: 'Keith' },
                                { dataField: 'Erica', displayText: 'Erica' },
                                { dataField: 'George', displayText: 'George' }
                        ]
                    }
                ]
        }
    }
});

window.onload = function () {
    function myEventHandler(event) {
        const eventDetail = event.detail;
        let eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + eventDetail.serie.dataField + '<b>, Value: </b>' + eventDetail.elementValue + '</div>';

        if (event.type === 'toggle') {
            eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + eventDetail.serie.dataField + '<b>, visible: </b>' + eventDetail.state + '</div>';
        }

        document.getElementById('eventText').innerHTML = eventData;
    }

    const chart = document.getElementById('chart');

    chart.addEventListener('mouseout', function (event) {
        if (typeof event.detail === 'object') {
            myEventHandler(event);
        }
    });

    chart.addEventListener('mouseover', function (event) {
        if (typeof event.detail === 'object') {
            myEventHandler(event);
        }
    });

    chart.addEventListener('click', function (event) {
        if (typeof event.detail === 'object') {
            myEventHandler(event);
        }
    });

    chart.addEventListener('toggle', function (event) {
        if (typeof event.detail === 'object') {
            myEventHandler(event);
        }
    });
}
