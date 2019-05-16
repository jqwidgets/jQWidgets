import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

class App extends React.PureComponent<{}, ITagCloudProps> {
    private myTagCloud = React.createRef<JqxTagCloud>();

    constructor(props: {}) {
        super(props);

        this.hideItemClick = this.hideItemClick.bind(this);
        this.showItemClick = this.showItemClick.bind(this);

        const data = [
            { countryName: "Australia", technologyRating: 35 },
            { countryName: "United States", technologyRating: 60 },
            { countryName: "Germany", technologyRating: 55 },
            { countryName: "Brasil", technologyRating: 20 },
            { countryName: "United Kingdom", technologyRating: 50 },
            { countryName: "Japan", technologyRating: 80 }
        ];
        const source =
        {
            datafields: [
                { name: 'countryName' },
                { name: 'technologyRating' }
            ],
            datatype: "array",
            localdata: data,
        };
        const dataAdapter = new jqx.dataAdapter(source, {});

        this.state = {
            source: dataAdapter
        }
    }

    public componentDidMount() {
        this.myTagCloud.current!.hideItem(1);
    }

    public render() {
        return (
            <div>
                <JqxTagCloud ref={this.myTagCloud}
                    // @ts-ignore
                    width={"100%"}
                    source={this.state.source}
                    displayMember={"countryName"}
                    valueMember={"technologyRating"}
                />
                <br />
                <br />
                <JqxButton theme={'material-purple'} style={{ display: "inline-block" }} width={80} onClick={this.hideItemClick}>Hide Item</JqxButton>
                <JqxButton theme={'material-purple'} style={{ display: "inline-block", marginLeft: 10 }} width={80} onClick={this.showItemClick}>Show Item</JqxButton>
                <br />
            </div>
        );
    }

    // Event handling
    private hideItemClick(e: Event): void {
        const records = this.myTagCloud.current!.getTagsList();
        const hiddenTagsList = this.myTagCloud.current!.getHiddenTagsList();
        for (const tag of records) {
            if (hiddenTagsList.indexOf(tag.index) === -1) {
                this.myTagCloud.current!.hideItem(tag.index);
                return;
            }
        }
    }

    private showItemClick(): void {
        const hiddenTagsList = this.myTagCloud.current!.getHiddenTagsList();
        if (hiddenTagsList[0] !== undefined) {
            const tagId = hiddenTagsList[0];
            this.myTagCloud.current!.showItem(tagId);
        }
    }
}

export default App;
