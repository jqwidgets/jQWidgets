import * as React from 'react';
 


import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

class App extends React.PureComponent<{}, ITagCloudProps> {
    constructor(props: {}) {
        super(props);
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

    public render() {
        return (
            <JqxTagCloud
				// @ts-ignore
                width={"100%"}
                source={this.state.source}
                displayMember={"countryName"}
                valueMember={"technologyRating"}
            />
        );
    }
}

export default App;
