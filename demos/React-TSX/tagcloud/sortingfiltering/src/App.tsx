import * as React from 'react';
import { useRef, useState } from 'react';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
    const myTagCloud = useRef<JqxTagCloud>(null);
    const sortByListBox = useRef<JqxDropDownList>(null);
    const sortDirectionListBox = useRef<JqxDropDownList>(null);
    const minValueListBox = useRef<JqxDropDownList>(null);
    const maxTagsListBox = useRef<JqxDropDownList>(null);

    const unemploymentRate: any[] = [
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

    const optionsHeight: IDropDownListProps["height"] = 25;
    const optionsWidth: IDropDownListProps["width"] = 200;

    const sortByListBoxSelect = (event: any) => {
        const args = event.args;
        const item = sortByListBox.current?.getItem(args.index);
        if (item != null) {
            myTagCloud.current?.setOptions({ sortBy: item.label as ITagCloudProps['sortBy'] });
        }
    };

    const sortDirectionListBoxSelect = (event: any) => {
        const args = event.args;
        const item = sortDirectionListBox.current?.getItem(args.index);
        if (item != null) {
            myTagCloud.current?.setOptions({ sortOrder: item.label as ITagCloudProps['sortOrder'] });
        }
    };

    const minValueListBoxSelect = (event: any) => {
        const args = event.args;
        const item = minValueListBox.current?.getItem(args.index);
        if (item != null) {
            myTagCloud.current?.setOptions({ minValueToDisplay: parseInt(item.label!, 10) });
        }
    };

    const maxTagsListBoxSelect = (event: any) => {
        const args = event.args;
        const item = maxTagsListBox.current?.getItem(args.index);
        if (item !== null && item.label !== undefined) {
            const currentValue = parseInt(item.label, 10);
            if (currentValue === 0) {
                myTagCloud.current?.setOptions({ displayLimit: undefined });
            } else {
                myTagCloud.current?.setOptions({ displayLimit: currentValue as ITagCloudProps['maxValueToDisplay'] });
            }
        }
    };

    const displayTagValueCheckboxChange = (event: any) => {
        const checked = event.args.checked;
        myTagCloud.current?.setOptions({ displayValue: checked });
    };

    const takeTopWeightedItemsChange = (event: any) => {
        const checked = event.args.checked;
        myTagCloud.current?.setOptions({ takeTopWeightedItems: checked });
    };

    return (
        <div>
            <JqxTagCloud
                ref={myTagCloud}
                width={"100%"}
                height={200}
                source={dataAdapter}
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
                <JqxDropDownList
                    theme={'material-purple'}
                    ref={sortByListBox}
                    onSelect={sortByListBoxSelect}
                    width={optionsWidth}
                    height={optionsHeight}
                    selectedIndex={0}
                    source={['none', 'label', 'value']}
                    autoDropDownHeight={true}
                />

                Sort Direction:
                <JqxDropDownList
                    theme={'material-purple'}
                    ref={sortDirectionListBox}
                    onSelect={sortDirectionListBoxSelect}
                    width={optionsWidth}
                    height={optionsHeight}
                    selectedIndex={0}
                    source={['ascending', 'descending']}
                    autoDropDownHeight={true}
                />

                Minimal Weight (value) Allowed:
                <JqxDropDownList
                    theme={'material-purple'}
                    ref={minValueListBox}
                    onSelect={minValueListBoxSelect}
                    width={optionsWidth}
                    height={optionsHeight}
                    selectedIndex={0}
                    source={[0, 5, 15, 25]}
                    autoDropDownHeight={true}
                />

                Max number of tags:
                <JqxDropDownList
                    theme={'material-purple'}
                    ref={maxTagsListBox}
                    onSelect={maxTagsListBoxSelect}
                    width={optionsWidth}
                    height={optionsHeight}
                    selectedIndex={0}
                    source={[0, 10, 15, 20]}
                    autoDropDownHeight={true}
                />

                <JqxCheckBox
                    theme={'material-purple'}
                    onChange={displayTagValueCheckboxChange}
                    width={140}
                    height={25}
                >
                    Display Tag Value
                </JqxCheckBox>

                <JqxCheckBox
                    theme={'material-purple'}
                    onChange={takeTopWeightedItemsChange}
                    width={190}
                    height={25}
                >
                    takeTopWeightedItems
                </JqxCheckBox>
            </div>
        </div>
    );
};

export default App;