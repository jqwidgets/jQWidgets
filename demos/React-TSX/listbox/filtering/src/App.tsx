import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

class App extends React.PureComponent<{}, IListBoxProps> {

    private myListBox = React.createRef<JqxListBox>();

    constructor(props: {}) {
        super(props);
        this.onClick = this.onClick.bind(this);

        const shirtFileNames: string[] = [
            '2-sided-dodgers-bankrupt-t-shirt-ash', 'black-retro-rock-band-guitar-controller',
            'bright-green-gettin-lucky-in-kentucky', 'brown-loading-bar-computer-geek', 'cool-story-bro',
            'fear-the-beard', 'honey-badger-don-t-care', 'misfits-sf-giants-white', 'scott-pilgrim-red-rock-band'
        ];

        this.state = {
            renderer: (index: number, label: string, value: string): any => {
                const datarecord = shirtFileNames[index];
                const imgurl = 'https://www.jqwidgets.com/react/images/t-shirts/' + datarecord.toLowerCase() + '.png';
                const img = '<img height="70" width="70" src="' + imgurl + '"/>';
                const table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';

                return table;
            },
            source: [
                '2 sided dodgers<br>bankrupt<br>t shirt ash', 'black retro<br>rock band<br>guitar controller',
                'bright green<br>gettin lucky<br>in kentucky', 'brown loading<br>bar computer geek', 'cool story bro',
                'fear the beard', 'honey badger<br>don t care', 'misfits sf<br>giants white', 'scott pilgrim<br>red rock<br>band'
            ]
        }
    }

    public render() {
        return (
            <div>
                <JqxListBox theme={'material-purple'} ref={this.myListBox}
                    width={250} height={300} source={this.state.source} filterable={true}
                    selectedIndex={0} renderer={this.state.renderer} itemHeight={90} />

                <div style={{ marginTop: '10px' }}>
                    <JqxButton theme={'material-purple'} onClick={this.onClick} width={80}>Clear Filter</JqxButton>
                </div>
            </div>
        );
    }

    private onClick(event: any): void {
        this.myListBox.current!.clearFilter();
    }
}

export default App;