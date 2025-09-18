import * as React from 'react';
import JqxFileUpload from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';

const imageTypes = ['.gif', '.jpg', '.png'];
const videoTypes = ['.wmv', '.mov', '.avi', '.divx', '.mpeg', '.mpg', '.m4p'];

const renderFiles = (fileName: string): string => {
    const stopIndex = fileName.indexOf('.');
    const name = fileName.slice(0, stopIndex);
    const extension = fileName.slice(stopIndex);
    let iconUrl;
    if (imageTypes.indexOf(extension) !== -1) {
        iconUrl = 'https://www.jqwidgets.com/react/images/nav3.png';
    } else if (videoTypes.indexOf(extension) !== -1) {
        iconUrl = 'https://www.jqwidgets.com/react/images/movie.png';
    } else {
        iconUrl = 'https://www.jqwidgets.com/react/images/nav1.png';
    }
    return '<div><img src="' + iconUrl + '" style="dislplay: inline; width: 16px; height: 16px; margin-right: 5px;" /><span>' + name + '<strong>' + extension + '</strong></span></div>';
};

const App = () => {
    return (
        <JqxFileUpload
            theme="material-purple"
            width={300}
            uploadUrl="upload.php"
            fileInputName="fileToUpload"
            renderFiles={renderFiles}
        />
    );
};

export default App;