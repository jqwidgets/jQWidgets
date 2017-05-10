import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    render() {
        let shirtFileNames = ['2-sided-dodgers-bankrupt-t-shirt-ash', 'black-retro-rock-band-guitar-controller',
            'bright-green-gettin-lucky-in-kentucky', 'brown-loading-bar-computer-geek', 'cool-story-bro',
            'fear-the-beard', 'honey-badger-don-t-care', 'misfits-sf-giants-white', 'scott-pilgrim-red-rock-band'];
        let shirts = ['2 sided dodgers<br>bankrupt<br>t shirt ash', 'black retro<br>rock band<br>guitar controller',
            'bright green<br>gettin lucky<br>in kentucky', 'brown loading<br>bar computer geek', 'cool story bro',
            'fear the beard', 'honey badger<br>don t care', 'misfits sf<br>giants white', 'scott pilgrim<br>red rock<br>band'];

        let renderer = (index, label, value) => {
            let datarecord = shirtFileNames[index];
            let imgurl = '../../images/t-shirts/' + datarecord.toLowerCase() + '.png';
            let img = '<img height="70" width="70" src="' + imgurl + '"/>';
            let table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
            return table;
        };

        let selectionRenderer = (element, index, label, value) => {
            let text = label.replace(/<br>/g, ' ');
            return '<span style="left: 4px; top: 6px; position: relative;">' + text + '</span>';
        };
        return (
            <JqxDropDownList
                width={280} height={30} source={shirts} selectedIndex={0}
                filterable={true} itemHeight={90}
                renderer={renderer} selectionRenderer={selectionRenderer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
