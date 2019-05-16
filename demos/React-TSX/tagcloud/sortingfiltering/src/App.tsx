import * as React from 'react';
 


import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

export interface IState extends ITagCloudProps {
    optionsHeight: IDropDownListProps["height"];
    optionsWidth: IDropDownListProps["width"];
}

class App extends React.PureComponent<{}, IState> {
    private myTagCloud = React.createRef<JqxTagCloud>();
    private sortByListBox = React.createRef<JqxDropDownList>();
    private sortDirectionListBox = React.createRef<JqxDropDownList>();
    private minValueListBox = React.createRef<JqxDropDownList>();
    private maxTagsListBox = React.createRef<JqxDropDownList>();
    private takeTopWeightedItems = React.createRef<JqxCheckBox>();

    constructor(props: {}) {
        super(props);

        this.sortByListBoxSelect = this.sortByListBoxSelect.bind(this);
        this.sortDirectionListBoxSelect = this.sortDirectionListBoxSelect.bind(this);
        this.minValueListBoxSelect = this.minValueListBoxSelect.bind(this);
        this.maxTagsListBoxSelect = this.maxTagsListBoxSelect.bind(this);
        this.displayTagValueCheckboxChange = this.displayTagValueCheckboxChange.bind(this);
        this.takeTopWeightedItemsChange = this.takeTopWeightedItemsChange.bind(this);

        const unemploymentRate: any[] =
            [
                { 'country': 'Namibia', 'rate': 37.6 },
                { 'country': 'Macedonia, FYR', 'rate': 32.0 },
                { 'country': 'Latvia', 'rate': 18.7 },
                { 'country': 'Lithuania', 'rate': 17.8 },
                { 'country': 'Estonia', 'rate': 16.9 },
                { 'country': 'Serbia', 'rate': 16.6 },
                { 'country': 'Georgia', 'rate': 16.5 },
                { 'country': 'Yemen, Rep.', 'rate': 14.6 },
                { 'country': 'Slovak Republic', 'rate': 14.4 },
                { 'country': 'Dominican Republic', 'rate': 14.2 },
                { 'country': 'Tunisia', 'rate': 14.2 },
                { 'country': 'Armenia', 'rate': 28.6 },
                { 'country': 'Bosnia and Herzegovina', 'rate': 27.2 },
                { 'country': 'Lesotho', 'rate': 25.3 },
                { 'country': 'South Africa', 'rate': 24.7 },
                { 'country': 'Spain', 'rate': 20.1 },
                { 'country': 'Albania', 'rate': 13.8 },
                { 'country': 'Ireland', 'rate': 13.6 },
                { 'country': 'Jordan', 'rate': 12.9 },
                { 'country': 'Greece', 'rate': 12.5 }
            ];
        const source: any = {
            dataFields: [
                { name: 'country' },
                { name: 'rate' }
            ],
            dataType: 'array',
            localData: unemploymentRate
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            optionsHeight: 25,
            optionsWidth: 200,
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                <JqxTagCloud ref={this.myTagCloud}
                    // @ts-ignore
                    width={"100%"}
                    height={200}
                    source={this.state.source}
                    displayMember={"country"}
                    valueMember={"rate"}
                    fontSizeUnit={"px"}
                    minFontSize={12}
                    maxFontSize={20}
                    urlBase={"http://localhost/"}
                    minColor={"#00AA99"}
                    maxColor={"#FF0000"}
                />

                <div>
                    Sort by:
                    <JqxDropDownList theme={'material-purple'} ref={this.sortByListBox}
                        onSelect={this.sortByListBoxSelect}
                        width={this.state.optionsWidth}
                        height={this.state.optionsHeight}
                        selectedIndex={0}
                        source={['none', 'label', 'value']}
                        autoDropDownHeight={true}
                    />

                    Sort Direction:
                    <JqxDropDownList theme={'material-purple'} ref={this.sortDirectionListBox}
                        onSelect={this.sortDirectionListBoxSelect}
                        width={this.state.optionsWidth}
                        height={this.state.optionsHeight}
                        selectedIndex={0}
                        source={['ascending', 'descending']}
                        autoDropDownHeight={true}
                    />

                    Minimal Weight (value) Allowed:
                    <JqxDropDownList theme={'material-purple'} ref={this.minValueListBox}
                        onSelect={this.minValueListBoxSelect}
                        width={this.state.optionsWidth}
                        height={this.state.optionsHeight}
                        selectedIndex={0}
                        source={[0, 5, 15, 25]}
                        autoDropDownHeight={true}
                    />

                    Max number of tags:
                    <JqxDropDownList theme={'material-purple'} ref={this.maxTagsListBox}
                        onSelect={this.maxTagsListBoxSelect}
                        width={this.state.optionsWidth}
                        height={this.state.optionsHeight}
                        selectedIndex={0}
                        source={[0, 10, 15, 20]}
                        autoDropDownHeight={true}
                    />

                    <JqxCheckBox theme={'material-purple'}
                        onChange={this.displayTagValueCheckboxChange}
                        width={140}
                        height={25}
                    >
                        Display Tag Value
                    </JqxCheckBox>

                    <JqxCheckBox theme={'material-purple'} ref={this.takeTopWeightedItems}
                        onChange={this.takeTopWeightedItemsChange}
                        width={190}
                        height={25}
                    >
                        takeTopWeightedItems
                    </JqxCheckBox>
                </div>
            </div>
        );
    }

    // Event handling
    private sortByListBoxSelect(event: any): void {
        const args = event.args;
        const item = this.sortByListBox.current!.getItem(args.index);
        if (item != null) {
            this.myTagCloud.current!.setOptions({ sortBy: item!.label as ITagCloudProps['sortBy'] });
        }
    }

    private sortDirectionListBoxSelect(event: any): void {
        const args = event.args;
        const item = this.sortDirectionListBox.current!.getItem(args.index);
        if (item != null) {
            this.myTagCloud.current!.setOptions({ sortOrder: item!.label as ITagCloudProps['sortOrder'] });
        }
    }

    private minValueListBoxSelect(event: any): void {
        const args = event.args;
        const item = this.minValueListBox.current!.getItem(args.index);
        if (item != null) {
            this.myTagCloud.current!.setOptions({ minValueToDisplay: parseInt(item!.label!, 10) });
        }
    }

    private maxTagsListBoxSelect(event: any): void {
        const args = event.args;
        const item = this.maxTagsListBox.current!.getItem(args.index);
        if (item !== null) {
            if (item.label !== undefined) {
                const currentValue = parseInt(item.label, 10);
                if (currentValue === 0) {
                    this.myTagCloud.current!.setOptions({ displayLimit: undefined });
                } else {
                    this.myTagCloud.current!.setOptions({ displayLimit: currentValue as ITagCloudProps['maxValueToDisplay'] });
                }
            }
        }
    }

    private displayTagValueCheckboxChange(event: any): void {
        const checked = event.args.checked;
        this.myTagCloud.current!.setOptions({ displayValue: checked });
    }

    private takeTopWeightedItemsChange(event: any): void {
        const checked = event.args.checked;
        this.myTagCloud.current!.setOptions({ takeTopWeightedItems: checked });
    }
}

export default App;
