import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeMap from '../../../jqwidgets-react/react_jqxtreemap.js';

class App extends React.Component {
    render () {        
        let source = {
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
        // create data adapter.
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
        let renderCallbacks =
        {
            '*': (element, data) => {
                let content = '<div><div style="font-weight: bold; font-family: verdana; font-size: 13px;">Year: ' + data.record.Year + '</div>';
                content += '<div style=" font-family: verdana; font-size: 12px;">HPI: ' + data.record.HPI + '</div>';
                content += '<div style=" font-family: verdana; font-size: 12px;">Build Cost: ' + data.record.BuildCost + '</div>';
                content += '<div style=" font-family: verdana; font-size: 12px;">Population: ' + data.record.Population + '</div>';
                content += '<div style=" font-family: verdana; font-size: 12px;">Interest Rate: ' + data.record.Rate + '</div>';
                content += '</div>';
                element.jqxTooltip({
                    content: content,
                    position: 'mouse',
                    autoHideDelay: 6000,
                    theme: theme
                });
            }
        };
        let colorRanges = [
                    { min: 0.02, max: 0.03, color: '#ff0300' },
                    { min: 0.03, max: 0.04, color: '#fe2e00' },
                    { min: 0.04, max: 0.05, color: '#fe3900' },
                    { min: 0.05, max: 0.06, color: '#ff5400' },
                    { min: 0.06, max: 0.07, color: '#fe7500' },
                    { min: 0.07, max: 0.08, color: '#fe8200' },
                    { min: 0.08, max: 0.09, color: '#ffed00' },
                    { min: 0.09, max: 0.1, color: '#b8db00' },
                    { min: 0.1, max: 0.11, color: '#7fbf00' },
                    { min: 0.11, max: 0.12, color: '#50a600' },
                    { min: 0.12, max: 0.15, color: '#008000' }
        ];
        return (
            <div>
                <div>
                    <h3>U.S. Historical Home Prices (1950-2011)</h3>
                </div>
                <JqxTreeMap
                    width={850} height={500} 
                    source={dataAdapter}
                    displayMember={'Year'}
                    valueMember={'Rate'}
                    colorMode={'rangeColors'}
                    colorRanges={colorRanges}
                    renderCallbacks={renderCallbacks}
                    legendLabel={'Interest Rate'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
