import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.clearFilterButton.on('click', () => {
            this.refs.myListBox.clearFilter();
        });
    }
    render() {
        let shirtFileNames =
            [
                '2-sided-dodgers-bankrupt-t-shirt-ash', 'black-retro-rock-band-guitar-controller',
                'bright-green-gettin-lucky-in-kentucky', 'brown-loading-bar-computer-geek', 'cool-story-bro',
                'fear-the-beard', 'honey-badger-don-t-care', 'misfits-sf-giants-white', 'scott-pilgrim-red-rock-band'
            ];

        let shirts =
            [
                '2 sided dodgers<br>bankrupt<br>t shirt ash', 'black retro<br>rock band<br>guitar controller',
                'bright green<br>gettin lucky<br>in kentucky', 'brown loading<br>bar computer geek', 'cool story bro',
                'fear the beard', 'honey badger<br>don t care', 'misfits sf<br>giants white', 'scott pilgrim<br>red rock<br>band'
            ];

        let renderer = (index, label, value) => {
            let datarecord = shirtFileNames[index];
            let imgurl = '../../images/t-shirts/' + datarecord.toLowerCase() + '.png';
            let img = '<img height="70" width="70" src="' + imgurl + '"/>';
            let table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
            return table;
        };
        return (
            <div>
                <JqxListBox ref='myListBox'
                    width={250} height={300} source={shirts} filterable={true}
                    itemHeight={90} selectedIndex={0} renderer={renderer}
                />
                <br />
                <JqxButton ref='clearFilterButton' value={'Clear Filter'} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
