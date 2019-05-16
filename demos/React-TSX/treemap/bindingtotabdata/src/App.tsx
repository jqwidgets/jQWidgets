import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';
import JqxTreeMap, { ITreeMapProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreemap';

class App extends React.PureComponent<{}, ITreeMapProps> {
    constructor(props: {}) {
        super(props);
        const source: any = {
            dataFields: [
                { name: 'Year' },
                { name: 'HPI' },
                { name: 'BuildCost' },
                { name: 'Population' },
                { name: 'Rate' }
            ],
            dataType: 'tab',
            url: 'homeprices.txt'
        };
        // create data adapter.
        const dataAdapter: any = new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } });

        this.state = {
            colorRanges: [
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
            ],
            renderCallbacks: {
                '*': (elementObject: HTMLDivElement, value: any): void => {
                    const element = (elementObject as any)[0];
                    let content = '<div><div style="font-weight: bold; font-family: verdana; font-size: 13px;">Year: ' + value.record.Year + '</div>';
                    content += '<div style=" font-family: verdana; font-size: 12px;">HPI: ' + value.record.HPI + '</div>';
                    content += '<div style=" font-family: verdana; font-size: 12px;">Build Cost: ' + value.record.BuildCost + '</div>';
                    content += '<div style=" font-family: verdana; font-size: 12px;">Population: ' + value.record.Population + '</div>';
                    content += '<div style=" font-family: verdana; font-size: 12px;">Interest Rate: ' + value.record.Rate + '</div>';
                    content += '</div>';
                    const tooltip = <JqxTooltip theme={'material-purple'}
                        content={content}
                        position={"mouse"}
                    >
                        <div />
                    </JqxTooltip>;

                    ReactDOM.render(tooltip, element);
                }
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxTreeMap theme={'material-purple'}
                // @ts-ignore
                width={'100%'}
                height={500}
                source={this.state.source}
                displayMember={"Year"}
                valueMember={"Rate"}
                colorMode={"rangeColors"}
                colorRanges={this.state.colorRanges}
                renderCallbacks={this.state.renderCallbacks}
                legendLabel={"Interest Rate"}
            />
        );
    }
}

export default App;
