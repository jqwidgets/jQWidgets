import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

class App extends React.PureComponent<{}, IDropDownListProps> {

    constructor(props: {}) {
        super(props);

        const shirtFileNames: string[] = [
            "2-sided-dodgers-bankrupt-t-shirt-ash", "black-retro-rock-band-guitar-controller",
            "bright-green-gettin-lucky-in-kentucky", "brown-loading-bar-computer-geek", "cool-story-bro",
            "fear-the-beard", "honey-badger-don-t-care", "misfits-sf-giants-white", "scott-pilgrim-red-rock-band"
        ];

        this.state = {
            renderer: (index: number, label: string, value: any): string => {
                const datarecord = shirtFileNames[index];
                const imgurl = 'https://www.jqwidgets.com/react/images/t-shirts/' + datarecord.toLowerCase() + '.png';
                const img = '<img height="70" width="70" src="' + imgurl + '"/>';
                const table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
                return table;
            },
            selectionRenderer: (element: any, index: number, label: string, value: any): string => {
                const text = label.replace(/\n/g, " ");
                return '<span style="left: 4px; top: 6px; position: relative;">' + text + '</span>';
            },
            source: [
                "2 sided dodgers\nbankrupt\nt shirt ash", "black retro\nrock band\nguitar controller",
                "bright green\ngettin lucky\nin kentucky", "brown loading\nbar computer geek", "cool story bro",
                "fear the beard", "honey badger\ndon t care", "misfits sf\ngiants white", "scott pilgrim\nred rock\nband"
            ]
        }
    }

    public render() {
        return (
            <JqxDropDownList theme={'material-purple'}
                width={280} height={30} source={this.state.source} selectedIndex={0} itemHeight={90}
                filterable={true} renderer={this.state.renderer} selectionRenderer={this.state.selectionRenderer} />
        );
    }
}

export default App;