import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let movies = new Array();
        // Avatar
        movies[0] = { Image: 'avatar.png', Title: 'Avatar', Year: 2009 };
        movies[1] = { Image: 'priest.png', Title: 'Priest', Year: 2006 };
        movies[2] = { Image: 'endgame.png', Title: 'End Game', Year: 2006 };
        movies[3] = { Image: 'unknown.png', Title: 'Unknown', Year: 2011 };
        movies[4] = { Image: 'unstoppable.png', Title: 'Unstoppable', Year: 2010 };
        movies[5] = { Image: 'twilight.png', Title: 'Twilight', Year: 2008 };
        movies[6] = { Image: 'kungfupanda.png', Title: 'Kung Fu Panda', Year: 2008 };
        movies[7] = { Image: 'knockout.png', Title: 'Knockout', Year: 2011 };
        movies[8] = { Image: 'theplane.png', Title: 'The Plane', Year: 2010 };
        movies[9] = { Image: 'bigdaddy.png', Title: 'Big Daddy', Year: 1999 };

        let imagerenderer = (row, datafield, value) => {
            return '<img style="margin-left: 5px;" height="60" width="50" src="../../images/' + value + '"/>';
        }

        let source = { localdata: movies, datatype: 'array' };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Image', datafield: 'Image', width: 60, cellsrenderer: imagerenderer },
                { text: 'Title', datafield: 'Title', width: 200 },
                { text: 'Year', datafield: 'Year' }
            ];

        return (
            <JqxGrid
                width={400} source={dataAdapter} rowsheight={60} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
