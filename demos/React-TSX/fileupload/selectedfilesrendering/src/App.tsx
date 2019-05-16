import * as React from 'react';
 


import JqxFileUpload, { IFileUploadProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';

class App extends React.PureComponent<{}, IFileUploadProps> {

    constructor(props: {}) {
        super(props);

        const imageTypes: string[] = ['.gif', '.jpg', '.png'];
        const videoTypes: string[] = ['.wmv', '.mov', '.avi', '.divx', '.mpeg', '.mpg', '.m4p'];

        this.state = {
            renderFiles: (fileName: string): string => {
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
            }
        }
    }

    public render() {
        return (
            <JqxFileUpload theme={'material-purple'}
                width={300} uploadUrl={'upload.php'} fileInputName={'fileToUpload'} renderFiles={this.state.renderFiles} />
        );
    }
}

export default App;