import React, { useRef, useCallback, useMemo } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

const App = () => {
    const myListBox = useRef<any>(null);

    const shirtFileNames = useMemo(() => [
        '2-sided-dodgers-bankrupt-t-shirt-ash', 'black-retro-rock-band-guitar-controller',
        'bright-green-gettin-lucky-in-kentucky', 'brown-loading-bar-computer-geek', 'cool-story-bro',
        'fear-the-beard', 'honey-badger-don-t-care', 'misfits-sf-giants-white', 'scott-pilgrim-red-rock-band'
    ], []);

    const renderer = useCallback((index: number, label: string, value: string) => {
        const datarecord = shirtFileNames[index];
        const imgurl = 'https://www.jqwidgets.com/react/images/t-shirts/' + datarecord.toLowerCase() + '.png';
        const img = '<img height="70" width="70" src="' + imgurl + '"/>';
        const table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
        return table;
    }, [shirtFileNames]);

    const source = useMemo(() => [
        '2 sided dodgers<br>bankrupt<br>t shirt ash', 'black retro<br>rock band<br>guitar controller',
        'bright green<br>gettin lucky<br>in kentucky', 'brown loading<br>bar computer geek', 'cool story bro',
        'fear the beard', 'honey badger<br>don t care', 'misfits sf<br>giants white', 'scott pilgrim<br>red rock<br>band'
    ], []);

    const onClick = useCallback(() => {
        myListBox.current?.clearFilter();
    }, []);

    return (
        <div>
            <JqxListBox
                theme="material-purple"
                ref={myListBox}
                width={250}
                height={300}
                source={source}
                filterable={true}
                selectedIndex={0}
                renderer={renderer}
                itemHeight={90}
            />
            <div style={{ marginTop: '10px' }}>
                <JqxButton theme="material-purple" onClick={onClick} width={80}>Clear Filter</JqxButton>
            </div>
        </div>
    );
};

export default App;