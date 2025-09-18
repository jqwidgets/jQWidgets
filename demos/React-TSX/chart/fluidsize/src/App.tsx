import * as React from 'react'
import './App.css'
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart'

function App() {
  const source: any = React.useMemo(
    () => ({
      datafields: [
        { name: 'Country' },
        { name: 'GDP' },
        { name: 'DebtPercent' },
        { name: 'Debt' }
      ],
      datatype: 'csv',
      url: 'gdp_dept_2010.txt'
    }),
    []
  )

  const chartSource = React.useMemo(
    () =>
      new jqx.dataAdapter(source, {
        async: false,
        autoBind: true,
        loadError: (xhr: any, status: any, error: any) => {
          alert('Error loading "' + source.url + '" : ' + error)
        }
      }),
    [source]
  )

  const title = 'Economic comparison'
  const description = 'GDP and Debt in 2010'
  const padding = { left: 5, top: 5, right: 5, bottom: 5 }
  const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 }
  const xAxis = React.useMemo(
    () => ({
      dataField: 'Country',
      gridLines: { visible: true }
    }),
    []
  )
  const seriesGroups = React.useMemo(
    () => [
      {
        columnsGapPercent: 50,
        series: [
          { dataField: 'GDP', displayText: 'GDP per Capita' },
          { dataField: 'Debt', displayText: 'Debt per Capita' }
        ],
        type: 'column',
        valueAxis: {
          title: { text: 'GDP & Debt per Capita($)' },
          unitInterval: 5000,
          visible: true
        }
      },
      {
        series: [
          { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
        ],
        type: 'line',
        valueAxis: {
          title: { text: 'Debt (% of GDP)' },
          unitInterval: 10,
          visible: false
        }
      }
    ],
    []
  )

  return (
    <JqxChart
      style={{ width: '80%', height: '50%' }}
      title={title}
      description={description}
      showLegend={true}
      enableAnimations={true}
      padding={padding}
      titlePadding={titlePadding}
      source={chartSource}
      xAxis={xAxis}
      seriesGroups={seriesGroups}
      colorScheme={'scheme01'}
    />
  )
}

export default App
