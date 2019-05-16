import * as React from 'react';
 


import JqxComboBox, { IComboBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

class App extends React.PureComponent<{}, IComboBoxProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            source: this.generateHTML()
        }
    }

    public render() {
        return (
            <JqxComboBox theme={'material-purple'}
                width={250} height={25}
                source={this.state.source} selectedIndex={0} />
        );
    }

    private generateHTML() {
        const source = [];

        for (let i = 0; i < 10; i++) {
            let movie = 'avatar.png';
            let title = 'Avatar';
            let year = 2009;
            switch (i) {
                case 1:
                    movie = 'endgame.png';
                    title = 'End Game';
                    year = 2006;
                    break;
                case 2:
                    movie = 'priest.png';
                    title = 'Priest';
                    year = 2011;
                    break;
                case 3:
                    movie = 'unknown.png';
                    title = 'Unknown';
                    year = 2011;
                    break;
                case 4:
                    movie = 'unstoppable.png';
                    title = 'Unstoppable';
                    year = 2010;
                    break;
                case 5:
                    movie = 'twilight.png';
                    title = 'Twilight';
                    year = 2008;
                    break;
                case 6:
                    movie = 'kungfupanda.png';
                    title = 'Kung Fu Panda';
                    year = 2008;
                    break;
                case 7:
                    movie = 'knockout.png';
                    title = 'Knockout';
                    year = 2011
                    break;
                case 8:
                    movie = 'theplane.png';
                    title = 'The Plane';
                    year = 2010;
                    break;
                case 9:
                    movie = 'bigdaddy.png';
                    title = 'Big Daddy';
                    year = 1999;
                    break;
            }
            const html = "<div style='padding: 0px; margin: 0px; height: 95px; float: left;'><img width='60'" +
                "style='float: left; margin-top: 4px; margin-right: 15px;' src='https://www.jqwidgets.com/react/images/" + movie
                + "'/><div style='margin-top: 10px; font-size: 13px;'>" + "<b>Title</b><div>" + title +
                "</div><div style='margin-top: 10px;'><b>Year</b><div>" + year.toString() + "</div></div></div>";
            source[i] = { html, title };
        }
        return source;
    }
}

export default App;