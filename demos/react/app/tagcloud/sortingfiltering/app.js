import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        //this.refs.minFontSize.val(12);
        //this.refs.maxFontSize.val(20);
        //this.refs.fontSizeUnit.val('px');

        this.refs.sortByListBox.on('select', (event) => {
            let args = event.args;
            let item = this.refs.sortByListBox.getItem(args.index);
            if (item != null) {
                this.refs.tagCloud.sortBy(item.label);
            }
        });

        this.refs.sortDirectionListBox.on('select', (event) => {
            let args = event.args;
            let item = this.refs.sortDirectionListBox.getItem(args.index);
            if (item != null) {
                this.refs.tagCloud.sortOrder(item.label);
            }
        });

        this.refs.minValueListBox.on('select', (event) => {
            let args = event.args;
            let item = this.refs.minValueListBox.getItem(args.index);
            if (item != null) {
                this.refs.tagCloud.minValueToDisplay(item.label);
            }
        });

        this.refs.maxTagsListBox.on('select', (event) => {
            let args = event.args;
            let item = this.refs.maxTagsListBox.getItem(args.index);
            if (item != null) {
                if (item.label == 0) {
                    this.refs.tagCloud.displayLimit(null);
                } else {
                    this.refs.tagCloud.displayLimit(item.label);
                }
            }
        });

        this.refs.displayTagValueCheckbox.on('change', (event) => {
            let checked = event.args.checked;
            this.refs.tagCloud.displayValue(checked);
        });

        this.refs.takeTopWeightedItems.on('change', (event) => {
            let checked = event.args.checked;
            this.refs.tagCloud.takeTopWeightedItems(checked);
        });
    }
    render() {
        let unemploymentRate = [
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
        let source =
            {
                datatype: 'array',
                localdata: unemploymentRate,
                datafields: [
                    { name: 'country' },
                    { name: 'rate' }
                ]
            };
        let dataAdapter = new $.jqx.dataAdapter(source, {});
        let sortByListBoxData = []
        return (
            <div>

                <JqxTagCloud ref='tagCloud'
                    width={600} height={200}
                    source={dataAdapter} fontSizeUnit={'px'}
                    minFontSize={12} maxFontSize={20}
                    displayMember={'country'} valueMember={'rate'}
                    urlBase={'http://localhost/'} minColor={'#00AA99'} maxColor={'#FF0000'}
                />

                <div style={{}}>
                    Sort by:
                    <JqxDropDownList ref='sortByListBox'
                        width={200} height={25} source={['none', 'label', 'value']} selectedIndex={0} autoDropDownHeight={true}
                    />
                </div>
                <div>
                    Sort Direction:
                    <JqxDropDownList ref='sortDirectionListBox'
                        width={200} height={25} source={['ascending', 'descending']} selectedIndex={0} autoDropDownHeight={true}
                    />
                </div>
                <div>
                    Minimal Weight (value) Allowed:
                    <JqxDropDownList ref='minValueListBox'
                        width={200} height={25} source={['0', '5', '15', '20']} selectedIndex={0} autoDropDownHeight={true}
                    />
                </div>
                <div>
                    Max number of tags:
                    <JqxDropDownList ref='maxTagsListBox'
                        width={200} height={25} source={['0', '5', '15', '20']} selectedIndex={0} autoDropDownHeight={true}
                    />
                </div>

                <JqxCheckBox value='Display Tag Value' ref='displayTagValueCheckbox'
                    width={120} height={25}
                />
                <JqxCheckBox value='takeTopWeightedItems' ref='takeTopWeightedItems'
                    width={120} height={25}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
