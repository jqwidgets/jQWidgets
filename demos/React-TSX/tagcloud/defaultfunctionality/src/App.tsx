import * as React from 'react';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
    const data = [
        { countryName: "Australia", technologyRating: 35 },
        { countryName: "United States", technologyRating: 60 },
        { countryName: "Germany", technologyRating: 55 },
        { countryName: "Brasil", technologyRating: 20 },
        { countryName: "United Kingdom", technologyRating: 50 },
        { countryName: "Japan", technologyRating: 80 }
    ];

    const source = React.useMemo(() => ({
        datafields: [
            { name: 'countryName' },
            { name: 'technologyRating' }
        ],
        datatype: "array",
        localdata: data,
    }), [data]);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source, {}), [source]);

    return (
        <JqxTagCloud
            width={"100%"}
            source={dataAdapter}
            displayMember="countryName"
            valueMember="technologyRating"
        />
    );
};

export default App;