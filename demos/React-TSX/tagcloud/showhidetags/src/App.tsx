import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTagCloud, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
    const myTagCloud = useRef<any>(null);

    const data = [
        { countryName: "Australia", technologyRating: 35 },
        { countryName: "United States", technologyRating: 60 },
        { countryName: "Germany", technologyRating: 55 },
        { countryName: "Brasil", technologyRating: 20 },
        { countryName: "United Kingdom", technologyRating: 50 },
        { countryName: "Japan", technologyRating: 80 }
    ];

    const source = React.useMemo(
        () => ({
            datafields: [
                { name: 'countryName' },
                { name: 'technologyRating' }
            ],
            datatype: "array",
            localdata: data,
        }),
        []
    );

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source, {}), [source]);
    const [cloudSource] = useState(dataAdapter);

    useEffect(() => {
        if (myTagCloud.current) {
            myTagCloud.current.hideItem(1);
        }
    }, []);

    const hideItemClick = useCallback(() => {
        if (!myTagCloud.current) return;
        const records = myTagCloud.current.getTagsList();
        const hiddenTagsList = myTagCloud.current.getHiddenTagsList();
        for (const tag of records) {
            if (hiddenTagsList.indexOf(tag.index) === -1) {
                myTagCloud.current.hideItem(tag.index);
                return;
            }
        }
    }, []);

    const showItemClick = useCallback(() => {
        if (!myTagCloud.current) return;
        const hiddenTagsList = myTagCloud.current.getHiddenTagsList();
        if (hiddenTagsList[0] !== undefined) {
            const tagId = hiddenTagsList[0];
            myTagCloud.current.showItem(tagId);
        }
    }, []);

    return (
        <div>
            <JqxTagCloud
                ref={myTagCloud}
                // @ts-ignore
                width={"100%"}
                source={cloudSource}
                displayMember={"countryName"}
                valueMember={"technologyRating"}
            />
            <br />
            <br />
            <JqxButton theme={'material-purple'} style={{ display: "inline-block" }} width={80} onClick={hideItemClick}>Hide Item</JqxButton>
            <JqxButton theme={'material-purple'} style={{ display: "inline-block", marginLeft: 10 }} width={80} onClick={showItemClick}>Show Item</JqxButton>
            <br />
        </div>
    );
};

export default App;