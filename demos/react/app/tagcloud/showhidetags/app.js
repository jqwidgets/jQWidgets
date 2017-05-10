import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.hideItem.on('click', (event) => {
            let records = this.refs.tagCloud.getTagsList();
            let hiddenTagsList = this.refs.tagCloud.getHiddenTagsList();
            for (let i = 0; i < records.length; i++) {
                if (hiddenTagsList.indexOf(records[i].index) == -1) {
                    this.refs.tagCloud.hideItem(records[i].index);
                    return;
                }
            }
        });

        this.refs.showItem.on('click', (event) => {
            let hiddenTagsList = this.refs.tagCloud.getHiddenTagsList();
                if (hiddenTagsList[0] !== undefined) {
                    let tagId = hiddenTagsList[0];
                    this.refs.tagCloud.showItem(tagId);
                }
        });
    }
    render () {
        let data = [
            { countryName: 'Australia', technologyRating: 35 },
            { countryName: 'United States', technologyRating: 60 },
            { countryName: 'Germany', technologyRating: 55 },
            { countryName: 'Brasil', technologyRating: 20 },
            { countryName: 'United Kingdom', technologyRating: 50 },
            { countryName: 'Japan', technologyRating: 80 }
        ];
        let source =
        {
            localdata: data,
            datatype: 'array',
            datafields: [
                { name: 'countryName' },
                { name: 'technologyRating' }
            ]
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        return (
            <div>
                <JqxTagCloud ref='tagCloud'
                    width={600} source={dataAdapter}
                    displayMember={'countryName'} valueMember={'technologyRating'}
                />
                <br />
                <br />
                <JqxButton ref='hideItem' value='Hide Item' style={{display: 'inline-block'}} />
                <JqxButton ref='showItem' value='Show Item' style={{display: 'inline-block', marginLeft: 5}} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
