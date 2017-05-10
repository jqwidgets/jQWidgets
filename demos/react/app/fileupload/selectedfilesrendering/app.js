import React from 'react';
import ReactDOM from 'react-dom';

import JqxFileUpload from '../../../jqwidgets-react/react_jqxfileupload.js';

class App extends React.Component {
    render() {
        let imageTypes = ['.gif', '.jpg', '.png'];
        let videoTypes = ['.wmv', '.mov', '.avi', '.divx', '.mpeg', '.mpg', '.m4p'];

        let renderFiles = (fileName) => {
            let stopIndex = fileName.indexOf('.');
            let name = fileName.slice(0, stopIndex);
            let extension = fileName.slice(stopIndex);
            let iconUrl;
            if (imageTypes.indexOf(extension) !== -1) {
                iconUrl = '../../images/nav3.png';
            } else if (videoTypes.indexOf(extension) !== -1) {
                iconUrl = '../../images/movie.png';
            } else {
                iconUrl = '../../images/nav1.png';
            }
            return '<div><img src="' + iconUrl + '" style="dislplay: inline; width: 16px; height: 16px; margin-right: 5px;" /><span>' + name + '<strong>' + extension + '</strong></span></div>';
        };

        return (
            <JqxFileUpload
                width={300} uploadUrl={'upload.php'}
                fileInputName={'fileToUpload'} renderFiles={renderFiles}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
