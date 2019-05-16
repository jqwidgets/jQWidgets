import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IChartProps {
    schemes: IDropDownListProps['source'];
    selectedIndex: IDropDownListProps['selectedIndex'];
    selectionRenderer: IDropDownListProps['selectionRenderer'];
    renderer: IDropDownListProps['renderer'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.myDropDownListOnChange = this.myDropDownListOnChange.bind(this);

        const sampleData: any[] = [
            { Day: 'Monday', Keith: 30, Erica: 15, George: 25, Monica: 20, Maria: 15 },
            { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30, Monica: 25, Maria: 20 },
            { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25, Monica: 10, Maria: 20 },
            { Day: 'Thursday', Keith: 35, Erica: 25, George: 45, Monica: 30, Maria: 30 },
            { Day: 'Friday', Keith: 20, Erica: 20, George: 25, Monica: 45, Maria: 30 },
            { Day: 'Saturday', Keith: 30, Erica: 20, George: 30, Monica: 60, Maria: 40 },
            { Day: 'Sunday', Keith: 60, Erica: 45, George: 90, Monica: 70, Maria: 50 }
        ];

        const schemes: any[] = [
            { name: 'scheme01', colors: ['#307DD7', '#AA4643', '#89A54E', '#71588F', '#4198AF'] },
            { name: 'scheme02', colors: ['#7FD13B', '#EA157A', '#FEB80A', '#00ADDC', '#738AC8'] },
            { name: 'scheme03', colors: ['#E8601A', '#FF9639', '#F5BD6A', '#599994', '#115D6E'] },
            { name: 'scheme04', colors: ['#D02841', '#FF7C41', '#FFC051', '#5B5F4D', '#364651'] },
            { name: 'scheme05', colors: ['#25A0DA', '#309B46', '#8EBC00', '#FF7515', '#FFAE00'] },
            { name: 'scheme06', colors: ['#0A3A4A', '#196674', '#33A6B2', '#9AC836', '#D0E64B'] },
            { name: 'scheme07', colors: ['#CC6B32', '#FFAB48', '#FFE7AD', '#A7C9AE', '#888A63'] },
            { name: 'scheme08', colors: ['#3F3943', '#01A2A6', '#29D9C2', '#BDF271', '#FFFFA6'] },
            { name: 'scheme09', colors: ['#1B2B32', '#37646F', '#A3ABAF', '#E1E7E8', '#B22E2F'] },
            { name: 'scheme10', colors: ['#5A4B53', '#9C3C58', '#DE2B5B', '#D86A41', '#D2A825'] },
            { name: 'scheme11', colors: ['#993144', '#FFA257', '#CCA56A', '#ADA072', '#949681'] },
            { name: 'scheme12', colors: ['#105B63', '#EEEAC5', '#FFD34E', '#DB9E36', '#BD4932'] },
            { name: 'scheme13', colors: ['#BBEBBC', '#F0EE94', '#F5C465', '#FA7642', '#FF1E54'] },
            { name: 'scheme14', colors: ['#60573E', '#F2EEAC', '#BFA575', '#A63841', '#BFB8A3'] },
            { name: 'scheme15', colors: ['#444546', '#FFBB6E', '#F28D00', '#D94F00', '#7F203B'] },
            { name: 'scheme16', colors: ['#583C39', '#674E49', '#948658', '#F0E99A', '#564E49'] },
            { name: 'scheme17', colors: ['#142D58', '#447F6E', '#E1B65B', '#C8782A', '#9E3E17'] },
            { name: 'scheme18', colors: ['#4D2B1F', '#635D61', '#7992A2', '#97BFD5', '#BFDCF5'] },
            { name: 'scheme19', colors: ['#844341', '#D5CC92', '#BBA146', '#897B26', '#55591C'] },
            { name: 'scheme20', colors: ['#56626B', '#6C9380', '#C0CA55', '#F07C6C', '#AD5472'] },
            { name: 'scheme21', colors: ['#96003A', '#FF7347', '#FFBC7B', '#FF4154', '#642223'] },
            { name: 'scheme22', colors: ['#5D7359', '#E0D697', '#D6AA5C', '#8C5430', '#661C0E'] },
            { name: 'scheme23', colors: ['#16193B', '#35478C', '#4E7AC7', '#7FB2F0', '#ADD5F7'] },
            { name: 'scheme24', colors: ['#7B1A25', '#BF5322', '#9DA860', '#CEA457', '#B67818'] },
            { name: 'scheme25', colors: ['#0081DA', '#3AAFFF', '#99C900', '#FFEB3D', '#309B46'] },
            { name: 'scheme26', colors: ['#0069A5', '#0098EE', '#7BD2F6', '#FFB800', '#FF6800'] },
            { name: 'scheme27', colors: ['#FF6800', '#A0A700', '#FF8D00', '#678900', '#0069A5'] }
        ];

        const itemTemplate = (index: number): string => {
            if (index === -1) {
                return '';
            }
            const colors = schemes[index].colors;
            let html = '';
            for (const color of colors) {
                html += '<div style="float: left; border-radius: 100%; width: 25px; height: 25px; border: none; background:' + color + '; margin-left: 4px;"></div>';
            }
            return html;
        };
        const selectionTemplate = (element: object, index: number): string => {
            if (index < 0) {
                return '';
            }
            const colors = schemes[index].colors;
            let html = '';
            for (const color of colors) {
                html += '<div style="margin-top: 2px; float: left; border-radius: 100%; width: 25px; height: 25px; border: none; background:' + color + '; margin-left: 4px;"></div>';
            }
            return html;
        };

        this.state = {
            colorScheme: 'scheme01',
            description: 'Time spent in vigorous exercise',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            renderer: itemTemplate,
            schemes,
            selectedIndex: 0,
            selectionRenderer: selectionTemplate,
            seriesGroups: [
                {

                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' },
                        { dataField: 'Monica', displayText: 'Monica' },
                        { dataField: 'Maria', displayText: 'Maria' }
                    ],
                    seriesGapPercent: 0,
                    type: 'column',
                    valueAxis: {
                        axisSize: 'auto',
                        maxValue: 100,
                        minValue: 0,
                        tickMarks: {
                            color: '#888888'
                        },
                        title: {
                            text: 'Time in minutes'
                        },
                        unitInterval: 10,
                        visible: true
                    },
                }
            ],
            source: sampleData,
            title: 'Fitness & exercise weekly scorecard',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Day',
                gridLines: {
                    visible: true
                }
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} enableAnimations={false} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={this.state.colorScheme} />

                <br />
                Themes:     

                <JqxDropDownList theme={'material-purple'} onChange={this.myDropDownListOnChange}
                    width={180} height={30} selectedIndex={this.state.selectedIndex} itemHeight={35}
                    selectionRenderer={this.state.selectionRenderer} renderer={this.state.renderer}
                    source={this.state.schemes} displayMember={'name'} />

            </div>
        );
    }

    private myDropDownListOnChange(event: any) {
        const index = event.args.index;
        this.setState({
            colorScheme: this.state.schemes![index].name,
            selectedIndex: index
        });
    }
}

export default App;