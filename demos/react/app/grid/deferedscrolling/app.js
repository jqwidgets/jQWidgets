import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let products =
            [
                {
                    label: 'Retro Rock T-shirt',
                    pic: 'black-retro-rock-band-guitar-controller.png',
                    price: 15
                },
                {
                    label: 'Lucky T-shirt',
                    pic: 'bright-green-gettin-lucky-in-kentucky.png',
                    price: 18
                },
                {
                    label: 'Loading T-shirt',
                    pic: 'brown-loading-bar-computer-geek.png',
                    price: 25
                },
                {
                    label: 'Cool Story T-shirt',
                    pic: 'cool-story-bro.png',
                    price: 20
                },
                {
                    label: 'The beard T-shirt',
                    pic: 'fear-the-beard.png',
                    price: 17
                },
                {
                    label: 'Don\'t care T-shirt',
                    pic: 'honey-badger-don-t-care.png',
                    price: 19
                },
                {
                    label: 'Guitar T-shirt',
                    pic: 'scott-pilgrim-red-rock-band.png',
                    price: 24
                },
                {
                    label: 'Dodgers T-shirt',
                    pic: '2-sided-dodgers-bankrupt-t-shirt-ash.png',
                    price: 21
                },
                {
                    label: 'Misfits T-shirt',
                    pic: 'misfits-sf-giants-white.png',
                    price: 21
                }
            ];

        let source =
            {
                datatype: 'array',
                datafields: [
                    { name: 'label', type: 'string' },
                    { name: 'pic', type: 'string' },
                    { name: 'price', type: 'number' }
                ],
                localdata: products
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                {
                    text: 'Image', datafield: 'pic', width: 115,
                    cellsrenderer: (row, column, value) => {
                        return '<img src="../../images/t-shirts/' + value + '"/>';
                    }
                },
                {
                    text: 'Title', datafield: 'label', width: 250
                },
                {
                    text: 'Price', cellsformat: 'c2', datafield: 'price'
                }
            ];

        let scrollfeedback = (row) => {
            return '<table style="height: 150px;"><tr><td><img src="../../images/t-shirts/' + row.pic + '"/></td></tr><tr><td>' + row.label + '</td></tr></table>';
        };

        return (
            <JqxGrid
                width={700} height={380} source={dataAdapter} altrows={true}
                sortable={true} scrollmode={'deferred'} rowsheight={115} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
