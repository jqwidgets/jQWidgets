import * as React from 'react';
import { useRef, useState, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTagCloud, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
    const myTagCloud = useRef<JqxTagCloud>(null);

    const initialSource = useMemo(() => {
        const data = generatedata(50);
        const source: any = {
            dataFields: [
                { name: 'productname' },
                { name: 'price' }
            ],
            dataType: 'array',
            localData: data
        };
        return new jqx.dataAdapter(source);
    }, []);

    const [source] = useState<any>(initialSource);

    const addItemClick = () => {
        const row = generatedata(1, false)[0];
        myTagCloud.current!.insertAt(0, row);
    };

    const deleteItemClick = () => {
        myTagCloud.current!.removeAt(0);
    };

    const updateItemClick = () => {
        const row = generatedata(1, false)[0];
        myTagCloud.current!.updateAt(0, row);
    };

    return (
        <div>
            This demo demonstrates how to add a tag in first position or update/remove the tag in first position.
            <JqxTagCloud
                ref={myTagCloud}
                width={"100%"}
                source={source}
                displayMember={"productname"}
                valueMember={"price"}
                fontSizeUnit={"px"}
                minFontSize={12}
                maxFontSize={20}
                urlBase={"http://localhost/"}
                minColor={"#00AA99"}
                maxColor={"#FF0000"}
            />
            <br />
            <br />
            <JqxButton theme={'material-purple'} onClick={addItemClick}>Add Item</JqxButton>
            <JqxButton theme={'material-purple'} onClick={deleteItemClick}>Delete First Item</JqxButton>
            <JqxButton theme={'material-purple'} onClick={updateItemClick}>Update First Item</JqxButton>
            <br />
        </div>
    );
};

export default App;