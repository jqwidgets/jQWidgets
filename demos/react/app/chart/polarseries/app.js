import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.sliderStartAngle.on('change',(event) => {
      let value = event.args.value;
      this.refs.myChart.seriesGroups()[0].startAngle = value;
      this.refs.myChart.seriesGroups()[0].endAngle = value + 360;
      this.refs.myChart.update();
    });
    this.refs.sliderRadius.on('change', (event) => {
      let value = event.args.value;
      this.refs.myChart.seriesGroups()[0].radius = value;
      this.refs.myChart.update();
    });
    this.refs.dropDownListColor.on('change', (event) =>  {
      let value = event.args.item.value;
      this.refs.myChart.colorScheme(value);
    });
    this.refs.dropDownListSeries.on('select', (event) => {
      let value = event.args.item.value;
      this.refs.myChart.seriesGroups()[0].type = value;
      this.refs.myChart.update();
    });
  }
  render () {
    let source =
    {
        datatype: "tab",
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        url: '../sampledata/homeprices.txt'
    };
    let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

    let padding = { left: 5, top: 5, right: 5, bottom: 5 };

    let titlePadding = { left: 0, top: 0, right: 0, bottom: 5 };

    let xAxis =
    {
        dataField: 'Year',
        unitInterval: 10,
        maxValue: 2010,
        valuesOnTicks: true,
        labels: { autoRotate: true }
    };

    let seriesGroups =
    [
        {
            polar: true,
            radius: 120,
            type: 'splinearea',
            valueAxis:
            {
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    autoRotate: true
                }
            },
            series: [
                    { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7, lineWidth: 1, radius: 2, lineWidth: 2 },
                    { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.7, lineWidth: 1, radius: 2, lineWidth: 2 }
                ]
        }
    ];

    let colorsSchemesList = ["scheme01", "scheme02", "scheme03", "scheme04", "scheme05", "scheme06", "scheme07", "scheme08"];

    let seriesList = ["splinearea", "spline", "column", "scatter", "stackedcolumn", "stackedsplinearea", "stackedspline"];

    let chartCSS = { width:850, height:500, marginBottom: 1 };

    let pCSS = { fontFamily: 'Verdana', fontSize: 12 };
    return (
      <div>
        <JqxChart ref='myChart' style={{ width:850, height:500 }}
          title={"U.S. Real Home Price vs Building Cost Indeces (1950-2010)"}
          description={"Source: http://www.econ.yale.edu/~shiller/data.htm"}
          showLegend={true} enableAnimations={true} padding={padding}
          titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
          colorScheme={'scheme01'} seriesGroups={seriesGroups}
        />
        <table style={{ width: 850 }}>
         <tbody>
            <tr>
                <td style={{ paddingLeft:50 }}>
                    <p style={pCSS}>Move the slider to rotate:</p>
                    <JqxSlider ref='sliderStartAngle'
                      width={240} min={0} max={360} step={1}
                      ticksFrequency={20} mode={'fixed'}
                    />
                </td>
                <td>
                    <p style={pCSS}>Select the series type:</p>
                    <JqxDropDownList ref='dropDownListColor'
                      width={200} height={25} source={colorsSchemesList}
                      selectedIndex={2} dropDownHeight={100}
                    />
                </td>
            </tr>
            <tr>
                <td style={{ paddingLeft:50 }}>
                    <p style={pCSS}>Move the slider to change the radius:</p>
                    <JqxSlider ref='sliderRadius'
                      width={240} min={80} max={140} step={1}
                      ticksFrequency={20} mode={'fixed'}
                    />
                </td>
                <td>
                    <p style={pCSS}>Select color scheme:</p>
                    <JqxDropDownList ref='dropDownListSeries'
                      width={200} height={25} source={seriesList}
                      selectedIndex={0} dropDownHeight={100}
                    />
                </td>
            </tr>
           </tbody>
        </table>
      </div>
    )
  }
}

//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
