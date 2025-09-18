import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const chartProps: IChartProps = useMemo(() => {
        const source: any = {
            datafields: [
                { name: 'Country' },
                { name: 'GDP' },
                { name: 'DebtPercent' },
                { name: 'Debt' }
            ],
            datatype: 'csv',
            url: 'gdp_dept_2010.txt'
        };

        return {
            description: 'GDP and Debt in 2010',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ],
                    type: 'column',
                    valueAxis: {
                        title: { text: 'GDP & Debt per Capita($)<br>' },
                        unitInterval: 5000
                    }
                },
                {
                    series: [
                        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                    ],
                    type: 'line',
                    valueAxis: {
                        gridLines: { visible: false },
                        position: 'right',
                        title: { text: 'Debt (% of GDP)' },
                        unitInterval: 10
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Economic comparison',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Country'
            }
        };
    }, []);

    const btnOnClick = (event: any) => {
        const content = myChart.current!.getInstance().host[0].outerHTML;
        const newWindow = window.open('', '', 'width=800, height=500');
        const documentWindow = newWindow!.document.open();
        const pageContent =
            '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<meta charset="utf-8" />' +
            '<title>jQWidgets Chart</title>' +
            '</head>' +
            '<body>' + content + '</body></html>';
        try {
            documentWindow.write(pageContent);
            documentWindow.close();
            newWindow!.print();
            newWindow!.close();
        } catch (error) {
            alert('error');
        }
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={chartProps.title}
                description={chartProps.description}
                showLegend={true}
                enableAnimations={true}
                padding={chartProps.padding}
                titlePadding={chartProps.titlePadding}
                source={chartProps.source}
                xAxis={chartProps.xAxis}
                seriesGroups={chartProps.seriesGroups}
                colorScheme={'scheme01'}
            />
            <br />
            <br />
            <JqxButton theme={'material-purple'} onClick={btnOnClick} width={80}>Print</JqxButton>
        </div>
    );
};

export default App;