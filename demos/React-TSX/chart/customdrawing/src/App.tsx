import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const [chartProps, setChartProps] = React.useState<IChartProps | null>(null);

    React.useEffect(() => {
        const source: any = {
            datafields: [
                { name: 'id' },
                { name: 'path' },
                { name: 'europe' },
                { name: 'eu' }
            ],
            datatype: 'json',
            url: 'europe.txt'
        };
        const dataAdapter = new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } });
        const transformPath = (path: any, wScale: any, hScale: any, xOffset: any, yOffset: any): any => {
            let output = '';
            for (let i = 0; i < path.length; i++) {
                if (path[i] === 'C' || path[i] === 'M' || path[i] === 'L') {
                    output += path[i];
                    i++;
                    let j = i;
                    while (j + 1 < path.length && !(path[j + 1] === 'C' || path[j + 1] === 'M' || path[j + 1] === 'L' || path[j + 1] === 'z')) {
                        j++;
                    }
                    const value = path.substring(i, j);
                    const pointsString = value.split(' ');
                    for (const pointStr of pointsString) {
                        if (pointStr.length === 0) {
                            continue;
                        }
                        const pointString = pointStr.split(',');
                        const point = { x: pointString[0], y: pointString[1] };
                        point.x = point.x * wScale + xOffset;
                        point.y = point.y * hScale + yOffset;
                        output += ' ' + point.x + ',' + point.y + ' ';
                    }
                    i = j - 1;
                } else {
                    output += path[i];
                }
            }
            return output;
        };

        setChartProps({
            draw: (renderer: any, rect: any): void => {
                const records = dataAdapter.records;
                const wScale = rect.width / 13000
                const hScale = rect.height / 8500;
                for (const record of records) {
                    const path = transformPath(record.path, wScale, hScale, 62, 22);
                    const pathElement = renderer.path(path, { stroke: 'black' });
                    if (record.eu === 'true') {
                        renderer.attr(pathElement, { fill: 'blue' });
                    } else {
                        renderer.attr(pathElement, { fill: '#DEDEDE' });
                    }
                }
            },
            drawBefore: (renderer: any, rect: any): void => {
                renderer.rect(rect.x, rect.y, rect.width, rect.height, { fill: 'lightblue' });
            },
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            source: dataAdapter,
            title: 'Map of the European Union',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 }
        });
    }, []);

    if (!chartProps) {
        return null;
    }

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={''}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            drawBefore={chartProps.drawBefore}
            draw={chartProps.draw}
        />
    );
};

export default App;